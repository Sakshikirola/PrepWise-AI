import React from "react";
import {Navbar} from "../components/Navbar"
import {Hero} from "../components/Hero";
import {Statecard} from "../components/Statecard";

export const Landing = () => {
  return (
    <div className="bg-black w-screen min-h-screen">
      <Navbar/> 
      <Hero/>
      <Statecard/>
    </div>
  );
}; 