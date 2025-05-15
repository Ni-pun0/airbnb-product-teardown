
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SectionTitle from '@/components/SectionTitle';
import Wireframe from '@/components/Wireframe';
import PersonaCard from '@/components/PersonaCard';
import FeatureCategory from '@/components/FeatureCategory';
import MetricCard from '@/components/MetricCard';
import UserJourneyStep from '@/components/UserJourneyStep';
import TrustFeature from '@/components/TrustFeature';
import ListingCard from '@/components/ListingCard';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const Index = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up');
            entry.target.classList.remove('opacity-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      el.classList.add('opacity-0');
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll('.animate-on-scroll').forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />

      {/* Overview Section */}
      <section id="overview" className="section-container">
        <div className="animate-on-scroll">
          <SectionTitle 
            title="1. Product Understanding & Overview" 
            subtitle="Airbnb is a two-sided marketplace that connects travelers with hosts offering unique accommodations around the world." 
          />

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Wireframe title="Platform Foundation">
              <div className="p-4 bg-airbnb-light_gray rounded-lg mb-4">
                <h4 className="font-semibold mb-2">Two-Sided Marketplace</h4>
                <p className="text-sm text-gray-700">Connects guests with hosts offering unique accommodations worldwide.</p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="p-4 bg-airbnb-light_gray rounded-lg">
                  <h4 className="font-semibold mb-2">Guests</h4>
                  <p className="text-sm text-gray-700">Travelers seeking immersive local stays</p>
                </div>
                <div className="p-4 bg-airbnb-light_gray rounded-lg">
                  <h4 className="font-semibold mb-2">Hosts</h4>
                  <p className="text-sm text-gray-700">Property owners monetizing spaces</p>
                </div>
              </div>

              <div className="card-highlight rounded">
                <p className="font-medium">This model hinges on mutual trust, seamless digital interfaces, and a sense of belonging.</p>
              </div>
            </Wireframe>

            <Wireframe title="Product Evolution">
              <div className="relative pl-8 before:absolute before:left-3 before:top-2 before:bottom-0 before:w-0.5 before:bg-gray-200">
                <div className="mb-6 relative">
                  <div className="absolute left-[-27px] top-0 w-4 h-4 rounded-full bg-airbnb"></div>
                  <h4 className="font-semibold mb-1">2008: Launch</h4>
                  <p className="text-sm text-gray-700">Room-renting startup with air mattresses</p>
                </div>
                <div className="mb-6 relative">
                  <div className="absolute left-[-27px] top-0 w-4 h-4 rounded-full bg-airbnb"></div>
                  <h4 className="font-semibold mb-1">2011-2015: Growth</h4>
                  <p className="text-sm text-gray-700">International expansion, mobile app launch</p>
                </div>
                <div className="mb-6 relative">
                  <div className="absolute left-[-27px] top-0 w-4 h-4 rounded-full bg-airbnb"></div>
                  <h4 className="font-semibold mb-1">2016-2019: Diversification</h4>
                  <p className="text-sm text-gray-700">Airbnb Experiences, Plus, and Luxe offerings</p>
                </div>
                <div className="relative">
                  <div className="absolute left-[-27px] top-0 w-4 h-4 rounded-full bg-airbnb"></div>
                  <h4 className="font-semibold mb-1">2020-Present: Adaptation</h4>
                  <p className="text-sm text-gray-700">Pandemic response, IPO, focus on long-term stays</p>
                </div>
              </div>
            </Wireframe>
          </div>
        </div>
      </section>

      {/* Market Analysis Section */}
      <section id="market" className="section-container bg-airbnb-light_gray">
        <div className="animate-on-scroll">
          <SectionTitle 
            title="2. Market & Competitive Analysis" 
            subtitle="Understanding Airbnb's position in the global hospitality marketplace" 
          />

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Wireframe title="Competitive Landscape">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 border rounded bg-white">
                  <h4 className="font-medium text-base mb-1">Booking.com</h4>
                  <p className="text-xs text-gray-600 mb-2">Broader travel services</p>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 w-4/5"></div>
                  </div>
                </div>
                <div className="p-4 border rounded bg-white">
                  <h4 className="font-medium text-base mb-1">Vrbo</h4>
                  <p className="text-xs text-gray-600 mb-2">Family-oriented rentals</p>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 w-3/5"></div>
                  </div>
                </div>
                <div className="p-4 border rounded bg-white">
                  <h4 className="font-medium text-base mb-1">Marriott Homes</h4>
                  <p className="text-xs text-gray-600 mb-2">Hotel-backed rentals</p>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-orange-500 w-2/5"></div>
                  </div>
                </div>
                <div className="p-4 border rounded bg-white">
                  <h4 className="font-medium text-base mb-1">Sonder</h4>
                  <p className="text-xs text-gray-600 mb-2">Standardized apartments</p>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-purple-500 w-1/3"></div>
                  </div>
                </div>
              </div>

              <h4 className="font-semibold mb-2">Airbnb Differentiators</h4>
              <ul className="text-sm space-y-2">
                <li className="flex gap-2">
                  <span className="text-airbnb">•</span>
                  <span>Focus on authenticity and local immersion</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-airbnb">•</span>
                  <span>Two-sided reputation system (reviews for hosts and guests)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-airbnb">•</span>
                  <span>UX that combines trust-building with aesthetic design</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-airbnb">•</span>
                  <span>Airbnb Experiences and boutique offerings (Luxe, Plus)</span>
                </li>
              </ul>
            </Wireframe>

            <div className="space-y-6">
              <Wireframe title="Market Trends">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    <span>Post-pandemic remote work culture driving extended stays</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                    <span>Shifts from urban tourism to rural retreats and unique stays</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="h-3 w-3 rounded-full bg-orange-500"></div>
                    <span>Increased scrutiny by cities around short-term rental regulations</span>
                  </div>
                </div>
              </Wireframe>

              <Wireframe title="Unique Value Proposition">
                <div className="p-5 bg-airbnb bg-opacity-5 rounded-lg border border-airbnb border-opacity-20">
                  <p className="italic text-center">
                    "Airbnb doesn't just provide a place to stay; it sells the idea of living like a local. This emotional, experience-first branding sets it apart from transactional booking platforms."
                  </p>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                  <div className="p-2 bg-airbnb-light_gray rounded">
                    <p className="text-xs font-medium">Authenticity</p>
                  </div>
                  <div className="p-2 bg-airbnb-light_gray rounded">
                    <p className="text-xs font-medium">Community</p>
                  </div>
                  <div className="p-2 bg-airbnb-light_gray rounded">
                    <p className="text-xs font-medium">Experience</p>
                  </div>
                </div>
              </Wireframe>
            </div>
          </div>
        </div>
      </section>

      {/* User Personas Section */}
      <section id="personas" className="section-container">
        <div className="animate-on-scroll">
          <SectionTitle 
            title="3. User Personas" 
            subtitle="Understanding key user segments and their unique needs" 
          />

          <Tabs defaultValue="guests" className="w-full mb-12">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="guests">Guest Personas</TabsTrigger>
              <TabsTrigger value="hosts">Host Personas</TabsTrigger>
            </TabsList>
            <TabsContent value="guests" className="mt-6">
              <div className="grid md:grid-cols-2 gap-8">
                <PersonaCard
                  name="Maya"
                  age={29}
                  role="Digital Nomad"
                  avatar="M"
                  needs={[
                    "Stylish, WiFi-enabled monthly stays",
                    "Flexible cancellation",
                    "Workspace-friendly accommodations"
                  ]}
                  motivations={[
                    "Work-travel lifestyle",
                    "Discovering new cultures",
                    "Community connections"
                  ]}
                  painPoints={[
                    "Inconsistent amenities",
                    "Lack of transparency",
                    "Unexpected fees"
                  ]}
                />
                <PersonaCard
                  name="Liam"
                  age={36}
                  role="Luxury Seeker"
                  avatar="L"
                  needs={[
                    "Exclusive, high-end curated stays",
                    "Concierge services",
                    "Premium amenities"
                  ]}
                  motivations={[
                    "Comfort and prestige",
                    "Frictionless experience",
                    "Unique, Instagram-worthy spaces"
                  ]}
                  painPoints={[
                    "Quality inconsistency vs. expectations",
                    "Service gaps compared to hotels",
                    "Availability in desired locations"
                  ]}
                />
              </div>
            </TabsContent>
            <TabsContent value="hosts" className="mt-6">
              <div className="grid md:grid-cols-2 gap-8">
                <PersonaCard
                  name="Jake"
                  age={42}
                  role="Property Manager"
                  avatar="J"
                  needs={[
                    "Reliable occupancy",
                    "Automated workflows",
                    "Revenue optimization tools"
                  ]}
                  motivations={[
                    "Business scalability",
                    "Passive income",
                    "Professional growth"
                  ]}
                  painPoints={[
                    "Damage claims",
                    "Regulatory compliance",
                    "Managing reviews and ratings"
                  ]}
                />
                <PersonaCard
                  name="Aisha"
                  age={31}
                  role="Occasional Host"
                  avatar="A"
                  needs={[
                    "Flexibility with calendar",
                    "Clear instructions",
                    "Helpful community"
                  ]}
                  motivations={[
                    "Supplemental income",
                    "Cultural exchange",
                    "Property utilization"
                  ]}
                  painPoints={[
                    "Setup complexity",
                    "Safety concerns",
                    "Guest communication management"
                  ]}
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Trust & Safety Section */}
      <section id="trust" className="section-container bg-airbnb-light_gray">
        <div className="animate-on-scroll">
          <SectionTitle 
            title="4. Trust, Safety & Community" 
            subtitle="Elements that help Airbnb shift the narrative from 'rental app' to 'community you can trust'" 
          />

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <TrustFeature
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>}
              title="Verified IDs"
              description="Background checks help ensure safe interactions between users"
            />
            <TrustFeature
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"></path><path d="M10 2c1 .5 2 2 2 5"></path></svg>}
              title="Guest & Host Reviews"
              description="Bilateral accountability through detailed review system"
            />
            <TrustFeature
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path></svg>}
              title="Secure Payments"
              description="Escrow-style payment system with cancellation protections"
            />
            <TrustFeature
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>}
              title="Host Guarantee"
              description="Up to $3 million protection for property damages"
            />
            <TrustFeature
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 6.1H3"></path><path d="M21 12.1H3"></path><path d="M15.1 18H3"></path></svg>}
              title="Community Center"
              description="Discussion forums and peer-to-peer support network"
            />
            <TrustFeature
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m8 3 4 8 5-5 5 15H2L8 3z"></path></svg>}
              title="Inclusivity Pledge"
              description="Platform-wide culture of respect and belonging"
            />
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-center mb-6">
              <div className="h-12 w-12 rounded-full bg-airbnb text-white flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
              </div>
              <h3 className="text-xl font-semibold">Trust-Building Design Elements</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="bg-airbnb-light_gray p-4 rounded-lg">
                <h4 className="font-medium mb-2">Visual Transparency</h4>
                <p className="text-sm text-gray-600">High-quality photos, verified badges, and clear policies</p>
              </div>
              <div className="bg-airbnb-light_gray p-4 rounded-lg">
                <h4 className="font-medium mb-2">Communication Tools</h4>
                <p className="text-sm text-gray-600">Secure messaging, quick response indicators, live support</p>
              </div>
              <div className="bg-airbnb-light_gray p-4 rounded-lg">
                <h4 className="font-medium mb-2">Risk Reduction</h4>
                <p className="text-sm text-gray-600">Damage deposits, guest verification, dispute resolution</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Journey Section */}
      <section id="journey" className="section-container">
        <div className="animate-on-scroll">
          <SectionTitle 
            title="5. User Journey Mapping" 
            subtitle="Following the path of both guests and hosts through the Airbnb experience" 
          />

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Wireframe title="Guest Journey">
              <div className="py-2">
                <UserJourneyStep 
                  step={1} 
                  title="Discover" 
                  description="Search, browse categories, or explore based on mood and inspiration" 
                />
                <UserJourneyStep 
                  step={2} 
                  title="Filter & Select" 
                  description="Use filters like pet-friendly, beachfront, or price range to narrow options" 
                />
                <UserJourneyStep 
                  step={3} 
                  title="Deep-dive into Listing" 
                  description="Review photos, amenities, house rules, cancellation policy, and host profile" 
                />
                <UserJourneyStep 
                  step={4} 
                  title="Book" 
                  description="Use Instant Book or send inquiry to host with questions" 
                />
                <UserJourneyStep 
                  step={5} 
                  title="Pre-arrival" 
                  description="Message with host, receive check-in details, and sync calendar" 
                />
                <UserJourneyStep 
                  step={6} 
                  title="Stay Experience" 
                  description="Access property, enjoy amenities, potentially message host with issues" 
                />
                <UserJourneyStep 
                  step={7} 
                  title="Post-stay" 
                  description="Leave review, receive follow-ups, save to wishlist for future stays" 
                  isLast={true}
                />
              </div>
            </Wireframe>

            <Wireframe title="Host Journey">
              <div className="py-2">
                <UserJourneyStep 
                  step={1} 
                  title="Create Listing" 
                  description="Add photos, description with AI suggestions, set house rules" 
                />
                <UserJourneyStep 
                  step={2} 
                  title="Configure Settings" 
                  description="Set availability calendar, pricing strategy, and cancellation policy" 
                />
                <UserJourneyStep 
                  step={3} 
                  title="Manage Inquiries" 
                  description="Respond to booking requests and guest questions" 
                />
                <UserJourneyStep 
                  step={4} 
                  title="Pre-arrival Prep" 
                  description="Clean property, prepare check-in information, send welcome message" 
                />
                <UserJourneyStep 
                  step={5} 
                  title="Host the Stay" 
                  description="Provide support as needed, manage issues if they arise" 
                />
                <UserJourneyStep 
                  step={6} 
                  title="Post-stay" 
                  description="Review guest, prepare for next booking, receive payment" 
                />
                <UserJourneyStep 
                  step={7} 
                  title="Analytics & Optimization" 
                  description="Review performance, adjust pricing, improve listing based on feedback" 
                  isLast={true}
                />
              </div>
            </Wireframe>
          </div>
        </div>
      </section>

      {/* Feature Prioritization Section */}
      <section className="section-container bg-airbnb-light_gray">
        <div className="animate-on-scroll">
          <SectionTitle 
            title="6. Feature Prioritization" 
            subtitle="Using the Kano Model to understand feature importance" 
          />

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <FeatureCategory
              title="Must-Have Features"
              features={[
                "Secure payments",
                "Search, filters, reviews",
                "Calendar and availability management",
                "Messaging system",
                "Photo uploads and management"
              ]}
              color="text-airbnb"
            />
            <FeatureCategory
              title="Performance Features"
              features={[
                "Dynamic pricing",
                "Personalized home page & recommendations",
                "Communication automation",
                "Virtual tours",
                "Mobile app functionality"
              ]}
              color="text-blue-500"
            />
            <FeatureCategory
              title="Delighter Features"
              features={[
                "Airbnb Experiences & Adventures",
                "Group planning tools",
                "Sustainability filters and eco-badges",
                "Wishlist reminders with price drops",
                "Local guidebooks and insider tips"
              ]}
              color="text-green-500"
            />
          </div>

          <Wireframe className="max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold mb-4">Feature Impact Map</h3>
            <div className="relative h-80 border border-gray-200 rounded">
              <div className="absolute top-0 left-0 w-full h-full p-4">
                {/* Y-axis label */}
                <div className="absolute -left-12 top-1/2 -translate-y-1/2 transform rotate-90 text-sm text-gray-500">
                  User Satisfaction
                </div>
                
                {/* X-axis label */}
                <div className="absolute bottom-[-28px] left-1/2 -translate-x-1/2 text-sm text-gray-500">
                  Implementation Effort
                </div>
                
                {/* Quadrant labels */}
                <div className="absolute top-2 left-2 text-xs font-semibold">High Value, Low Effort</div>
                <div className="absolute top-2 right-2 text-xs font-semibold">High Value, High Effort</div>
                <div className="absolute bottom-2 left-2 text-xs font-semibold">Low Value, Low Effort</div>
                <div className="absolute bottom-2 right-2 text-xs font-semibold">Low Value, High Effort</div>
                
                {/* Grid lines */}
                <div className="absolute top-1/2 left-0 w-full h-px bg-gray-200"></div>
                <div className="absolute top-0 left-1/2 h-full w-px bg-gray-200"></div>
                
                {/* Feature dots */}
                <div className="absolute top-[20%] left-[25%] h-4 w-4 rounded-full bg-airbnb" title="Secure Payments"></div>
                <div className="absolute top-[15%] left-[70%] h-4 w-4 rounded-full bg-blue-500" title="AI Recommendations"></div>
                <div className="absolute top-[30%] left-[40%] h-4 w-4 rounded-full bg-airbnb" title="Reviews"></div>
                <div className="absolute top-[25%] left-[85%] h-4 w-4 rounded-full bg-green-500" title="Virtual Tours"></div>
                <div className="absolute top-[40%] left-[20%] h-4 w-4 rounded-full bg-airbnb" title="Messaging"></div>
                <div className="absolute top-[60%] left-[30%] h-4 w-4 rounded-full bg-blue-500" title="Calendar Sync"></div>
                <div className="absolute top-[35%] left-[60%] h-4 w-4 rounded-full bg-blue-500" title="Dynamic Pricing"></div>
                <div className="absolute top-[45%] left-[75%] h-4 w-4 rounded-full bg-green-500" title="Experiences"></div>
                <div className="absolute top-[70%] left-[65%] h-4 w-4 rounded-full bg-green-500" title="Sustainability Badges"></div>
                <div className="absolute top-[80%] left-[45%] h-4 w-4 rounded-full bg-green-500" title="Group Planning"></div>
                <div className="absolute top-[75%] left-[15%] h-4 w-4 rounded-full bg-blue-500" title="Wishlists"></div>
              </div>
            </div>
          </Wireframe>
        </div>
      </section>

      {/* Personalization Section */}
      <section className="section-container">
        <div className="animate-on-scroll">
          <SectionTitle 
            title="7. Personalization & Retention Tactics" 
            subtitle="How Airbnb creates tailored experiences to keep users coming back" 
          />

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Wireframe>
              <h3 className="text-lg font-semibold mb-4">Personalized Discovery</h3>
              
              <div className="border-b pb-4 mb-4">
                <h4 className="font-medium mb-2">Search Screen</h4>
                <div className="wireframe p-4">
                  <div className="flex flex-col gap-4">
                    <div className="h-10 bg-gray-100 rounded flex items-center px-4">
                      <span className="text-sm text-gray-500">Search destinations</span>
                    </div>
                    
                    <div className="flex gap-2 overflow-x-auto pb-2">
                      <div className="flex-shrink-0 p-2 border rounded-full text-xs whitespace-nowrap">All homes</div>
                      <div className="flex-shrink-0 p-2 border rounded-full text-xs whitespace-nowrap bg-airbnb text-white">Beach</div>
                      <div className="flex-shrink-0 p-2 border rounded-full text-xs whitespace-nowrap">Cabins</div>
                      <div className="flex-shrink-0 p-2 border rounded-full text-xs whitespace-nowrap">Design</div>
                      <div className="flex-shrink-0 p-2 border rounded-full text-xs whitespace-nowrap">Tiny homes</div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <div className="aspect-square bg-gray-100 rounded"></div>
                      <div className="aspect-square bg-gray-100 rounded"></div>
                      <div className="aspect-square bg-gray-100 rounded"></div>
                      <div className="aspect-square bg-gray-100 rounded"></div>
                    </div>
                    
                    <div className="card-highlight">
                      <p className="text-sm">Because you stayed in <b>Barcelona</b> last summer</p>
                    </div>
                    
                    <div className="flex gap-2 overflow-x-auto pb-2">
                      <ListingCard
                        image="📷"
                        title="Beach Villa"
                        location="Costa Brava, Spain"
                        price="$120"
                        rating={4.9}
                        reviewCount={128}
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              <h4 className="font-medium mb-2">AI-Powered Personalization</h4>
              <div className="space-y-2">
                <div className="flex gap-2 items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-airbnb"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><circle cx="12" cy="12" r="3"></circle></svg>
                  <p className="text-sm">Recommends listings based on past behavior</p>
                </div>
                <div className="flex gap-2 items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-airbnb"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><path d="m21 15-5-5L5 21"></path></svg>
                  <p className="text-sm">Surfaces similar destinations to previous searches</p>
                </div>
                <div className="flex gap-2 items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-airbnb"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z"></path><path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>
                  <p className="text-sm">Learns preferences for amenities and property types</p>
                </div>
              </div>
            </Wireframe>

            <Wireframe>
              <h3 className="text-lg font-semibold mb-4">Retention Strategies</h3>
              
              <div className="space-y-5">
                <div className="p-4 border rounded-md">
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-airbnb"><path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path><path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"></path><path d="M12 3v6"></path></svg>
                    Behavior-based Nudges
                  </h4>
                  <div className="text-sm space-y-2">
                    <p className="flex gap-1 items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-airbnb"></span>
                      "Book now, 3 others viewing this property"
                    </p>
                    <p className="flex gap-1 items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-airbnb"></span>
                      "You stayed nearby last year"
                    </p>
                    <p className="flex gap-1 items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-airbnb"></span>
                      "Prices for your dates are 15% lower than average"
                    </p>
                  </div>
                </div>
                
                <div className="p-4 border rounded-md">
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-airbnb"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
                    Wishlist Dynamics
                  </h4>
                  <div className="text-sm space-y-2">
                    <p className="flex gap-1 items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-airbnb"></span>
                      "Price drop on your saved Paris apartment"
                    </p>
                    <p className="flex gap-1 items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-airbnb"></span>
                      "3 new listings match your wishlist criteria"
                    </p>
                    <p className="flex gap-1 items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-airbnb"></span>
                      "Only 2 days left at this rate for your saved stay"
                    </p>
                  </div>
                </div>
                
                <div className="p-4 border rounded-md">
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-airbnb"><path d="M12 8c-2.8 0-5 1.7-5 4s2.2 4 5 4 5-1.7 5-4-2.2-4-5-4Z"></path><path d="M8.5 8.5v7"></path><path d="M15.5 8.5v7"></path><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M2 10h2"></path><path d="M20 10h2"></path></svg>
                    Loyalty Programs
                  </h4>
                  <div className="text-sm space-y-2">
                    <p className="flex gap-1 items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-airbnb"></span>
                      "Frequent traveler benefits (early access, discounts)"
                    </p>
                    <p className="flex gap-1 items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-airbnb"></span>
                      "Tiered perks for repeat guests and superhosts"
                    </p>
                    <p className="flex gap-1 items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-airbnb"></span>
                      "Anniversary bonuses for platform loyalty"
                    </p>
                  </div>
                </div>
              </div>
            </Wireframe>
          </div>
        </div>
      </section>

      {/* Technology & UX Section */}
      <section className="section-container bg-airbnb-light_gray">
        <div className="animate-on-scroll">
          <SectionTitle 
            title="8. Technology & UX" 
            subtitle="Exploring the technical and design foundations of Airbnb's platform" 
          />

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <Wireframe title="Mobile-First Design">
                <div className="flex justify-center py-6">
                  <div className="w-[240px] border-8 border-gray-800 rounded-3xl overflow-hidden shadow-lg">
                    <div className="bg-white h-[400px] relative">
                      {/* Status bar */}
                      <div className="h-6 bg-gray-100 flex items-center justify-between px-3 text-[10px]">
                        <span>9:41</span>
                        <div className="flex gap-1">
                          <span>📶</span>
                          <span>🔋</span>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="p-3 space-y-3">
                        <div className="h-8 bg-gray-100 rounded-full flex items-center px-3">
                          <span className="text-xs text-gray-500">Where to?</span>
                        </div>
                        
                        <div className="flex gap-2 overflow-x-auto pb-2">
                          <div className="flex-shrink-0 flex flex-col items-center">
                            <div className="h-12 w-12 bg-gray-200 rounded-lg mb-1"></div>
                            <span className="text-[10px]">Beach</span>
                          </div>
                          <div className="flex-shrink-0 flex flex-col items-center">
                            <div className="h-12 w-12 bg-gray-200 rounded-lg mb-1"></div>
                            <span className="text-[10px]">Cabin</span>
                          </div>
                          <div className="flex-shrink-0 flex flex-col items-center">
                            <div className="h-12 w-12 bg-gray-200 rounded-lg mb-1"></div>
                            <span className="text-[10px]">Design</span>
                          </div>
                          <div className="flex-shrink-0 flex flex-col items-center">
                            <div className="h-12 w-12 bg-gray-200 rounded-lg mb-1"></div>
                            <span className="text-[10px]">Pool</span>
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          <div>
                            <div className="aspect-video bg-gray-200 rounded-lg mb-2"></div>
                            <div className="flex justify-between">
                              <div>
                                <p className="text-[11px] font-medium">Malibu Beach House</p>
                                <p className="text-[10px] text-gray-500">$250 night</p>
                              </div>
                              <div className="flex items-center">
                                <span className="text-[10px]">★ 4.9</span>
                              </div>
                            </div>
                          </div>
                          
                          <div>
                            <div className="aspect-video bg-gray-200 rounded-lg mb-2"></div>
                            <div className="flex justify-between">
                              <div>
                                <p className="text-[11px] font-medium">Mountain Retreat</p>
                                <p className="text-[10px] text-gray-500">$180 night</p>
                              </div>
                              <div className="flex items-center">
                                <span className="text-[10px]">★ 4.8</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Bottom nav */}
                      <div className="absolute bottom-0 left-0 right-0 h-14 border-t flex items-center justify-around px-3">
                        <div className="flex flex-col items-center">
                          <div className="h-5 w-5 bg-airbnb rounded-full"></div>
                          <span className="text-[8px]">Explore</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="h-5 w-5 bg-gray-200 rounded-full"></div>
                          <span className="text-[8px]">Wishlists</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="h-5 w-5 bg-gray-200 rounded-full"></div>
                          <span className="text-[8px]">Trips</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="h-5 w-5 bg-gray-200 rounded-full"></div>
                          <span className="text-[8px]">Inbox</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="h-5 w-5 bg-gray-200 rounded-full"></div>
                          <span className="text-[8px]">Profile</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Wireframe>
              
              <Wireframe title="AI/ML Technology">
                <div className="space-y-3 text-sm">
                  <div className="p-3 border border-airbnb border-opacity-20 bg-airbnb bg-opacity-5 rounded-lg">
                    <h4 className="font-medium mb-1">Dynamic Pricing Tool</h4>
                    <p>AI-driven pricing recommendations based on market demand, seasonality, and comparable listings</p>
                  </div>
                  <div className="p-3 border border-airbnb border-opacity-20 bg-airbnb bg-opacity-5 rounded-lg">
                    <h4 className="font-medium mb-1">Personalization Engine</h4>
                    <p>Machine learning algorithms that tailor search results and recommendations to user preferences</p>
                  </div>
                  <div className="p-3 border border-airbnb border-opacity-20 bg-airbnb bg-opacity-5 rounded-lg">
                    <h4 className="font-medium mb-1">Content Moderation</h4>
                    <p>Automated systems that detect inappropriate imagery and language in listings and reviews</p>
                  </div>
                </div>
              </Wireframe>
            </div>
            
            <div className="space-y-6">
              <Wireframe title="UX Principles">
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="h-10 w-10 rounded-full bg-airbnb bg-opacity-10 text-airbnb flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5l9 4-9 4-9-4l9-4"></path><path d="M12 13v6"></path><path d="M20 10v4l-8 3-8-3v-4"></path></svg>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Frictionless Booking Flow</h4>
                      <p className="text-sm text-gray-600">Streamlined checkout process with minimal steps and clear progress indicators</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="h-10 w-10 rounded-full bg-airbnb bg-opacity-10 text-airbnb flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Transparent Information Architecture</h4>
                      <p className="text-sm text-gray-600">Clear display of pricing, policies, and house rules to build trust</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="h-10 w-10 rounded-full bg-airbnb bg-opacity-10 text-airbnb flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 22h.5c.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4V7.5L14.5 2H6c-.5 0-1 .2-1.4.6C4.2 3 4 3.5 4 4v3"></path><polyline points="14 2 14 8 20 8"></polyline><path d="M10.2 13.3a7 7 0 0 0-5.9-1.2A4.9 4.9 0 0 0 2 16.2V17c0 1.1.9 2 2 2h7.7"></path><circle cx="9" cy="9" r="2"></circle><path d="M16 19h6"></path><path d="M19 16v6"></path></svg>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Visual Storytelling</h4>
                      <p className="text-sm text-gray-600">High-quality photography and immersive visual presentation of listings</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="h-10 w-10 rounded-full bg-airbnb bg-opacity-10 text-airbnb flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 9V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1"></path><path d="m2 13 6 6"></path><path d="m8 13-6 6"></path></svg>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Accessibility Design</h4>
                      <p className="text-sm text-gray-600">Features for differently-abled users, including screen reader support and keyboard navigation</p>
                    </div>
                  </div>
                </div>
              </Wireframe>
              
              <Wireframe title="Emerging Technologies">
                <div className="space-y-4">
                  <div className="p-3 bg-white border rounded-lg">
                    <h4 className="font-medium mb-2 flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                      <span className="text-purple-500">AR/VR Technology</span>
                    </h4>
                    <p className="text-sm mb-2">Virtual walkthroughs of properties before booking, allowing guests to explore spaces remotely</p>
                    <div className="h-24 bg-purple-50 rounded flex items-center justify-center">
                      <span className="text-xs text-purple-400">AR Preview Prototype</span>
                    </div>
                  </div>
                  
                  <div className="p-3 bg-white border rounded-lg">
                    <h4 className="font-medium mb-1 flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><line x1="12" x2="12" y1="22" y2="12"></line></svg>
                      <span className="text-blue-500">AI Concierge</span>
                    </h4>
                    <p className="text-sm">Intelligent assistant providing real-time support, local recommendations, and issue resolution during stays</p>
                  </div>
                </div>
              </Wireframe>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="section-container">
        <div className="animate-on-scroll">
          <SectionTitle 
            title="9. Metrics That Matter" 
            subtitle="Key performance indicators that drive Airbnb's business decisions" 
          />

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <MetricCard
              title="Guest Metrics"
              metrics={[
                "Conversion Rate from search to booking",
                "NPS and star rating distribution",
                "Average Booking Value and Length of Stay",
                "Wishlist interaction to booking ratio"
              ]}
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>}
            />
            
            <MetricCard
              title="Host Metrics"
              metrics={[
                "Average Occupancy Rate",
                "Cancellation Rate",
                "Time to Respond to Inquiries",
                "Host Retention & Superhost conversion"
              ]}
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>}
            />
            
            <MetricCard
              title="Platform Metrics"
              metrics={[
                "Experience Attach Rate (bundled bookings)",
                "Referral Conversions",
                "Listing-to-Booking Time",
                "Expansion in Tier 2/3 cities and rural areas"
              ]}
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>}
            />
          </div>
          
          <Wireframe className="max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold mb-4">Growth Indicators Dashboard</h3>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-medium mb-2">Booking Conversion Funnel</h4>
                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span>Search</span>
                      <span>100%</span>
                    </div>
                    <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-airbnb w-full"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span>View Listing</span>
                      <span>42%</span>
                    </div>
                    <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-airbnb w-5/12"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span>Date Selection</span>
                      <span>18%</span>
                    </div>
                    <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-airbnb w-2/12"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span>Booking Completion</span>
                      <span>8%</span>
                    </div>
                    <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-airbnb w-1/12"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium mb-2">Retention by User Type</h4>
                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span>First-Time Guests</span>
                      <span>32%</span>
                    </div>
                    <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 w-3/12"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span>Repeat Guests</span>
                      <span>68%</span>
                    </div>
                    <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 w-8/12"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span>New Hosts</span>
                      <span>24%</span>
                    </div>
                    <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 w-1/4"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span>Experienced Hosts</span>
                      <span>84%</span>
                    </div>
                    <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 w-10/12"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Wireframe>
        </div>
      </section>

      {/* Challenges & Opportunities Section */}
      <section className="section-container bg-airbnb-light_gray">
        <div className="animate-on-scroll">
          <SectionTitle 
            title="10. Challenges & Future Opportunities" 
            subtitle="Navigating obstacles and exploring new horizons for growth" 
          />

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Wireframe title="Key Challenges">
              <div className="space-y-4">
                <div className="p-4 bg-red-50 rounded-lg border border-red-100">
                  <h4 className="font-medium mb-1 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path><path d="m14.5 9-5 5"></path><path d="m9.5 9 5 5"></path></svg>
                    <span>Regulatory Backlash</span>
                  </h4>
                  <p className="text-sm">Increasing restrictions in major cities (NYC, Barcelona, Paris) limiting short-term rentals</p>
                </div>
                
                <div className="p-4 bg-orange-50 rounded-lg border border-orange-100">
                  <h4 className="font-medium mb-1 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500"><path d="M7 11V7a5 5 0 0 1 10 0v4"></path><rect width="20" height="8" x="2" y="11" rx="2"></rect><path d="M10 19v-2a2 2 0 0 1 4 0v2"></path></svg>
                    <span>Quality Inconsistency</span>
                  </h4>
                  <p className="text-sm">Maintaining consistent quality standards across millions of global listings</p>
                </div>
                
                <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-100">
                  <h4 className="font-medium mb-1 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>
                    <span>Managing Disputes</span>
                  </h4>
                  <p className="text-sm">Handling guest/host conflicts at scale while maintaining platform trust</p>
                </div>
                
                <div className="p-4 bg-purple-50 rounded-lg border border-purple-100">
                  <h4 className="font-medium mb-1 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500"><path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08"></path><path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z"></path></svg>
                    <span>Fraud & Scams</span>
                  </h4>
                  <p className="text-sm">Combating sophisticated fraud attempts and fake listings</p>
                </div>
              </div>
            </Wireframe>
            
            <Wireframe title="Future Opportunities">
              <div className="space-y-4">
                <div className="p-4 bg-green-50 rounded-lg border border-green-100">
                  <h4 className="font-medium mb-1 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500"><circle cx="12" cy="12" r="10"></circle><path d="m4.9 4.9 14.2 14.2"></path></svg>
                    <span>AR/VR Previews</span>
                  </h4>
                  <p className="text-sm">Virtual reality tours to verify and explore listings before booking</p>
                </div>
                
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                  <h4 className="font-medium mb-1 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path></svg>
                    <span>Hyperlocal Bundles</span>
                  </h4>
                  <p className="text-sm">Combining stays with local transport, activities, and exclusive neighborhood access</p>
                </div>
                
                <div className="p-4 bg-teal-50 rounded-lg border border-teal-100">
                  <h4 className="font-medium mb-1 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-500"><path d="M2 22a8 8 0 1 1 16 0H2z"></path><path d="M16 8a6 6 0 0 1 6 6c0 4-3 6-6 6H2"></path><path d="M6.8 5C6.3 3.15 5.1 2 3.5 2"></path><path d="M instanceof 18a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path></svg>
                    <span>Eco-Certification</span>
                  </h4>
                  <p className="text-sm">Sustainability scoring and badges for environmentally conscious travelers</p>
                </div>
                
                <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-100">
                  <h4 className="font-medium mb-1 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-500"><rect x="3" y="8" width="18" height="12" rx="1"></rect><path d="M10 8V5c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v3"></path><path d="m7 15 5-3 5 3"></path></svg>
                    <span>Remote Work Hubs</span>
                  </h4>
                  <p className="text-sm">Long-stay promotions with coworking access and digital nomad communities</p>
                </div>
              </div>
            </Wireframe>
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section id="conclusion" className="section-container">
        <div className="animate-on-scroll">
          <SectionTitle 
            title="Conclusion" 
            subtitle="Understanding the lessons from Airbnb's product journey" 
          />

          <Card className="max-w-4xl mx-auto">
            <CardContent className="pt-6">
              <p className="mb-6 leading-relaxed">
                Airbnb's success lies in transforming ordinary travel into personalized, community-rooted experiences. By doubling down on trust, usability, and discovery, it redefines modern hospitality. Future growth depends on hyper-personalization, stronger ecosystem integrations, and navigating regulatory complexity with innovation and transparency.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="p-4 bg-airbnb-light_gray rounded-lg text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-2 text-airbnb"><path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path></svg>
                  <h3 className="font-semibold mb-1">Trust Is Paramount</h3>
                  <p className="text-sm text-gray-600">Reputation systems and safety features are the foundation of the platform</p>
                </div>
                <div className="p-4 bg-airbnb-light_gray rounded-lg text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-2 text-airbnb"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                  <h3 className="font-semibold mb-1">Two-Sided Balance</h3>
                  <p className="text-sm text-gray-600">Success requires equal focus on guest and host experiences</p>
                </div>
                <div className="p-4 bg-airbnb-light_gray rounded-lg text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-2 text-airbnb"><path d="M15 2H9a1 1 0 0 0-1 1v2c0 .6.4 1 1 1h6c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1Z"></path><path d="M8 5v14c0 .6.4 1 1 1h2"></path><path d="M20 5v16c0 1.1-.9 2-2 2h-6c-1.1 0-2-.9-2-2v-6c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v0c0 1.1-.9 2-2 2h-2"></path></svg>
                  <h3 className="font-semibold mb-1">Beyond Transactions</h3>
                  <p className="text-sm text-gray-600">Creating emotional connections and memorable experiences</p>
                </div>
              </div>

              <Separator className="my-6" />

              <h3 className="text-lg font-semibold mb-4">Key Product Learnings</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-airbnb mt-1"><path d="M5 12l5 5L20 7"></path></svg>
                  <span>Visual design and usability directly impact trust and conversion</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-airbnb mt-1"><path d="M5 12l5 5L20 7"></path></svg>
                  <span>Community-building features turn users into brand advocates</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-airbnb mt-1"><path d="M5 12l5 5L20 7"></path></svg>
                  <span>Personalization at scale requires sophisticated data infrastructure</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-airbnb mt-1"><path d="M5 12l5 5L20 7"></path></svg>
                  <span>Product evolution must anticipate regulatory challenges, not just react to them</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
