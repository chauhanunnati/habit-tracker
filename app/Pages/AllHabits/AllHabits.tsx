import React from "react";
import AllHabitsTopBar from "./components/AllHabitsTopBar";
import AllHabitsRightSideBar from "./components/AllHabitsRightSideBar";
import HabitsContainer from "./components/HabitsContainer";

function AllHabits() {
  return (
    <div>
      <div className="w-full flex">
        <div className="w-[80%] m-5">
          <AllHabitsTopBar />
        </div>
        <AllHabitsRightSideBar />
      </div>
      <div>
        <HabitsContainer />
      </div>
    </div>
  );
}

export default AllHabits;
