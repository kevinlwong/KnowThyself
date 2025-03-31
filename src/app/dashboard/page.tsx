"use client";

import { useState, useEffect } from "react";
import WelcomeMessage from "@/components/dashboard/WelcomeMessage";
import InsightCard from "@/components/dashboard/InsightCard";

export default function Dashboard() {
  const [userName, setUserName] = useState("Explorer");

  useEffect(() => {
    const storedName = localStorage.getItem("userName") || "Explorer";
    setUserName(storedName);
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-indigo-800">Your Self-Discovery Journey</h1>

      <WelcomeMessage userName={userName} />

      <InsightCard
        quote="The two most important days in your life are the day you are born and the day you find out why."
        author="Mark Twain"
        insight="Self-awareness is the first step toward personal growth. Today, reflect on what truly motivates you and brings you a sense of purpose. Understanding your core drivers can help align your daily actions with your deeper values."
      />

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Add your quick access cards or elements here */}
      </div>
    </div>
  );
}
