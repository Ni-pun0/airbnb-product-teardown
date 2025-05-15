
import React from 'react';
import { cn } from '@/lib/utils';

interface WireframeProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  children: React.ReactNode;
  className?: string;
  tagStyle?: 'destination' | 'flight' | 'booking' | 'none';
}

const Wireframe = ({ title, children, className, tagStyle = 'none', ...props }: WireframeProps) => {
  const renderTag = () => {
    switch (tagStyle) {
      case 'destination':
        return (
          <div className="absolute -top-4 -right-3 bg-airbnb text-white text-xs font-bold py-1 px-3 transform rotate-6 shadow-md z-10">
            DESTINATION
          </div>
        );
      case 'flight':
        return (
          <div className="absolute -top-4 -right-3 bg-orange-500 text-white text-xs font-bold py-1 px-3 transform -rotate-6 shadow-md z-10">
            FLIGHT
          </div>
        );
      case 'booking':
        return (
          <div className="absolute -top-4 -right-3 bg-purple-800 text-white text-xs font-bold py-1 px-3 transform rotate-3 shadow-md z-10">
            BOOKING
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={cn("wireframe relative bg-white border rounded-lg p-6 shadow-sm", className)} {...props}>
      {renderTag()}
      {title && <h3 className="text-lg font-semibold mb-4">{title}</h3>}
      {children}
    </div>
  );
};

export default Wireframe;
