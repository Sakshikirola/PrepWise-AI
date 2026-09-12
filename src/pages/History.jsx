import React, { useEffect, useState } from "react";
import { Search, ArrowLeft} from "lucide-react";
import { useNavigate } from "react-router-dom"; 
import { supabase } from "../lib/supabase";



const History = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState(""); 
  const [historyData, setHistoryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
  const fetchHistory = async () => {
    try { 
      setLoading(true);
      setError("");
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();
      if (userError) {
        throw userError;
      }
      if (!user) {
        setError("Please login to view your interview history.");
        return;
      }

      const { data, error: fetchError } = await supabase.from("interviews")
        .select(
          "id, created_at, user_id, topic, interview_type, experience, score, accuracy, questions, answers, time_taken"
        )
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });
       
        if (fetchError) {
         throw fetchError;
        }
        setHistoryData(data || []); 
    } 
    catch (err) {
      console.error("Error fetching interview history:", err);
      setError("Failed to load interview history.");
    } finally {
      setLoading(false); 
    }
  };

  fetchHistory();
}, []);


  const filteredInterviews = historyData.filter((interview) =>
   interview.topic?.toLowerCase().includes(search.toLowerCase()) ||
   interview.interview_type?.toLowerCase().includes(search.toLowerCase())
  ); 

  const formatDate = (dateString) => {
   return new Date(dateString).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
   }); 
  };

  return (
    <div className="min-h-screen bg-black text-white px-4 sm:px-6 lg:px-8 py-5">
     <div className="flex items-center gap-3 mb-6">
      <button onClick={() => navigate(-1)}
       className="p-1 rounded-md mb-4 text-gray-300 hover:bg-gray-800 hover:text-white transition"
      >
       <ArrowLeft className="w-6 h-6 font-bold" />
       </button>
     <div>
       <h1 className="text-2xl sm:text-3xl font-bold">Interview History</h1>
       <p className="text-gray-500 text-sm mt-1">
        Review your past interviews and track your progress
       </p>
     </div>
     </div>

      <div className="max-w-7xl mx-auto bg-[#0B1220] border border-gray-800 rounded-xl p-4 sm:p-5">
        <div className="flex flex-col sm:flex-row gap-3 mb-5">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search interviews..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-[#111827] border border-gray-800 rounded-lg pl-9 pr-3 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-600"
            />
          </div>

          <select
            className="bg-[#111827] border border-gray-800 rounded-lg px-3 py-2 text-sm text-gray-300 focus:outline-none focus:border-purple-600"
          >
            <option>All Types</option>
            <option>Technical</option>
            <option>HR</option>
          </select>

          <select
            className="bg-[#111827] border border-gray-800 rounded-lg px-3 py-2 text-sm text-gray-300 focus:outline-none focus:border-purple-600"
          >
            <option>All Time</option>
            <option>This Week</option>
            <option>This Month</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-175 text-sm">
            <thead>
              <tr className="border-b border-gray-800 text-gray-500 text-left">
                <th className="px-3 py-3 font-medium">Interview</th>
                <th className="px-3 py-3 font-medium">Type</th>
                <th className="px-3 py-3 font-medium">Experience</th>
                <th className="px-3 py-3 font-medium">Score</th>
                <th className="px-3 py-3 font-medium">Date</th>
              </tr>
            </thead>

            <tbody>

              {filteredInterviews.map((interview) => (
                <tr key={interview.id}
                  className="border-b border-gray-800/70 last:border-0 hover:bg-[#111827]/50 transition"
                >
                  <td className="px-3 py-4 text-gray-200 font-medium">
                    {interview.topic} Interview
                  </td>
                  <td className="px-3 py-4 text-gray-400">
                    {interview.interview_type}
                  </td>
                  <td className="px-3 py-4 text-gray-400">
                    {interview.experience}
                  </td>
                  <td className="px-3 py-4">
                    <span className="text-purple-400 font-semibold">
                      {Number(interview.score).toFixed(1)}
                    </span> 
                    <span className="text-gray-500">
                      /10
                    </span>
                  </td>
                  <td className="px-3 py-4 text-gray-400">
                    {formatDate(interview.created_at)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredInterviews.length === 0 && (
          <div className="text-center py-10 text-gray-500 text-sm">
            No interviews found.
          </div>
        )}
      </div>
    </div>
  );
};

export default History;