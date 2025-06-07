
import React from 'react';

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
    <div className="bg-white border rounded-lg p-6 shadow-sm">
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold text-lg mb-4 mx-auto">
        {step}
      </div>
      
      <h3 className="text-lg font-semibold mb-2 text-center">{title}</h3>
      <p className="text-sm text-gray-600 mb-4 text-center">{description}</p>
      
      <div className="space-y-4">
        <div>
          <h4 className="text-xs font-semibold uppercase text-gray-500 tracking-wider mb-2">Emotion</h4>
          <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">{emotion}</span>
        </div>
        
        <div>
          <h4 className="text-xs font-semibold uppercase text-gray-500 tracking-wider mb-2">Touchpoints</h4>
          <ul className="space-y-1">
            {touchpoints.map((touchpoint, i) => (
              <li key={i} className="text-xs text-gray-600">{touchpoint}</li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="text-xs font-semibold uppercase text-gray-500 tracking-wider mb-2">Pain Points</h4>
          <ul className="space-y-1">
            {painPoints.map((painPoint, i) => (
              <li key={i} className="text-xs text-red-600">{painPoint}</li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="text-xs font-semibold uppercase text-gray-500 tracking-wider mb-2">Opportunities</h4>
          <ul className="space-y-1">
            {opportunities.map((opportunity, i) => (
              <li key={i} className="text-xs text-green-600">{opportunity}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserJourneyStep;
