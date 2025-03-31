// src/app/page.tsx

// import Link from "next/link";
import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <section className="flex flex-col items-center text-center py-24 bg-gradient-to-b from-indigo-900 to-purple-800 text-white">
      <h1 className="text-4xl font-bold">Where self-knowledge begins</h1>
      <p className="text-lg mt-4">AI-driven insights for self-discovery & growth.</p>

      <div className="mt-6 flex space-x-4">
        <Button href="/register" variant="primary">Sign Up</Button>
        <Button href="/discover" variant="secondary">Explore Your Zodiac</Button>
      </div>

     
    </section>
  );
}
