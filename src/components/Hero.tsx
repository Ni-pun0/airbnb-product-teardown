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
            <h1 className="text-4xl md:text-6xl font-bold mb-6"> Product Teardown</h1>
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
      <div className="absolute bottom-0 right-0 w-1/3 h-full bg-contain bg-no-repeat bg-bottom opacity-10 md:opacity-30" style={{
      backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTEyLjAwMDIgMEMxMi4wMDAyIDAgNS45OTgwNSA1Ljg5MjU4IDUuOTk4MDUgMTJDNS45OTgwNSAxOC4xMDc0IDkuODk1ODYgMjIgMTIuMDAwMiAyMkMxNC4xMDQ1IDIyIDE4LjAwMiAxOC4xMDc0IDE4LjAwMiAxMkMxOC4wMDIgNS44OTI1OCAxMi4wMDAyIDAgMTIuMDAwMiAwWk0xMi4wMDAyIDE5QzExLjA0ODEgMTkgMTAuMjU3OSAxOC4yMDk4IDEwLjI1NzkgMTcuMjU3OEMxMC4yNTc5IDE2LjMwNTcgMTEuMDQ4MSAxNS41MTU2IDEyLjAwMDIgMTUuNTE1NkMxMi45NTIyIDE1LjUxNTYgMTMuNzQyNCAxNi4zMDU3IDEzLjc0MjQgMTcuMjU3OEMxMy43NDI0IDE4LjIwOTggMTIuOTUyMiAxOSAxMi4wMDAyIDE5Wk0xNS4yNDI0IDEwLjg5ODRDMTQuNTE1OSAxMS42MjUgMTMuNzc3MiAxMiAxMi45NjM5IDEyQzEyLjE1MDYgMTIgMTEuNDExOSAxMS42MjUgMTAuNjg1NCAxMC44OTg0QzkuOTU4OTggMTAuMTcxOSA5LjU4Mzk4IDkuNDMzMjQgOS41ODM5OCA4LjYxOTkyQzkuNTgzOTggNy44MDY2MSA5Ljk1ODk4IDcuMDY3OTIgMTAuNjg1NCA2LjM0MTQ1QzExLjQxMTkgNS42MTQ5OSAxMi4xNTA2IDUuMjM5OTkgMTIuOTYzOSA1LjIzOTk5QzEzLjc3NzIgNS4yMzk5OSAxNC41MTU5IDUuNjE0OTkgMTUuMjQyNCA2LjM0MTQ1QzE1Ljk2ODggNy4wNjc5MiAxNi4zNDM4IDcuODA2NjEgMTYuMzQzOCA4LjYxOTkyQzE2LjM0MzggOS40MzMyNCAxNS45Njg4IDEwLjE3MTkgMTUuMjQyNCAxMC44OTg0WiIgZmlsbD0iI0ZGNUE1RiIvPjwvc3ZnPg==')"
    }}></div>
    </div>;
};
export default Hero;