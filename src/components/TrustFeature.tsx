
import React from 'react';
import { Shield, Star, Lock, Headphones } from 'lucide-react';

interface TrustFeatureProps {
  icon: string;
  title: string;
  description: string;
  metrics?: string;
}

const TrustFeature = ({
  icon,
  title,
  description,
  metrics
}: TrustFeatureProps) => {
  const getIcon = () => {
    switch (icon) {
      case 'shield-check':
        return <Shield className="w-6 h-6" />;
      case 'star':
        return <Star className="w-6 h-6" />;
      case 'lock':
        return <Lock className="w-6 h-6" />;
      case 'headphones':
        return <Headphones className="w-6 h-6" />;
      default:
        return <Shield className="w-6 h-6" />;
    }
  };

  return (
    <div className="flex gap-4 bg-white rounded-lg p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all">
      <div className="flex-shrink-0 h-14 w-14 rounded-full bg-primary/10 text-primary flex items-center justify-center">
        {getIcon()}
      </div>
      <div>
        <div className="flex items-center gap-2 mb-1">
          <h3 className="font-semibold">{title}</h3>
          {metrics && (
            <span className="py-1 bg-primary text-white rounded-full text-xs font-medium text-center px-[6px]">
              {metrics}
            </span>
          )}
        </div>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default TrustFeature;
