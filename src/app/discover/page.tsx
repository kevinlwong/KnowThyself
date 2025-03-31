"use client";

import { useState } from "react";
import ChineseZodiacCard from "@/components/discover/ChineseZodiacCard";

export default function DiscoverPage() {
  const [birthYear, setBirthYear] = useState<number | null>(null);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Discover Your Zodiac</h1>

      <label className="block mb-2">Enter your birth year:</label>
      <input
        type="number"
        className="p-2 border rounded mb-4"
        placeholder="e.g., 1998"
        onChange={(e) => setBirthYear(parseInt(e.target.value))}
      />

      {birthYear && <ChineseZodiacCard year={birthYear} />}
    </div>
  );
}
