
import React from 'react';

interface PersonaCardProps {
  name: string;
  role: string;
  age: string;
  image: string;
  goals: string[];
  painPoints: string[];
  techComfort: string;
}

const PersonaCard = ({
  name,
  role,
  age,
  image,
  goals,
  painPoints,
  techComfort
}: PersonaCardProps) => {
  return (
    <div className="border rounded-xl overflow-hidden shadow-md bg-white">
      <div className="p-6 border-b">
        <div className="flex items-center gap-4">
          <div className="h-16 w-16 rounded-full overflow-hidden">
            <img 
              src={image} 
              alt={name}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-xl font-semibold">{name}</h3>
            <p className="text-gray-600">{age}, {role}</p>
          </div>
        </div>
      </div>
      <div className="p-6 space-y-4">
        <div>
          <h4 className="font-semibold text-sm uppercase text-gray-600 tracking-wider mb-2">Goals</h4>
          <ul className="space-y-1">
            {goals.map((goal, i) => (
              <li key={i} className="flex items-center gap-2 text-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                {goal}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-sm uppercase text-gray-600 tracking-wider mb-2">Pain Points</h4>
          <ul className="space-y-1">
            {painPoints.map((painPoint, i) => (
              <li key={i} className="flex items-center gap-2 text-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-red-500"></span>
                {painPoint}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-sm uppercase text-gray-600 tracking-wider mb-2">Tech Comfort</h4>
          <div className="text-sm">{techComfort}</div>
        </div>
      </div>
    </div>
  );
};

export default PersonaCard;
