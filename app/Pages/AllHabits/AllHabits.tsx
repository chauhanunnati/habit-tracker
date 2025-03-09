import React from "react";
import AllHabitsTopBar from "./components/AllHabitsTopBar";
import AllHabitsRightSideBar from "./components/AllHabitsRightSideBar";

function AllHabits() {
  return (
    <div>
      <div className="w-full flex">
        <div className="w-[80%] m-5">
          <AllHabitsTopBar />
        </div>
        <AllHabitsRightSideBar />
      </div>
    </div>
  );
}

export default AllHabits;
