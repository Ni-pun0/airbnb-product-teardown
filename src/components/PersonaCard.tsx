
import React from 'react';
import { Avatar } from '@/components/ui/avatar';

interface PersonaCardProps {
  name: string;
  age: number;
  role: string;
  avatar: string;
  needs: string[];
  motivations: string[];
  painPoints: string[];
}

const PersonaCard = ({
  name,
  age,
  role,
  avatar,
  needs,
  motivations,
  painPoints
}: PersonaCardProps) => {
  return (
    <div className="border rounded-xl overflow-hidden shadow-md bg-white">
      <div className="p-6 border-b">
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16">
            <div className="h-full w-full bg-airbnb flex items-center justify-center text-white text-xl">
              {name[0]}
            </div>
          </Avatar>
          <div>
            <h3 className="text-xl font-semibold">{name}, {age}</h3>
            <p className="text-airbnb-gray">{role}</p>
          </div>
        </div>
      </div>
      <div className="p-6 space-y-4">
        <div>
          <h4 className="font-semibold text-sm uppercase text-airbnb-gray tracking-wider mb-2">Needs</h4>
          <ul className="space-y-1">
            {needs.map((need, i) => (
              <li key={i} className="flex items-center gap-2 text-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-airbnb"></span>
                {need}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-sm uppercase text-airbnb-gray tracking-wider mb-2">Motivations</h4>
          <ul className="space-y-1">
            {motivations.map((motivation, i) => (
              <li key={i} className="flex items-center gap-2 text-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
                {motivation}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-sm uppercase text-airbnb-gray tracking-wider mb-2">Pain Points</h4>
          <ul className="space-y-1">
            {painPoints.map((painPoint, i) => (
              <li key={i} className="flex items-center gap-2 text-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-red-500"></span>
                {painPoint}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PersonaCard;
