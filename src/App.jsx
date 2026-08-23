import { Routes, Route } from "react-router-dom";
import { Landing } from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import StartInterview from "./pages/StartInterview";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="login" element={<Login/>}/>
      <Route path="signup" element={<Signup/>}/>
      <Route path="dashboard" element={<Dashboard/>}/>
      <Route path="startInterview" element={<StartInterview/>}/>
    </Routes>
  );
}

export default App;