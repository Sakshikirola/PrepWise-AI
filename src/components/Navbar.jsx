import React, { useState } from 'react'
import { Sparkles, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='py-3 px-8'>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className='flex items-center gap-2'>
          <Sparkles className='w-6 h-6 text-purple-600' fill='currentColor'/>
          <h1 className='text-2xl font-bold text-white'> PrepWise AI</h1>
        </div>

        <div className="hidden md:flex items-center gap-5">
          <Link to="/login">
            <button className="text-white text-md border-2 border-gray-700 px-8 py-2 rounded-3xl hover:border-purple-500 transition">
              Login
            </button>
          </Link>
          <Link to="/signup">
          <button className="font-semibold bg-[#3730A3] text-white text-md px-4 py-2 rounded-3xl">
            Get Started
          </button>
          </Link>
        </div> 
        <button className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}   
        >
          {isMenuOpen ? ( <X className="w-7 h-7" />) : (
            <Menu className="w-7 h-7" />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center gap-5 mt-5 pb-4">
          <Link to="/login">
            <button className="text-white text-md border-2 border-gray-700 px-6 py-2 rounded-3xl hover:border-purple-500 transition">
              Login
            </button>
          </Link>
          <button className="font-semibold bg-[#3730A3] text-white text-md px-5 py-2 rounded-3xl">
            Get Started
          </button>
        </div>
      )}

    </div>
  )
}

export default Navbar