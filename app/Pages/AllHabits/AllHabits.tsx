import React from "react";
import AllHabitsTopBar from "./components/AllHabitsTopBar";
import AllHabitsRightSideBar from "./components/AllHabitsRightSideBar";
import HabitsContainer from "./components/HabitsContainer";
import HabitsCompleted from "./components/HabitsCompleted";

function AllHabits() {
  return (
    <div className="w-full flex">
        <div className="w-[80%] m-5">
            <AllHabitsTopBar />
            <HabitsContainer />
            <HabitsCompleted />
        </div>
        <AllHabitsRightSideBar />
    </div>
  );
}

export default AllHabits;
