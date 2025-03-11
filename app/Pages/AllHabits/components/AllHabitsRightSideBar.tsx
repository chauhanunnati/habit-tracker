import React from "react";
import UserProfile from "./RightSideBar/UserProfile";
import MainStatistics from "./RightSideBar/MainStatistics";
import Calendar from "./RightSideBar/Calendar";
import { useGlobalContextProvider } from "@/Types/contextApi";
import { defaultColor, darkModeColor } from "@/colors";

function AllHabitsRightSideBar() {
  const { darkModeObject } = useGlobalContextProvider();
  const { isDarkMode } = darkModeObject;
  return (
    <div
      style={{
        color: isDarkMode ? darkModeColor.textColor : defaultColor.textColor,
        backgroundColor: isDarkMode
          ? darkModeColor.background
          : defaultColor.background,
      }} 
      className=" flex flex-col items-center-center bg-white m-5 rounded-lg p-2">
      <UserProfile />
      <MainStatistics />
      <Calendar />
    </div>
  );
}

export default AllHabitsRightSideBar;
