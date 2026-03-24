"use cient";

interface ButtonProps {

    className?: string;
    active: boolean;
    text: string;
    onClick?: () => void;

}

export default function NavButton ({className, active, text, onClick}: ButtonProps) {

    return(

        <div 
            className={`${className} no-select bg-stone-700 ${active ? "bg-opacity-45" : "bg-opacity-0"} p-4 text-white hover:bg-opacity-45`}
            onClick={onClick}
        >{text}</div>
    );

}