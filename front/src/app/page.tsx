"use client"


import HomePage from "@/views/HomeView/HomePage";
import LoginView from "@/views/LoginView/LoginView";
import { useState } from "react";

export default function Home() {
  const [token, setToken] = useState(localStorage.getItem("userToken") ?? null)
  return (
    <div>
      {token ? <HomePage /> : <LoginView token={token} setToken={setToken}
       />}     
    </div>
  );
}

