import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useGlobalContextProvider } from "@/Types/contextApi";;
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type DarkModeItem = {
  id: number;
  icon: IconProp;
  isSelected: boolean;
};

function DarkMode() {
  const { darkModeObject } = useGlobalContextProvider();
  const { isDarkMode, setDarkMode } = darkModeObject;

  const [darkModeItems, setDarkModeItems] = useState<DarkModeItem[]>([
    { id: 1, icon: faSun, isSelected: !isDarkMode },
    { id: 2, icon: faMoon, isSelected: isDarkMode },
  ]);

  function handleClickedItem(singleItemIndex: number) {
    const updatedDarkModeItems = darkModeItems.map((darkModeItem, index) => {
      if (singleItemIndex === index) {
        return { ...darkModeItem, isSelected: true };
      }
      return { ...darkModeItem, isSelected: false };
    });

    setDarkModeItems(updatedDarkModeItems);
  }

  useEffect(() => {
    darkModeItems.forEach((singleItem) => {
      if (singleItem.id === 1 && singleItem.isSelected) {
        setDarkMode(false);
      }

      if (singleItem.id === 2 && singleItem.isSelected) {
        setDarkMode(true);
      }
    });
  }, [darkModeItems, setDarkMode]);

  return (
    <div className="bg-slate-50 w-[90px] relative rounded-3xl flex">
      {darkModeItems.map((singleItem, singleItemIndex) => (
        <div
          key={singleItemIndex}
          onClick={() => handleClickedItem(singleItemIndex)}
          className="h-full w-[45px] z-40 flex justify-center items-center"
        >
          <FontAwesomeIcon
            className={`${
              singleItem.isSelected ? "text-customRed" : "text-gray-300"
            } cursor-pointer`}
            icon={singleItem.icon}
            width={20}
            height={20}
          />
        </div>
      ))}

      <div
        className={`w-[38px] absolute h-[38px] top-1 transform ${
          isDarkMode ? "translate-x-[48px]" : "translate-x-1"
        } rounded-full bg-white transition-all`}
      ></div>
    </div>
  );
}

export default DarkMode;



