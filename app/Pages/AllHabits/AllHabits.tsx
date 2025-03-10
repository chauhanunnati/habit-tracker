import React from "react";
import AllHabitsTopBar from "./components/AllHabitsTopBar";
import AllHabitsRightSideBar from "./components/AllHabitsRightSideBar";
import HabitsContainer from "./components/HabitsContainer";
import HabitsCompleted from "./components/HabitsCompleted";

function AllHabits() {
  return (
    <div className="max-lg:flex-col w-full flex flex-row gap-0">
      <div className="flex-col flex-grow m-3">
        <AllHabitsTopBar />
        <HabitsContainer />
        <HabitsCompleted />
      </div>

      <AllHabitsRightSideBar />
    </div>
  );
}

export default AllHabits;
