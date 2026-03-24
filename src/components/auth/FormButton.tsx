"use client";

interface NavButtonProps {
    text: string;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
}

export default function Button ({text, type, className, onClick, disabled}: NavButtonProps) {

    return (

        <button 
            className={`${className} ${disabled ? 'cursor-not-allowed' : ''} size-fit relative inline-flex items-center px-6 py-3 text-lg font-semibold text-white`}
            onClick={onClick}
            disabled={disabled}
            type={type}
        >
            {text}
        </button>

    )
}