import React, { useState } from "react";
import { Search, ArrowLeft} from "lucide-react";
import { useNavigate } from "react-router-dom"; 

const historyData = [
  {
    id: 1,
    interview: "C++ Interview",
    type: "Technical",
    experience: "Fresher",
    score: 8.5,
    date: "07 Sep 2026",
  },
  {
    id: 2,
    interview: "React Interview",
    type: "Technical",
    experience: "Fresher",
    score: 7.5,
    date: "05 Sep 2026",
  },
  {
    id: 3,
    interview: "JavaScript Interview",
    type: "Technical",
    experience: "Fresher",
    score: 7.0,
    date: "03 Sep 2026",
  },
  {
    id: 4,
    interview: "HR Interview",
    type: "HR",
    experience: "Fresher",
    score: 8.0,
    date: "01 Sep 2026",
  },
  {
    id: 5,
    interview: "Frontend Developer",
    type: "Technical",
    experience: "Intermediate",
    score: 6.5,
    date: "29 Aug 2026",
  },
];

const History = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const filteredInterviews = historyData.filter((interview) =>
    interview.interview.toLowerCase().includes(search.toLowerCase())
  );

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
                    {interview.interview}
                  </td>
                  <td className="px-3 py-4 text-gray-400">
                    {interview.type}
                  </td>
                  <td className="px-3 py-4 text-gray-400">
                    {interview.experience}
                  </td>
                  <td className="px-3 py-4">
                    <span className="text-purple-400 font-semibold">
                      {interview.score}
                    </span>
                    <span className="text-gray-500">
                      /10
                    </span>
                  </td>
                  <td className="px-3 py-4 text-gray-400">
                    {interview.date}
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