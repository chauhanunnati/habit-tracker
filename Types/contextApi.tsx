"use client";

import { ReactNode, createContext, useState, useContext } from "react";

import { GlobalContextType } from "./GlobalContextTypes";
import { menuItemType } from "./MenuItemTypes";
import { faRectangleList } from "@fortawesome/free-regular-svg-icons";
import { faChartSimple, faLayerGroup, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

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
});

function GlobalContextProvider({ children }: { children: ReactNode }) {
  const [menuItems, setMenuItems] = useState<menuItemType[]>([
    { name: "All Habits", isSelected: true, icon: faRectangleList },
    { name: "Statistics", isSelected: false, icon: faChartSimple },
    { name: "Areas", isSelected: false, icon: faLayerGroup },
  ]);

  const [openSideBar, setOpenSideBar] = useState(false);
  const [isDarkMode, setDarkMode] = useState<boolean>(false);
  const [darkModeItems, setDarkModeItems] = useState<DarkModeItemType[]>([
    { id: 1, icon: faSun, isSelected: true },
    { id: 2, icon: faMoon, isSelected: false },
  ]);

  return (
    <GlobalContext.Provider
      value={{
        menuItemsObject: { menuItems, setMenuItems },
        openSideBarObject: { openSideBar, setOpenSideBar },
        darkModeObject: { isDarkMode, setDarkMode, darkModeItems, setDarkModeItems },
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