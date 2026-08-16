import React from 'react'
import { Brain, Star, ChartNoAxesCombined, Clock3 } from "lucide-react";

export const Statecard = () => {
  return (
    <div className='flex flex-col md:flex-row px-6 md:px-8 text-white mt-2 gap-4'>
      <div className='bg-gray-900 rounded-2xl flex-1 py-2 px-6'>
        <Brain className="w-6 h-6 text-purple-500" fill="currentColor"/>
        <h1>AI Generated Questions</h1>
        <p className='text-gray-400'>
          Get questions based on topics, roles and difficulty.
        </p>
      </div>

      <div className='bg-gray-900 rounded-2xl flex-1 py-2 px-6'>
        <Star className="w-6 h-6 text-yellow-400" fill="currentColor"/>
        <h1>Smart Feedback</h1>
        <p className='text-gray-400'>Receive detailed feedback and improvement tips.</p>
      </div>

      <div className='bg-gray-900 rounded-2xl flex-1 py-2 px-6'>
        <ChartNoAxesCombined className="w-6 h-6 text-blue-400"/>
        <h1>Track Progress</h1>
        <p className='text-gray-400'>Analyze your performance and growth over time.</p>
      </div>

      <div className='bg-gray-900 rounded-2xl flex-1 py-2 px-6 mb-4 md:mb-0'>
        <Clock3 className="w-6 h-6 text-emerald-400"/>
        <h1>Interview History</h1>
        <p className='text-gray-400'>View and revisit your past interviews anytime.</p>
      </div>
    </div>
  )
}

export default Statecard