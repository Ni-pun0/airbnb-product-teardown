
import React from 'react';

interface ListingCardProps {
  title: string;
  subtitle: string;
  image: string;
  features: string[];
  cta: string;
}

const ListingCard = ({ title, subtitle, image, features, cta }: ListingCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        <span className="text-gray-500">📊</span>
      </div>
      
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-1">{title}</h3>
          <p className="text-sm text-gray-600">{subtitle}</p>
        </div>
        
        <ul className="space-y-2 mb-6">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2 text-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-airbnb"></span>
              {feature}
            </li>
          ))}
        </ul>
        
        <button className="w-full bg-airbnb text-white py-2 px-4 rounded-lg font-medium hover:bg-airbnb/90 transition-colors">
          {cta}
        </button>
      </div>
    </div>
  );
};

export default ListingCard;
