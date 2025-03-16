import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import { Checkbox, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { useGlobalContextProvider } from "@/Types/contextApi";
import { darkModeColor, defaultColor } from "@/colors";
import { HabitType } from "@/Types/GlobalTypes";

export default function HabitsContainerMiddle() {
    const { allHabitsObject } = useGlobalContextProvider();
    const { allHabits } = allHabitsObject;
    
    return (
        <div className="p-3">
            {allHabits.map((singleHabit, singleHabitIndex) => (
                <div key={singleHabitIndex}>
                    <HabitCard singleHabit={singleHabit} />
                </div>
            ))}
        </div>
    );
}

function HabitCard({ singleHabit }: { singleHabit: HabitType }) {
    const { darkModeObject } = useGlobalContextProvider();
    const { isDarkMode } = darkModeObject;
    
    return (
        <div className="flex p-3 items-center justify-between">
            {/* The rounded checkbox */}
            <Checkbox
                icon={<RadioButtonUncheckedIcon />}
                checkedIcon={<CheckCircleIcon />}
                sx={{
                    color: defaultColor.textColor,
                    "&.Mui-checked": { color: defaultColor.textColor },
                }}
            />

            <div
                style={{
                    backgroundColor: isDarkMode
                        ? darkModeColor.backgroundSlate
                        : defaultColor.backgroundSlate,
                }}
                className="flex justify-between gap-2 w-full p-3 py-4 rounded-md bg-slate-50">
                <div className="w-full">
                    {/* Divs for the icon and the name of the habit */}
                    <div className="flex gap-2 justify-between">
                        <div className="flex gap-2 items-center">
                            <FontAwesomeIcon
                                className="p-3 rounded-full w-4 h-4 bg-customRed text-white"
                                height={20}
                                width={20}
                                icon={singleHabit.icon} // Ensure `icon` is a valid FontAwesomeIcon type
                            />
                            <span>{singleHabit.name}</span>
                        </div>
                    </div>

                    {/* Divs for the areas */}
                    <div className="flex gap-2 mt-3">
                        {singleHabit.areas.map((singleArea, index) => (
                            <div
                                key={index}
                                style={{
                                    color: isDarkMode ? darkModeColor.textColor : defaultColor.default,
                                    backgroundColor: isDarkMode ? defaultColor[50] : defaultColor[100],
                                }}
                                className="p-1 text-[12px] rounded-md px-2"
                            >
                                <span>{singleArea.name}</span>
                            </div>
                        ))}
                    </div>

                    {/* div for the three dots button */}
                    <div className="w-10 flex items-center justify-center">
                        <IconButton>
                            <MoreVertIcon sx={{ color: isDarkMode ? "white" : "gray" }} />
                        </IconButton>
                    </div>
                </div>
            </div>
        </div>
    );
}
