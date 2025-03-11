"use client";
import React, { useEffect, useState } from "react";
import { SignOutButton, useUser } from "@clerk/nextjs";
import Sidebar from "../Components/SideBar/SideBar";
import { menuItemType } from "@/Types/MenuItemTypes";
import Areas from "../Pages/Areas/Areas";
import AllHabits from "../Pages/AllHabits/AllHabits";
import Statistics from "../Pages/Statistics/Statistics";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useGlobalContextProvider } from "@/Types/contextApi";
import { defaultColor, darkModeColor } from "@/colors";

function Dashboard(){
    const { menuItemsObject, darkModeObject } = useGlobalContextProvider();
    const { menuItems } = menuItemsObject;
    const [selectedMenu, setSelectedMenu] = useState<menuItemType | null>(null);
    let selectComponent = null;
    const { isDarkMode } = darkModeObject;

    useEffect(() => {
        menuItems.map((singleItem) => {
            if (singleItem.isSelected) {
                setSelectedMenu(singleItem);
            }
        });
    }, [menuItems]);

    switch (selectedMenu?.name) {
        case "All Habits":
            selectComponent = <AllHabits />;
            break;
        case "Statistics":
            selectComponent = <Statistics />;
            break;
        case "Areas":
            selectComponent = <Areas />;
            break;
        case "All Areas":
            break;
    }
    return (
        <div 
            style={{
                backgroundColor: isDarkMode
                ? darkModeColor.backgroundSlate
                : defaultColor.backgroundSlate,
            }}
            className="flex "
        >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Sidebar />
                {selectComponent}
            </LocalizationProvider>
        </div>
    );
}

export default Dashboard;

function BlackSoftLayer() {
    const { openSideBarObject } = useGlobalContextProvider();
    const { openSideBar, setOpenSideBar } = openSideBarObject; // Ensure setOpenSideBar is destructured
  
    return (
      <div
        className={`w-full h-full bg-black fixed top-0 left-0 opacity-20 z-40 ${
          openSideBar ? "fixed" : "hidden"
        }`}
        onClick={() => setOpenSideBar(false)} // Ensure closing functionality
      ></div>
    );
  }
  