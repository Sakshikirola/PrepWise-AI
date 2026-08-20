import React from 'react'
import {Sparkles ,Plus, Menu, X, Bell, CircleUserRound, CheckCircle, CircleAlert } from "lucide-react"; 
import { dashboardStats, performanceData, recentInterviews } from "./DashboardData";
import {LineChart, Line, XAxis, YAxis, CartesianGrid,Tooltip,} from "recharts";

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

      {/* cards */}
      <div className="grid grid-cols-4 gap-4 text-white mt-5">
        {dashboardStats.map((stat) => {
         const Icon = stat.icon;
         return (
        <div className="py-2 px-6 bg-gray-900 rounded-2xl" key={stat.title}>
         <Icon className={`w-6 h-6 ${stat.iconColor} mb-3`}/>
         <p>{stat.title}</p>
         <h2 className="font-bold text-2xl">{stat.value}</h2>
        </div>
        );
        })}
      </div> 

      {/* main content */}
      <div className='flex justify-between mt-5'>
       {/* graph */}
       <div className="bg-[#111827] rounded-xl p-4">
        <div className="flex justify-between items-center mb-2">
         <h2 className="text-white text-lg font-semibold">Performance Overview</h2>
         <button className="text-sm text-gray-400 border border-gray-700 rounded-md px-2 py-1">
          This Month
         </button>
       </div>
       
       <LineChart width={500} height={180} data={performanceData}
        margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
        <CartesianGrid vertical={false} stroke="#27324A" strokeDasharray="3 3"/>
        <XAxis dataKey="month" tick={{ fill: "#64748B", fontSize: 10 }} axisLine={false} tickLine={false}/>
        <YAxis domain={[0, 10]} ticks={[0, 2.5, 5, 7.5, 10]} tick={{ fill: "#64748B", fontSize: 10 }} axisLine={false} tickLine={false}/>
        <Tooltip />
        <Line type="monotone" dataKey="score" stroke="#8B5CF6" strokeWidth={2}
          dot={{
            r: 2.5,
            fill: "#8B5CF6", 
            strokeWidth: 0,
          }}
          activeDot={{
           r: 4,
          }}
        />
       </LineChart>
      </div>

      {/* history */}
      <div className='text-white bg-[#111827] rounded-xl p-4 w-90'>  
       <div className='flex justify-between items-center mb-4'>  
        <h1 className="text-white text-lg font-semibold">Recent Interviews</h1>  
        <p className='text-sm font-semibold text-purple-600 cursor-pointer'>View All</p>  
       </div>  
       <div className='space-y-4'>  
       {recentInterviews.map((interview) => (  
       <div className='flex justify-between items-center' key={interview.title}>  
        <div>  
          <h3 className='text-sm font-medium'>{interview.title}</h3>  
          <p className='text-gray-400 text-xs mt-1'>{interview.date}</p>  
        </div>  
        <div className='text-right'>  
          <span className='text-purple-400 font-semibold text-sm'>{interview.score}</span>  
          <p className='text-gray-500 text-xs mt-1'>Score</p>  
        </div>  
       </div>  
       ))}  
       </div>  
      </div>

      {/* short result */}
       <div className='flex flex-col gap-4'> 
        <div className='text-white bg-[#111827] rounded-xl p-4'> 
        <div className='flex items-center gap-2 mb-2'>
         <CheckCircle className='w-5 h-5 text-green-500' />
         <h1 className='text-green-500'>Strengths</h1> 
        </div>
        <p>Problem solving, Javascript, React</p> 
        </div> 

        <div className='text-white bg-[#111827] rounded-xl p-4'> 
        <div className='flex items-center gap-2 mb-2'>
         <CircleAlert className='w-5 h-5 text-red-500' />
         <h1 className='text-red-500'>Areas to Improve</h1> 
        </div>
        <p>System Design, DBMS</p>  
        </div> 
       </div>

      </div>
    </div>
  )
}

export default Dashboard
