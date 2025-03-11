import { defaultColor } from "@/colors";
import AppIcon from "@/app/SVG_icons/AppIcon";
function LogoAnName() {
    return (
        <div className="flex gap-2 items-center sm:justify-start justify-center">
            <span className="text-2x1 font-light flex items-center gap-2 ">
                <div
                    style={{ backgroundColor: defaultColor }}
                    className=" p-2 rounded-md"
                >
                    <AppIcon color="#ffffff" height="34" width="34" />
                </div>
                <span
                    style={{ color: defaultColor }}
                    className="font-bold text-mainColor"
                >
                    Habit
                </span>
                <span className="font-light"> Tracker</span>
            </span>
        </div>
    );
}

export default LogoAnName;