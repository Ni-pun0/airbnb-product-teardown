
import React from 'react';

interface TrustFeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const TrustFeature = ({ icon, title, description }: TrustFeatureProps) => {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 h-12 w-12 rounded-full bg-airbnb bg-opacity-10 text-airbnb flex items-center justify-center">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold mb-1">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default TrustFeature;
