
import React from 'react';

interface TrustFeatureProps {
  icon: string;
  title: string;
  description: string;
  metrics: string;
}

const TrustFeature = ({
  icon,
  title,
  description,
  metrics
}: TrustFeatureProps) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'shield-check':
        return '🛡️';
      case 'star':
        return '⭐';
      case 'lock':
        return '🔒';
      case 'headphones':
        return '🎧';
      default:
        return '📋';
    }
  };

  return (
    <div className="flex gap-4 bg-white rounded-lg p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all">
      <div className="flex-shrink-0 h-14 w-14 rounded-full bg-airbnb bg-opacity-10 text-2xl flex items-center justify-center">
        {getIcon(icon)}
      </div>
      <div>
        <div className="flex items-center gap-2 mb-1">
          <h3 className="font-semibold">{title}</h3>
          <span className="py-1 bg-airbnb text-white rounded-full text-xs font-medium text-center px-2">
            {metrics}
          </span>
        </div>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default TrustFeature;
