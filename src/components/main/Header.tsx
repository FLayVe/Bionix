"use client";

import NavButton from "../NavButoon";
import { useRouter,usePathname } from 'next/navigation';
import Image from "next/image";

export default function  Header () {

    const router = useRouter();
    const pathname = usePathname();

    const buttons = [
        { text: "Dashboard", route: "/main/dashboard" },
        { text: "Tasks", route: "/main/tasks" },
        { text: "Chat AI", route: "/main/chat-ai" },
    ];

    return (
        <div className="fixed top-0 left-0 right-0 flex justify-start p-4 ">

            <Image src="/svgMain.svg" alt="Logo" width={50} height={50} />

            <div className="flex ml-8">

                {buttons.map((button) => (
                    <NavButton
                        key={button.text}
                        active={pathname === button.route ? true : false}
                        text={button.text} 
                        onClick={() => router.push(button.route)} 
                    />
                ))}

                <NavButton
                    className="fixed right-4"
                    key="Log Out"
                    active={false}
                    text="Log Out" 
                    onClick={() => router.push("/auth")}                     
                />

            </div>


        </div>
    )
}