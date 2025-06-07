
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
    <div className="group bg-white border rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all">
      <div className="aspect-video bg-gray-100 flex items-center justify-center text-gray-400">
        <div className="text-center">
          <div className="text-4xl mb-2">📊</div>
          <span className="text-sm">{image}</span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="mb-4">
          <h3 className="font-semibold text-lg mb-1">{title}</h3>
          <p className="text-sm text-gray-600">{subtitle}</p>
        </div>
        
        <ul className="space-y-2 mb-6">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2 text-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
              {feature}
            </li>
          ))}
        </ul>
        
        <button className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium">
          {cta}
        </button>
      </div>
    </div>
  );
};

export default ListingCard;
