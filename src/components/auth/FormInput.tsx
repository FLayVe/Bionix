"use client";

interface InputProps {
    type: string;
    placeholder: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    value?: string;
}

export default function FormInput({type, placeholder, onChange, required, value}: InputProps){

    return(

        <input
            type = {type}
            placeholder = {placeholder}
            onChange={onChange}
            className = "bg-transparent p-2 mb-8 border border-gray-500 focus:outline-none focus:border-white"
            required={required}
            value={value}
        />
    );

}