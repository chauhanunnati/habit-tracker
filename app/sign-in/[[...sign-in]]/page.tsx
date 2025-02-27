import { SignIn } from "@clerk/nextjs";
import React from "react";

function SignInPage() {
    const defaultColour = "#d90429";
    const gradientColour = 'linear-gradient(to bottom, ${defaultColor}, #ff0440)';
    return (
        <div
            style={{ background: gradientColour }}
            className="flex justify-center items-center flex-col gap-10 w-full h-screen"
        >
            <SignIn />
        </div>
    );
}

export default SignInPage;