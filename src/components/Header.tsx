import React from 'react';
import { cn } from '@/lib/utils';
interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {}
const Header = ({
  className,
  ...props
}: HeaderProps) => {
  const refreshPage = () => {
    window.location.reload();
  };
  return <header className={cn("py-6 sticky top-0 z-50 bg-white bg-opacity-90 backdrop-blur-md border-b", className)} {...props}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img alt="Airbnb Logo" className="h-8 w-auto object-contain cursor-pointer" onClick={refreshPage} src="/lovable-uploads/e936742a-5b0a-492e-b4ca-6ec2f930b51b.png" />
          <h1 className="tracking-tight text-xl font-bold">Product Teardown</h1>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#overview" className="text-sm font-medium hover:text-airbnb">Overview</a>
          <a href="#market" className="text-sm font-medium hover:text-airbnb">Market Analysis</a>
          <a href="#personas" className="text-sm font-medium hover:text-airbnb">User Personas</a>
          <a href="#trust" className="text-sm font-medium hover:text-airbnb">Trust & Safety</a>
          <a href="#journey" className="text-sm font-medium hover:text-airbnb">User Journey</a>
        </nav>
      </div>
    </header>;
};
export default Header;