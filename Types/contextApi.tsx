"use client";

import { ReactNode, createContext, useState, useContext } from "react";

import { GlobalContextType } from "./GlobalContextTypes";
import { menuItemType } from "./MenuItemTypes";


const GlobalContext = createContext<GlobalContextType>({
    menuItemsObject: {
        menuItems: [],
        setMenuItems: () => {},
    },
});

function GlobalContextProvider({ children }: {children: ReactNode }) {
    const [menuItems, setMenuItems] = useState<menuItemType[]>([
        { name: "All Habits", isSelected: true },
        { name: "Statistics", isSelected: false },
        {name: "Areas", isSelected: false },
    ]);

    return (
        <GlobalContext.Provider
            value={{ menuItemsObject: { menuItems, setMenuItems } }}
        >
            {children}
        </GlobalContext.Provider>
    );
}

export function useGlobalContextProvider() {
    return useContext(GlobalContext);
}

export default GlobalContextProvider;