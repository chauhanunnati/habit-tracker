import React, { useEffect, useRef } from "react";
import LogoAnName from "../LogoAnName";
import MenuSelection from "./MenuSelection";
import LogoutSection from "./LogoutSection";
import { darkModeColor, defaultColor } from "@/colors";
import { useGlobalContextProvider } from "@/Types/contextApi";

function Sidebar() {
  const { openSideBarObject, darkModeObject } = useGlobalContextProvider();
  const { openSideBar, setOpenSideBar } = openSideBarObject;
  const { isDarkMode } = darkModeObject;
  const sideBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleOutsideClicked(event: MouseEvent) {
      if (!sideBarRef.current?.contains(event.target as Node)) {
        setOpenSideBar(false);
      }
    }
    document.addEventListener("click", handleOutsideClicked);
    return () => {
      document.removeEventListener("click", handleOutsideClicked);
    };
  }, [openSideBar, setOpenSideBar]);

  return (
    <div
      ref={sideBarRef}
      style={{
        color: isDarkMode ? darkModeColor.textColor : defaultColor.textColor,
        backgroundColor: isDarkMode
          ? darkModeColor.background
          : defaultColor.background,
      }}
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
