import React from "react";
import Navbar from "./mainPageComponents/Navbar";
import HeroSection from "./mainPageComponents/HeroSection";
export default function Home() {
  return (
    <div>
      <Navbar />
      <h1 className="font-poppins font-bold text-xl text-center mt-10">Habit Tracker Website</h1>
      <HeroSection />
    </div>
  );
}