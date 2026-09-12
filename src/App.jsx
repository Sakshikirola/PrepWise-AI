import { Routes, Route } from "react-router-dom";
import { Landing } from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import StartInterview from "./pages/StartInterview";
import Interview from "./pages/Interview";
import Feedback from "./pages/Feedback";
import History from "./pages/History";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>
       {/* public routes */}
      <Route path="/" element={<Landing />} />
      <Route path="login" element={<Login/>}/>
      <Route path="signup" element={<Signup/>}/>

      {/* protected routes */}
      <Route path="dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
      <Route path="startInterview" element={<ProtectedRoute><StartInterview/></ProtectedRoute>}/>
      <Route path="interview" element={<ProtectedRoute><Interview/></ProtectedRoute>}/> 
      <Route path="feedback" element={<ProtectedRoute><Feedback/></ProtectedRoute>}/>
      <Route path="history" element={<ProtectedRoute><History/></ProtectedRoute>}/> 
    </Routes>
  );
}

export default App;