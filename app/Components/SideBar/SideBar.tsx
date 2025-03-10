import React from "react";
import LogoAnName from "../LogoAnName";
import MenuSelection from "./MenuSelection";
import LogoutSection from "./LogoutSection";
function Sidebar() {
    return (
        <div className="max-xl:hidden flex-grow p-10 flex-col bg-white min-h-screen">  
            <LogoAnName />
            <MenuSelection />
            <LogoutSection />
        </div>
    );
}

export default Sidebar;