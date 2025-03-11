import React from "react";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Checkbox, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useGlobalContextProvider } from "@/Types/contextApi";
import { defaultColor, darkModeColor } from "@/colors";

function HabitsCompleted() {
    const { darkModeObject } = useGlobalContextProvider();
    const { isDarkMode } = darkModeObject;

    return (
        <div 
            style={{
                color: isDarkMode ? darkModeColor.textColor : defaultColor.textColor,
                backgroundColor: isDarkMode ? darkModeColor.background : defaultColor.background,
            }}
        className=" mt-7 p-3 rounded-md w-full">
            <span className="font-bold text-lg mb-2 w-full">Habits Completed</span>
            <div className="opacity-90">
                <HabitCard />
                <HabitCard />
            </div>
        </div>
    );
}

export default HabitsCompleted;

function HabitCard() {
    const { darkModeObject } = useGlobalContextProvider();
    const { isDarkMode } = darkModeObject;
    return (
        // Element for the whole Habit cards
        <div className=" flex p-3 items-center justify-between">
            {/* The rounded checkbox */}
            <Checkbox
                icon={<RadioButtonUncheckedIcon />}
                checkedIcon={<CheckCircleIcon />}
                sx={{
                    color: defaultColor.textColor,
                    "&.Mui-checked": {
                        color: defaultColor.textColor,
                    },
                }}
            />

            <div 
                style={{
                    color: isDarkMode ? darkModeColor.textColor : defaultColor.textColor,
                    backgroundColor: isDarkMode ? darkModeColor.background : defaultColor.background,
                }}
            className="flex justify-between gap-2 w-full p-3 py-4 rounded-md bg-slate-50 relative">
                <div className="w-full">
                    {/* Divs for the icon and the name of the habit */}
                    <div className="flex gap-2">
                        <div className="flex gap-2 items-center">
                            <FontAwesomeIcon
                                className="p-3 rounded-full bg-customRed text-white"
                                style={{ height: 20, width: 20 }}
                                icon={faCode}
                            />
                            <span className="">Coding</span>
                        </div>
                    </div>
                    
                    {/* Divs for the areas */}
                    <div className="flex gap-2 mt-2">
                        <div 
                            style={{
                                color: isDarkMode
                                    ? darkModeColor.textColor
                                    : defaultColor.default,
                                backgroundColor: isDarkMode
                                    ? defaultColor[50]
                                    : defaultColor[100],
                            }}
                            className="p-1 text-[12px] rounded-md px-2"
                        >
                            <span className=" ">Area1</span>
                        </div>
            
                        <div 
                            style={{
                                color: isDarkMode
                                    ? darkModeColor.textColor
                                    : defaultColor.default,
                                backgroundColor: isDarkMode
                                    ? defaultColor[50]
                                    : defaultColor[100],
                            }}
                            className="p-1 text-[12px] rounded-md px-2"
                        >
                            <span className="text-customRed">Area2</span>
                        </div>
                    </div>
                </div>
                
                {/* div for the three dots button */}
                <div className="ml-auto flex items-center justify-end">
                    <IconButton>
                        <MoreVertIcon sx={{ color: isDarkMode ? "white" : "gray" }} />
                    </IconButton>
                </div>
            </div>
        </div>
    );
}
