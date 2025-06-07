
import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  description: string;
  timeframe: string;
}

const MetricCard = ({ 
  title, 
  value,
  change,
  trend,
  description,
  timeframe
}: MetricCardProps) => {
  const isPositive = trend === 'up';

  return (
    <div className="bg-white border rounded-lg p-6 shadow-sm relative overflow-hidden">
      {/* Decorative tag corner */}
      <div className="absolute -top-6 -right-6 w-12 h-12 rounded-full bg-gray-100"></div>
      <div className="absolute top-0 right-0 w-6 h-6 bg-gray-100"></div>
      
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold ${isPositive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {isPositive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
          {change}
        </div>
      </div>
      
      <div className="mb-4">
        <div className="text-3xl font-bold text-primary mb-1">{value}</div>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
      
      <div className="text-xs text-gray-500 border-t pt-3">
        {timeframe}
      </div>

      {/* Decorative tag element */}
      <div className="absolute -bottom-1 -left-1 w-4 h-4 rounded-full bg-gray-200"></div>
    </div>
  );
};

export default MetricCard;
