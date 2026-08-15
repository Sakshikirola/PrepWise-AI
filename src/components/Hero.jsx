import React from 'react'
import { Sparkles } from "lucide-react";
import Robot from "../assets/Robot.png"

export const Hero = () => {
  return ( 
    <div className='h-90 px-12 flex justify-between mt-6 text-white'>
        {/* left section */}
      <div>
        <div className='bg-gray-900 py-2 px-3 text-sm rounded-2xl inline-flex items-center gap-2'>
          <Sparkles className='w-4 h-4 text-purple-600' fill='currentColor'/>
          <p>AI-Powered Interview Preparation</p> 
        </div>
        <h1 className='text-6xl font-semibold mt-5'>Practice Smarter.</h1>
        <h1 className='text-6xl font-semibold mt-2'>Interview <span className='text-purple-600'>Better.</span></h1>
        <p className='mt-5 text-gray-400 text-md'>Get AI-generated interview questions, smart feedback,</p>
        <p className='mt-1 text-gray-400 text-md'>and track your progress to ace your next interview.</p>
        <div className='mt-5 flex gap-4'>
            <button className="font-semibold bg-[#3730A3] text-white text-md px-5 py-2 rounded-3xl">
                Start Practicing
            </button>
            <button className="text-white font-semibold text-md border-2 border-gray-700 px-6 py-2 rounded-3xl hover:border-purple-500 transition">
                Explore Features
            </button> 
        </div>
      </div> 
      
      {/* right section */}
      <div>
        <img className='h-85' src={Robot}/>
      </div>
    </div> 
  )
}

export default Hero
