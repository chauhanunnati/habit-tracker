import { Dispatch, SetStateAction } from "react";
import { menuItemType } from "./MenuItemTypes";


export type GlobalContextType = {
  menuItemsObject: {
    menuItems: menuItemType[];
    setMenuItems: Dispatch<SetStateAction<menuItemType[]>>;
  };
  openSideBarObject: {
    openSideBar: boolean;
    setOpenSideBar: Dispatch<SetStateAction<boolean>>; // Ensure this is present
  };
};
