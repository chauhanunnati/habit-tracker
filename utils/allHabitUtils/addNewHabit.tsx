import AllHabits from "@/app/Pages/AllHabits/AllHabits";
import { HabitType } from "@/Types/GlobalTypes";
import { Dispatch, SetStateAction } from "react";
import toast from 'react-hot-toast';

export function addNewHabit( {
    allHabits,
    setAllHabits,
    newHabit,
}: {
    allHabits: HabitType[];
    setAllHabits: Dispatch<SetStateAction<HabitType[]>>;
    newHabit: HabitType;
}) {
    try {
    setAllHabits([...allHabits, newHabit]);
    toast.success("Habit added successfully!");
} catch (error) {
    toast.error("Something went wrong!...");
}
}

