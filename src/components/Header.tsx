
import React from 'react';
import { cn } from '@/lib/utils';

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

const Header = ({ className, ...props }: HeaderProps) => {
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <header className={cn("py-6 sticky top-0 z-50 bg-white bg-opacity-90 backdrop-blur-md border-b", className)} {...props}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/058fdaad-47e7-4b8f-bc5a-1b199c276ebc.png" 
            alt="Airbnb Logo" 
            className="h-8 w-auto object-contain cursor-pointer"
            onClick={refreshPage}
          />
          <h1 className="text-xl font-bold tracking-tight">Airbnb Product Teardown</h1>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#overview" className="text-sm font-medium hover:text-airbnb">Overview</a>
          <a href="#market" className="text-sm font-medium hover:text-airbnb">Market Analysis</a>
          <a href="#personas" className="text-sm font-medium hover:text-airbnb">User Personas</a>
          <a href="#trust" className="text-sm font-medium hover:text-airbnb">Trust & Safety</a>
          <a href="#journey" className="text-sm font-medium hover:text-airbnb">User Journey</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
