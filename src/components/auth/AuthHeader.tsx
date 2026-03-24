"use client"

import { usePathname, useRouter } from "next/navigation";
import NavButton from "../NavButoon";



export default function Header() {

    const router = useRouter();
    const pathname = usePathname();

    const buttons = [
        { text: "Log In", route: "/auth/login" },
        { text: "Sign Up", route: "/auth/signup" },
    ];

    return(

        <div className="fixed top-0 left-0 right-0 flex justify-end p-4 ">

            {buttons.map((button) => (
                <NavButton
                    key={button.text}
                    active={pathname === button.route ? true : false}
                    text={button.text} 
                    onClick={() => router.push(button.route)} 
                />
            ))}

        </div>

    )

}