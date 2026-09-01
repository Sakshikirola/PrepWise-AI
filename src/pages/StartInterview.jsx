import React, { useState } from 'react'
import { ArrowLeft,ArrowRight, Search } from 'lucide-react'
import { useNavigate } from "react-router-dom";
import { popularSearches, interviewTypes, experienceLevels, questionCounts } from "./InterviewData";

export const StartInterview = () => {

  const [topic, setTopic] = useState(""); 
  const [selectedType, setSelectedType] = useState("");
  const [selectedExperience, setSelectedExperience] = useState("");
  const [selectedQuestions, setSelectedQuestions] = useState(""); 
  const navigate = useNavigate();

  const handleStartInterview = () => {
    if (!topic || !selectedType || !selectedExperience || !selectedQuestions) {
      alert("Please select all interview options");  
      return;
    }

    navigate("/interview", {
     state: {
     topic,
     interviewType: selectedType,
     experience: selectedExperience,
     questionCount: selectedQuestions
     }
    }); 
  };

  return (
    <div className='bg-black w-full h-screen px-4 sm:px-6 lg:px-8 py-3 overflow-hidden'>

      <div className='flex gap-3 text-white items-center'>
        <ArrowLeft className='mt-1'/>
        <h1 className='text-2xl font-bold'>Start New Interview</h1> 
      </div>

      {/* steps */}
      <div className='text-white flex py-2 items-center justify-center'>
       <div className="flex items-center gap-2">
        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#3730A3] text-md">
         1
        </span>
        <span className="text-md">Choose</span>
       </div>
       <div className="w-12 h-px bg-gray-700 mx-2"></div>

       <div className="flex items-center gap-2">
        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#3730A3] text-md">
         2
        </span>
        <span className="text-md">Configure</span>
       </div>
       <div className="w-12 h-px bg-gray-700 mx-2"></div>

       <div className="flex items-center gap-2">
        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#3730A3] text-md">
         3
        </span>
        <span className="text-md">Start</span> 
       </div>
      </div>

      {/* search bar */}
      <div className='mt-1'>
       <h1 className='text-white text-xl font-semibold'>What do you want to practice?</h1>
       <div className="relative mt-2"> 
        <input type="text" value={topic} onChange={(e) => setTopic(e.target.value)} placeholder="Search role, technology, or interview type..."
        className="w-full bg-[#111827]/20 border border-gray-700 rounded-md px-3 py-2 pr-10 text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-purple-600"/>
        <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"/>
       </div> 
      </div> 

      {/* searches */}
      <div className='mt-1'>
        <h1 className='text-white text-xl font-semibold'>Popular Searches</h1>
        <div className="flex flex-wrap gap-2 mt-2"> 
         {popularSearches.map((topic) => (
          <button key={topic} onClick={() => setTopic(topic)}
          className="px-3 py-2 rounded-lg bg-[#111827]/20 border border-gray-700 text-gray-400 text-sm hover:border-purple-600 hover:text-white transition"
          >
            {topic}
          </button>
         ))}
        </div>
      </div> 

      {/* interview types */}
      <div className='mt-1'>
        <h1 className='text-white text-xl font-semibold'>Interview Type</h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
         {interviewTypes.map((type) => (
          <div key={type.id} onClick={() => setSelectedType(selectedType === type.title ? "" : type.title)}
           className={`border rounded-xl p-4 py-2 text-white cursor-pointer transition ${
            selectedType === type.title?"bg-[#A78BFA]/20 border-purple-500": "bg-[#111827]/20 border-gray-700 hover:border-purple-600"
           }`}
          >
           <h2 className="font-semibold text-lg">{type.title}</h2>
           <p className="text-gray-400 text-sm mt-2">{type.description}</p> 
          </div> 
         ))}
        </div>
      </div>

      {/* Experience  */}
      <div className='mt-1'>
       <h1 className='text-white text-xl font-semibold'>Experience Level</h1>
       <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-2">
        {experienceLevels.map((level) => (
        <button key={level}
         onClick={() =>setSelectedExperience(
          selectedExperience === level ? "" : level
         )}
         className={`px-3 py-2 rounded-lg border text-sm transition ${selectedExperience === level
          ? "bg-[#A78BFA]/20 border-purple-500 text-white"
          : "bg-[#111827]/20 border-gray-700 text-gray-400 hover:border-purple-600 hover:text-white"
         }`}
         >
          {level}
        </button>
        ))}
       </div>
      </div>

      {/* Questions */}
      <div className='mt-1'>
       <h1 className='text-white text-xl font-semibold'>Number Of Questions</h1>
       <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-2">
         {questionCounts.map((count) => (
          <button key={count}
           onClick={() =>setSelectedQuestions(selectedQuestions === count ? "" : count)}
           className={`px-3 py-2 rounded-lg border text-sm transition ${selectedQuestions === count
            ? "bg-[#A78BFA]/20 border-purple-500 text-white"
            : "bg-[#111827]/20 border-gray-700 text-gray-400 hover:border-purple-600 hover:text-white"
           }`}
          >
           {count}
          </button>
         ))}
       </div>
      </div>

     <div className="w-full px-4 py-2 rounded-lg bg-[#3730A3] text-white text-sm flex gap-2 items-center justify-center font-bold mt-2">
      <button onClick={handleStartInterview} className='text-lg'>Start Interview</button>
      <ArrowRight/> 
     </div>

    </div>
  )
}

export default StartInterview
