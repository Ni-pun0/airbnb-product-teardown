
import React from 'react';

interface MetricCardProps {
  title: string;
  metrics: string[];
  icon: React.ReactNode;
  statistic?: string;
  growthPercentage?: number;
  colorScheme?: 'airbnb' | 'blue' | 'green' | 'purple';
}

const MetricCard = ({ 
  title, 
  metrics, 
  icon, 
  statistic, 
  growthPercentage,
  colorScheme = 'airbnb' 
}: MetricCardProps) => {
  const getColorClasses = () => {
    switch (colorScheme) {
      case 'blue': return {
        bg: 'bg-blue-500',
        bgLight: 'bg-blue-50',
        text: 'text-blue-500',
        border: 'border-blue-100'
      };
      case 'green': return {
        bg: 'bg-green-500',
        bgLight: 'bg-green-50',
        text: 'text-green-500',
        border: 'border-green-100'
      };
      case 'purple': return {
        bg: 'bg-purple-600',
        bgLight: 'bg-purple-50',
        text: 'text-purple-600',
        border: 'border-purple-100'
      };
      default: return {
        bg: 'bg-airbnb',
        bgLight: 'bg-airbnb bg-opacity-10',
        text: 'text-airbnb',
        border: 'border-airbnb border-opacity-20'
      };
    }
  };

  const colors = getColorClasses();

  return (
    <div className="bg-white border rounded-lg p-6 shadow-sm relative overflow-hidden">
      {/* Decorative tag corner */}
      <div className="absolute -top-6 -right-6 w-12 h-12 rounded-full bg-gray-100"></div>
      <div className="absolute top-0 right-0 w-6 h-6 bg-gray-100"></div>
      
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`h-10 w-10 rounded-full ${colors.bgLight} flex items-center justify-center ${colors.text}`}>
            {icon}
          </div>
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        
        {statistic && (
          <div className={`px-3 py-1 rounded-full text-xs font-bold ${colors.bg} text-white`}>
            {statistic}
          </div>
        )}
      </div>
      
      {growthPercentage !== undefined && (
        <div className="mb-4">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs font-medium text-gray-600">Growth</span>
            <span className={`text-sm font-medium ${growthPercentage >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {growthPercentage >= 0 ? '+' : ''}{growthPercentage}%
            </span>
          </div>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <div 
              className={`h-full ${growthPercentage >= 0 ? 'bg-green-500' : 'bg-red-500'}`} 
              style={{ width: `${Math.min(Math.abs(growthPercentage), 100)}%` }}
            ></div>
          </div>
        </div>
      )}
      
      <ul className="space-y-2">
        {metrics.map((metric, i) => (
          <li key={i} className="flex items-center text-sm gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={colors.text}><path d="m9 18 6-6-6-6"/></svg>
            {metric}
          </li>
        ))}
      </ul>

      {/* Decorative tag element */}
      <div className="absolute -bottom-1 -left-1 w-4 h-4 rounded-full bg-gray-200"></div>
    </div>
  );
};

export default MetricCard;
