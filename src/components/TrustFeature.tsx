import React from 'react';
interface TrustFeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  statistic?: string;
}
const TrustFeature = ({
  icon,
  title,
  description,
  statistic
}: TrustFeatureProps) => {
  return <div className="flex gap-4 bg-white rounded-lg p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all">
      <div className="flex-shrink-0 h-14 w-14 rounded-full bg-airbnb bg-opacity-10 text-airbnb flex items-center justify-center">
        {icon}
      </div>
      <div>
        <div className="flex items-center gap-2 mb-1">
          <h3 className="font-semibold">{title}</h3>
          {statistic && <span className="py-1 bg-airbnb text-white rounded-full text-xs font-medium text-center px-[6px]">
              {statistic}
            </span>}
        </div>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>;
};
export default TrustFeature;