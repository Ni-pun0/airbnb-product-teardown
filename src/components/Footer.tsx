
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-airbnb-light_gray py-10 mt-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        <img 
          src="/lovable-uploads/1b970f5b-9865-4d4e-9bcc-001d91026138.png" 
          alt="Airbnb Logo" 
          className="h-12 w-auto mx-auto mb-4"
        />
        <p className="text-airbnb-gray mb-2">Airbnb Product Teardown © 2025</p>
        <p className="text-sm text-airbnb-gray">This is a conceptual product analysis for educational purposes only. All trademarks belong to their respective owners.</p>
      </div>
    </footer>
  );
};

export default Footer;
