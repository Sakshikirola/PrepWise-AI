import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
app.use(cors());  
app.use(express.json()); 

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY
}); 

app.get("/", (req, res) => {
  res.send("PrepWise AI Backend is running!");   
}); 

app.post("/api/generate-questions", async (req, res) => {
  try {
    const {topic, interviewType, experience, questionCount} = req.body;
    const numberOfQuestions = parseInt(questionCount);

    const prompt = `
     Generate ${numberOfQuestions} interview questions.  
     Topic: ${topic}
     Interview Type: ${interviewType}
     Experience Level: ${experience}

     Requirements:
   - Questions must be relevant to the topic.
   - Questions must match the interview type.
   - Questions must match the experience level.
   - Do not provide answers.
   - Return the questions as a JSON array of strings.
   - Do not include numbering.
   - Do not include any other text.
   `;

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: prompt,
      config: { responseMimeType: "application/json" }
    });

    const questions = JSON.parse(response.text); 

    res.json({
    questions
    }); 

  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Failed to generate interview questions"
    });
  }
}); 

app.post("/api/evaluate-interview", async (req, res) => {
  try {
    const {topic,interviewType,experience,questions,answers,timeTaken,} = req.body;
    const prompt = `
      You are an AI interview evaluator.
      Evaluate the following interview:
      Topic: ${topic}
      Interview Type: ${interviewType}
      Experience Level: ${experience}
      Time Taken: ${timeTaken} seconds
      Questions and Candidate Answers:
      ${questions.map(
       (question, index) => `
         Question ${index + 1}: ${question}
         Candidate Answer: ${answers[index] || "No answer provided"}
      `
  ).join("\n")}
  Evaluate the candidate's performance.
  Return ONLY valid JSON in this exact structure:
  {
   "score": 0,
   "accuracy": 0,
   "strengths": [],
   "improvements": [],
   "questionFeedback": []
  }
  Rules:
- score must be a number from 0 to 10.
- accuracy must be a percentage from 0 to 100.
- strengths must contain exactly 3 points.
- improvements must contain exactly 3 points.
- Each point MUST contain between 5 and 6 words.
- Count the words before returning the response.
- NEVER exceed 6 words for any point.
- NEVER use complete explanatory sentences.
- Use short phrases only.
- questionFeedback should contain one object for every question.
- Each questionFeedback object must have:
  "question",
  "answer",
  "score",
  "feedback"
- score inside questionFeedback must be from 0 to 10.
- Each question feedback must be 10 to 15 words.
- Keep feedback clear, specific, and concise.
- Evaluate answers based on correctness, relevance, clarity and completeness.
- If an answer is empty, give it a very low score and explain that no answer was provided.
`;

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      },
    });

    const evaluation = JSON.parse(response.text);

    res.json(evaluation);
  } catch (error) { 
    console.error("Evaluation Error:", error);
    res.status(500).json({
      error: "Failed to evaluate interview",
    });
  }
});

app.listen(5001, () => {
  console.log("Server running on http://localhost:5001");  
});    