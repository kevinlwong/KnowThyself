// Updated src/app/dashboard/page.tsx
"use client";

import { useState, useEffect } from "react";
import WelcomeMessage from "@/components/dashboard/WelcomeMessage";
import InsightCard from "@/components/dashboard/InsightCard";

export default function Dashboard() {
  const [userName, setUserName] = useState("Explorer");
  
  // In a real app, you would fetch this from your backend
  useEffect(() => {
    // Simulate fetching user data
    const fetchUserData = () => {
      // Replace with actual API call later
      const storedName = localStorage.getItem("userName") || "Explorer";
      setUserName(storedName);
    };
    
    fetchUserData();
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
      
      {/* Quick Access Section */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* ... (same as above) ... */}
      </div>
    </div>
  );
}