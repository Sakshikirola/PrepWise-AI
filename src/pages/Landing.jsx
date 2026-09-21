import React from "react";
import {Navbar} from "../components/Navbar"
import {Hero} from "../components/Hero";
import {Statecard} from "../components/Statecard";

export const Landing = () => {
  return (
    <div className="bg-black w-screen h-screen flex flex-col overflow-hidden">
      <Navbar/> 
      <Hero/>
      <Statecard/>
    </div>
  );
}; 