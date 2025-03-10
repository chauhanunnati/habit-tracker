import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import { Checkbox } from "@mui/material";
import { defaultColour } from "@/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { IconButton} from "@mui/material";
export default function HabitsContainerMiddle() {
    return (
        <div className="border border-amber-700 p-3">
            <HabitCard />
        </div>
    );
}

function HabitCard() {
    return (
        // Element for the whole Habit cards
        <div className="flex p-3 items-center justify-between border ">
            {/* The rounded checkbox */}
            <Checkbox
                icon={<RadioButtonUncheckedIcon />}
                checkedIcon={<CheckCircleIcon />}
                sx={{
                    color: defaultColour,
                    "&.Mui-checked": {
                        color: defaultColour,
                    },
                }}
            />

            <div className="flex justify-between gap-2 w-full p-3 py-4 rounded-md bg-slate-50 border border-red-500">
                <div className="border border-blue-700 w-full">
                    {/* Divs for the icon and the name of the habit */}
                    <div className="flex gap-2 justify-between border border-yellow-300">
                        <div className="flex gap-2 items-center">
                            <FontAwesomeIcon
                                className="p-3 rounded-full w-4 h-4 bg-customRed text-white"
                                height={20}width={20}
                                icon={faCode}
                            />
                            <span className="">Coding</span>
                        </div>
                    </div>
                    
                    {/* Divs for the areas */}
                    <div className="flex gap-2 mt-2 border border-fuchsia-300">
                        <div 
                            style={{ backgroundColor: defaultColour[100] }}
                            className="p-1 text-white text-[12px] rounded-md px-2"
                        >
                            <span className="text-customRed">Area1</span>
                        </div>
            
                        <div 
                            style={{ backgroundColor: defaultColour[100] }}
                            className="p-1 text-white text-[12px] rounded-md px-2"
                        >
                            <span className="text-customRed">Area1</span>
                        </div>
                    </div>
                </div>
                {/* div for the three dots button */}
            <div className="w-10 flex items-center justify-center">
            <IconButton>
                <MoreVertIcon />
            </IconButton>
            </div>
        </div>
        </div>
    );
}