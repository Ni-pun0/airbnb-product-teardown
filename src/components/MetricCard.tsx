
import React from 'react';

interface MetricCardProps {
  title: string;
  metrics: string[];
  icon: React.ReactNode;
}

const MetricCard = ({ title, metrics, icon }: MetricCardProps) => {
  return (
    <div className="bg-white border rounded-lg p-6 shadow-sm">
      <div className="flex items-center gap-3 mb-4">
        <div className="h-10 w-10 rounded-full bg-airbnb bg-opacity-10 flex items-center justify-center text-airbnb">
          {icon}
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <ul className="space-y-2">
        {metrics.map((metric, i) => (
          <li key={i} className="flex items-center text-sm gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-airbnb"><path d="m9 18 6-6-6-6"/></svg>
            {metric}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MetricCard;
