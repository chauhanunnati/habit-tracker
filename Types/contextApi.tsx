"use client";

import { ReactNode, createContext, useState, useContext } from "react";
import { GlobalContextType } from "./GlobalContextTypes";
import { menuItemType } from "./MenuItemTypes";
import { faRectangleList } from "@fortawesome/free-regular-svg-icons";
import { faChartSimple, faLayerGroup, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { DarkModeItem } from "./DarkModeTypes";

export type DarkModeItemType = {
  id: number;
  icon: IconProp;
  isSelected: boolean;
};


const GlobalContext = createContext<GlobalContextType>({
  menuItemsObject: {
    menuItems: [],
    setMenuItems: () => {},
  },
  openSideBarObject: {
    openSideBar: false,
    setOpenSideBar: () => {},
  },
  darkModeObject: {
    isDarkMode: false,
    setDarkMode: () => {},
    darkModeItems: [],
    setDarkModeItems: () => {},
  },
  habitWindowObject: {
    openHabitWindow: false,
    setOpenHabitWindow: () => {},
  },
});

function GlobalContextProvider({ children }: { children: ReactNode }) {
  const [menuItems, setMenuItems] = useState<menuItemType[]>([
    { name: "All Habits", isSelected: true, icon: faRectangleList },
    { name: "Statistics", isSelected: false, icon: faChartSimple },
    { name: "Areas", isSelected: false, icon: faLayerGroup },
  ]);

  const [darkModeItems, setDarkModeItems] = useState<DarkModeItemType[]>([
    { id: 1, icon: faSun, isSelected: true },
    { id: 2, icon: faMoon, isSelected: false },
  ]);

  const [openSideBar, setOpenSideBar] = useState(false);
  const [isDarkMode, setDarkMode] = useState<boolean>(false);
  const [openHabitWindow, setOpenHabitWindow] = useState<boolean>(false);

  return (
    <GlobalContext.Provider
      value={{
        menuItemsObject: { menuItems, setMenuItems },
        openSideBarObject: { openSideBar, setOpenSideBar },
        darkModeObject: { 
          isDarkMode, 
          setDarkMode, 
          darkModeItems, 
          setDarkModeItems,
        },
        habitWindowObject: { 
          openHabitWindow, 
          setOpenHabitWindow, 
        },
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobalContextProvider() {
  return useContext(GlobalContext);
}

export default GlobalContextProvider;