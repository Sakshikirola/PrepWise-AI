import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase"; 
import {Sparkles ,Plus, Menu, X,CircleUserRound, CheckCircle, CircleAlert, Target, LayoutDashboard,
  PlayCircle, History,LogOut} from "lucide-react"; 
import {LineChart, Line, XAxis, YAxis, CartesianGrid,Tooltip, ResponsiveContainer} from "recharts";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "../lib/auth";

export const Dashboard = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false); 
  const [interviews, setInterviews] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [userName, setUserName] = useState("");

  const handleLogout = async () => {
   const { error } = await signOut();
   if (error) {
    console.error("Logout error:", error);
    return;
   } 
   navigate("/login"); 
  };

  useEffect(() => {

   const fetchInterviews = async () => {
    const { data, error } = await supabase .from("interviews")
      .select("*") 
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Dashboard Error:", error);
      setLoading(false);
      return; 
    }

    setInterviews(data || []);
    setLoading(false); 
   };

   const getUser = async () => { 
    const { data, error } = await supabase.auth.getUser();
    if (error) {
     console.error("User Error:", error);
     return;
    }
    console.log("EMAIL:", data.user?.email);
    console.log("NAME:", data.user?.user_metadata?.full_name);
    console.log("METADATA:", data.user?.user_metadata);
    setUserName(data.user?.user_metadata?.full_name || "User");
   }; 

   getUser();
   fetchInterviews();
  }, []);

  const totalInterviews = interviews.length; 
  const averageScore = totalInterviews > 0
    ? (
        interviews.reduce((sum, interview) => sum + Number(interview.score || 0), 0) /
        totalInterviews
      ).toFixed(1)
    : "0.0";

  const bestScore = totalInterviews > 0
    ? Math.max(...interviews.map((interview) => Number(interview.score || 0))).toFixed(1)
    : "0.0";

  const totalSeconds = interviews.reduce(
  (sum, interview) => sum + Number(interview.time_taken || 0),
   0
  );
  const totalMinutes = Math.floor(totalSeconds / 60);

  const practiceTime = totalMinutes >= 60
    ? `${Math.floor(totalMinutes / 60)}h ${totalMinutes % 60}m`
    : `${totalMinutes}m`;

  const performanceData = [...interviews] 
  .reverse()
  .map((interview) => ({
    month: new Date(interview.created_at).toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
    }),
    score: Number(interview.score || 0),
  })); 

  const recentInterviews = interviews.slice(0, 5);

  const strengths = [
  ...new Set(
    interviews.flatMap((interview) => interview.strengths || [])
  ),
  ].slice(0, 3);

  const improvements = [
  ...new Set(
    interviews.flatMap((interview) => interview.improvements || [])
  ),
  ].slice(0, 3);

  const recommendedFocus = improvements.length > 0
  ? improvements.slice(0, 2).join(", ")
  : "Complete more interviews to get recommendations";

  return (
     <div className='bg-black w-full min-h-screen lg:h-screen px-4 sm:px-6 lg:px-8 py-3 overflow-x-hidden flex flex-col'>
      {/* profile */}
      <div className='flex justify-between text-white shrink-0'>
       <div className='flex items-center gap-3'> 
        <button
         onClick={() => setSidebarOpen(!sidebarOpen)}
         className='text-white hover:text-purple-400 transition' 
        >
        {sidebarOpen ? (
        <X className='w-5 h-5 sm:w-6 sm:h-6' />) : (<Menu className='w-5 h-5 sm:w-6 sm:h-6' />
        )}
       </button>
       <div className='flex items-center'>
       <img src="/prepwise-logo.png" alt="PrepWise AI Logo" className="w-7 h-7 object-contain"/>
       <h1 className='text-lg sm:text-2xl font-bold text-white'>PrepWise AI</h1>
       </div>

       </div>
       <div className='flex gap-1 sm:gap-2 items-center'> 
        <CircleUserRound className="w-6 h-6 sm:w-8 sm:h-8 text-gray-300" />
        <h1 className="text-sm sm:text-base">{userName}</h1> 
       </div>
      </div>

      {/* welcome */}
      <div className='flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center mt-4 shrink-0'>
        <div> 
         <h1 className='text-xl font-bold text-white'>Welcome back, {userName}</h1>
         <p className='text-gray-400 text-md'>Let's continue your interview preparation</p>
        </div>
        <div>
            <button onClick={() => navigate("/startInterview")}
             className="flex gap-2 font-semibold bg-[#3730A3] text-white text-md px-4 py-2 rounded">
                <Plus className="w-5 h-5 mt-1" />
                Start New Interview 
            </button> 
        </div> 
      </div>

      {/* cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-white mt-5 shrink-0">
        {[
          {
          title: "Total Interviews",
          value: totalInterviews,
          icon: Target,
          iconColor: "text-blue-400",
         },
         {
          title: "Average Score",
          value: `${averageScore}/10`,
          icon: CheckCircle,
          iconColor: "text-green-500",
         },
         {
          title: "Best Score",
          value: `${bestScore}/10`,
          icon: Sparkles,
          iconColor: "text-purple-500",
         },
         {
          title: "Practice Time",
          value: practiceTime,
          icon: CircleUserRound,
          iconColor: "text-cyan-400",
         },].map((stat) => {
         const Icon = stat.icon;
       return (
        <div  className="py-2 px-5 bg-[#0B1220] rounded-2xl" key={stat.title}>
         <Icon className={`w-5 h-5 ${stat.iconColor} mb-2`} />
         <p>{stat.title}</p>
         <h2 className="font-bold text-xl">{stat.value}</h2>
        </div>
        );
       })}
      </div> 

      {/* main content */} 
        <div className='grid grid-cols-1 lg:grid-cols-[1.5fr_1fr_1fr] gap-4 mt-4 lg:flex-1 lg:min-h-0'>
       {/* graph */}
       <div className="bg-[#0B1220] text-white rounded-xl p-6 w-full lg:h-full lg:min-h-0">
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
      <div className='text-white bg-[#0B1220] rounded-xl p-4 w-full lg:h-full lg:min-h-0 overflow-hidden flex flex-col'>  
       <div className='flex justify-between items-center mb-4'>  
        <h1 className="text-white text-lg font-semibold">Recent Interviews</h1>  
        <p onClick={() => navigate("/history")} className='text-sm font-semibold text-purple-600 cursor-pointer'>View All</p>  
       </div>  
       <div className='space-y-4 overflow-y-auto pr-2 flex-1 scrollbar-hide'>  
         {recentInterviews.map((interview) => (
          <div className="flex justify-between items-center" key={interview.id}>
          <div>
           <h3 className="text-sm font-medium">{interview.topic} Interview</h3>
           <p className="text-gray-400 text-xs mt-1">
            {new Date(interview.created_at).toLocaleDateString("en-US", {
            day: "2-digit",
            month: "short",
            year: "numeric",
            })}
           </p>
          </div>
          <div className="text-right">
           <span className="text-purple-400 font-semibold text-sm">{Number(interview.score).toFixed(1)}</span>
           <p className="text-gray-500 text-xs mt-1">Score</p>
          </div>
         </div>
         ))}
       </div>  
      </div>

      {/* short result */}
       <div className='flex flex-col gap-4 w-full lg:h-full lg:min-h-0'> 
        <div className='text-white bg-[#0B1220] rounded-xl p-4 lg:flex-1 lg:min-h-0 overflow-hidden flex flex-col'> 
        <div className='flex items-center gap-2 mb-2'>
         <CheckCircle className='w-5 h-5 text-green-500' />
         <h1 className='text-green-500'>Strengths</h1> 
        </div>
        <div className="flex-1 min-h-0 overflow-y-auto pr-2 mt-1 scrollbar-hide">
         <p>
          {strengths.length > 0
          ? strengths.join(", ")
          : "Complete an interview to see your strengths"}
         </p>
        </div>
        </div> 

        <div className='text-white bg-[#0B1220] rounded-xl p-4 lg:flex-1 lg:min-h-0 overflow-hidden flex flex-col'> 
        <div className='flex items-center gap-2 mb-2'>
         <CircleAlert className='w-5 h-5 text-red-500' />
         <h1 className='text-red-500'>Areas to Improve</h1> 
        </div>
        <div className="flex-1 min-h-0 overflow-y-auto pr-2 mt-1 scrollbar-hide">
         <p>
         {improvements.length > 0
         ? improvements.join(", ")
         : "Complete an interview to see areas to improve"}
         </p>
        </div>
        </div> 

        <div className='text-white bg-[#0B1220] rounded-xl p-4 lg:flex-1 lg:min-h-0 overflow-hidden flex flex-col'>
        <div className='flex items-center gap-2 mb-2'>
         <Target className='w-5 h-5 text-blue-400' />
         <h1 className='text-blue-400'>Recommondations</h1>
        </div>
        <div className="flex-1 min-h-0 overflow-y-auto pr-2 mt-1 scrollbar-hide">
          <p>{recommendedFocus}</p>
        </div>
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
       <Link to="/history"> 
       <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition whitespace-nowrap"> 
        <History className="w-5 h-5 shrink-0" />  
        <span>History</span> 
       </button> 
       </Link>
    
      </div> 
       {/* Logout */} 
      <div className="absolute bottom-5 left-3 right-3"> 
      <button  onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition whitespace-nowrap"> 
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
     