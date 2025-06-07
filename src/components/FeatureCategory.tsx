
import React from 'react';

interface FeatureCategoryProps {
  title: string;
  priority: string;
  features: string[];
  impact: string;
  timeline: string;
}

const FeatureCategory = ({ title, priority, features, impact, timeline }: FeatureCategoryProps) => {
  const getPriorityColor = () => {
    switch (priority.toLowerCase()) {
      case 'critical':
        return 'text-red-600 border-red-200 bg-red-50';
      case 'high':
        return 'text-orange-600 border-orange-200 bg-orange-50';
      case 'medium':
        return 'text-blue-600 border-blue-200 bg-blue-50';
      default:
        return 'text-gray-600 border-gray-200 bg-gray-50';
    }
  };

  return (
    <div className={`border rounded-lg shadow-sm p-6 ${getPriorityColor()}`}>
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <span className="inline-block px-3 py-1 rounded-full text-xs font-medium border">
          {priority} Priority
        </span>
      </div>
      
      <ul className="space-y-2 mb-4">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-current opacity-75"></span>
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      
      <div className="space-y-2 text-xs">
        <div>
          <span className="font-medium">Impact:</span> {impact}
        </div>
        <div>
          <span className="font-medium">Timeline:</span> {timeline}
        </div>
      </div>
    </div>
  );
};

export default FeatureCategory;
