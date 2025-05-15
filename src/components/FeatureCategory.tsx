
import React from 'react';

interface FeatureCategoryProps {
  title: string;
  features: string[];
  color: string;
}

const FeatureCategory = ({ title, features, color }: FeatureCategoryProps) => {
  return (
    <div className="bg-white border rounded-lg shadow-sm p-6">
      <h3 className={`text-lg font-semibold mb-4 ${color}`}>{title}</h3>
      <ul className="space-y-2">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2">
            <span className={`h-2 w-2 rounded-full ${color} opacity-75`}></span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeatureCategory;
