import React from "react";
import { ArrowLeft,Check,CircleAlert,Star,ArrowRight,} from "lucide-react";
import { useNavigate, useLocation, Navigate } from "react-router-dom";

const Feedback = () => {

 const navigate = useNavigate();
 const location = useLocation();

 const {evaluation,topic,interviewType,experience,timeTaken,} = location.state || {}; 
 if (!evaluation) {
  return <Navigate to="/dashboard" replace />;
 } 

 const score = evaluation?.score || 0;
 const accuracy = evaluation?.accuracy || 0;
 const strengths = evaluation?.strengths || [];
 const improvements = evaluation?.improvements || []; 

 const totalQuestions = evaluation?.questionFeedback?.length || 0;

  return (
    <div className="min-h-screen bg-black text-white px-4 sm:px-6 lg:px-8 py-5">
      <div className="flex items-center gap-4 mb-6">
        <button onClick={() => navigate(-1)}
          className="p-1 rounded-md hover:bg-gray-800 transition"
        >
          <ArrowLeft className="w-6 h-6" /> 
        </button> 

      <div className="flex items-center justify-between w-full gap-6">
        <div>
         <h1 className="text-xl sm:text-2xl font-bold">Interview Completed!</h1>
         <p className="text-gray-500 text-sm mt-1">
         {score >= 8? "Excellent performance!": score >= 6? "Good performance! Keep improving."
         : "Keep practicing and improving."}
         </p>
        </div>
        <div className="hidden sm:block">
         <span className="px-4 py-2 rounded-lg bg-[#111827] border border-gray-800 text-gray-300 text-sm">
          {topic} • {interviewType} • {experience}
         </span>
        </div>
      </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-7xl mx-auto">
        <div className="bg-[#111827]/30 border border-gray-800 rounded-xl p-5">
  <h2 className="text-lg font-semibold mb-5">Overall Score</h2>

  <div className="flex flex-col items-center">
    <div
      className="w-36 h-36 sm:w-40 sm:h-40 rounded-full flex items-center justify-center"
      style={{
        background: `conic-gradient(#10B981 ${
          score * 10
        }%, #1F2937 0%)`,
      }}
    >
      <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-[#0B1220] flex flex-col items-center justify-center">
        <span className="text-4xl sm:text-5xl font-semibold">
          {score}
        </span>

        <span className="text-gray-400 text-sm">
          /10
        </span>
      </div>
    </div>

    <p className="text-gray-300 font-medium mt-5">
      {score >= 8
        ? "Excellent performance!"
        : score >= 6
        ? "Good performance! Keep improving."
        : "Keep practicing and improving."}
    </p>
  </div>

  <div className="grid grid-cols-3 gap-2 mt-6">
    <div className="bg-[#111827]/50 border border-gray-800 rounded-lg p-3 text-center">
      <p className="text-gray-500 text-xs">Questions</p>
      <p className="text-lg font-semibold mt-1">{totalQuestions}</p>
    </div>
    <div className="bg-[#111827]/50 border border-gray-800 rounded-lg p-3 text-center">
      <p className="text-gray-500 text-xs">Time Taken</p>
      <p className="text-lg font-semibold mt-1">{timeTaken}s</p>
    </div>
    <div className="bg-[#111827]/50 border border-gray-800 rounded-lg p-3 text-center">
      <p className="text-gray-500 text-xs">Accuracy</p>
      <p className="text-lg font-semibold mt-1">{accuracy}%</p>
    </div>
    </div>
  </div>

           

        <div className="bg-[#111827]/30 border border-gray-800 rounded-xl p-5">
          <h2 className="text-lg font-semibold mb-6">Detailed Feedback</h2>
          <div>
            <div className="flex items-center gap-2 text-green-400 mb-3">
              <Check className="w-5 h-5" />
              <h3 className="font-semibold">Strengths</h3>
            </div>

            <div className="space-y-3">
              {strengths.map((strength, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 text-gray-300 text-sm"
                >
                  <Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                  <p>{strength}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <div className="flex items-center gap-2 text-red-400 mb-3">
              <CircleAlert className="w-5 h-5" />
              <h3 className="font-semibold">Areas to Improve</h3>
            </div>

            <div className="space-y-3">
              {improvements.map((improvement, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 text-gray-300 text-sm"
                >
                  <Star className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                  <p>{improvement}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5">
        <button
          onClick={() => navigate("/interview")}
          className="w-full px-5 py-3 rounded-lg border border-gray-800 text-gray-300 font-semibold hover:border-purple-600 hover:text-white active:scale-[0.98] transition"
        >
          View Answers
        </button>
        <button
          onClick={() => navigate("/dashboard")}
          className="w-full px-5 py-3 rounded-lg bg-[#3730A3] text-white font-semibold flex items-center justify-center gap-2 hover:bg-[#4338CA] active:scale-[0.98] transition"
        >
          <span>Go to Dashboard</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

    </div>
  ); 
};

export default Feedback;