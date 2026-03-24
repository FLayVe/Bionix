"use client";

import React from "react";

export default function MenuButton ({text}: any) {

    return(

        <div className="no-select bg-stone-700 bg-opacity-0 p-4 text-white hover:bg-opacity-45">
            {text}
        </div>
    );
}