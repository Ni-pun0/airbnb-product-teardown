
import React from 'react';
import { cn } from '@/lib/utils';

interface UserJourneyStepProps {
  step: string;
  title: string;
  description: string;
  emotion: string;
  touchpoints: string[];
  painPoints: string[];
  opportunities: string[];
}

const UserJourneyStep = ({ 
  step, 
  title, 
  description, 
  emotion, 
  touchpoints, 
  painPoints, 
  opportunities 
}: UserJourneyStepProps) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border">
      <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-airbnb bg-white text-airbnb font-bold mb-4 mx-auto">
        {step}
      </div>
      <div className="text-center mb-4">
        <h4 className="text-lg font-semibold mb-1">{title}</h4>
        <p className="text-gray-600 text-sm mb-2">{description}</p>
        <p className="text-sm text-airbnb font-medium">Emotion: {emotion}</p>
      </div>
      
      <div className="space-y-3">
        <div>
          <h5 className="font-semibold text-xs uppercase text-gray-500 tracking-wider mb-1">Touchpoints</h5>
          <ul className="text-xs space-y-1">
            {touchpoints.map((touchpoint, i) => (
              <li key={i} className="flex items-center gap-1">
                <span className="h-1 w-1 rounded-full bg-blue-500"></span>
                {touchpoint}
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h5 className="font-semibold text-xs uppercase text-gray-500 tracking-wider mb-1">Pain Points</h5>
          <ul className="text-xs space-y-1">
            {painPoints.map((painPoint, i) => (
              <li key={i} className="flex items-center gap-1">
                <span className="h-1 w-1 rounded-full bg-red-500"></span>
                {painPoint}
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h5 className="font-semibold text-xs uppercase text-gray-500 tracking-wider mb-1">Opportunities</h5>
          <ul className="text-xs space-y-1">
            {opportunities.map((opportunity, i) => (
              <li key={i} className="flex items-center gap-1">
                <span className="h-1 w-1 rounded-full bg-green-500"></span>
                {opportunity}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserJourneyStep;
