"use client";

interface BlockProps {
    children: React.ReactNode;
    className?: string;
};

export default function Card ({ children, className }: BlockProps) {

    return (

        <div className={`${className} w-fill rounded-[10px] p-4 bg-[#1C1C1C] items-center `}>
            
            {children}

        </div>

    );

}