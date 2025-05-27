
import React from 'react';
import Wireframe from '../components/Wireframe';
import SectionTitle from '../components/SectionTitle';
import FeatureCategory from '../components/FeatureCategory';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Feature Prioritization Section */}
      <section className="section-container bg-airbnb-light_gray">
        <div className="animate-on-scroll">
          <SectionTitle title="6. Feature Prioritization" subtitle="Using the Kano Model to understand feature importance" accentColor="blue" />

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <FeatureCategory title="Must-Have Features" features={["Secure payments", "Search, filters, reviews", "Calendar and availability management", "Messaging system", "Photo uploads and management"]} color="text-airbnb" />
            <FeatureCategory title="Performance Features" features={["Dynamic pricing", "Personalized home page & recommendations", "Communication automation", "Virtual tours", "Mobile app functionality"]} color="text-blue-500" />
            <FeatureCategory title="Delighter Features" features={["Airbnb Experiences & Adventures", "Group planning tools", "Sustainability filters and eco-badges", "Wishlist reminders with price drops", "Local guidebooks and insider tips"]} color="text-green-500" />
          </div>

          <Wireframe className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Feature Impact Map</h3>
              <div className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Based on 2023 user research</div>
            </div>
            <div className="relative h-[600px] border border-gray-200 rounded bg-white overflow-hidden">
              <div className="absolute inset-0 p-8">
                {/* Axis labels */}
                <div className="absolute -left-16 top-1/2 -translate-y-1/2 transform -rotate-90 text-sm text-gray-600 font-medium whitespace-nowrap">
                  User Satisfaction
                </div>
                
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm text-gray-600 font-medium whitespace-nowrap">
                  Implementation Effort
                </div>
                
                {/* Quadrant labels */}
                <div className="absolute top-4 left-4 text-xs font-semibold text-gray-700 bg-green-50 border border-green-200 px-3 py-2 rounded shadow-sm">
                  <div className="text-green-700">High Value, Low Effort</div>
                  <div className="text-xs text-green-600 mt-1">Quick Wins</div>
                </div>
                <div className="absolute top-4 right-4 text-xs font-semibold text-gray-700 bg-blue-50 border border-blue-200 px-3 py-2 rounded shadow-sm">
                  <div className="text-blue-700">High Value, High Effort</div>
                  <div className="text-xs text-blue-600 mt-1">Major Projects</div>
                </div>
                <div className="absolute bottom-16 left-4 text-xs font-semibold text-gray-700 bg-gray-50 border border-gray-200 px-3 py-2 rounded shadow-sm">
                  <div className="text-gray-700">Low Value, Low Effort</div>
                  <div className="text-xs text-gray-600 mt-1">Fill-ins</div>
                </div>
                <div className="absolute bottom-16 right-4 text-xs font-semibold text-gray-700 bg-red-50 border border-red-200 px-3 py-2 rounded shadow-sm">
                  <div className="text-red-700">Low Value, High Effort</div>
                  <div className="text-xs text-red-600 mt-1">Avoid</div>
                </div>
                
                {/* Grid lines */}
                <div className="absolute top-1/2 left-0 w-full h-px bg-gray-300"></div>
                <div className="absolute top-0 left-1/2 h-full w-px bg-gray-300"></div>
                
                {/* Feature dots with card-style labels */}
                
                {/* High Value, Low Effort Quadrant */}
                <div className="absolute top-[15%] left-[18%] group">
                  <div className="h-6 w-6 rounded-full bg-airbnb flex items-center justify-center text-white text-xs font-bold shadow-lg z-10 relative">1</div>
                  <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-white border border-gray-200 rounded-lg p-3 shadow-lg min-w-max z-20">
                    <div className="text-xs font-semibold text-gray-800 text-center mb-1">Secure Payments</div>
                    <div className="text-xs bg-airbnb text-white px-2 py-1 rounded-full text-center">98% critical</div>
                  </div>
                </div>
                
                <div className="absolute top-[35%] left-[25%] group">
                  <div className="h-6 w-6 rounded-full bg-airbnb flex items-center justify-center text-white text-xs font-bold shadow-lg z-10 relative">3</div>
                  <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-white border border-gray-200 rounded-lg p-3 shadow-lg min-w-max z-20">
                    <div className="text-xs font-semibold text-gray-800 text-center mb-1">Reviews System</div>
                    <div className="text-xs bg-airbnb text-white px-2 py-1 rounded-full text-center">91% trust factor</div>
                  </div>
                </div>
                
                <div className="absolute top-[48%] left-[12%] group">
                  <div className="h-6 w-6 rounded-full bg-airbnb flex items-center justify-center text-white text-xs font-bold shadow-lg z-10 relative">5</div>
                  <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-white border border-gray-200 rounded-lg p-3 shadow-lg min-w-max z-20">
                    <div className="text-xs font-semibold text-gray-800 text-center mb-1">Messaging</div>
                    <div className="text-xs bg-airbnb text-white px-2 py-1 rounded-full text-center">87% usage</div>
                  </div>
                </div>
                
                {/* High Value, High Effort Quadrant */}
                <div className="absolute top-[12%] left-[75%] group">
                  <div className="h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold shadow-lg z-10 relative">2</div>
                  <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-white border border-gray-200 rounded-lg p-3 shadow-lg min-w-max z-20">
                    <div className="text-xs font-semibold text-gray-800 text-center mb-1">AI Recommendations</div>
                    <div className="text-xs bg-blue-500 text-white px-2 py-1 rounded-full text-center">+42% conversion</div>
                  </div>
                </div>
                
                <div className="absolute top-[25%] left-[88%] group">
                  <div className="h-6 w-6 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-bold shadow-lg z-10 relative">4</div>
                  <div className="absolute top-8 right-0 bg-white border border-gray-200 rounded-lg p-3 shadow-lg min-w-max z-20">
                    <div className="text-xs font-semibold text-gray-800 text-center mb-1">Virtual Tours</div>
                    <div className="text-xs bg-green-500 text-white px-2 py-1 rounded-full text-center">+36% engagement</div>
                  </div>
                </div>
                
                <div className="absolute top-[40%] left-[68%] group">
                  <div className="h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold shadow-lg z-10 relative">7</div>
                  <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-white border border-gray-200 rounded-lg p-3 shadow-lg min-w-max z-20">
                    <div className="text-xs font-semibold text-gray-800 text-center mb-1">Dynamic Pricing</div>
                    <div className="text-xs bg-blue-500 text-white px-2 py-1 rounded-full text-center">+18% revenue</div>
                  </div>
                </div>
                
                <div className="absolute top-[50%] left-[82%] group">
                  <div className="h-6 w-6 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-bold shadow-lg z-10 relative">8</div>
                  <div className="absolute top-8 right-0 bg-white border border-gray-200 rounded-lg p-3 shadow-lg min-w-max z-20">
                    <div className="text-xs font-semibold text-gray-800 text-center mb-1">Experiences</div>
                    <div className="text-xs bg-green-500 text-white px-2 py-1 rounded-full text-center">$1.7B market</div>
                  </div>
                </div>
                
                {/* Low Value, Low Effort Quadrant */}
                <div className="absolute top-[65%] left-[28%] group">
                  <div className="h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold shadow-lg z-10 relative">6</div>
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white border border-gray-200 rounded-lg p-3 shadow-lg min-w-max z-20">
                    <div className="text-xs font-semibold text-gray-800 text-center mb-1">Calendar Sync</div>
                    <div className="text-xs bg-blue-500 text-white px-2 py-1 rounded-full text-center">72% adoption</div>
                  </div>
                </div>
                
                <div className="absolute top-[82%] left-[15%] group">
                  <div className="h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold shadow-lg z-10 relative">11</div>
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white border border-gray-200 rounded-lg p-3 shadow-lg min-w-max z-20">
                    <div className="text-xs font-semibold text-gray-800 text-center mb-1">Wishlists</div>
                    <div className="text-xs bg-blue-500 text-white px-2 py-1 rounded-full text-center">64% usage</div>
                  </div>
                </div>
                
                {/* Low Value, High Effort Quadrant */}
                <div className="absolute top-[70%] left-[72%] group">
                  <div className="h-6 w-6 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-bold shadow-lg z-10 relative">9</div>
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white border border-gray-200 rounded-lg p-3 shadow-lg min-w-max z-20">
                    <div className="text-xs font-semibold text-gray-800 text-center mb-1">Eco Badges</div>
                    <div className="text-xs bg-green-500 text-white px-2 py-1 rounded-full text-center">+16% premium</div>
                  </div>
                </div>
                
                <div className="absolute top-[85%] left-[55%] group">
                  <div className="h-6 w-6 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-bold shadow-lg z-10 relative">10</div>
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white border border-gray-200 rounded-lg p-3 shadow-lg min-w-max z-20">
                    <div className="text-xs font-semibold text-gray-800 text-center mb-1">Group Planning</div>
                    <div className="text-xs bg-green-500 text-white px-2 py-1 rounded-full text-center">Low priority</div>
                  </div>
                </div>
              </div>
            </div>
          </Wireframe>
        </div>
      </section>
    </div>
  );
};

export default Index;
