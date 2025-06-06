
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SectionTitle from '@/components/SectionTitle';
import PersonaCard from '@/components/PersonaCard';
import UserJourneyStep from '@/components/UserJourneyStep';
import Wireframe from '@/components/Wireframe';
import ListingCard from '@/components/ListingCard';
import MetricCard from '@/components/MetricCard';
import TrustFeature from '@/components/TrustFeature';
import FeatureCategory from '@/components/FeatureCategory';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />

      {/* User Research Section */}
      <section className="section-container">
        <div className="animate-on-scroll">
          <SectionTitle title="1. User Research" subtitle="Understanding our users through comprehensive research methodologies" />
          
          <div className="grid md:grid-cols-3 gap-8">
            <PersonaCard 
              title="Sarah, 28 - Digital Nomad"
              description="Seeks unique, work-friendly accommodations with reliable WiFi and inspiring environments"
              goals={["Find long-term stays", "Work-life balance", "Cultural immersion"]}
              painPoints={["Inconsistent WiFi", "Hidden fees", "Lack of workspace"]}
              avatar="/lovable-uploads/fa6f9d34-0176-410d-879a-137a69167faf.png"
            />
            <PersonaCard 
              title="Mike & Emma - Weekend Travelers"
              description="Couple looking for romantic getaways and memorable experiences close to home"
              goals={["Quality time together", "Discover new places", "Value for money"]}
              painPoints={["Limited availability", "Unclear photos", "Location accuracy"]}
              avatar="/lovable-uploads/e936742a-5b0a-492e-b4ca-6ec2f930b51b.png"
            />
            <PersonaCard 
              title="Robert, 45 - Host & Property Manager"
              description="Manages multiple properties and seeks to maximize occupancy while maintaining quality"
              goals={["Maximize revenue", "Automate processes", "Maintain ratings"]}
              painPoints={["Guest communication", "Dynamic pricing", "Calendar management"]}
              avatar="/lovable-uploads/058fdaad-47e7-4b8f-bc5a-1b199c276ebc.png"
            />
          </div>
        </div>
      </section>

      {/* User Journey Section */}
      <section className="section-container bg-airbnb-light_gray">
        <div className="animate-on-scroll">
          <SectionTitle title="2. User Journey Mapping" subtitle="Mapping the complete user experience from discovery to post-stay" accentColor="purple" />
          
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <UserJourneyStep 
              step="1"
              phase="Discovery" 
              actions={["Search destinations", "Browse listings", "Read reviews"]}
              emotions={["Excitement", "Curiosity", "Overwhelm"]}
              touchpoints={["Google Search", "Social Media", "Airbnb Homepage"]}
            />
            <UserJourneyStep 
              step="2"
              phase="Evaluation" 
              actions={["Compare options", "Check availability", "Calculate costs"]}
              emotions={["Careful", "Analytical", "Concerned"]}
              touchpoints={["Listing pages", "Reviews", "Photos"]}
            />
            <UserJourneyStep 
              step="3"
              phase="Booking" 
              actions={["Contact host", "Submit request", "Make payment"]}
              emotions={["Hopeful", "Anxious", "Committed"]}
              touchpoints={["Messaging", "Booking form", "Payment system"]}
            />
            <UserJourneyStep 
              step="4"
              phase="Experience" 
              actions={["Check-in", "Stay", "Explore area"]}
              emotions={["Satisfied", "Relaxed", "Adventurous"]}
              touchpoints={["Property", "Host", "Local area"]}
            />
            <UserJourneyStep 
              step="5"
              phase="Post-Stay" 
              actions={["Leave review", "Share photos", "Plan next trip"]}
              emotions={["Nostalgic", "Grateful", "Inspired"]}
              touchpoints={["Review system", "Social sharing", "Email campaigns"]}
            />
          </div>
        </div>
      </section>

      {/* Current State Analysis */}
      <section className="section-container">
        <div className="animate-on-scroll">
          <SectionTitle title="3. Current State Analysis" subtitle="Analyzing Airbnb's existing platform and identifying opportunities" accentColor="green" />
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <Wireframe title="Current Homepage Analysis" tagStyle="destination">
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-airbnb to-airbnb-dark h-32 rounded flex items-center justify-center text-white font-bold">
                  Hero Search Section
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gray-100 h-20 rounded flex items-center justify-center text-sm">Categories</div>
                  <div className="bg-gray-100 h-20 rounded flex items-center justify-center text-sm">Trending</div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[1,2,3,4,5,6].map(i => (
                    <div key={i} className="bg-gray-50 h-16 rounded flex items-center justify-center text-xs">
                      Listing {i}
                    </div>
                  ))}
                </div>
              </div>
            </Wireframe>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Key Metrics Analysis</h3>
                <div className="grid grid-cols-2 gap-4">
                  <MetricCard title="Search Conversion" value="3.2%" trend="up" />
                  <MetricCard title="Booking Rate" value="12.8%" trend="down" />
                  <MetricCard title="User Retention" value="67%" trend="up" />
                  <MetricCard title="Host Satisfaction" value="4.2/5" trend="stable" />
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Pain Points Identified</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Search results often don't match user preferences accurately</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Pricing transparency issues with hidden fees</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Complex booking process for groups and longer stays</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Limited communication tools between hosts and guests</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Analysis */}
      <section className="section-container bg-airbnb-light_gray">
        <div className="animate-on-scroll">
          <SectionTitle title="4. Competitive Analysis" subtitle="Benchmarking against key competitors in the travel and hospitality space" accentColor="orange" />
          
          <div className="grid md:grid-cols-3 gap-8">
            <Wireframe title="Booking.com" className="border-l-4 border-l-blue-500">
              <div className="space-y-3">
                <div className="text-sm font-semibold text-blue-600">Strengths</div>
                <ul className="text-xs space-y-1 text-gray-600">
                  <li>• Comprehensive inventory</li>
                  <li>• Strong mobile experience</li>
                  <li>• Flexible cancellation</li>
                </ul>
                <div className="text-sm font-semibold text-red-600">Weaknesses</div>
                <ul className="text-xs space-y-1 text-gray-600">
                  <li>• Limited unique properties</li>
                  <li>• Generic experience</li>
                  <li>• Commission-heavy model</li>
                </ul>
              </div>
            </Wireframe>
            
            <Wireframe title="VRBO" className="border-l-4 border-l-purple-500">
              <div className="space-y-3">
                <div className="text-sm font-semibold text-blue-600">Strengths</div>
                <ul className="text-xs space-y-1 text-gray-600">
                  <li>• Family-focused properties</li>
                  <li>• Entire home rentals</li>
                  <li>• Strong in vacation markets</li>
                </ul>
                <div className="text-sm font-semibold text-red-600">Weaknesses</div>
                <ul className="text-xs space-y-1 text-gray-600">
                  <li>• Limited urban inventory</li>
                  <li>• Higher price point</li>
                  <li>• Less innovative features</li>
                </ul>
              </div>
            </Wireframe>
            
            <Wireframe title="Hotels.com" className="border-l-4 border-l-green-500">
              <div className="space-y-3">
                <div className="text-sm font-semibold text-blue-600">Strengths</div>
                <ul className="text-xs space-y-1 text-gray-600">
                  <li>• Rewards program</li>
                  <li>• Consistent quality</li>
                  <li>• Business travel focus</li>
                </ul>
                <div className="text-sm font-semibold text-red-600">Weaknesses</div>
                <ul className="text-xs space-y-1 text-gray-600">
                  <li>• Lack of authentic experiences</li>
                  <li>• Limited local connections</li>
                  <li>• Standardized offerings</li>
                </ul>
              </div>
            </Wireframe>
          </div>
          
          <div className="mt-12">
            <Wireframe title="Competitive Positioning Map" className="max-w-4xl mx-auto">
              <div className="relative h-80 border border-gray-200 rounded">
                <div className="absolute inset-0 p-4">
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-sm text-gray-600">Price Range</div>
                  <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -rotate-90 text-sm text-gray-600">Experience Quality</div>
                  
                  <div className="absolute top-1/2 left-0 w-full h-px bg-gray-300"></div>
                  <div className="absolute top-0 left-1/2 h-full w-px bg-gray-300"></div>
                  
                  <div className="absolute top-[20%] left-[70%] bg-airbnb text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Airbnb
                  </div>
                  <div className="absolute top-[40%] left-[30%] bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                    Booking.com
                  </div>
                  <div className="absolute top-[25%] left-[85%] bg-purple-500 text-white px-3 py-1 rounded-full text-sm">
                    VRBO
                  </div>
                  <div className="absolute top-[60%] left-[45%] bg-green-500 text-white px-3 py-1 rounded-full text-sm">
                    Hotels.com
                  </div>
                </div>
              </div>
            </Wireframe>
          </div>
        </div>
      </section>

      {/* Solution Design */}
      <section className="section-container">
        <div className="animate-on-scroll">
          <SectionTitle title="5. Solution Design" subtitle="Designing enhanced features to address identified pain points" accentColor="indigo" />
          
          <div className="grid lg:grid-cols-2 gap-12">
            <Wireframe title="Enhanced Search Experience" tagStyle="destination">
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-indigo-500 to-purple-600 h-24 rounded flex items-center justify-center text-white font-bold text-sm">
                  AI-Powered Smart Search
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-indigo-50 border border-indigo-200 h-16 rounded flex items-center justify-center text-xs">
                    Mood-Based Filters
                  </div>
                  <div className="bg-indigo-50 border border-indigo-200 h-16 rounded flex items-center justify-center text-xs">
                    Price Transparency
                  </div>
                </div>
                <div className="bg-indigo-50 border border-indigo-200 h-20 rounded flex items-center justify-center text-xs">
                  Personalized Recommendations Engine
                </div>
              </div>
            </Wireframe>
            
            <Wireframe title="Streamlined Booking Flow" tagStyle="booking">
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-purple-500 to-pink-600 h-24 rounded flex items-center justify-center text-white font-bold text-sm">
                  One-Click Group Booking
                </div>
                <div className="space-y-2">
                  <div className="bg-purple-50 border border-purple-200 h-12 rounded flex items-center justify-center text-xs">
                    Guest Management Dashboard
                  </div>
                  <div className="bg-purple-50 border border-purple-200 h-12 rounded flex items-center justify-center text-xs">
                    Split Payment Options
                  </div>
                  <div className="bg-purple-50 border border-purple-200 h-12 rounded flex items-center justify-center text-xs">
                    Real-time Availability Sync
                  </div>
                </div>
              </div>
            </Wireframe>
          </div>
          
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <TrustFeature 
              title="Enhanced Communication"
              description="Real-time messaging with translation, video calls, and smart notifications"
              icon="💬"
            />
            <TrustFeature 
              title="Dynamic Pricing Intelligence"
              description="AI-driven pricing suggestions based on demand, events, and market trends"
              icon="💰"
            />
            <TrustFeature 
              title="Experience Curation"
              description="Personalized local recommendations and integrated experience booking"
              icon="🎯"
            />
          </div>
        </div>
      </section>

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
            <div className="w-full">
              <img 
                src="/lovable-uploads/8947f0d0-869a-412c-91b0-17e17f0d45ed.png" 
                alt="Feature Impact Map showing various features plotted on a chart with User Satisfaction vs Implementation Effort axes"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </Wireframe>
        </div>
      </section>

      {/* Prototyping Section */}
      <section className="section-container">
        <div className="animate-on-scroll">
          <SectionTitle title="7. Prototyping & Testing" subtitle="Iterative design and validation through user testing" accentColor="yellow" />
          
          <div className="grid lg:grid-cols-2 gap-12">
            <Wireframe title="Low-Fidelity Wireframes" tagStyle="destination">
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-gray-100 h-20 rounded border-2 border-dashed border-gray-300 flex items-center justify-center text-xs">
                    Header
                  </div>
                  <div className="bg-gray-100 h-20 rounded border-2 border-dashed border-gray-300 flex items-center justify-center text-xs">
                    Search
                  </div>
                  <div className="bg-gray-100 h-20 rounded border-2 border-dashed border-gray-300 flex items-center justify-center text-xs">
                    Filters
                  </div>
                </div>
                <div className="bg-gray-50 h-32 rounded border-2 border-dashed border-gray-300 flex items-center justify-center text-xs">
                  Results Grid Layout
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-gray-100 h-16 rounded border-2 border-dashed border-gray-300 flex items-center justify-center text-xs">
                    Pagination
                  </div>
                  <div className="bg-gray-100 h-16 rounded border-2 border-dashed border-gray-300 flex items-center justify-center text-xs">
                    Sort Options
                  </div>
                </div>
              </div>
            </Wireframe>
            
            <Wireframe title="High-Fidelity Prototype" tagStyle="booking">
              <div className="space-y-4">
                <ListingCard 
                  title="Cozy Downtown Loft"
                  location="San Francisco, CA"
                  price="$89"
                  rating="4.8"
                  image="/placeholder.svg"
                />
                <ListingCard 
                  title="Beachfront Villa"
                  location="Malibu, CA"
                  price="$245"
                  rating="4.9"
                  image="/placeholder.svg"
                />
              </div>
            </Wireframe>
          </div>
          
          <div className="mt-12">
            <Wireframe title="User Testing Results" className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-500 mb-2">87%</div>
                  <div className="text-sm text-gray-600">Task Completion Rate</div>
                  <div className="text-xs text-gray-500 mt-1">+23% improvement</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-500 mb-2">4.6/5</div>
                  <div className="text-sm text-gray-600">User Satisfaction Score</div>
                  <div className="text-xs text-gray-500 mt-1">+0.8 point increase</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-500 mb-2">34s</div>
                  <div className="text-sm text-gray-600">Average Time to Book</div>
                  <div className="text-xs text-gray-500 mt-1">-45% reduction</div>
                </div>
              </div>
            </Wireframe>
          </div>
        </div>
      </section>

      {/* Implementation Roadmap */}
      <section className="section-container bg-airbnb-light_gray">
        <div className="animate-on-scroll">
          <SectionTitle title="8. Implementation Roadmap" subtitle="Strategic phased approach to feature rollout and optimization" accentColor="teal" />
          
          <div className="space-y-8">
            <Wireframe title="Phase 1: Foundation (Q1 2024)" className="border-l-4 border-l-teal-500">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-teal-700">Core Infrastructure</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                      Enhanced search algorithm implementation
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                      Real-time pricing transparency system
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                      Improved mobile responsiveness
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-teal-700">Success Metrics</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Search conversion: +15%</li>
                    <li>• User satisfaction: +0.5 points</li>
                    <li>• Mobile engagement: +25%</li>
                  </ul>
                </div>
              </div>
            </Wireframe>
            
            <Wireframe title="Phase 2: Enhancement (Q2-Q3 2024)" className="border-l-4 border-l-blue-500">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-blue-700">Advanced Features</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      AI-powered personalization engine
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      Group booking and split payment
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      Enhanced communication tools
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-blue-700">Success Metrics</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Booking conversion: +20%</li>
                    <li>• Group bookings: +40%</li>
                    <li>• Host-guest satisfaction: +0.3 points</li>
                  </ul>
                </div>
              </div>
            </Wireframe>
            
            <Wireframe title="Phase 3: Innovation (Q4 2024)" className="border-l-4 border-l-purple-500">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-purple-700">Delighter Features</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                      Virtual reality property tours
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                      Sustainability scoring and badges
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                      Integrated local experience booking
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-purple-700">Success Metrics</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• User retention: +30%</li>
                    <li>• Experience bookings: +50%</li>
                    <li>• Brand differentiation score: +25%</li>
                  </ul>
                </div>
              </div>
            </Wireframe>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="section-container">
        <div className="animate-on-scroll">
          <SectionTitle title="9. Success Metrics & KPIs" subtitle="Measuring the impact of our design improvements" accentColor="red" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <MetricCard title="Conversion Rate" value="4.8%" trend="up" description="Search to booking conversion" />
            <MetricCard title="User Satisfaction" value="4.7/5" trend="up" description="Post-stay survey ratings" />
            <MetricCard title="Time to Book" value="3.2 min" trend="down" description="Average booking completion time" />
            <MetricCard title="Host Revenue" value="+18%" trend="up" description="Average monthly revenue increase" />
          </div>
          
          <Wireframe title="Success Metrics Dashboard" className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-4 text-gray-800">User Experience Metrics</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span className="text-sm">Task Success Rate</span>
                    <span className="font-semibold text-green-600">89%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span className="text-sm">Error Rate</span>
                    <span className="font-semibold text-red-600">2.1%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span className="text-sm">User Effort Score</span>
                    <span className="font-semibold text-blue-600">4.3/7</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-gray-800">Business Impact Metrics</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span className="text-sm">Revenue per User</span>
                    <span className="font-semibold text-green-600">+24%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span className="text-sm">Customer Lifetime Value</span>
                    <span className="font-semibold text-green-600">+31%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <span className="text-sm">Churn Rate</span>
                    <span className="font-semibold text-red-600">-12%</span>
                  </div>
                </div>
              </div>
            </div>
          </Wireframe>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
