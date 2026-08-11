import React from 'react'
import { Sparkles } from "lucide-react";

export const Navbar = () => {
  return (
    <div className='py-3 px-8'>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* logo */}
        <div className='flex items-center gap-2'>
          <Sparkles className='w-6 h-6 text-purple-600' fill='currentColor'/>
          <h1 className='text-2xl font-bold text-white'>PrepWise AI</h1>  
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          <p className="text-white text-md cursor-pointer transition">
            Home
          </p>
          <p className="text-white text-md cursor-pointer transition">
            Features
          </p>
          <p className="text-white text-md cursor-pointer transition">
            About
          </p>
          <p className="text-white text-md cursor-pointer transition">
            Contact
          </p>

          <button className="text-white text-md border border-gray-700 px-6 py-2 rounded-3xl hover:border-purple-500 transition">
            Login
          </button>
          <button className="bg-linear-to-r from-blue-600 to-purple-600 text-white text-md px-5 py-2 rounded-3xl hover:bg-purple-700 transition">
            Get Started
          </button>
        </div>

      </div>
    </div>
  )
}

export default Navbar
