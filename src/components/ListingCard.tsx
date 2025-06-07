
import React from 'react';

interface ListingCardProps {
  image: string;
  title: string;
  location: string;
  price: string;
  rating: number;
  reviewCount: number;
}

const ListingCard = ({ image, title, location, price, rating, reviewCount }: ListingCardProps) => {
  return (
    <div className="group">
      <div className="aspect-square rounded-xl overflow-hidden bg-gray-100 mb-2">
        <div className="h-full w-full bg-gray-200 flex items-center justify-center text-gray-400">
          {image}
        </div>
      </div>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-medium">{title}</h3>
          <p className="text-sm text-gray-500">{location}</p>
          <p className="text-sm mt-1">
            <span className="font-semibold">{price}</span> night
          </p>
        </div>
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
          <span className="text-sm">{rating} <span className="text-gray-500">({reviewCount})</span></span>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
