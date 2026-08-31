import React, { useState } from "react";
import { Clock3, CircleStop } from "lucide-react";
import { useLocation } from "react-router-dom";
import { interviewQuestions } from "./interviewQuestions";

export const Interview = () => {

  const location = useLocation();
  const {interviewType, experience, questionCount} = location.state || {};

  const [currentQuestion, setCurrentQuestion] = useState(0); 
  const [answer, setAnswer] = useState("");

  const progress = ((currentQuestion + 1) / interviewQuestions.length) * 100; 

  const handleNext = () => {
    if (currentQuestion < interviewQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setAnswer("");
    } 
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setAnswer("");
    } 
  };

  const handleSkip = () => {
    if (currentQuestion < interviewQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setAnswer("");
    }
  };

  return (
    <div className="bg-black w-full h-screen px-4 sm:px-6 lg:px-8 py-3 text-white flex flex-col overflow-hidden">

      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">React Developer Interview</h1>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 text-gray-300">
            <Clock3 className="w-4 h-4" />
            <span>15:20</span>
          </div>
          <button className="flex items-center gap-1 border border-red-500 text-red-400 px-3 py-1 rounded-md text-sm hover:bg-red-500/10 transition">
            <CircleStop className="w-4 h-4" />
            End Interview
          </button>
        </div>
      </div>

      {/* Progress */}
      <div className="mt-5">
        <div className="flex justify-between text-xs text-gray-400 mb-2">
          <span>
            Question {currentQuestion + 1} of {interviewQuestions.length}
          </span>
          <span>{Math.round(progress)}%</span>
        </div>

        <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#3730A3] rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div> 
      </div>


      {/* Question Card */}
      <div className="mt-5 flex-1 min-h-0 bg-[#111827]/40 border border-gray-800 rounded-xl p-5 flex flex-col">
        <h2 className="text-base sm:text-lg font-semibold">
          {interviewQuestions[currentQuestion]}
        </h2> 

        {/* Answer */}
        <textarea value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Type your answer here..."
          className="w-full flex-1 min-h-0 mt-4 bg-[#111827]/30 border border-gray-800 rounded-lg p-3 text-sm text-white placeholder:text-gray-500 resize-none focus:outline-none focus:border-purple-600"
        /> 
        <div className="text-right text-xs text-gray-500 mt-1">
          Words: {answer.trim() ? answer.trim().split(/\s+/).length : 0}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-between items-center mt-5 shrink-0">
        <button onClick={handlePrevious} disabled={currentQuestion === 0}
          className="px-5 py-2 rounded-lg border border-gray-800 text-gray-300 text-sm hover:border-purple-600 disabled:opacity-40 disabled:cursor-not-allowed transition"
        >
          Previous
        </button>

        <button onClick={handleSkip}
          className="px-5 py-2 rounded-lg border border-gray-800 text-gray-300 text-sm hover:border-purple-600 transition"
        >
          Skip
        </button>

        <button onClick={handleNext}
          className="px-6 py-2 rounded-lg bg-[#3730A3] text-white text-sm font-semibold hover:bg-[#4338CA] transition"
        >
          {currentQuestion === interviewQuestions.length - 1? "Finish": "Next"}
        </button> 
      </div>

    </div>

  );
};

export default Interview;