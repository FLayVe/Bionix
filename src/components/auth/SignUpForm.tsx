"use client";

import React, { useEffect, useState } from "react";
import Button from "./FormButton";
import Input from "./FormInput";
import { useRouter, useSearchParams } from "next/navigation";

export default function LogInForm() {
    
    const router = useRouter();
    const searchParams = useSearchParams();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState("");
    const [username, setUsername] = useState("");
    const [message, setMessage] = useState('');
    const [referralCode, setReferralCode] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const RefCode = searchParams?.get("code");
        if (RefCode) {
            setReferralCode(RefCode);
        }
    }, [searchParams])

    const handler = async (e: React.FormEvent) => {
        
        e.preventDefault();

        if (password !== confirmPassword) {
            
            setMessage("Passwords do not match.");
        }

        setLoading(true);

        const res = await fetch('/auth/actions?action=signUp', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password, referralCode, username }),
        });

        const data = await res.json();
        setLoading(false);

        if (data.success) {

            setMessage('SignUp successful!');
            localStorage.setItem('userId', data.userId);
            router.push('/auth/login');

        } else {

            setMessage(data.message);

        }
    }


    return (

        <form onSubmit={handler} className="flex flex-col items-center justify-center ">
            
            <Input
                type="text"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
                required
            />

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
            
            <Input
                type="password"
                placeholder="Confirm Password"
                onChange={(e) => setConfirmPassword(e.target.value)}    
                required
            />

            <Input
                type="text"
                placeholder="Refferal Code"
                value={referralCode}
                onChange={(e) => setReferralCode(e.target.value)}
            />

            <Button text={loading ? "Processing..." : "Continue"}></Button>

        </form>
    );
}