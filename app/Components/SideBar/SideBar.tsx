import React from "react";
import LogoAnName from "../LogoAnName";
import { useGlobalContextProvider } from "@/Types/contextApi";
import { DarkModeItem } from "./DarkModeTypes";
import MenuSelection from "./MenuSelection";
import LogoutSection from "./LogoutSection";

function Sidebar() {
  const { openSideBarObject } = useGlobalContextProvider();
  const { openSideBar, setOpenSideBar } = openSideBarObject; // Ensure correct destructuring
  const { isDakrMode } = darkModeObject;


  return (
    <div
      className={`${
        !openSideBar ? "max-xl:hidden" : "fixed shadow-lg"
      } flex-grow z-50 p-10 flex-col bg-white min-h-screen`}
    >
      <LogoAnName />
      <MenuSelection />
      <LogoutSection />
    </div>
  );
}

export default Sidebar;
