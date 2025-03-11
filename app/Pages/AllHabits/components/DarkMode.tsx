import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useGlobalContextProvider } from "@/Types/contextApi";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type DarkModeItem = {
  id: number;
  icon: IconProp;
  isSelected: boolean;
};

function DarkMode() {
  const { darkModeObject } = useGlobalContextProvider();
  const { isDarkMode, setDarkMode, darkModeItems, setDarkModeItems } = 
    darkModeObject;

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
    <div>
      {darkModeItems.map((singleItem, singleItemIndex) => (
        <div 
          onClick={() => handleClickedItem(singleItemIndex)}
          className="h-full w-[45px] z-40 flex justify-center items-center"
        >
          <FontAwesomeIcon icon={singleItem.icon} />
        </div>
      ))}
    </div>
  );
}

export default DarkMode;