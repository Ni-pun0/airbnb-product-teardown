
import React from 'react';
import { cn } from '@/lib/utils';
import { Search, Heart, Home, Calendar, User } from 'lucide-react';

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

  // Check if this is the Feature Impact Map section
  if (title === "Feature Impact Map") {
    return (
      <div className={cn("wireframe relative bg-white border rounded-lg p-6 shadow-sm", className)} {...props}>
        {renderTag()}
        <div className="w-full">
          <img 
            src="/lovable-uploads/060e8bb9-877f-43ad-8cf6-bd11637679c4.png" 
            alt="Feature Impact Map - Based on 2023 User Research"
            className="w-full h-auto"
          />
        </div>
      </div>
    );
  }

  // Check if this is a mobile wireframe (when title contains "Mobile" or similar mobile indicators)
  if (title && (title.toLowerCase().includes('mobile') || title.toLowerCase().includes('app'))) {
    return (
      <div className={cn("wireframe relative bg-white border rounded-lg p-6 shadow-sm", className)} {...props}>
        {renderTag()}
        {title && <h3 className="text-lg font-semibold mb-4">{title}</h3>}
        
        {/* Mobile Phone Frame */}
        <div className="max-w-sm mx-auto bg-black rounded-3xl p-2 shadow-2xl">
          <div className="bg-white rounded-2xl overflow-hidden">
            {/* Status Bar */}
            <div className="flex justify-between items-center px-6 py-2 text-xs font-medium">
              <span>9:41</span>
              <div className="flex items-center space-x-1">
                <div className="flex space-x-1">
                  <div className="w-1 h-3 bg-black rounded-full"></div>
                  <div className="w-1 h-3 bg-black rounded-full"></div>
                  <div className="w-1 h-3 bg-black rounded-full"></div>
                  <div className="w-1 h-3 bg-gray-400 rounded-full"></div>
                </div>
                <div className="w-6 h-3 bg-black rounded-sm"></div>
              </div>
            </div>

            {/* Search Bar */}
            <div className="px-4 py-3">
              <div className="flex items-center bg-gray-100 rounded-full px-4 py-3">
                <Search className="w-4 h-4 text-gray-500 mr-3" />
                <span className="text-gray-500 text-sm">Start your search</span>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="flex justify-center space-x-8 px-4 py-2 border-b">
              <div className="flex flex-col items-center">
                <Home className="w-5 h-5 text-gray-400 mb-1" />
                <span className="text-xs text-gray-400">Homes</span>
              </div>
              <div className="flex flex-col items-center border-b-2 border-airbnb pb-2">
                <div className="w-5 h-5 bg-airbnb rounded-full mb-1"></div>
                <span className="text-xs text-black font-medium">Experiences</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-5 h-5 bg-gray-400 rounded-full mb-1"></div>
                <span className="text-xs text-gray-400">Services</span>
              </div>
            </div>

            {/* Performance Metrics Card */}
            <div className="p-4">
              <div className="bg-gray-50 rounded-xl p-4 mb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Performance Metrics</h4>
                    <p className="text-sm text-gray-600">Real-time analytics</p>
                  </div>
                  <div className="bg-orange-100 rounded-lg p-2">
                    <Calendar className="w-4 h-4 text-orange-600" />
                  </div>
                </div>
              </div>

              {/* Metrics Section */}
              <div className="mb-4">
                <h5 className="font-semibold mb-3 flex items-center">
                  App Performance 
                  <span className="ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">LIVE</span>
                </h5>
                
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-white border rounded-lg p-3 relative overflow-hidden">
                    <div className="absolute top-2 right-2">
                      <Heart className="w-3 h-3 text-gray-400" />
                    </div>
                    <div className="text-lg font-bold text-green-600">98.2%</div>
                    <div className="text-xs text-gray-600">Uptime</div>
                  </div>
                  
                  <div className="bg-white border rounded-lg p-3 relative overflow-hidden">
                    <div className="absolute top-2 right-2">
                      <Heart className="w-3 h-3 text-gray-400" />
                    </div>
                    <div className="text-lg font-bold text-blue-600">2.1s</div>
                    <div className="text-xs text-gray-600">Load Time</div>
                  </div>
                </div>
              </div>

              {/* Popular Metrics Section */}
              <div className="mb-4">
                <h5 className="font-semibold mb-3 flex items-center">
                  User Engagement 
                  <span className="ml-auto text-xs text-gray-500">▶</span>
                </h5>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white border rounded-lg p-3 relative overflow-hidden">
                    <div className="absolute top-2 left-2">
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Active</span>
                    </div>
                    <div className="mt-6">
                      <div className="text-lg font-bold text-purple-600">4.8★</div>
                      <div className="text-xs text-gray-600">Avg Rating</div>
                    </div>
                  </div>
                  
                  <div className="bg-white border rounded-lg p-3 relative overflow-hidden">
                    <div className="absolute top-2 left-2">
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Growing</span>
                    </div>
                    <div className="mt-6">
                      <div className="text-lg font-bold text-orange-600">12K+</div>
                      <div className="text-xs text-gray-600">Daily Users</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Navigation */}
            <div className="flex justify-around py-3 border-t bg-white">
              <div className="flex flex-col items-center">
                <Search className="w-5 h-5 text-airbnb mb-1" />
                <span className="text-xs text-airbnb font-medium">Explore</span>
              </div>
              <div className="flex flex-col items-center">
                <Heart className="w-5 h-5 text-gray-400 mb-1" />
                <span className="text-xs text-gray-400">Wishlists</span>
              </div>
              <div className="flex flex-col items-center">
                <Home className="w-5 h-5 text-gray-400 mb-1" />
                <span className="text-xs text-gray-400">Trips</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-5 h-5 bg-gray-400 rounded mb-1"></div>
                <span className="text-xs text-gray-400">Messages</span>
              </div>
              <div className="flex flex-col items-center">
                <User className="w-5 h-5 text-gray-400 mb-1" />
                <span className="text-xs text-gray-400">Profile</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("wireframe relative bg-white border rounded-lg p-6 shadow-sm", className)} {...props}>
      {renderTag()}
      {title && <h3 className="text-lg font-semibold mb-4">{title}</h3>}
      {children}
    </div>
  );
};

export default Wireframe;
