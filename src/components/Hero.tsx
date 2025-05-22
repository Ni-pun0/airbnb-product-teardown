
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-airbnb to-airbnb-light opacity-10 z-0"></div>
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-32 relative z-10">
        <div className="flex flex-col items-start">
          <div className="mb-6">
            <img src="/lovable-uploads/058fdaad-47e7-4b8f-bc5a-1b199c276ebc.png" alt="Airbnb Logo" className="h-12 md:h-16 object-contain mix-blend-multiply" />
          </div>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6"> Product Teardown</h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Understanding how Airbnb drives growth, retention, and trust in a global peer-to-peer marketplace while balancing the needs of guests, hosts, and communities.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-airbnb hover:bg-airbnb-dark text-white">
                <a href="#overview">Start Exploring</a>
              </Button>
              <Button variant="outline">
                <a href="#conclusion">Key Takeaways</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute -right-24 -bottom-24 w-2/3 md:w-1/2 h-[120%] bg-contain bg-no-repeat bg-right-bottom z-0"
        style={{
          backgroundImage: "url('/lovable-uploads/fa6f9d34-0176-410d-879a-137a69167faf.png')",
          transform: "rotate(5deg)"
        }}
      ></div>
    </div>;
};

export default Hero;
