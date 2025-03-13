import AllHabits from "@/app/Pages/AllHabits/AllHabits";
import { HabitType } from "@/Types/GlobalTypes";
import { Dispatch, SetStateAction } from "react";

export function addNewHabit( {
    allHabits,
    setAllHabits,
    newHabit,
}: {
    allHabits: HabitType[];
    setAllHabits: Dispatch<SetStateAction<HabitType[]>>;
    newHabit: HabitType;
}) {
    setAllHabits([...allHabits, newHabit]);
}


