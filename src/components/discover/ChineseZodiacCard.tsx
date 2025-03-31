interface ZodiacProps {
  year: number;
}

const zodiacSigns = [
  "Rat",
  "Ox",
  "Tiger",
  "Rabbit",
  "Dragon",
  "Snake",
  "Horse",
  "Goat",
  "Monkey",
  "Rooster",
  "Dog",
  "Pig",
];

const zodiacTraits: Record<string, string> = {
  Rat: "Clever, resourceful, quick-witted",
  Ox: "Strong, reliable, fair, and patient",
  Tiger: "Brave, confident, competitive",
  Rabbit: "Quiet, elegant, kind, responsible",
  Dragon: "Confident, intelligent, enthusiastic",
  Snake: "Enigmatic, wise, intuitive",
  Horse: "Animated, active, energetic",
  Goat: "Calm, gentle, sympathetic",
  Monkey: "Sharp, smart, curiosity-driven",
  Rooster: "Observant, hardworking, courageous",
  Dog: "Loyal, honest, kind",
  Pig: "Compassionate, generous, diligent",
};

export default function ChineseZodiacCard({ year }: ZodiacProps) {
  const baseYear = 2020; // Year of the Rat
  const index = (((year - baseYear) % 12) + 12) % 12; // Handles negatives too
  const sign = zodiacSigns[index];

  return (
    <div className="bg-white shadow-md p-4 rounded-md mt-4">
      <h2 className="text-gray-600 text-xl font-bold">{sign}</h2>
      <p className="text-gray-600">{zodiacTraits[sign]}</p>
    </div>
  );
}
