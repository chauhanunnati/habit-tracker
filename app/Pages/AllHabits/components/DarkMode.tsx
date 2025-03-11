import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useGlobalContextProvider } from "@/Types/contextApi";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { darkModeColor, defaultColor } from "@/colors";

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

  console.log(darkModeItems);

  return (
    <div
      style={{
          backgroundColor: isDarkMode
            ? darkModeColor.backgroundSlate
            : defaultColor.backgroundSlate,
        }}
        className=" w-[90px] relative rounded-3xl flex"
    >
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
          height={20} />
        </div>
      ))}
    </div>
  );
}

export default DarkMode;