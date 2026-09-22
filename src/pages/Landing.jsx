import React from "react";
import {Navbar} from "../components/Navbar"
import {Hero} from "../components/Hero";
import {Statecard} from "../components/Statecard";

export const Landing = () => {
  return (
    <div className="bg-black w-full min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col justify-center">
        <Hero />
        <Statecard />  
      </main>
    </div>
  );
};