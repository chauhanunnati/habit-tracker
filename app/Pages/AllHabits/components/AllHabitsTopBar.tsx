import React from "react";
import AllHabitsSearchBar from "./AllHabtitsSearchBar";
import DarkMode from "./DarkMode";

function AllHabitsTopBar() {
  return (
    <div className="bg-white p-5 rounded-md flex justify-between w-full items-center">
      <div className="flex flex-col">
        <span className="text-xl">
          <span className="font-bold">Hi There!</span>
          <span className="font-light">, Ali</span>
        </span>
        <span className="font-light text-[12px] text-gray-400">
          Welcome back!
        </span>
      </div>

      <div className="w-[90%] flex gap-3 justify-between">
        <AllHabitsSearchBar />
        <DarkMode />
      </div>
    </div>
  );
}

export default AllHabitsTopBar;
