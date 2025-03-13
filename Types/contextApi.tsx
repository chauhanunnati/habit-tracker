"use client";

import { ReactNode, createContext, useState, useContext, useEffect } from "react";
import { GlobalContextType } from "./GlobalContextTypes";
import { menuItemType } from "./MenuItemTypes";
import { faRectangleList, faUser } from "@fortawesome/free-regular-svg-icons";
import { faChartSimple, faList, faLayerGroup, faSun, faMoon, faGraduationCap, faCode } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { DarkModeItem } from "./DarkModeTypes";
import { AreaType, HabitType } from "./GlobalTypes";
import { textToIcon } from "@/app/Pages/AllHabits/components/IconsWindow/IconData";
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
  openTimePickerWindowObject: {
    openTimePickerWindow: false,
    setOpenTimePickerWindow: () => {},
  },
  allAreasObject: {
    allAreas: [],
    setAllAreas: () => {},
  },
  allHabitsObject: {
    allHabits: [],
    setAllHabits: () => {},
  },
});

function GlobalContextProvider({ children }: { children: ReactNode }) {
  const [menuItems, setMenuItems] = useState<menuItemType[]>([
    { name: "All Habits", isSelected: true, icon: faRectangleList },
    { name: "Statistics", isSelected: false, icon: faChartSimple },
    { name: "Areas", isSelected: false, icon: faLayerGroup },
  ]);

  const [allHabits, setAllHabits] = useState<HabitType[]>([]);

  const [darkModeItems, setDarkModeItems] = useState<DarkModeItemType[]>([
    { id: 1, icon: faSun, isSelected: true },
    { id: 2, icon: faMoon, isSelected: false },
  ]);

  const [allAreas, setAllAreas] = useState<AreaType[]>([
    { id: 1, icon: faUser, name: "All" },
    { id: 2, icon: faGraduationCap, name: "Study" },
    { id: 3, icon: faCode, name: "Code" },
  ]);

  const [openSideBar, setOpenSideBar] = useState(false);
  const [isDarkMode, setDarkMode] = useState<boolean>(false);
  const [openHabitWindow, setOpenHabitWindow] = useState<boolean>(false);
  const [openTimePickerWindow, setOpenTimePickerWindow] = useState<boolean>(false);

  useEffect(() => {
    function fetchData() {
        const allHabitsData = [
            {
                _id: "",
                name: "",
                icon: textToIcon("faTools") as IconProp,
                frequency: [{ type: "Daily", days: ["M"], number: 1 }],
                notificationTime: "",
                isNotificationOn: false,
                areas: [],
            },
        ];

        setTimeout(() => {
            setAllHabits(allHabitsData);
        }, 1000);
    }

    fetchData();
  }, []);

  console.log(allHabits);

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
        openTimePickerWindowObject: {
          openTimePickerWindow,
          setOpenTimePickerWindow,
        },
        allAreasObject: {
          allAreas,
          setAllAreas,
        },
        allHabitsObject: {
          allHabits,
          setAllHabits,
        }
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