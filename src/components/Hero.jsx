import React from 'react'
import { Sparkles, ArrowLeft } from "lucide-react";
import { useState } from "react";
import Robot from "../assets/Robot.png"

export const Hero = () => {

  const [showFeatures, setShowFeatures] = useState(false);

  return (
    <div className='h-auto md:h-90 px-6 md:px-12 flex flex-col md:flex-row justify-between mt-6 text-white'>
      {/* left section */}
      <div>
        <div className='bg-[#0B1220] py-2 px-3 text-sm rounded-2xl inline-flex items-center gap-2'>
          <Sparkles className='w-4 h-4 text-purple-600' fill='currentColor'/>
          <p>AI-Powered Interview Preparation</p>
        </div>
        <h1 className='text-4xl md:text-6xl font-semibold mt-5'>Practice Smarter.</h1>
        <h1 className='text-4xl md:text-6xl font-semibold mt-2'>
          Interview <span className='text-purple-600'>Better.</span>
        </h1>
        <p className='mt-5 text-gray-400 text-md'>
          Get AI-generated interview questions, smart feedback,
        </p> 
        <p className='mt-1 text-gray-400 text-md'>
          and track your progress to ace your next interview.
        </p>
        <div className='mt-5 flex flex-wrap gap-4'>
          <button className="font-semibold bg-[#3730A3] text-white text-md px-5 py-2 rounded-3xl">
            Start Practicing
          </button>
          <button
           onClick={() => setShowFeatures(true)}
           className="text-white font-semibold text-md border-2 border-gray-700 px-6 py-2 rounded-3xl hover:border-purple-500 transition">
            Explore Features
          </button>
        </div>
      </div>

      {/* right section */}
      <div className='mt-8 md:mt-0 flex justify-center'>
        <img className='h-60 md:h-85' src={Robot} />
      </div>

      {showFeatures && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4">
          <div className="relative w-full max-w-2xl bg-[#0B1220] border border-gray-800 rounded-2xl p-6 md:p-8 shadow-2xl">
            <button onClick={() => setShowFeatures(false)}
              className="absolute top-5 left-5 p-2 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white transition"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>

            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold">PrepWise AI Features</h2>
              <p className="text-gray-400 text-sm mt-2">
                Everything you need to prepare smarter for interviews.
              </p>
            </div>
            <div className="space-y-5">
              <div>
                <h3 className="text-purple-400 font-semibold text-lg">
                  AI-Powered Interview Questions
                </h3>
                <p className="text-gray-400 text-sm mt-1">
                  Generate interview questions dynamically based on your
                  selected topic, interview type, and experience level.
                </p>
              </div>

              <div>
                <h3 className="text-purple-400 font-semibold text-lg">
                  Intelligent Performance Evaluation
                </h3>
                <p className="text-gray-400 text-sm mt-1">
                  Your answers are evaluated using AI based on correctness,
                  relevance, clarity, and completeness.
                </p>
              </div>
              <div>
                <h3 className="text-purple-400 font-semibold text-lg">
                  Personalized Feedback
                </h3>
                <p className="text-gray-400 text-sm mt-1">
                  Get your score, accuracy, strengths, and specific areas
                  where you can improve.
                </p>
              </div>

              <div>
                <h3 className="text-purple-400 font-semibold text-lg">
                  Performance Tracking
                </h3>
                <p className="text-gray-400 text-sm mt-1">
                  Review your previous interviews and track your performance
                  over time to identify your progress.
                </p>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>

  )
}

export default Hero