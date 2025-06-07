
import React from 'react';
import { cn } from '@/lib/utils';

interface UserJourneyStepProps {
  step: number;
  title: string;
  description: string;
  isLast?: boolean;
}

const UserJourneyStep = ({ step, title, description, isLast = false }: UserJourneyStepProps) => {
  return (
    <div className="flex">
      <div className="flex flex-col items-center mr-4">
        <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-airbnb bg-white text-airbnb font-bold">
          {step}
        </div>
        {!isLast && <div className="w-0.5 h-full bg-gray-200 mt-2"></div>}
      </div>
      <div className="pt-1 pb-8">
        <h4 className="text-lg font-semibold mb-1">{title}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default UserJourneyStep;
