import React from "react";
import { defaultColour } from "@/colors";

import UserProfile from "./RightSideBar/UserProfile";
import MainStatistics from "./RightSideBar/MainStatistics";
import Calendar from "./RightSideBar/Calendar";

function AllHabitsRightSideBar() {
  return (
    <div className="w-[30%] flex flex-col items-center-center bg-white m-5 rounded-lg p-2">
      <UserProfile />
      <MainStatistics />
      <Calendar />
    </div>
  );
}

export default AllHabitsRightSideBar;
