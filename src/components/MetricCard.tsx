
import React from 'react';

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  trend: string;
  description: string;
  timeframe: string;
}

const MetricCard = ({ title, value, change, trend, description, timeframe }: MetricCardProps) => {
  const getTrendColor = (trend: string) => {
    return trend === 'up' ? 'text-green-600' : 'text-red-600';
  };

  const getTrendIcon = (trend: string) => {
    return trend === 'up' ? '↗️' : '↘️';
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">{title}</h3>
        <span className={`text-sm font-medium ${getTrendColor(trend)}`}>
          {getTrendIcon(trend)} {change}
        </span>
      </div>
      
      <div className="mb-3">
        <div className="text-2xl font-bold text-gray-900">{value}</div>
        <div className="text-sm text-gray-500">{timeframe}</div>
      </div>
      
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

export default MetricCard;
