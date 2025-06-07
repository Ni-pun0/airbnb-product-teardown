
import React from 'react';

interface FeatureCategoryProps {
  title: string;
  priority: string;
  features: string[];
  impact: string;
  timeline: string;
}

const FeatureCategory = ({ title, priority, features, impact, timeline }: FeatureCategoryProps) => {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Critical':
        return 'text-red-600 bg-red-50 border-red-200';
      case 'High':
        return 'text-orange-600 bg-orange-50 border-orange-200';
      case 'Medium':
        return 'text-blue-600 bg-blue-50 border-blue-200';
      default:
        return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  return (
    <div className="bg-white border rounded-lg shadow-sm p-6">
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <span className={`inline-block px-2 py-1 rounded text-xs font-medium border ${getPriorityColor(priority)}`}>
          {priority} Priority
        </span>
      </div>
      
      <ul className="space-y-2 mb-4">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-airbnb opacity-75"></span>
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      
      <div className="border-t pt-4 space-y-2">
        <div>
          <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Impact</h4>
          <p className="text-sm text-gray-700">{impact}</p>
        </div>
        <div>
          <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Timeline</h4>
          <p className="text-sm text-gray-700">{timeline}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCategory;
