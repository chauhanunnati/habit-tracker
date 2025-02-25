import React from "react";
import Navbar from "./mainPageComponents/Navbar"; // Corrected path

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1 className="font-poppins font-bold text-xl text-center mt-10">Habit Tracker Website</h1>
    </div>
  );
}