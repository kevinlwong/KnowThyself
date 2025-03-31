// src/components/InsightCard.tsx
import { FC } from 'react';
import Link from 'next/link';

interface InsightCardProps {
  quote: string;
  author: string;
  insight: string;
}

const InsightCard: FC<InsightCardProps> = ({ quote, author, insight }) => {
  return (
    <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-lg shadow-md p-6">
      <div className="flex items-center mb-4">
        <div className="bg-indigo-600 rounded-full p-2 mr-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h2 className="text-xl font-semibold">Today&apos;s Insight</h2>
      </div>
      <p className="text-gray-700 mb-4">
        &quot;{quote}&quot; - {author}
      </p>
      <p className="text-gray-700 mb-4">
        {insight}
      </p>
      <div className="mt-4">
        <Link 
          href="/discover" 
          className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
        >
          Explore More Insights
        </Link>
      </div>
    </div>
  );
};

export default InsightCard;