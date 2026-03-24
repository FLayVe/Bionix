"use client";

import React, { useEffect, useState } from "react";
import Card from "@/components/main/dashboard/Card";
import Image from "next/image";

export default function DashboardPage () {

    const [username, setUsername] = useState("");
    const [balance, setBalance] = useState(0);
    const [refferals, setRefferals] = useState(0);
    const [wallet, setWallet] = useState("");
    const [tasksCount, setTasksCount] = useState(0);
    const [chatCount, setChatCount] = useState(0);

    useEffect(() => {

        const fetchData = async () => {

            console.log("Attempting to fetch user data...");  // Debugging
    
            const userId = localStorage.getItem("userId");
            console.log("User ID from localStorage:", userId);  // Debugging
    
            if (userId) {
                try {
                    console.log("Sending request to fetch user data...");
    
                    const res = await fetch(`/main/api/getUser?userId=${userId}`, {
                        method: 'GET',
                        headers: { 'Content-Type': 'application/json' },
                    });
    
                    
                    console.log("API Response Status:", res.status);  // Debugging
    
                    if (!res.ok) {
                        throw new Error(`User data not found. Status: ${res.status}`);
                    } 
    
                    const data = await res.json();
    
                    console.log("API Response Data:", data);  // Debugging


                    setBalance(data.userData?.balance);
                    setRefferals(data.userData?.refferals);
                    setUsername(data.userData?.username);
                    setWallet(`${data.userData?.wallet?.slice(0, 3)}...${data.userData?.wallet?.slice(-4)}`);
                    setTasksCount(data.userData?.tasks?.length);
                    setChatCount(data.userData?.chatsCount);
    
                } catch (error) {
                    console.error("Failed to get user data:", error);
                }
            } else {
                console.error("No User ID found in localStorage");
            }
        };
    
        fetchData();
    }, []);
    

    return(
    <>
        
        <Image
          id="image"
          className="opacity-45 absolute top-0 right-0 no-select"
          src="/images/imgMain.png"
          alt={""}
          width={700}
          height={700}
        />
        
        
        <div className="fixed top-0 left-0 h-screen w-1/2 flex justify-center ps-16 flex-col gap-8">

            <Card>

                <div>Hi, {username}</div>

                <div>{balance} NIX</div>

                <div>Wallet: {(wallet && wallet == "undefined" ? wallet : "Connect")}</div>

                <div> Refferals: {refferals ? refferals : 0}</div>

            </Card>

        </div>
        
        

    </>
    )

}