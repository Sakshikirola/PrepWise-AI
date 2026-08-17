import React from 'react'
import {Sparkles ,Plus, Menu, X, Bell, CircleUserRound } from "lucide-react"; 

export const Dashboard = () => {
  return (
    <div className='bg-black w-screen min-h-screen px-8 py-3'>

      {/* profile */}
      <div className='flex justify-between text-white'>
       <div className='flex items-center gap-2'>
        <Sparkles className='w-6 h-6 text-purple-600' fill='currentColor'/>
        <h1 className='text-2xl font-bold text-white'> PrepWise AI</h1>
       </div>
       <div className='flex gap-2 items-center'>
        <Bell className='w-5 h-5 mr-7'/>
        <CircleUserRound className="w-8 h-8 text-gray-300" />
        <h1>Sakshi</h1> 
       </div>
      </div>

      {/* welcome */}
      <div className='flex justify-between mt-4'>
        <div>
         <h1 className='text-xl font-bold text-white'>Welcome back, Sakshi</h1>
         <p className='text-gray-400 text-md'>Let's continue your interview preparation</p>
        </div>
        <div>
            <button className="flex gap-2 font-semibold bg-[#3730A3] text-white text-md px-4 py-2 rounded">
                <Plus className="w-5 h-5 mt-1" />
                Start New Interview
            </button> 
        </div> 
      </div>

    </div>
  )
}

export default Dashboard
