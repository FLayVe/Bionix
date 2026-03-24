"use client";

import gsap from "gsap";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function LisyiHui () {

    const pathname = usePathname();

    useEffect(()=> {

        if(pathname !== "/auth") {

            gsap.to('#image', {
                right: 0
            })

        }

    })

    return (

        <Image
            id="image"
            className="opacity-45 absolute top-0 no-select"
            src="/images/imgAuth.png"
            alt={""}
            width={1000}
            height={1000}
        />

    )

}