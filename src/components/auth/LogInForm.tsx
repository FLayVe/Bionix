"use client";

import React, { useState } from "react";
import Button from "./FormButton";
import Input from "./FormInput";
import { useRouter } from "next/navigation";

export default function LogInForm() {
    
    const router = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handler = async (e: React.FormEvent) => {
        
        e.preventDefault();

        setLoading(true);

        const res = await fetch('/auth/actions?action=login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });

        const data = await res.json();
        setLoading(false);

        if (data.success) {

            setMessage('Login successful!');
            localStorage.setItem("userId", data.userId);
            router.push('/main/dashboard');

          } else {

            setMessage(data.message);
            

          }
    }


    return (

        <form onSubmit={handler} className="flex flex-col items-center justify-center ">
            
            <Input 
                type="email" 
                placeholder="Email" 
                onChange={(e) => setEmail(e.target.value)}
                required 
            />

            <Input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                required
            />

            <Button text={loading ? "Processing..." : "Continue"}></Button>

        </form>
    );
}