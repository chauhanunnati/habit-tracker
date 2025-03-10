import React from "react";
//import { PieChart, Pie, Cell } from "recharts";

//import { defaultColour } from "@/colors";
//import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import UserProfile from "./RightSideBar/UserProfile";

function AllHabitsRightSideBar() {
    return (
        <div className="w-[30%] flex flex-col items-center-center bg-white">
            <UserProfile />
        </div>
    );
}

export default AllHabitsRightSideBar;
