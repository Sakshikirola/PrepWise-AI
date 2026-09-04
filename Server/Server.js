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

app.listen(5001, () => {
  console.log("Server running on http://localhost:5001");  
});    