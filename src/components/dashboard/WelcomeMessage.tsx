// src/components/WelcomeMessage.tsx
import { FC } from 'react';

interface WelcomeMessageProps {
  userName: string;
}

const WelcomeMessage: FC<WelcomeMessageProps> = ({ userName }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-2xl font-semibold mb-3">Welcome back, {userName}</h2>
      <p className="text-gray-700">
        Your journey of self-discovery continues. KnowThyself.ai is here to help you
        explore the depths of your personality and uncover meaningful insights about who you are.
        What would you like to explore today?
      </p>
    </div>
  );
};

export default WelcomeMessage;