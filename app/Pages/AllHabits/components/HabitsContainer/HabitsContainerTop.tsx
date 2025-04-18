import React from "react";
import { faCode, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconButton } from "@mui/material";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import { useGlobalContextProvider } from "@/Types/contextApi";
import { darkModeColor, defaultColor } from "@/colors";

export default function HabitsContainerTop() {
    const { habitWindowObject } = useGlobalContextProvider();
    const { setOpenHabitWindow } = habitWindowObject;
    return (
        <div className="p-3 flex justify-between items-center">
            <div className="flex gap-4 items-center">
                <div>
                    <h2 className="font-bold text-lg">Sunday</h2>
                    <span className="font-light text-[12px]">17 May 2024</span>
                </div>
            </div>

            <div className="flex gap-1.4">
                <div className="text-customRed cursor-pointer">
                    <ArrowCircleLeftOutlinedIcon />
                </div>
                <div className="text-customRed cursor-pointer">
                    <ArrowCircleRightOutlinedIcon />
                </div>
            </div>

            <button className="flex gap-2 items-center bg-customRed p-3 text-white rounded-md text-sm"
                onClick={() => setOpenHabitWindow(true)}
            > 
                <FontAwesomeIcon icon={faPlus} />
                <span>New Habit</span>
            </button>
        </div>
    );
}

