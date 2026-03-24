"use client";

import { redirect } from "next/navigation";

export default function Page() {

  const userId =  localStorage.getItem("userId");

  if(userId) {

    console.log(userId)
    redirect('/main/dashboard');

  }else {

    redirect('/auth');
  }
  
}
