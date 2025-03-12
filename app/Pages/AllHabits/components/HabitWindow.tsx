"use client";
import { useGlobalContextProvider } from "@/Types/contextApi";
import { darkModeColor, defaultColor } from "@/colors";
import { faArrowAltCircleDown } from "@fortawesome/free-regular-svg-icons";
import { faChevronDown, faClose, faPersonCircleQuestion, faQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { memo, useRef, useState, useEffect } from "react";
import IconsWindow from "./IconsWindow/IconsWindow";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import TimerPicker from "@/app/Pages/AllHabits/components/TimerPicker";
import { v4 as uuidv4 } from "uuid";

type FrequencyType = {
  type: string;
  days: string[];
  number: number;
}
type HabitType = {
    _id: string;
    name: string;
    icon: IconProp;
    frequency: FrequencyType[];
    notificationTime: string;
    isNotificationOn: boolean;
};
type RepeatOption = {
  name: string;
  isSelected: boolean;
}
type DayOption = {
  id: number;
  name: string;
  isSelected: boolean;
}

const HeaderMemo = memo(Header)
const InputNameAndIconButtonMemo = memo(InputNameAndIconButton);

function HabitWindow() {
    const { habitWindowObject, darkModeObject, openTimePickerWindowObject } = useGlobalContextProvider();
    const { openHabitWindow, setOpenHabitWindow } = habitWindowObject;
    const { isDarkMode } = darkModeObject;
    const { openTimePickerWindow, setOpenTimePickerWindow } = openTimePickerWindowObject;

    const [habitItem, setHabitItem] = useState<HabitType>({
        _id: uuidv4(),
        name: "",
        icon: faChevronDown,
        frequency: [{ type: "Daily", days: ["M"], number: 1 }],
        notificationTime: "",
        isNotificationOn: false,
    });
    
    const [openIconWindow, setOpenIconWindow] = useState<boolean>(false);
    const [iconSelected, setIconSelected] = useState<IconProp>(habitItem.icon);

  //---------------------------------------------------------------------------------
  //Functions
  //---------------------------------------------------------------------------------

    const onUpdateHabitName = (inputText: string) => {
    //Creating a shallow copy of the habitItem object
    const copyHabitItem = { ...habitItem };
    //Modifying the name property based on the input text
    copyHabitItem.name = inputText;
    //Updating the habitItem object
    setHabitItem(copyHabitItem);
    };

    function changeRepeatOption(repeatOptions: RepeatOption[]) {
      // First, we filter only the element we selected
      const filterIsSelected = repeatOptions.filter(
          (singleOption) => singleOption.isSelected
      );

      // We extract only the name of the object
      const nameOfSelectedOption = filterIsSelected[0].name;
  
      // We create a shallow copy of the habit item
      const copyHabitsItem = { ...habitItem };
  
      // Update the type of the frequency property
      copyHabitsItem.frequency[0].type = nameOfSelectedOption;
  
      // Update the habit item to update the UI
      setHabitItem(copyHabitsItem);
  }
  
  function changeDaysOption(allDays: DayOption[]) {
    const selectedDays = allDays
        .filter((singleDay) => singleDay.isSelected)
        .map((day) => day.name);

    // Create a shallow copy of the habit item
    const copyHabitsItem = { ...habitItem };

    // Update the type of the frequency property
    copyHabitsItem.frequency[0].days = selectedDays;

    // Update the Habit Item to reflect changes in UI
    setHabitItem(copyHabitsItem);
}

  function changeWeeksOption(weeks: number){
    const copyHabitsItem = { ...habitItem };

    // Update the type of the frequency property
    copyHabitsItem.frequency[0].number = weeks;

    // Update the Habit Item to reflect changes in UI
    setHabitItem(copyHabitsItem);
  }

  // This callback function will update the notification property selected from the TimerPicker window
  function updateReminderTime(timeValue: string) {
    // We create a shallow copy of the habit Item
    const copyHabitsItem = { ...habitItem };

    // Update the notification Time property
    copyHabitsItem.notificationTime = timeValue;

    // Update the Habit Item to update the UI
    setHabitItem(copyHabitsItem);
  }

  //---------------------------------------------------------------------------------
  // Use Effect Hooks
  //---------------------------------------------------------------------------------

    // Update the icon property of the habitItem every time the icon selected is changed
    useEffect(() => {
      setHabitItem(prev => ({ ...prev, icon: iconSelected }));
    }, [iconSelected]);


    return (
        <div
            style={{
                backgroundColor: isDarkMode ? darkModeColor.background : "white",
                color: isDarkMode ? darkModeColor.textColor : "black",
            }}
            className={` top-[3%] left-1/2 transform -translate-x-1/2 w-[80%] z-50 p-10 
                rounded-md shadow-md ${openHabitWindow ? "absolute" : "hidden"}` }
        >
          <TimerPicker onSaveTime={updateReminderTime} />
            <IconsWindow
              openIconWindow={openIconWindow}
              setOpenIconWindow={setOpenIconWindow}
              iconSelected={iconSelected}
              setIconSelected={setIconSelected}
            />
          
            <HeaderMemo />
            <InputNameAndIconButtonMemo
                onUpdateHabitName={onUpdateHabitName}
                habitName={habitItem.name}
                setOpenIconWindow={setOpenIconWindow}
                iconSelected={iconSelected}
            />
            <Repeat 
              onChangeOption={changeRepeatOption} 
              onChangeDaysOption={changeDaysOption} 
              onChangeWeeksOption={changeWeeksOption}
            />
            <Reminder habitItem={habitItem} setHabitItem={setHabitItem} />
            <SaveButton habit={habitItem} setOpenHabitWindow={setOpenHabitWindow} />
        </div>
    );
}

export default HabitWindow;

function Header() {
    const { habitWindowObject } = useGlobalContextProvider();
    const { setOpenHabitWindow } = habitWindowObject;

    return (
        <div className="flex justify-between items-center">
            <span className="font-bold text-xl">Add New Habit</span>
            <FontAwesomeIcon
                onClick={() => setOpenHabitWindow(false)}
                className="text-gray-400 cursor-pointer"
                icon={faClose}
            />
        </div>
    );
}
  
function InputNameAndIconButton({
    onUpdateHabitName,
    habitName,
    setOpenIconWindow,
    iconSelected,
  }: {
    onUpdateHabitName: (inputText: string) => void;
    habitName: string;
    setOpenIconWindow: React.Dispatch<React.SetStateAction<boolean>>;
    iconSelected: IconProp;
  }) {
    const inputRef = useRef<HTMLInputElement>(null);
    const { habitWindowObject, darkModeObject } = useGlobalContextProvider();
    const { openHabitWindow } = habitWindowObject;
    const { isDarkMode } = darkModeObject;
  
    function updateInputHabit(event: React.ChangeEvent<HTMLInputElement>) {
      onUpdateHabitName(event.target.value);
    }
  
    useEffect(() => {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 500);
  
    // When the window is closed, empty the input field using the callback function
      if (!openHabitWindow) {
        onUpdateHabitName("");
      }
    }, [openHabitWindow]);

    useEffect(() => {
      inputRef.current?.focus();
    }, [iconSelected]);

    return (
      <div className="flex flex-col gap-2 mt-10 px-3">
        <span className="opacity-80 font-semibold">Habit Name</span>
        <div className="flex gap-4 justify-between items-center">
          <input
            style={{
              backgroundColor: isDarkMode ? darkModeColor.background : "white",
            }}
            ref={inputRef}
            value={habitName}
            onChange={(event) => updateInputHabit(event)}
            className={`border w-full border-gray-200 outline-none p-4 rounded-md text-[13px]`}
            placeholder="Type a name for the habit..."
          />
          <FontAwesomeIcon
            onClick={() => setOpenIconWindow(true)}
            className="bg-mainColor mt-[1px] p-4 rounded-md text-white cursor-pointer bg-customRed"
            icon={iconSelected}
            height={16}
            width={20}
          />
        </div>
      </div>
    );
  }

function Repeat({
  onChangeOption,
  onChangeDaysOption,
  onChangeWeeksOption,
}: {
  onChangeOption: (repeatOptions: RepeatOption[]) => void;
  onChangeDaysOption: (allDays: DayOption[]) => void;
  onChangeWeeksOption:(weeks: number) => void;
}) {
  const [repeatOptions, setRepeatOptions] = useState<RepeatOption[]>([
      { name: "Daily", isSelected: true },
      { name: "Weekly", isSelected: false },
  ]);

  const days: DayOption[] = [
    { id: 1, name: "M", isSelected: true },
    { id: 2, name: "T", isSelected: false },
    { id: 3, name: "W", isSelected: false },
    { id: 4, name: "T", isSelected: false },
    { id: 5, name: "F", isSelected: false },
    { id: 6, name: "S", isSelected: false },
    { id: 7, name: "S", isSelected: false },
  ];

  const [allDays, setAllDays] = useState<DayOption[]>(days);
  const [weeks, setweeks] = useState(1);
  const { darkModeObject } = useGlobalContextProvider();
  const { isDarkMode } = darkModeObject;
  const [nameOfSelectedOption, setNameOfSelectedOption] = useState("");

  function changeOption(indexClicked: number) {
      const updateRepeatOptions = repeatOptions.map((singleOption, index) => {
          if (index === indexClicked) {
              return { ...singleOption, isSelected: true };
          }
          return { ...singleOption, isSelected: false };
      });

      setRepeatOptions(updateRepeatOptions);
      onChangeOption(updateRepeatOptions);
  }

  useEffect(() =>{
    onChangeDaysOption(allDays);
  }, [allDays]); 

  useEffect(() =>{
    onChangeWeeksOption(weeks);
  }, [weeks]); 

  
  useEffect(() =>{
    const getNameOptionSelected = repeatOptions.filter(
      (singleOption) => singleOption.isSelected
    )[0].name;

    setNameOfSelectedOption(getNameOptionSelected);
  }, [repeatOptions]); 

  return (
      <div className="flex flex-col gap-2 mt-10 px-3">
          <span className="font-semibold text-[17px] ">Repeat</span>

          <div className="flex gap-4 mt-2 items-center">
              {repeatOptions.map((singleOption, index) => (
                  <button
                      key={index}
                      onClick={() => changeOption(index)}
                      style={{
                          color: !singleOption.isSelected
                              ? !isDarkMode
                                  ? defaultColor.default
                                  : darkModeColor.textColor
                              : "",
                          backgroundColor: singleOption.isSelected
                              ? defaultColor.default
                              : !isDarkMode
                                  ? defaultColor[100]
                                  : defaultColor[50]
                      }}
                      className="p-2 px-3 rounded-md text-white cursor-pointer "
                  >
                      {singleOption.name}
                  </button>
              ))}
          </div>
          {nameOfSelectedOption === "Daily" ? (
            <DailyOptions allDays={allDays} setAllDays={setAllDays} />
          ) : (
            <WeeklyOption weeks={weeks} setWeek={setweeks} />
          )}
      </div>
  );
}

function DailyOptions({ 
  allDays,
  setAllDays
}: {
  allDays: DayOption[]; 
  setAllDays: React.Dispatch<React.SetStateAction<DayOption[]>>; 
}) {
  const { darkModeObject } = useGlobalContextProvider();
  const { isDarkMode } = darkModeObject;

  function selectedDays(singleDayIndex: number) {
      const selectedCount: number = allDays.filter(
        (singleDay) => singleDay.isSelected
      ).length;

      const updatedAllDays = allDays.map((singleDay, index) => {
          if (
            selectedCount === 1 && 
            singleDay.isSelected === true && 
            index === singleDayIndex
          ) {
            return singleDay;
          }
          return index === singleDayIndex 
          ? { ...singleDay, isSelected: !singleDay.isSelected } 
          : singleDay;
      });

      setAllDays(updatedAllDays);
  }
  return (
      <div className="mt-5 flex flex-col gap-4">
          <span className="font-medium opacity-85">On These Days</span>
          <div className="flex gap-3 w-full">
              {allDays.map((singleDay, singleDayIndex) => (
                  <span
                      key={singleDayIndex}
                      onClick={() => selectedDays(singleDayIndex)}
                      style={{
                          color: singleDay.isSelected
                              ? isDarkMode
                                  ? darkModeColor.textColor
                                  : defaultColor.default
                              : "",
                          backgroundColor: singleDay.isSelected
                              ? isDarkMode
                                  ? defaultColor[100]
                                  : defaultColor[50]
                              : defaultColor.default,
                      }}
                      className={`p-2 px-3 w-11 text-center rounded-md select-none cursor-pointer ${
                          singleDay.isSelected ? "text-white" : "text-gray-400"
                      }`}
                  >
                      {singleDay.name}
                  </span>
              ))}
          </div>
      </div>
  );
  }
  
function WeeklyOption({
    weeks,
    setWeek,
  }: {
    weeks: number;
    setWeek: React.Dispatch<React.SetStateAction<number>>;
  }) {
    const { darkModeObject } = useGlobalContextProvider();
    const { isDarkMode } = darkModeObject;
  
    function updateCounter(option: string) {
      if (option === "up") {
        setWeek((prev) => (prev < 7 ? prev + 1 : 7));
      }
  
      if (option === "down") {
        setWeek((prev) => (prev > 1 ? prev - 1 : 1));
      }
    }
  
    return (
      <div className="mt-7 flex gap-20">
        <div className="flex-col gap-2">
          <span className="font-semibold">Frequency</span>
          <span className="text-sm font-light text-gray-400">
            {weeks} times a week
          </span>
        </div>
  
        <div className="flex items-center justify-center">
          <button
            onClick={() => updateCounter("down")}
            style={{
              backgroundColor: isDarkMode ? defaultColor[100] : defaultColor[50],
              color: isDarkMode ? defaultColor.default : darkModeColor.textColor,
            }}
            className="p-3 w-10 rounded-md text-white"
          >
            -
          </button>
  
          <span className="p-4 px-5 select-none">{weeks}</span>
          <button
            onClick={() => updateCounter("up")}
            style={{
              backgroundColor: isDarkMode ? defaultColor[100] : defaultColor[50],
              color: isDarkMode ? defaultColor.default : darkModeColor.textColor,
            }}
            className="p-3 w-10 rounded-md text-white"
          >
            +
          </button>
        </div>
      </div>
    );
  }
  
function Reminder({
  habitItem,
  setHabitItem,
}: {
  habitItem: HabitType;
  setHabitItem: React.Dispatch<React.SetStateAction<HabitType>>;
}) {
  const { darkModeObject, openTimePickerWindowObject } = useGlobalContextProvider();
  const { setOpenTimePickerWindow } = openTimePickerWindowObject;
  const { isDarkMode } = darkModeObject;
  const [isOn, setIsOn] = useState(false);

  function updateToggle() {
    const copyHabitItem = {...habitItem};
    copyHabitItem.isNotificationOn = !isOn;
    setHabitItem(copyHabitItem);
    setIsOn(!isOn);
  }

  function openTheTimerPicker() {
    setOpenTimePickerWindow(true);
  }

  return (
    <div className="flex-col gap-2 mt-10 px-3">
      <div className="flex justify-between">
        <span className="font-semibold text-[17px]">Daily Notification</span>
        <ToggleSwitch />
      </div>
      {isOn && (
        <div
          style={{
            backgroundColor: !isDarkMode ? defaultColor[100] : defaultColor[50],
            color: isDarkMode ? defaultColor.default : darkModeColor.textColor,
          }}
          className="flex justify-between p-4 m-2 mt-8 rounded-md"
        >
          <span>Select Time</span>
          <div
            onClick={openTheTimerPicker} 
            className="flex gap-2 items-center justify-center cursor-pointer select-none"
          >
            <span>{habitItem.notificationTime || "08:00 AM"}</span>
            <FontAwesomeIcon
              height={12}
              width={12}
              icon={faChevronDown}
            />
          </div>
        </div>
      )}
    </div>
  );

  function ToggleSwitch() {
    return (
      <div
        className={`${
          isOn ? "bg-customRed" : "bg-slate-400"
        } w-16 h-[30px] relative rounded-lg flex`}
      >
        <div
          onClick={updateToggle}
          className="w-1/2 h-full"
        />
        <div
          onClick={updateToggle}
          className="w-1/2 h-full"
        />
        <div
          className={`bg-white h-6 w-6 rounded-full absolute ${
            isOn ? "right-[-3px]" : "left-[-3px]"
          } top-[-3px]`}
        />
      </div>
    );
  }
}

function SaveButton({ 
  habit,
  setOpenHabitWindow
}: { 
  habit: HabitType;
  setOpenHabitWindow: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const handleSave = () => {
    console.log(habit);
    setOpenHabitWindow(false);
  };

  return (
    <div className="w-full flex justify-center mt-9">
      <button
        onClick={handleSave}
        className="bg-customRed p-4 w-[98%] rounded-md text-white"
      >
        Add a Habit
      </button>
    </div>
  );
}