import React from "react";
import { UserButton, useUser } from "@clerk/nextjs";

function UserProfile() {
    const { user } = useUser(); // Get user details

    const userButtonAppearance = {
        elements: {
            userButtonAvatarBox: "w-14 h-14", // Custom width and height
            userButtonPopoverActionButton: "text-red-600", // Custom text color for action buttons
        },
    };

    return (
        <div className="flex flex-col gap-3 items-center justify-center mt-9">
            <UserButton appearance={userButtonAppearance} />
            <div>
                <span>{user?.fullName || "Guest"}</span>
            </div>
        </div>
    );
}

export default UserProfile;
