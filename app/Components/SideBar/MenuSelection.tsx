import React from "react";
import { useGlobalContextProvider } from "@/Types/contextApi";
import { menuItemType } from "@/Types/MenuItemTypes";

function MenuSelection() {
    const { menuItemsObject } = useGlobalContextProvider();
    const { menuItems } = menuItemsObject;
    return (
        <div>
            {menuItems.map((menuItem: menuItemType, menuItemIndex: number) =>(
                <div key={menuItemIndex}>{menuItem.name}</div>
            ))}
        </div>
    );
}

export default MenuSelection;