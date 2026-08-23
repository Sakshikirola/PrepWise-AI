import { useState } from "react";
import {Sparkles ,Plus, Menu, X, Bell, CircleUserRound, CheckCircle, CircleAlert, Target, LayoutDashboard,
  PlayCircle, History, UserRound,Settings,LogOut} from "lucide-react"; 
import { dashboardStats, performanceData, recentInterviews } from "./DashboardData";
import {LineChart, Line, XAxis, YAxis, CartesianGrid,Tooltip, ResponsiveContainer} from "recharts";
import { Link } from "react-router-dom";

export const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false); 
  return (
    <div className='bg-black w-full min-h-screen px-4 sm:px-6 lg:px-8 py-3 overflow-x-hidden'> 
      {/* profile */}
      <div className='flex justify-between text-white'> 
       <div className='flex items-center gap-3'> 
        <button
         onClick={() => setSidebarOpen(!sidebarOpen)}
         className='text-white hover:text-purple-400 transition' 
        >
        {sidebarOpen ? (
        <X className='w-5 h-5 sm:w-6 sm:h-6' />) : (<Menu className='w-5 h-5 sm:w-6 sm:h-6' />
        )}
       </button>
       <div className='flex items-center gap-2 sm:gap-3'>
       <Sparkles className='w-5 h-5 sm:w-6 sm:h-6 text-purple-600' fill='currentColor'/>
       <h1 className='text-lg sm:text-2xl font-bold text-white'>PrepWise AI</h1>
       </div>

       </div>
       <div className='flex gap-1 sm:gap-2 items-center'> 
        <Bell className='w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-7'/>
        <CircleUserRound className="w-6 h-6 sm:w-8 sm:h-8 text-gray-300" />
        <h1 className="text-sm sm:text-base">Sakshi</h1> 
       </div>
      </div>

      {/* welcome */}
      <div className='flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center mt-4'>
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-white mt-5">
        {dashboardStats.map((stat) => {
         const Icon = stat.icon;
         return (
        <div className="py-3 px-5 bg-[#0B1220] rounded-2xl" key={stat.title}>
         <Icon className={`w-6 h-6 ${stat.iconColor} mb-2`}/>
         <p>{stat.title}</p>
         <h2 className="font-bold text-2xl">{stat.value}</h2>
        </div>
        );
        })}
      </div> 

      {/* main content */} 
      <div className='grid grid-cols-1 lg:grid-cols-[1.5fr_1fr_1fr] gap-4 mt-4'>
       {/* graph */}
       <div className="bg-[#0B1220] text-white rounded-xl p-6 w-full">
        <div className="flex justify-between items-center mb-3">
         <h2 className="text-white text-lg font-semibold">Performance Overview</h2>
         <button className="text-sm text-gray-400 border border-gray-700 rounded-md px-2 py-1">
          This Month 
         </button>
       </div>
       
       <ResponsiveContainer width="100%" height={210}>
       <LineChart data={performanceData}
        margin={{ top: 5, right: 10, left: -15, bottom: 0 }}
       >
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
       </ResponsiveContainer>
      </div>

      {/* history */}
      <div className='text-white bg-[#0B1220] rounded-xl p-4 w-full'>  
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
       <div className='flex flex-col gap-4 w-full'> 
        <div className='text-white bg-[#0B1220] rounded-xl p-4'> 
        <div className='flex items-center gap-2 mb-2'>
         <CheckCircle className='w-5 h-5 text-green-500' />
         <h1 className='text-green-500'>Strengths</h1> 
        </div>
        <p>Problem solving, Javascript, React</p> 
        </div> 

        <div className='text-white bg-[#0B1220] rounded-xl p-4'> 
        <div className='flex items-center gap-2 mb-2'>
         <CircleAlert className='w-5 h-5 text-red-500' />
         <h1 className='text-red-500'>Areas to Improve</h1> 
        </div>
        <p>System Design, DBMS</p>  
        </div> 

        <div className='text-white bg-[#0B1220] rounded-xl p-4'>
        <div className='flex items-center gap-2 mb-2'>
         <Target className='w-5 h-5 text-blue-400' />
         <h1 className='text-blue-400'>Recommended Focus</h1>
        </div>
        <p>Practice System Design and DBMS</p>
        </div>
       </div>

      {/* menu open */}
      {sidebarOpen && ( 
      <div className="fixed top-0 left-0 h-screen w-64 bg-[#0B1220] border-r border-gray-800 z-50"> 
       <div className="flex items-center justify-between px-5 py-5 border-b border-gray-800"> 
        <div className="flex items-center gap-2 whitespace-nowrap"> 
         <Sparkles className="w-6 h-6 text-purple-600" fill="currentColor"/> 
        <h1 className="text-lg font-bold text-white whitespace-nowrap">PrepWise AI </h1> 
       </div> 
       <button 
        onClick={() => setSidebarOpen(false)} 
        className="text-gray-400 hover:text-white"  
       > 
        <X className="w-5 h-5" /> 
       </button> 
      </div> 
      {/* Navigation */} 
      <div className="px-3 py-5 space-y-2"> 
       <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-[#3730A3] text-white whitespace-nowrap"> 
        <LayoutDashboard className="w-5 h-5 shrink-0" /> 
        <span>Dashboard</span> 
       </button> 
       <Link to="/startInterview">
       <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition whitespace-nowrap"> 
        <PlayCircle className="w-5 h-5 shrink-0" /> 
        <span>Start Interview</span> 
       </button> 
       </Link>
       <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition whitespace-nowrap"> 
        <History className="w-5 h-5 shrink-0" /> 
        <span>History</span> 
       </button> 
       <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition whitespace-nowrap"> 
        <UserRound className="w-5 h-5 shrink-0" /> 
        <span>Profile</span> 
       </button> 
       <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition whitespace-nowrap"> 
        <Settings className="w-5 h-5 shrink-0" /> 
        <span>Settings</span> 
       </button> 
      </div> 
       {/* Logout */} 
      <div className="absolute bottom-5 left-3 right-3"> 
      <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition whitespace-nowrap"> 
        <LogOut className="w-5 h-5 shrink-0" /> 
        <span>Logout</span> 
      </button>
     </div> 
    </div> 
    )}
    </div>
    </div>
  )
}

export default Dashboard 
