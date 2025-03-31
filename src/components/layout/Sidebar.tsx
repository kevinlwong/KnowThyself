"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside 
      className={`transition-all duration-300 ease-in-out ${
        collapsed ? "w-10" : "w-34"
      } bg-gray-900 h-screen text-white fixed`}
    >
      <div className="flex flex-col h-full">
        <div className="p-2">
          {/* Fixed position button */}
          <button 
            onClick={() => setCollapsed(!collapsed)} 
            className="w-8 h-8 flex items-center justify-center mb-4"
          >
            ☰
          </button>
          
          {/* Logo that appears below the button */}
          <div className="transition-opacity duration-300 ease-in-out overflow-hidden whitespace-nowrap">
            {!collapsed && <Image src="/logo_small.png" width={100} height={100} alt="Logo" />}
          </div>
        </div>

        <nav className="flex flex-col space-y-4 text-white px-3 mt-4">
          <Link href="/dashboard" className="sidebar-link flex items-center">
            <span className="mr-2">📊</span>
            <span className={`transition-opacity duration-300 ease-in-out overflow-hidden whitespace-nowrap ${
              collapsed ? "opacity-0 w-0" : "opacity-100"
            }`}>
              Dashboard
            </span>
          </Link>
          <Link href="/discover" className="sidebar-link flex items-center">
            <span className="mr-2">🔍</span>
            <span className={`transition-opacity duration-300 ease-in-out overflow-hidden whitespace-nowrap ${
              collapsed ? "opacity-0 w-0" : "opacity-100"
            }`}>
              Discover
            </span>
          </Link>
          <Link href="/insights" className="sidebar-link flex items-center">
            <span className="mr-2">💡</span>
            <span className={`transition-opacity duration-300 ease-in-out overflow-hidden whitespace-nowrap ${
              collapsed ? "opacity-0 w-0" : "opacity-100"
            }`}>
              Insights
            </span>
          </Link>
          <Link href="/profile" className="sidebar-link flex items-center">
            <span className="mr-2">👤</span>
            <span className={`transition-opacity duration-300 ease-in-out overflow-hidden whitespace-nowrap ${
              collapsed ? "opacity-0 w-0" : "opacity-100"
            }`}>
              Profile
            </span>
          </Link>
        </nav>
      </div>
    </aside>
  );
}