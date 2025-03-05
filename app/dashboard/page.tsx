"use client";

import React from "react";
import { SignOutButton, useUser } from "@clerk/nextjs";
import Sidebar from "../Components/SideBar/SideBar";

function Dashboard(){
    const { user } = useUser();
    return (
        <div className="flex">
            <Sidebar />
            <div>This is a page</div>
        </div>
    );
}

export default Dashboard;