import React from "react";
import LogoAnName from "../LogoAnName";
import MenuSelection from "./MenuSelection";
import LogoutSection from "./LogoutSection";
function Sidebar() {
    return (
        <div className="border-r-2 h-screen p-10">
            <LogoAnName />
            <MenuSelection />
            <LogoutSection />
        </div>
    );
}

export default Sidebar;