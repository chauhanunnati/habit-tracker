import React from "react";
import AppIcon from "../SVG-icons/AppIcon"; 

function Navbar() {
  return (
    <header className="p-8 px-20">
      <div className="sm:flex sm:items-center sm:justify-between">
        {/* Icon + Name of The App */}
        <div className="text-center sm:text-left mb-7 sm:mb-0">
          <div className="flex gap-2 items-center sm:justify-start justify-center">
            <span className="text-2xl font-light flex items-center gap-2">
              {/* The Icon */}
              <div className="p-2 rounded-md bg-[##0c074d]">
                <AppIcon color="#ffffff" height="34" width="34" />
              </div>
              {/* The Name of the app */}
              <span className="font-bold text-[#1627de]">Habit</span>
              <span className="font-light">Tracker</span>
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
          <button
            className="block sm:w-32 w-full rounded-lg px-9 py-3 text-sm font-medium text-white bg-[##0c074d] transition focus:outline-none hover:bg-blue-700"
            type="button"
          >
            Sign In
          </button>
          <button
            className="block sm:w-32 w-full border rounded-lg px-9 py-3 text-sm font-medium transition focus:outline-none hover:bg-[#1627de] hover:text-white border-[#1627de] text-[#1627de]"
            type="button"
          >
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
