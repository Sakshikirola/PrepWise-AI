import React, { useState } from "react";
import { Sparkles, Mail, Lock } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { signUp } from "../lib/auth"; 

export const Signup = () => {

  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); 

  const handleSignup = async () => {
   setError("");
   if (!fullName || !email || !password) {
    setError("Please fill in all fields.");
    return;
   }

   if (password.length < 6) {
    setError("Password must be at least 6 characters.");
    return;
   }
   setLoading(true);

   const { data, error } = await signUp(email, password, {
    data: {
      full_name: fullName, 
    },
  });

  setLoading(false);

  if (error) {
    setError(error.message);
    return;
  }

  if (data.user) {
    navigate("/login");
  }
};

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Logo */}
      <div className="px-8 py-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-purple-500" fill="currentColor"/> 
          <h1 className="text-base font-semibold">PrepWise AI</h1>
        </div>
      </div>

      {/* Signup Section */}
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold mb-3">Create Your Account</h2>
            <p className="text-gray-400 text-sm">Start your journey with AI</p>
          </div>

          <div className="bg-gray-950 border border-gray-800 rounded-2xl p-7 shadow-xl">
            <div className="mb-4">
              <label className="block text-sm text-gray-300 mb-2">Full Name</label>
              <div className="relative">
                <input type="text" value={fullName} 
                  onChange={(e) => setFullName(e.target.value)} placeholder="Enter your full name"
                  className="w-full bg-black border border-gray-800 rounded-lg py-3 pl-11 pr-4 text-sm text-white placeholder-gray-600 outline-none focus:border-purple-500 transition"
                /> 
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm text-gray-300 mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email"
                  className="w-full bg-black border border-gray-800 rounded-lg py-3 pl-11 pr-4 text-sm text-white placeholder-gray-600 outline-none focus:border-purple-500 transition"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm text-gray-300 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password"
                  className="w-full bg-black border border-gray-800 rounded-lg py-3 pl-11 pr-4 text-sm text-white placeholder-gray-600 outline-none focus:border-purple-500 transition"
                />
              </div>
            </div>

            {error && (
            <p className="text-red-400 text-sm mb-4">{error}</p>
            )} 

            <button className=" w-full bg-[#3730A3] text-white font-medium py-3 rounded-lg transition
              shadow-lg shadow-purple-500/10" onClick={handleSignup} disabled={loading}
            >
              {loading ? "Creating Account..." : "Signup"} 
            </button> 

            <p className="text-center text-sm text-gray-500 mt-6">
              Already have an account?{" "}
              <Link to="/login">
                <span className="text-purple-400 hover:text-purple-300 cursor-pointer">
                  Login
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;