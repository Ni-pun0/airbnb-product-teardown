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
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-up');
          entry.target.classList.remove('opacity-0');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      el.classList.add('opacity-0');
      observer.observe(el);
    });
    return () => {
      document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);
  return <div className="min-h-screen bg-white">
      <Header />
      <Hero />

      {/* Overview Section */}
      <section id="overview" className="section-container">
        <div className="animate-on-scroll">
          <SectionTitle title="1. Product Understanding & Overview" subtitle="Airbnb is a two-sided marketplace that connects travelers with hosts offering unique accommodations around the world." accentColor="airbnb" />

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Wireframe title="Platform Foundation" tagStyle="destination">
              <div className="p-4 bg-airbnb-light_gray rounded-lg mb-4">
                <h4 className="font-semibold mb-2">Two-Sided Marketplace</h4>
                <p className="text-sm text-gray-700">Connects guests with hosts offering unique accommodations worldwide.</p>
                <div className="mt-2 text-xs font-bold text-airbnb">7+ million listings globally</div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="p-4 bg-airbnb-light_gray rounded-lg">
                  <h4 className="font-semibold mb-2">Guests</h4>
                  <p className="text-sm text-gray-700">Travelers seeking immersive local stays</p>
                  <div className="mt-2 text-xs font-bold text-airbnb">150M+ active users</div>
                </div>
                <div className="p-4 bg-airbnb-light_gray rounded-lg">
                  <h4 className="font-semibold mb-2">Hosts</h4>
                  <p className="text-sm text-gray-700">Property owners monetizing spaces</p>
                  <div className="mt-2 text-xs font-bold text-airbnb">4M+ active hosts</div>
                </div>
              </div>

              <div className="card-highlight rounded bg-airbnb bg-opacity-5 border border-airbnb border-opacity-20 p-4">
                <p className="font-medium">This model hinges on mutual trust, seamless digital interfaces, and a sense of belonging.</p>
                <div className="mt-2 grid grid-cols-3 gap-2">
                  <div className="bg-white p-2 rounded text-center">
                    <div className="text-airbnb font-bold">220+</div>
                    <div className="text-xs">Countries</div>
                  </div>
                  <div className="bg-white p-2 rounded text-center">
                    <div className="text-airbnb font-bold">100K+</div>
                    <div className="text-xs">Cities</div>
                  </div>
                  <div className="bg-white p-2 rounded text-center">
                    <div className="text-airbnb font-bold">$130B+</div>
                    <div className="text-xs">Valuation</div>
                  </div>
                </div>
              </div>
            </Wireframe>

            <Wireframe title="Product Evolution" tagStyle="flight">
              <div className="relative pl-8 before:absolute before:left-3 before:top-2 before:bottom-0 before:w-0.5 before:bg-gray-200">
                <div className="mb-6 relative">
                  <div className="absolute left-[-27px] top-0 w-5 h-5 rounded-full bg-airbnb flex items-center justify-center text-white text-xs font-bold">1</div>
                  <h4 className="font-semibold mb-1">2008: Launch</h4>
                  <p className="text-sm text-gray-700">Room-renting startup with air mattresses</p>
                  <div className="mt-1 px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full inline-block">Y Combinator funding</div>
                </div>
                <div className="mb-6 relative">
                  <div className="absolute left-[-27px] top-0 w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold">2</div>
                  <h4 className="font-semibold mb-1">2011-2015: Growth</h4>
                  <p className="text-sm text-gray-700">International expansion, mobile app launch</p>
                  <div className="mt-1 px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full inline-block">1M+ bookings by 2011</div>
                </div>
                <div className="mb-6 relative">
                  <div className="absolute left-[-27px] top-0 w-5 h-5 rounded-full bg-purple-600 flex items-center justify-center text-white text-xs font-bold">3</div>
                  <h4 className="font-semibold mb-1">2016-2019: Diversification</h4>
                  <p className="text-sm text-gray-700">Airbnb Experiences, Plus, and Luxe offerings</p>
                  <div className="mt-1 px-2 py-0.5 bg-purple-100 text-purple-700 text-xs rounded-full inline-block">5.8M users by 2018</div>
                </div>
                <div className="relative">
                  <div className="absolute left-[-27px] top-0 w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center text-white text-xs font-bold">4</div>
                  <h4 className="font-semibold mb-1">2020-Present: Adaptation</h4>
                  <p className="text-sm text-gray-700">Pandemic response, IPO, focus on long-term stays</p>
                  <div className="mt-1 px-2 py-0.5 bg-orange-100 text-orange-700 text-xs rounded-full inline-block">IPO Nov 2020</div>
                </div>
                
                {/* Evolution of logo */}
                <div className="mt-6 pt-4 border-t">
                  <h4 className="text-xs font-medium text-gray-500">BRAND EVOLUTION</h4>
                  <div className="flex items-center justify-between mt-2 space-x-2">
                    <div className="text-center">
                      <div className="h-6 bg-cyan-100 text-cyan-800 text-[10px] p-1 rounded">2007-2009</div>
                      <p className="text-[8px] mt-1">AirBed&Breakfast</p>
                    </div>
                    <div className="text-center">
                      <div className="h-6 bg-cyan-100 text-cyan-800 text-[10px] p-1 rounded">2010-2013</div>
                      <p className="text-[8px] mt-1">airbnb</p>
                    </div>
                    <div className="text-center">
                      <div className="h-6 bg-cyan-100 text-cyan-800 text-[10px] p-1 rounded">2014-now</div>
                      <p className="text-[8px] mt-1">Bélo Logo</p>
                    </div>
                  </div>
                </div>
              </div>
            </Wireframe>
          </div>
        </div>
      </section>

      {/* Market Analysis Section */}
      <section id="market" className="section-container bg-airbnb-light_gray">
        <div className="animate-on-scroll">
          <SectionTitle title="2. Market & Competitive Analysis" subtitle="Understanding Airbnb's position in the global hospitality marketplace" accentColor="blue" />

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Wireframe title="Competitive Landscape" tagStyle="booking">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 border rounded bg-white">
                  <div className="flex justify-between mb-1">
                    <h4 className="font-medium text-base">Booking.com</h4>
                    <div className="text-xs font-bold bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">28M listings</div>
                  </div>
                  <p className="text-xs text-gray-600 mb-2">Broader travel services</p>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 w-4/5"></div>
                  </div>
                </div>
                <div className="p-4 border rounded bg-white">
                  <div className="flex justify-between mb-1">
                    <h4 className="font-medium text-base">Vrbo</h4>
                    <div className="text-xs font-bold bg-green-100 text-green-800 px-2 py-0.5 rounded-full">2M+ listings</div>
                  </div>
                  <p className="text-xs text-gray-600 mb-2">Family-oriented rentals</p>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 w-3/5"></div>
                  </div>
                </div>
                <div className="p-4 border rounded bg-white">
                  <div className="flex justify-between mb-1">
                    <h4 className="font-medium text-base">Marriott Homes</h4>
                    <div className="text-xs font-bold bg-orange-100 text-orange-800 rounded-full px-[20px] py-[4px] my-[4px] mx-[15px]">12K+ listings</div>
                  </div>
                  <p className="text-xs text-gray-600 mb-2">Hotel-backed rentals</p>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-orange-500 w-2/5"></div>
                  </div>
                </div>
                <div className="p-4 border rounded bg-white">
                  <div className="flex justify-between mb-1">
                    <h4 className="font-medium text-base">Sonder</h4>
                    <div className="text-xs font-bold bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full">5K+ listings</div>
                  </div>
                  <p className="text-xs text-gray-600 mb-2">Standardized apartments</p>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-purple-500 w-1/3"></div>
                  </div>
                </div>
              </div>

              <h4 className="font-semibold mb-2">Airbnb Differentiators</h4>
              <div className="flex justify-end mb-2">
                <div className="text-xs bg-airbnb text-white font-bold px-2 py-1 rounded">
                  7M+ listings in 2023
                </div>
              </div>
              <ul className="text-sm space-y-2">
                <li className="flex gap-2 items-center">
                  <div className="h-5 w-5 rounded-full bg-airbnb bg-opacity-10 flex items-center justify-center">
                    <span className="text-airbnb font-bold text-xs">1</span>
                  </div>
                  <span>Focus on authenticity and local immersion</span>
                </li>
                <li className="flex gap-2 items-center">
                  <div className="h-5 w-5 rounded-full bg-airbnb bg-opacity-10 flex items-center justify-center">
                    <span className="text-airbnb font-bold text-xs">2</span>
                  </div>
                  <span>Two-sided reputation system (reviews for hosts and guests)</span>
                </li>
                <li className="flex gap-2 items-center">
                  <div className="h-5 w-5 rounded-full bg-airbnb bg-opacity-10 flex items-center justify-center">
                    <span className="text-airbnb font-bold text-xs">3</span>
                  </div>
                  <span>UX that combines trust-building with aesthetic design</span>
                </li>
                <li className="flex gap-2 items-center">
                  <div className="h-5 w-5 rounded-full bg-airbnb bg-opacity-10 flex items-center justify-center">
                    <span className="text-airbnb font-bold text-xs">4</span>
                  </div>
                  <span>Airbnb Experiences and boutique offerings (Luxe, Plus)</span>
                </li>
              </ul>
            </Wireframe>

            <div className="space-y-6">
              <Wireframe title="Market Trends">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="h-6 w-6 rounded-full bg-green-500 text-white flex items-center justify-center text-xs font-bold">
                      +47%
                    </div>
                    <span>Post-pandemic remote work culture driving extended stays</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="h-6 w-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-bold">
                      +62%
                    </div>
                    <span>Shifts from urban tourism to rural retreats and unique stays</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="h-6 w-6 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs font-bold">
                      35+
                    </div>
                    <span>Cities with new short-term rental regulations since 2020</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t">
                  <h4 className="text-xs font-medium text-gray-500 mb-2">REGIONAL GROWTH STATISTICS</h4>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-white p-2 rounded shadow-sm text-center">
                      <div className="text-lg font-bold text-blue-600">+38%</div>
                      <p className="text-[10px]">Europe<br />Year-over-Year</p>
                    </div>
                    <div className="bg-white p-2 rounded shadow-sm text-center">
                      <div className="text-lg font-bold text-green-600">+42%</div>
                      <p className="text-[10px]">APAC<br />Year-over-Year</p>
                    </div>
                    <div className="bg-white p-2 rounded shadow-sm text-center">
                      <div className="text-lg font-bold text-purple-600">+28%</div>
                      <p className="text-[10px]">Americas<br />Year-over-Year</p>
                    </div>
                  </div>
                </div>
              </Wireframe>

              <Wireframe title="Unique Value Proposition">
                <div className="p-5 bg-airbnb bg-opacity-5 rounded-lg border border-airbnb border-opacity-20">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="text-airbnb font-medium">Value Beyond Accommodation</h4>
                    <span className="text-xs bg-airbnb text-white px-2 py-1 rounded-full">Est. 2008</span>
                  </div>
                  <p className="italic text-center">
                    "Airbnb doesn't just provide a place to stay; it sells the idea of living like a local. This emotional, experience-first branding sets it apart from transactional booking platforms."
                  </p>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                  <div className="p-2 bg-airbnb-light_gray rounded relative">
                    <div className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-airbnb text-white flex items-center justify-center text-xs">
                      1
                    </div>
                    <p className="text-xs font-medium">Authenticity</p>
                  </div>
                  <div className="p-2 bg-airbnb-light_gray rounded relative">
                    <div className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-airbnb text-white flex items-center justify-center text-xs">
                      2
                    </div>
                    <p className="text-xs font-medium">Community</p>
                  </div>
                  <div className="p-2 bg-airbnb-light_gray rounded relative">
                    <div className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-airbnb text-white flex items-center justify-center text-xs">
                      3
                    </div>
                    <p className="text-xs font-medium">Experience</p>
                  </div>
                </div>
                
                <div className="mt-4 pt-3 border-t">
                  <h4 className="text-xs font-medium text-gray-500 mb-2">KEY BUSINESS METRICS</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex flex-col">
                      <div className="text-xs font-medium flex justify-between">
                        <span>Guest Satisfaction</span>
                        <span className="text-green-600">91%</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500" style={{
                        width: '91%'
                      }}></div>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <div className="text-xs font-medium flex justify-between">
                        <span>Host Retention</span>
                        <span className="text-blue-600">87%</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500" style={{
                        width: '87%'
                      }}></div>
                      </div>
                    </div>
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
          <SectionTitle title="3. User Personas" subtitle="Understanding key user segments and their unique needs" accentColor="purple" />

          <Tabs defaultValue="guests" className="w-full mb-12">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="guests">Guest Personas</TabsTrigger>
              <TabsTrigger value="hosts">Host Personas</TabsTrigger>
            </TabsList>
            <TabsContent value="guests" className="mt-6">
              <div className="grid md:grid-cols-2 gap-8">
                <PersonaCard name="Maya" age={29} role="Digital Nomad" avatar="M" needs={["Stylish, WiFi-enabled monthly stays", "Flexible cancellation", "Workspace-friendly accommodations"]} motivations={["Work-travel lifestyle", "Discovering new cultures", "Community connections"]} painPoints={["Inconsistent amenities", "Lack of transparency", "Unexpected fees"]} />
                <PersonaCard name="Liam" age={36} role="Luxury Seeker" avatar="L" needs={["Exclusive, high-end curated stays", "Concierge services", "Premium amenities"]} motivations={["Comfort and prestige", "Frictionless experience", "Unique, Instagram-worthy spaces"]} painPoints={["Quality inconsistency vs. expectations", "Service gaps compared to hotels", "Availability in desired locations"]} />
              </div>
              
              <div className="mt-6 bg-purple-50 p-4 rounded-lg border border-purple-100">
                <h3 className="text-purple-800 font-medium mb-2 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
                  Guest Demographics
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white p-3 rounded shadow-sm">
                    <div className="text-lg font-bold text-center text-purple-600">48%</div>
                    <p className="text-xs text-center">Millennials<br />(25-40)</p>
                  </div>
                  <div className="bg-white p-3 rounded shadow-sm">
                    <div className="text-lg font-bold text-center text-purple-600">27%</div>
                    <p className="text-xs text-center">Gen Z<br />(18-24)</p>
                  </div>
                  <div className="bg-white p-3 rounded shadow-sm">
                    <div className="text-lg font-bold text-center text-purple-600">25%</div>
                    <p className="text-xs text-center">Gen X & Boomers<br />(41+)</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="hosts" className="mt-6">
              <div className="grid md:grid-cols-2 gap-8">
                <PersonaCard name="Jake" age={42} role="Property Manager" avatar="J" needs={["Reliable occupancy", "Automated workflows", "Revenue optimization tools"]} motivations={["Business scalability", "Passive income", "Professional growth"]} painPoints={["Damage claims", "Regulatory compliance", "Managing reviews and ratings"]} />
                <PersonaCard name="Aisha" age={31} role="Occasional Host" avatar="A" needs={["Flexibility with calendar", "Clear instructions", "Helpful community"]} motivations={["Supplemental income", "Cultural exchange", "Property utilization"]} painPoints={["Setup complexity", "Safety concerns", "Guest communication management"]} />
              </div>
              
              <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-100">
                <h3 className="text-blue-800 font-medium mb-2 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                  Host Statistics
                </h3>
                <div className="grid grid-cols-4 gap-2">
                  <div className="bg-white p-2 rounded shadow-sm">
                    <div className="text-md font-bold text-center text-blue-600">66%</div>
                    <p className="text-[10px] text-center">Single property<br />hosts</p>
                  </div>
                  <div className="bg-white p-2 rounded shadow-sm">
                    <div className="text-md font-bold text-center text-blue-600">23%</div>
                    <p className="text-[10px] text-center">Multi-property<br />hosts (2-4)</p>
                  </div>
                  <div className="bg-white p-2 rounded shadow-sm">
                    <div className="text-md font-bold text-center text-blue-600">11%</div>
                    <p className="text-[10px] text-center">Professional<br />hosts (5+)</p>
                  </div>
                  <div className="bg-white p-2 rounded shadow-sm">
                    <div className="text-md font-bold text-center text-blue-600">$13.8K</div>
                    <p className="text-[10px] text-center">Avg annual<br />income</p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Trust & Safety Section */}
      <section id="trust" className="section-container bg-airbnb-light_gray">
        <div className="animate-on-scroll">
          <SectionTitle title="4. Trust, Safety & Community" subtitle="Elements that help Airbnb shift the narrative from 'rental app' to 'community you can trust'" />

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <TrustFeature icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>} title="Verified IDs" description="Background checks help ensure safe interactions between users" statistic="98% coverage" />
            <TrustFeature icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"></path><path d="M10 2c1 .5 2 2 2 5"></path></svg>} title="Guest & Host Reviews" description="Bilateral accountability through detailed review system" statistic="1B+ reviews" />
            <TrustFeature icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path></svg>} title="Secure Payments" description="Escrow-style payment system with cancellation protections" statistic="$90B+ processed" />
            <TrustFeature icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>} title="Host Guarantee" description="Up to $3 million protection for property damages" statistic="99.9% no claims" />
            <TrustFeature icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 6.1H3"></path><path d="M21 12.1H3"></path><path d="M15.1 18H3"></path></svg>} title="Community Center" description="Discussion forums and peer-to-peer support network" statistic="2M+ active users" />
            <TrustFeature icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m8 3 4 8 5-5 5 15H2L8 3z"></path></svg>} title="Inclusivity Pledge" description="Platform-wide culture of respect and belonging" statistic="Est. 2016" />
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-center mb-6">
              <div className="h-12 w-12 rounded-full bg-airbnb text-white flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Trust-Building Design Elements</h3>
                <p className="text-sm text-gray-600">Key components that enable 4M+ successful bookings daily</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-airbnb-light_gray p-4 rounded-lg border-l-4 border-airbnb">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-medium">Visual Transparency</h4>
                  <div className="text-xs bg-airbnb text-white px-2 py-0.5 rounded-full">94% impact</div>
                </div>
                <p className="text-sm text-gray-600">High-quality photos, verified badges, and clear policies</p>
                <div className="mt-3 h-1 bg-gray-200 rounded-full">
                  <div className="h-full bg-airbnb rounded-full" style={{
                  width: "94%"
                }}></div>
                </div>
              </div>
              <div className="bg-airbnb-light_gray p-4 rounded-lg border-l-4 border-airbnb">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-medium">Communication Tools</h4>
                  <div className="text-xs bg-airbnb text-white px-2 py-0.5 rounded-full">87% impact</div>
                </div>
                <p className="text-sm text-gray-600">Secure messaging, quick response indicators, live support</p>
                <div className="mt-3 h-1 bg-gray-200 rounded-full">
                  <div className="h-full bg-airbnb rounded-full" style={{
                  width: "87%"
                }}></div>
                </div>
              </div>
              <div className="bg-airbnb-light_gray p-4 rounded-lg border-l-4 border-airbnb">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-medium">Risk Reduction</h4>
                  <div className="text-xs bg-airbnb text-white px-2 py-0.5 rounded-full">91% impact</div>
                </div>
                <p className="text-sm text-gray-600">Damage deposits, guest verification, dispute resolution</p>
                <div className="mt-3 h-1 bg-gray-200 rounded-full">
                  <div className="h-full bg-airbnb rounded-full" style={{
                  width: "91%"
                }}></div>
                </div>
              </div>
            </div>

            <div className="mt-6 border-t pt-5">
              <h4 className="text-sm font-medium mb-3 text-center">Trust Metrics Over Time</h4>
              <div className="grid grid-cols-3 text-center gap-8">
                <div>
                  <div className="text-3xl font-bold text-airbnb">91%</div>
                  <p className="text-xs text-gray-600">Guest-to-Host<br />Trust Rating</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-airbnb">94%</div>
                  <p className="text-xs text-gray-600">Platform<br />Security Score</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-airbnb">-73%</div>
                  <p className="text-xs text-gray-600">Decline in<br />Safety Incidents</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Journey Section */}
      <section id="journey" className="section-container">
        <div className="animate-on-scroll">
          <SectionTitle title="5. User Journey Mapping" subtitle="Following the path of both guests and hosts through the Airbnb experience" accentColor="green" />

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Wireframe title="Guest Journey" tagStyle="destination">
              <div className="py-2">
                <UserJourneyStep step={1} title="Discover" description="Search, browse categories, or explore based on mood and inspiration" />
                <div className="ml-12 mb-4 -mt-2 text-xs bg-green-100 text-green-800 rounded px-2 py-1 inline-block">
                  <span className="font-bold">89%</span> of users start with location search
                </div>
                
                <UserJourneyStep step={2} title="Filter & Select" description="Use filters like pet-friendly, beachfront, or price range to narrow options" />
                <div className="ml-12 mb-4 -mt-2 text-xs bg-blue-100 text-blue-800 rounded px-2 py-1 inline-block">
                  <span className="font-bold">4.2</span> filters used per search on average
                </div>
                
                <UserJourneyStep step={3} title="Deep-dive into Listing" description="Review photos, amenities, house rules, cancellation policy, and host profile" />
                <div className="ml-12 mb-4 -mt-2 text-xs bg-purple-100 text-purple-800 rounded px-2 py-1 inline-block">
                  <span className="font-bold">78%</span> of users read reviews before booking
                </div>
                
                <UserJourneyStep step={4} title="Book" description="Use Instant Book or send inquiry to host with questions" />
                <div className="ml-12 mb-4 -mt-2 text-xs bg-orange-100 text-orange-800 rounded px-2 py-1 inline-block">
                  <span className="font-bold">68%</span> of bookings use Instant Book feature
                </div>
                
                <UserJourneyStep step={5} title="Pre-arrival" description="Message with host, receive check-in details, and sync calendar" />
                
                <UserJourneyStep step={6} title="Stay Experience" description="Access property, enjoy amenities, potentially message host with issues" />
                
                <UserJourneyStep step={7} title="Post-stay" description="Leave review, receive follow-ups, save to wishlist for future stays" isLast={true} />
                <div className="ml-12 -mt-2 text-xs bg-airbnb bg-opacity-10 text-airbnb rounded px-2 py-1 inline-block">
                  <span className="font-bold">72%</span> of guests leave reviews
                </div>
              </div>
            </Wireframe>

            <Wireframe title="Host Journey" tagStyle="booking">
              <div className="py-2">
                <UserJourneyStep step={1} title="Create Listing" description="Add photos, description with AI suggestions, set house rules" />
                <div className="ml-12 mb-4 -mt-2 text-xs bg-airbnb bg-opacity-10 text-airbnb rounded px-2 py-1 inline-block">
                  <span className="font-bold">12</span> photos uploaded on average per listing
                </div>
                
                <UserJourneyStep step={2} title="Configure Settings" description="Set availability calendar, pricing strategy, and cancellation policy" />
                <div className="ml-12 mb-4 -mt-2 text-xs bg-blue-100 text-blue-800 rounded px-2 py-1 inline-block">
                  <span className="font-bold">57%</span> use Smart Pricing algorithm
                </div>
                
                <UserJourneyStep step={3} title="Manage Inquiries" description="Respond to booking requests and guest questions" />
                <div className="ml-12 mb-4 -mt-2 text-xs bg-green-100 text-green-800 rounded px-2 py-1 inline-block">
                  <span className="font-bold">91%</span> response rate for Superhosts
                </div>
                
                <UserJourneyStep step={4} title="Pre-arrival Prep" description="Clean property, prepare check-in information, send welcome message" />
                
                <UserJourneyStep step={5} title="Host the Stay" description="Provide support as needed, manage issues if they arise" />
                <div className="ml-12 mb-4 -mt-2 text-xs bg-orange-100 text-orange-800 rounded px-2 py-1 inline-block">
                  <span className="font-bold">~3%</span> of stays require host intervention
                </div>
                
                <UserJourneyStep step={6} title="Post-stay" description="Review guest, prepare for next booking, receive payment" />
                
                <UserJourneyStep step={7} title="Analytics & Optimization" description="Review performance, adjust pricing, improve listing based on feedback" isLast={true} />
                <div className="ml-12 -mt-2 text-xs bg-purple-100 text-purple-800 rounded px-2 py-1 inline-block">
                  <span className="font-bold">46%</span> of hosts make at least one update after reviews
                </div>
              </div>
            </Wireframe>
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
            <div className="relative h-80 border border-gray-200 rounded">
              <div className="absolute top-0 left-0 w-full h-full p-4">
                {/* Y-axis label */}
                <div className="absolute -left-12 top-1/2 -translate-y-1/2 transform rotate-90 text-sm text-gray-500 font-medium">
                  User Satisfaction
                </div>
                
                {/* X-axis label */}
                <div className="absolute bottom-[-28px] left-1/2 -translate-x-1/2 text-sm text-gray-500 font-medium">
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
                
                {/* Feature dots with data labels */}
                <div className="absolute top-[20%] left-[25%] h-5 w-5 rounded-full bg-airbnb flex items-center justify-center text-white text-xs font-bold" title="Secure Payments">1</div>
                <div className="absolute top-[23%] left-[25%] text-[10px]">Secure Payments</div>
                <div className="absolute top-[18%] left-[25%] text-[9px] bg-airbnb bg-opacity-20 px-1 rounded">98% critical</div>
                
                <div className="absolute top-[15%] left-[70%] h-5 w-5 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold" title="AI Recommendations">2</div>
                <div className="absolute top-[18%] left-[70%] text-[10px]">AI Recommendations</div>
                <div className="absolute top-[13%] left-[70%] text-[9px] bg-blue-100 px-1 rounded">+42% conversion</div>
                
                <div className="absolute top-[30%] left-[40%] h-5 w-5 rounded-full bg-airbnb flex items-center justify-center text-white text-xs font-bold" title="Reviews">3</div>
                <div className="absolute top-[33%] left-[40%] text-[10px]">Reviews System</div>
                <div className="absolute top-[28%] left-[40%] text-[9px] bg-airbnb bg-opacity-20 px-1 rounded">91% trust factor</div>
                
                <div className="absolute top-[25%] left-[85%] h-5 w-5 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-bold" title="Virtual Tours">4</div>
                <div className="absolute top-[28%] left-[85%] text-[10px]">Virtual Tours</div>
                <div className="absolute top-[23%] left-[85%] text-[9px] bg-green-100 px-1 rounded">+36% engagement</div>
                
                <div className="absolute top-[40%] left-[20%] h-5 w-5 rounded-full bg-airbnb flex items-center justify-center text-white text-xs font-bold" title="Messaging">5</div>
                <div className="absolute top-[43%] left-[20%] text-[10px]">Messaging</div>
                <div className="absolute top-[38%] left-[20%] text-[9px] bg-airbnb bg-opacity-20 px-1 rounded">87% use rate</div>
                
                <div className="absolute top-[60%] left-[30%] h-5 w-5 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold" title="Calendar Sync">6</div>
                <div className="absolute top-[63%] left-[30%] text-[10px]">Calendar Sync</div>
                <div className="absolute top-[58%] left-[30%] text-[9px] bg-blue-100 px-1 rounded">72% adoption</div>
                
                <div className="absolute top-[35%] left-[60%] h-5 w-5 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold" title="Dynamic Pricing">7</div>
                <div className="absolute top-[38%] left-[60%] text-[10px]">Dynamic Pricing</div>
                <div className="absolute top-[33%] left-[60%] text-[9px] bg-blue-100 px-1 rounded">+18% revenue</div>
                
                <div className="absolute top-[45%] left-[75%] h-5 w-5 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-bold" title="Experiences">8</div>
                <div className="absolute top-[48%] left-[75%] text-[10px]">Experiences</div>
                <div className="absolute top-[43%] left-[75%] text-[9px] bg-green-100 px-1 rounded">$1.7B market</div>
                
                <div className="absolute top-[70%] left-[65%] h-5 w-5 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-bold" title="Sustainability">9</div>
                <div className="absolute top-[73%] left-[65%] text-[10px]">Eco Badges</div>
                <div className="absolute top-[68%] left-[65%] text-[9px] bg-green-100 px-1 rounded">+16% premium</div>
                
                <div className="absolute top-[80%] left-[45%] h-5 w-5 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-bold" title="Group">10</div>
                <div className="absolute top-[83%] left-[45%] text-[10px]">Group Planning</div>
                <div className="absolute top-[78%] left-[45%] text-[9px] bg-green-100 px-1 rounded">Low priority</div>
                
                <div className="absolute top-[75%] left-[15%] h-5 w-5 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold" title="Wishlists">11</div>
                <div className="absolute top-[78%] left-[15%] text-[10px]">Wishlists</div>
                <div className="absolute top-[73%] left-[15%] text-[9px] bg-blue-100 px-1 rounded">64% usage</div>
              </div>
            </div>
          </Wireframe>
        </div>
      </section>

      {/* Personalization Section */}
      <section className="section-container">
        <div className="animate-on-scroll">
          <SectionTitle title="7. Personalization & Retention Tactics" subtitle="How Airbnb creates tailored experiences to keep users coming back" accentColor="purple" />

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Wireframe tagStyle="flight">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Personalized Discovery</h3>
                <div className="text-xs bg-purple-100 text-purple-800 font-bold px-2 py-1 rounded-full">+31% CTR</div>
              </div>
              
              <div className="border-b pb-4 mb-4">
                <div className="flex justify-between mb-2">
                  <h4 className="font-medium">Search Screen</h4>
                  <div className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">78% engagement</div>
                </div>
                <div className="wireframe p-4 bg-airbnb-light_gray rounded-lg">
                  <div className="flex flex-col gap-4">
                    <div className="h-10 bg-white rounded flex items-center px-4">
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
                      <div className="aspect-square bg-white rounded p-1 text-[8px] text-center flex items-center justify-center">Property Image 1<br />+42% clicks</div>
                      <div className="aspect-square bg-white rounded p-1 text-[8px] text-center flex items-center justify-center">Property Image 2<br />+38% clicks</div>
                      <div className="aspect-square bg-white rounded p-1 text-[8px] text-center flex items-center justify-center">Property Image 3<br />+27% clicks</div>
                      <div className="aspect-square bg-white rounded p-1 text-[8px] text-center flex items-center justify-center">Property Image 4<br />+24% clicks</div>
                    </div>
                    
                    <div className="card-highlight bg-airbnb bg-opacity-10 p-3 rounded-lg border border-airbnb border-opacity-30">
                      <div className="flex justify-between items-center">
                        <p className="text-sm">Because you stayed in <b>Barcelona</b> last summer</p>
                        <span className="text-[10px] bg-airbnb text-white px-1.5 py-0.5 rounded-full">+126% CTR</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-2 overflow-x-auto pb-2">
                      <ListingCard image="📷" title="Beach Villa" location="Costa Brava, Spain" price="$120" rating={4.9} reviewCount={128} />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-medium">AI-Powered Personalization</h4>
                <div className="text-xs bg-purple-100 text-purple-800 font-bold px-2 py-1 rounded">User data from 1B+ stays</div>
              </div>
              <div className="space-y-2">
                <div className="flex gap-2 items-center p-2 bg-white rounded-lg shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-airbnb"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><circle cx="12" cy="12" r="3"></circle></svg>
                  <div className="flex-1">
                    <p className="text-sm">Recommends listings based on past behavior</p>
                    <div className="h-1 w-full bg-gray-100 rounded-full mt-1">
                      <div className="h-full bg-airbnb rounded-full" style={{
                      width: "84%"
                    }}></div>
                    </div>
                  </div>
                  <span className="text-xs font-bold">+84%</span>
                </div>
                <div className="flex gap-2 items-center p-2 bg-white rounded-lg shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-airbnb"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><path d="m21 15-5-5L5 21"></path></svg>
                  <div className="flex-1">
                    <p className="text-sm">Surfaces similar destinations to previous searches</p>
                    <div className="h-1 w-full bg-gray-100 rounded-full mt-1">
                      <div className="h-full bg-airbnb rounded-full" style={{
                      width: "72%"
                    }}></div>
                    </div>
                  </div>
                  <span className="text-xs font-bold">+72%</span>
                </div>
                <div className="flex gap-2 items-center p-2 bg-white rounded-lg shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-airbnb"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z"></path><path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>
                  <div className="flex-1">
                    <p className="text-sm">Learns preferences for amenities and property types</p>
                    <div className="h-1 w-full bg-gray-100 rounded-full mt-1">
                      <div className="h-full bg-airbnb rounded-full" style={{
                      width: "91%"
                    }}></div>
                    </div>
                  </div>
                  <span className="text-xs font-bold">+91%</span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t">
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-green-50 p-2 rounded-lg text-center">
                    <div className="text-green-600 font-bold">36%</div>
                    <p className="text-[10px]">Booking Rate<br />Improvement</p>
                  </div>
                  <div className="bg-blue-50 p-2 rounded-lg text-center">
                    <div className="text-blue-600 font-bold">128%</div>
                    <p className="text-[10px]">Search-to-Book<br />Conversion</p>
                  </div>
                  <div className="bg-purple-50 p-2 rounded-lg text-center">
                    <div className="text-purple-600 font-bold">4.3x</div>
                    <p className="text-[10px]">Return Visit<br />Frequency</p>
                  </div>
                </div>
              </div>
            </Wireframe>

            <Wireframe tagStyle="destination">
              <div className="flex justify-between mb-4">
                <h3 className="text-lg font-semibold">Retention Strategies</h3>
                <div className="text-xs bg-airbnb text-white font-bold px-2 py-1 rounded-full">90% user retention goal</div>
              </div>
              
              <div className="space-y-5">
                <div className="p-4 border rounded-md bg-white shadow-sm">
                  <h4 className="font-medium mb-2 flex items-center justify-between gap-2">
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-airbnb mr-2"><path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path><path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"></path><path d="M12 3v6"></path></svg>
                    Behavior-based Nudges
                    </div>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">+28% conversion</span>
                  </h4>
                  <div className="text-sm space-y-2">
                    <p className="flex gap-1 items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-airbnb"></span>
                      "Book now, <span className="font-bold">3 others viewing</span> this property"
                      <span className="ml-auto text-[10px] bg-orange-100 text-orange-800 px-1.5 rounded">+42%</span>
                    </p>
                    <p className="flex gap-1 items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-airbnb"></span>
                      "You <span className="font-bold">stayed nearby</span> last year"
                      <span className="ml-auto text-[10px] bg-orange-100 text-orange-800 px-1.5 rounded">+38%</span>
                    </p>
                    <p className="flex gap-1 items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-airbnb"></span>
                      "Prices for your dates are <span className="font-bold">15% lower</span> than average"
                      <span className="ml-auto text-[10px] bg-orange-100 text-orange-800 px-1.5 rounded">+47%</span>
                    </p>
                  </div>
                </div>
                
                <div className="p-4 border rounded-md bg-white shadow-sm">
                  <h4 className="font-medium mb-2 flex items-center justify-between gap-2">
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-airbnb mr-2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
                      Wishlist Dynamics
                    </div>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">6.2M daily active</span>
                  </h4>
                  <div className="text-sm space-y-2">
                    <p className="flex gap-1 items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-airbnb"></span>
                      "<span className="font-bold">Price drop</span> on your saved Paris apartment"
                      <span className="ml-auto text-[10px] bg-green-100 text-green-800 px-1.5 rounded">+54%</span>
                    </p>
                    <p className="flex gap-1 items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-airbnb"></span>
                      "<span className="font-bold">3 new listings</span> match your wishlist criteria"
                      <span className="ml-auto text-[10px] bg-green-100 text-green-800 px-1.5 rounded">+36%</span>
                    </p>
                    <p className="flex gap-1 items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-airbnb"></span>
                      "Only <span className="font-bold">2 days left</span> at this rate for your saved stay"
                      <span className="ml-auto text-[10px] bg-green-100 text-green-800 px-1.5 rounded">+63%</span>
                    </p>
                  </div>
                </div>
                
                <div className="p-4 border rounded-md bg-white shadow-sm">
                  <h4 className="font-medium mb-2 flex items-center justify-between gap-2">
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-airbnb mr-2"><path d="M12 8c-2.8 0-5 1.7-5 4s2.2 4 5 4 5-1.7 5-4-2.2-4-5-4Z"></path><path d="M8.5 8.5v7"></path><path d="M15.5 8.5v7"></path><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M2 10h2"></path><path d="M20 10h2"></path></svg>
                      Loyalty Programs
                    </div>
                    <span className="text-xs bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full">1.8M members</span>
                  </h4>
                  <div className="text-sm space-y-2">
                    <p className="flex gap-1 items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-airbnb"></span>
                      "<span className="font-bold">Frequent traveler</span> benefits (early access, discounts)"
                      <span className="ml-auto text-[10px] bg-blue-100 text-blue-800 px-1.5 rounded">+32%</span>
                    </p>
                    <p className="flex gap-1 items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-airbnb"></span>
                      "<span className="font-bold">Tiered perks</span> for repeat guests and superhosts"
                      <span className="ml-auto text-[10px] bg-blue-100 text-blue-800 px-1.5 rounded">+28%</span>
                    </p>
                    <p className="flex gap-1 items-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-airbnb"></span>
                      "<span className="font-bold">Anniversary bonuses</span> for platform loyalty"
                      <span className="ml-auto text-[10px] bg-blue-100 text-blue-800 px-1.5 rounded">+24%</span>
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t">
                <h4 className="text-xs font-medium text-gray-600 mb-3">USER RETENTION STATISTICS</h4>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between items-center text-xs mb-1">
                      <span>Year 1 Retention</span>
                      <span className="font-bold">76%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500" style={{
                      width: "76%"
                    }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center text-xs mb-1">
                      <span>Year 3 Retention</span>
                      <span className="font-bold">58%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500" style={{
                      width: "58%"
                    }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center text-xs mb-1">
                      <span>Year 5+ Retention</span>
                      <span className="font-bold">42%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-purple-500" style={{
                      width: "42%"
                    }}></div>
                    </div>
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
          <SectionTitle title="8. Technology & UX" subtitle="Exploring the technical and design foundations of Airbnb's platform" accentColor="orange" />

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <Wireframe title="Mobile-First Design" tagStyle="flight">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-sm font-medium text-gray-600">Performance Metrics</h4>
                  <div className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">62% mobile users</div>
                </div>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  <div className="bg-white p-2 rounded shadow-sm text-center">
                    <div className="text-lg font-bold text-green-600">1.2s</div>
                    <p className="text-[10px]">Average<br />load time</p>
                  </div>
                  <div className="bg-white p-2 rounded shadow-sm text-center">
                    <div className="text-lg font-bold text-blue-600">98/100</div>
                    <p className="text-[10px]">Google<br />mobile score</p>
                  </div>
                  <div className="bg-white p-2 rounded shadow-sm text-center">
                    <div className="text-lg font-bold text-purple-600">+58%</div>
                    <p className="text-[10px]">YoY mobile<br />conversion</p>
                  </div>
                </div>
                
                <div className="flex justify-center py-2">
                  <div className="w-[240px] border-8 border-gray-800 rounded-3xl overflow-hidden shadow-lg relative">
                    <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-20 h-4 bg-gray-800 rounded-b-xl z-10"></div>
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
                            <div className="h-12 w-12 bg-gray-200 rounded-lg mb-1 flex items-center justify-center text-[6px]">
                              <span>+82%<br />CTR</span>
                            </div>
                            <span className="text-[10px]">Beach</span>
                          </div>
                          <div className="flex-shrink-0 flex flex-col items-center">
                            <div className="h-12 w-12 bg-gray-200 rounded-lg mb-1 flex items-center justify-center text-[6px]">
                              <span>+73%<br />CTR</span>
                            </div>
                            <span className="text-[10px]">Cabin</span>
                          </div>
                          <div className="flex-shrink-0 flex flex-col items-center">
                            <div className="h-12 w-12 bg-gray-200 rounded-lg mb-1 flex items-center justify-center text-[6px]">
                              <span>+69%<br />CTR</span>
                            </div>
                            <span className="text-[10px]">Design</span>
                          </div>
                          <div className="flex-shrink-0 flex flex-col items-center">
                            <div className="h-12 w-12 bg-gray-200 rounded-lg mb-1 flex items-center justify-center text-[6px]">
                              <span>+65%<br />CTR</span>
                            </div>
                            <span className="text-[10px]">Pool</span>
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          <div>
                            <div className="aspect-video bg-gray-200 rounded-lg mb-2 flex items-center justify-center text-[8px]">
                              4.9/5 rating property
                            </div>
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
                            <div className="aspect-video bg-gray-200 rounded-lg mb-2 flex items-center justify-center text-[8px]">
                              4.8/5 rating property
                            </div>
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
                      <div className="absolute bottom-0 left-0 right-0 h-14 border-t flex items-center justify-around px-3 text-[8px]">
                        <div className="flex flex-col items-center">
                          <div className="h-5 w-5 bg-airbnb rounded-full"></div>
                          <span>Explore</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="h-5 w-5 bg-gray-200 rounded-full"></div>
                          <span>Wishlists</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="h-5 w-5 bg-gray-200 rounded-full"></div>
                          <span>Trips</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="h-5 w-5 bg-gray-200 rounded-full"></div>
                          <span>Inbox</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="h-5 w-5 bg-gray-200 rounded-full"></div>
                          <span>Profile</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Wireframe>
              
              <Wireframe title="AI/ML Technology" tagStyle="booking">
                <div className="space-y-3 text-sm">
                  <div className="p-3 border border-airbnb border-opacity-20 bg-airbnb bg-opacity-5 rounded-lg">
                    <div className="flex justify-between mb-1">
                      <h4 className="font-medium">Dynamic Pricing Tool</h4>
                      <div className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded">+23% revenue</div>
                    </div>
                    <p>AI-driven pricing recommendations based on market demand, seasonality, and comparable listings</p>
                    <div className="mt-2 grid grid-cols-4 gap-1 text-center text-[10px]">
                      <div className="bg-white p-1 rounded">
                        <span className="font-bold text-green-600">42+</span>
                        <p>variables</p>
                      </div>
                      <div className="bg-white p-1 rounded">
                        <span className="font-bold text-blue-600">87%</span>
                        <p>accuracy</p>
                      </div>
                      <div className="bg-white p-1 rounded">
                        <span className="font-bold text-purple-600">68%</span>
                        <p>adoption</p>
                      </div>
                      <div className="bg-white p-1 rounded">
                        <span className="font-bold text-orange-600">3.2M</span>
                        <p>optimized</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 border border-airbnb border-opacity-20 bg-airbnb bg-opacity-5 rounded-lg">
                    <div className="flex justify-between mb-1">
                      <h4 className="font-medium">Personalization Engine</h4>
                      <div className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded">+36% engagement</div>
                    </div>
                    <p>Machine learning algorithms that tailor search results and recommendations to user preferences</p>
                    <div className="mt-2 grid grid-cols-3 gap-1 text-center text-[10px]">
                      <div className="bg-white p-1 rounded">
                        <span className="font-bold text-airbnb">580TB</span>
                        <p>user data</p>
                      </div>
                      <div className="bg-white p-1 rounded">
                        <span className="font-bold text-airbnb">2.2B</span>
                        <p>predictions/day</p>
                      </div>
                      <div className="bg-white p-1 rounded">
                        <span className="font-bold text-airbnb">189ms</span>
                        <p>response time</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 border border-airbnb border-opacity-20 bg-airbnb bg-opacity-5 rounded-lg">
                    <div className="flex justify-between mb-1">
                      <h4 className="font-medium">Content Moderation</h4>
                      <div className="text-xs bg-purple-100 text-purple-800 px-2 py-0.5 rounded">99.2% accuracy</div>
                    </div>
                    <p>Automated systems that detect inappropriate imagery and language in listings and reviews</p>
                    <div className="mt-2 grid grid-cols-2 gap-1 text-center text-[10px]">
                      <div className="bg-white p-1 rounded">
                        <span className="font-bold text-red-600">98.7%</span>
                        <p>fraud detection</p>
                      </div>
                      <div className="bg-white p-1 rounded">
                        <span className="font-bold text-green-600">1.2M</span>
                        <p>daily reviews</p>
                      </div>
                    </div>
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
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-medium">Frictionless Booking Flow</h4>
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded">-42% drop-offs</span>
                      </div>
                      <p className="text-sm text-gray-600">Streamlined checkout process with minimal steps and clear progress indicators</p>
                      <div className="mt-2 flex gap-2 text-center text-xs">
                        <div className="flex-1 p-1 bg-airbnb bg-opacity-10 rounded">
                          <p className="font-semibold text-airbnb">3.2 steps</p>
                          <p className="text-[10px] text-gray-600">average to book</p>
                        </div>
                        <div className="flex-1 p-1 bg-airbnb bg-opacity-10 rounded">
                          <p className="font-semibold text-airbnb">68%</p>
                          <p className="text-[10px] text-gray-600">instant bookings</p>
                        </div>
                        <div className="flex-1 p-1 bg-airbnb bg-opacity-10 rounded">
                          <p className="font-semibold text-airbnb">98.2%</p>
                          <p className="text-[10px] text-gray-600">payment success</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="h-10 w-10 rounded-full bg-airbnb bg-opacity-10 text-airbnb flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-medium">Transparent Information Architecture</h4>
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded">+27% trust</span>
                      </div>
                      <p className="text-sm text-gray-600">Clear display of pricing, policies, and house rules to build trust</p>
                      <div className="mt-2 flex gap-2 text-center text-xs">
                        <div className="flex-1 p-1 bg-blue-50 rounded">
                          <p className="font-semibold text-blue-600">92%</p>
                          <p className="text-[10px] text-gray-600">price transparency</p>
                        </div>
                        <div className="flex-1 p-1 bg-blue-50 rounded">
                          <p className="font-semibold text-blue-600">87%</p>
                          <p className="text-[10px] text-gray-600">policy clarity</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="h-10 w-10 rounded-full bg-airbnb bg-opacity-10 text-airbnb flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 22h.5c.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4V7.5L14.5 2H6c-.5 0-1 .2-1.4.6C4.2 3 4 3.5 4 4v3"></path><polyline points="14 2 14 8 20 8"></polyline><path d="M10.2 13.3a7 7 0 0 0-5.9-1.2A4.9 4.9 0 0 0 2 16.2V17c0 1.1.9 2 2 2h7.7"></path><circle cx="9" cy="9" r="2"></circle><path d="M16 19h6"></path><path d="M19 16v6"></path></svg>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-medium">Visual Storytelling</h4>
                        <span className="text-xs bg-purple-100 text-purple-800 px-2 py-0.5 rounded">+83% bookings</span>
                      </div>
                      <p className="text-sm text-gray-600">High-quality photography and immersive visual presentation of listings</p>
                      <div className="mt-2 flex gap-2 text-center text-xs">
                        <div className="flex-1 p-1 bg-purple-50 rounded">
                          <p className="font-semibold text-purple-600">12-24</p>
                          <p className="text-[10px] text-gray-600">photos per listing</p>
                        </div>
                        <div className="flex-1 p-1 bg-purple-50 rounded">
                          <p className="font-semibold text-purple-600">+212%</p>
                          <p className="text-[10px] text-gray-600">with prof. photos</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="h-10 w-10 rounded-full bg-airbnb bg-opacity-10 text-airbnb flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 9V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1"></path><path d="m2 13 6 6"></path><path d="m8 13-6 6"></path></svg>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-medium">Accessibility Design</h4>
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded">WCAG 2.1 AA</span>
                      </div>
                      <p className="text-sm text-gray-600">Features for differently-abled users, including screen reader support and keyboard navigation</p>
                      <div className="mt-2 flex gap-2 text-center text-xs">
                        <div className="flex-1 p-1 bg-green-50 rounded">
                          <p className="font-semibold text-green-600">98/100</p>
                          <p className="text-[10px] text-gray-600">a11y score</p>
                        </div>
                        <div className="flex-1 p-1 bg-green-50 rounded">
                          <p className="font-semibold text-green-600">27K+</p>
                          <p className="text-[10px] text-gray-600">accessible listings</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Wireframe>
              
              <Wireframe title="Emerging Technologies" tagStyle="flight">
                <div className="space-y-4">
                  <div className="p-3 bg-white border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                        <span className="text-purple-500">AR/VR Technology</span>
                      </h4>
                      <div className="text-xs bg-purple-100 text-purple-800 px-2 py-0.5 rounded">2024 rollout</div>
                    </div>
                    <p className="text-sm mb-2">Virtual walkthroughs of properties before booking, allowing guests to explore spaces remotely</p>
                    <div className="h-24 bg-purple-50 rounded flex flex-col items-center justify-center p-2">
                      <span className="text-xs text-purple-600 font-medium mb-1">AR Preview Adoption Statistics</span>
                      <div className="w-full grid grid-cols-3 gap-1 text-[10px] text-center">
                        <div className="bg-white p-1 rounded">
                          <span className="font-bold text-purple-600">38%</span>
                          <p>conversion lift</p>
                        </div>
                        <div className="bg-white p-1 rounded">
                          <span className="font-bold text-purple-600">3.2x</span>
                          <p>booking time</p>
                        </div>
                        <div className="bg-white p-1 rounded">
                          <span className="font-bold text-purple-600">-62%</span>
                          <p>cancellations</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-3 bg-white border rounded-lg">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-medium flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><line x1="12" x2="12" y1="22" y2="12"></line></svg>
                        <span className="text-blue-500">AI Concierge</span>
                      </h4>
                      <div className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded">Beta testing</div>
                    </div>
                    <p className="text-sm mb-2">Intelligent assistant providing real-time support, local recommendations, and issue resolution during stays</p>
                    <div className="flex gap-2 mt-2 text-center text-[10px]">
                      <div className="flex-1 p-2 bg-blue-50 rounded">
                        <span className="font-bold text-blue-600">92%</span>
                        <p>resolution rate</p>
                      </div>
                      <div className="flex-1 p-2 bg-blue-50 rounded">
                        <span className="font-bold text-blue-600">18</span>
                        <p>languages</p>
                      </div>
                      <div className="flex-1 p-2 bg-blue-50 rounded">
                        <span className="font-bold text-blue-600">2.8M</span>
                        <p>daily queries</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 bg-white border rounded-lg">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-medium flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
                        <span className="text-green-500">Smart Stay Analytics</span>
                      </h4>
                      <div className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded">Live data</div>
                    </div>
                    <p className="text-sm mb-2">Real-time property analytics with predictive usage patterns and energy optimization</p>
                    <div className="flex gap-2 mt-2 text-center text-[10px]">
                      <div className="flex-1 p-2 bg-green-50 rounded">
                        <span className="font-bold text-green-600">-24%</span>
                        <p>energy usage</p>
                      </div>
                      <div className="flex-1 p-2 bg-green-50 rounded">
                        <span className="font-bold text-green-600">-18%</span>
                        <p>maintenance</p>
                      </div>
                      <div className="flex-1 p-2 bg-green-50 rounded">
                        <span className="font-bold text-green-600">+9%</span>
                        <p>guest satisfaction</p>
                      </div>
                    </div>
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
          <SectionTitle title="9. Metrics That Matter" subtitle="Key performance indicators that drive Airbnb's business decisions" accentColor="blue" />

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <MetricCard title="Guest Metrics" metrics={["Conversion Rate from search to booking", "NPS and star rating distribution", "Average Booking Value and Length of Stay", "Wishlist interaction to booking ratio"]} icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>} statistic="150M+ users" growthPercentage={28} colorScheme="airbnb" />
            
            <MetricCard title="Host Metrics" metrics={["Average Occupancy Rate (68%)", "Cancellation Rate (3.2%)", "Time to Respond to Inquiries (2.4 hours avg)", "Host Retention & Superhost conversion (14% of hosts)"]} icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>} statistic="4M+ hosts" growthPercentage={19} colorScheme="blue" />
            
            <MetricCard title="Platform Metrics" metrics={["Experience Attach Rate (32% bundled bookings)", "Referral Conversions (42% from referrals)", "Listing-to-Booking Time (2.7 days average)", "Expansion in Tier 2/3 cities (+63% YoY growth)"]} icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>} statistic="$113B+ GMV" growthPercentage={35} colorScheme="purple" />
          </div>
          
          <Wireframe className="max-w-4xl mx-auto" tagStyle="booking">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Growth Indicators Dashboard</h3>
              <div className="text-xs bg-airbnb text-white px-2 py-1 rounded">2023-2024 Data</div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-sm font-medium">Booking Conversion Funnel</h4>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">8% overall conversion</span>
                </div>
                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span>Search</span>
                      <span>100% (850M monthly)</span>
                    </div>
                    <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-airbnb w-full"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span>View Listing</span>
                      <span>42% (357M monthly)</span>
                    </div>
                    <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-airbnb w-5/12"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span>Date Selection</span>
                      <span>18% (153M monthly)</span>
                    </div>
                    <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-airbnb w-2/12"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span>Booking Completion</span>
                      <span>8% (68M monthly)</span>
                    </div>
                    <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-airbnb w-1/12"></div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-xs font-medium">Acquisition Channels</h4>
                    <span className="text-xs bg-green-100 text-green-800 px-1.5 py-0.5 rounded">CAC: $28</span>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    <div className="p-1.5 bg-blue-50 rounded text-center">
                      <div className="text-[11px] font-bold text-blue-600">42%</div>
                      <p className="text-[8px]">Organic<br />Search</p>
                    </div>
                    <div className="p-1.5 bg-green-50 rounded text-center">
                      <div className="text-[11px] font-bold text-green-600">28%</div>
                      <p className="text-[8px]">Direct<br />Traffic</p>
                    </div>
                    <div className="p-1.5 bg-purple-50 rounded text-center">
                      <div className="text-[11px] font-bold text-purple-600">18%</div>
                      <p className="text-[8px]">Paid<br />Search</p>
                    </div>
                    <div className="p-1.5 bg-orange-50 rounded text-center">
                      <div className="text-[11px] font-bold text-orange-600">12%</div>
                      <p className="text-[8px]">Social<br />Media</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-sm font-medium">Retention by User Type</h4>
                  <span className="text-xs bg-airbnb text-white px-2 py-0.5 rounded-full">Customer LTV: $2,850</span>
                </div>
                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span>First-Time Guests</span>
                      <span>32% retention (8.6M monthly)</span>
                    </div>
                    <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 w-3/12"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span>Repeat Guests</span>
                      <span>68% retention (18.3M monthly)</span>
                    </div>
                    <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 w-8/12"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span>New Hosts</span>
                      <span>24% retention (210K monthly)</span>
                    </div>
                    <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 w-1/4"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span>Experienced Hosts</span>
                      <span>84% retention (3.2M monthly)</span>
                    </div>
                    <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 w-10/12"></div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-xs font-medium">Key Financial Metrics</h4>
                    <span className="text-xs bg-green-100 text-green-800 px-1.5 py-0.5 rounded">31% YoY growth</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                      <div className="bg-airbnb bg-opacity-5 p-1.5 rounded">
                        <div className="flex justify-between items-center">
                          <span className="text-[10px] text-gray-500">Revenue</span>
                          <span className="text-xs font-bold">$8.4B</span>
                        </div>
                      </div>
                      <div className="bg-airbnb bg-opacity-5 p-1.5 rounded">
                        <div className="flex justify-between items-center">
                          <span className="text-[10px] text-gray-500">EBITDA</span>
                          <span className="text-xs font-bold">$2.9B</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="bg-airbnb bg-opacity-5 p-1.5 rounded">
                        <div className="flex justify-between items-center">
                          <span className="text-[10px] text-gray-500">Take Rate</span>
                          <span className="text-xs font-bold">14.2%</span>
                        </div>
                      </div>
                      <div className="bg-airbnb bg-opacity-5 p-1.5 rounded">
                        <div className="flex justify-between items-center">
                          <span className="text-[10px] text-gray-500">Profit Margin</span>
                          <span className="text-xs font-bold">34.5%</span>
                        </div>
                      </div>
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
          <SectionTitle title="10. Challenges & Future Opportunities" subtitle="Navigating obstacles and exploring new horizons for growth" accentColor="purple" />

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Wireframe title="Key Challenges" tagStyle="destination">
              <div className="space-y-4">
                <div className="p-4 bg-red-50 rounded-lg border border-red-100">
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="font-medium flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path><path d="m14.5 9-5 5"></path><path d="m9.5 9 5 5"></path></svg>
                      <span>Regulatory Backlash</span>
                    </h4>
                    <div className="text-xs bg-red-100 text-red-800 px-2 py-0.5 rounded-full font-bold">
                      56 cities
                    </div>
                  </div>
                  <p className="text-sm">Increasing restrictions in major cities (NYC, Barcelona, Paris) limiting short-term rentals</p>
                  <div className="mt-2 flex gap-2">
                    <div className="flex-1 p-1.5 bg-white rounded text-[10px] text-center">
                      <span className="font-bold text-red-500">-26%</span>
                      <p>NYC inventory</p>
                    </div>
                    <div className="flex-1 p-1.5 bg-white rounded text-[10px] text-center">
                      <span className="font-bold text-red-500">-38%</span>
                      <p>Barcelona available nights</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-orange-50 rounded-lg border border-orange-100">
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="font-medium flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500"><path d="M7 11V7a5 5 0 0 1 10 0v4"></path><rect width="20" height="8" x="2" y="11" rx="2" ry="2"></rect><path d="M10 19v-2a2 2 0 0 1 4 0v2"></path></svg>
                      <span>Quality Inconsistency</span>
                    </h4>
                    <div className="text-xs bg-orange-100 text-orange-800 px-2 py-0.5 rounded-full font-bold">
                      18% variance
                    </div>
                  </div>
                  <p className="text-sm">Maintaining consistent quality standards across millions of global listings</p>
                  <div className="mt-2 flex gap-2">
                    <div className="flex-1 p-1.5 bg-white rounded text-[10px] text-center">
                      <span className="font-bold text-orange-500">4.2%</span>
                      <p>cleanliness complaints</p>
                    </div>
                    <div className="flex-1 p-1.5 bg-white rounded text-[10px] text-center">
                      <span className="font-bold text-orange-500">6.8%</span>
                      <p>amenity discrepancies</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-100">
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="font-medium flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>
                      <span>Managing Disputes</span>
                    </h4>
                    <div className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full font-bold">
                      ~3.2% of stays
                    </div>
                  </div>
                  <p className="text-sm">Handling guest/host conflicts at scale while maintaining platform trust</p>
                  <div className="mt-2 flex gap-2">
                    <div className="flex-1 p-1.5 bg-white rounded text-[10px] text-center">
                      <span className="font-bold text-yellow-500">92%</span>
                      <p>resolution rate</p>
                    </div>
                    <div className="flex-1 p-1.5 bg-white rounded text-[10px] text-center">
                      <span className="font-bold text-yellow-500">36hrs</span>
                      <p>average resolution time</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-purple-50 rounded-lg border border-purple-100">
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="font-medium flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500"><path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08"></path><path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z"></path></svg>
                      <span>Fraud & Scams</span>
                    </h4>
                    <div className="text-xs bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full font-bold">
                      -54% YoY
                    </div>
                  </div>
                  <p className="text-sm">Combating sophisticated fraud attempts and fake listings</p>
                  <div className="mt-2 flex gap-2">
                    <div className="flex-1 p-1.5 bg-white rounded text-[10px] text-center">
                      <span className="font-bold text-purple-500">99.8%</span>
                      <p>detection rate</p>
                    </div>
                    <div className="flex-1 p-1.5 bg-white rounded text-[10px] text-center">
                      <span className="font-bold text-purple-500">$24M</span>
                      <p>fraud prevented (monthly)</p>
                    </div>
                  </div>
                </div>
              </div>
            </Wireframe>
            
            <Wireframe title="Future Opportunities" tagStyle="flight">
              <div className="space-y-4">
                <div className="p-4 bg-green-50 rounded-lg border border-green-100">
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="font-medium flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500"><circle cx="12" cy="12" r="10"></circle><path d="m4.9 4.9 14.2 14.2"></path></svg>
                      <span>AR/VR Previews</span>
                    </h4>
                    <div className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full font-bold">
                      $620M market
                    </div>
                  </div>
                  <p className="text-sm">Virtual reality tours to verify and explore listings before booking</p>
                  <div className="mt-2 grid grid-cols-3 gap-2">
                    <div className="p-1.5 bg-white rounded text-[10px] text-center">
                      <span className="font-bold text-green-500">+28%</span>
                      <p>booking confidence</p>
                    </div>
                    <div className="p-1.5 bg-white rounded text-[10px] text-center">
                      <span className="font-bold text-green-500">-42%</span>
                      <p>expectation gaps</p>
                    </div>
                    <div className="p-1.5 bg-white rounded text-[10px] text-center">
                      <span className="font-bold text-green-500">+16%</span>
                      <p>listing premium</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="font-medium flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path></svg>
                      <span>Hyperlocal Bundles</span>
                    </h4>
                    <div className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full font-bold">
                      $4.2B opportunity
                    </div>
                  </div>
                  <p className="text-sm">Combining stays with local transport, activities, and exclusive neighborhood access</p>
                  <div className="mt-2 grid grid-cols-3 gap-2">
                    <div className="p-1.5 bg-white rounded text-[10px] text-center">
                      <span className="font-bold text-blue-500">+32%</span>
                      <p>booking value</p>
                    </div>
                    <div className="p-1.5 bg-white rounded text-[10px] text-center">
                      <span className="font-bold text-blue-500">+28%</span>
                      <p>satisfaction</p>
                    </div>
                    <div className="p-1.5 bg-white rounded text-[10px] text-center">
                      <span className="font-bold text-blue-500">78%</span>
                      <p>interest rate</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-teal-50 rounded-lg border border-teal-100">
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="font-medium flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-500"><path d="M2 22a8 8 0 1 1 16 0H2z"></path><path d="M16 8a6 6 0 0 1 6 6c0 4-3 6-6 6H2"></path><path d="M6.8 5C6.3 3.15 5.1 2 3.5 2"></path><path d="M18 18a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path></svg>
                      <span>Eco-Certification</span>
                    </h4>
                    <div className="text-xs bg-teal-100 text-teal-800 px-2 py-0.5 rounded-full font-bold">
                      63% traveler interest
                    </div>
                  </div>
                  <p className="text-sm">Sustainability scoring and badges for environmentally conscious travelers</p>
                  <div className="mt-2 grid grid-cols-3 gap-2">
                    <div className="p-1.5 bg-white rounded text-[10px] text-center">
                      <span className="font-bold text-teal-500">+18%</span>
                      <p>price premium</p>
                    </div>
                    <div className="p-1.5 bg-white rounded text-[10px] text-center">
                      <span className="font-bold text-teal-500">42K</span>
                      <p>certified listings</p>
                    </div>
                    <div className="p-1.5 bg-white rounded text-[10px] text-center">
                      <span className="font-bold text-teal-500">87%</span>
                      <p>guest satisfaction</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-100">
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="font-medium flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-500"><rect x="3" y="8" width="18" height="12" rx="1"></rect><path d="M10 8V5c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v3"></path><path d="m7 15 5-3 5 3"></path></svg>
                      <span>Remote Work Hubs</span>
                    </h4>
                    <div className="text-xs bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded-full font-bold">
                      36.2M digital nomads
                    </div>
                  </div>
                  <p className="text-sm">Long-stay promotions with coworking access and digital nomad communities</p>
                  <div className="mt-2 grid grid-cols-3 gap-2">
                    <div className="p-1.5 bg-white rounded text-[10px] text-center">
                      <span className="font-bold text-indigo-500">+127%</span>
                      <p>28+ day stays</p>
                    </div>
                    <div className="p-1.5 bg-white rounded text-[10px] text-center">
                      <span className="font-bold text-indigo-500">42</span>
                      <p>nomad destinations</p>
                    </div>
                    <div className="p-1.5 bg-white rounded text-[10px] text-center">
                      <span className="font-bold text-indigo-500">$2.6B</span>
                      <p>market opportunity</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-sm font-medium">Innovation Pipeline Impact</h4>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded">
                    Projected $8.4B revenue by 2027
                  </span>
                </div>
                <div className="h-8 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full flex">
                    <div className="bg-airbnb w-[24%] flex items-center justify-center text-[10px] text-white">
                      24% Current
                    </div>
                    <div className="bg-blue-500 w-[32%] flex items-center justify-center text-[10px] text-white">
                      32% In-Dev
                    </div>
                    <div className="bg-green-500 w-[44%] flex items-center justify-center text-[10px] text-white">
                      44% Proposed
                    </div>
                  </div>
                </div>
              </div>
            </Wireframe>
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section id="conclusion" className="section-container">
        <div className="animate-on-scroll">
          <SectionTitle title="Conclusion" subtitle="Understanding the lessons from Airbnb's product journey" accentColor="airbnb" />

          <Card className="max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute -right-8 -top-8 w-24 h-24 bg-airbnb opacity-10 rounded-full"></div>
            <div className="absolute -left-8 -bottom-8 w-32 h-32 bg-airbnb opacity-10 rounded-full"></div>
            <CardContent className="pt-6 relative z-10">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-airbnb">Airbnb: Redefining Global Hospitality</h3>
                <div className="px-2 py-1 bg-airbnb text-white text-xs font-bold rounded">Est. 2008</div>
              </div>
              
              <p className="mb-6 leading-relaxed">
                Airbnb's success lies in transforming ordinary travel into personalized, community-rooted experiences. By doubling down on trust, usability, and discovery, it redefines modern hospitality. Future growth depends on hyper-personalization, stronger ecosystem integrations, and navigating regulatory complexity with innovation and transparency.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="p-4 bg-airbnb-light_gray rounded-lg text-center relative">
                  <div className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-white border-2 border-airbnb flex items-center justify-center text-xs font-bold text-airbnb">1</div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-2 text-airbnb"><path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path></svg>
                  <h3 className="font-semibold mb-1">Trust Is Paramount</h3>
                  <p className="text-sm text-gray-600">Reputation systems and safety features are the foundation of the platform</p>
                  <div className="mt-2 text-xs bg-white p-1 rounded font-medium text-airbnb">
                    99.6% stays without safety issues
                  </div>
                </div>
                <div className="p-4 bg-airbnb-light_gray rounded-lg text-center relative">
                  <div className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-white border-2 border-airbnb flex items-center justify-center text-xs font-bold text-airbnb">2</div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-2 text-airbnb"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                  <h3 className="font-semibold mb-1">Two-Sided Balance</h3>
                  <p className="text-sm text-gray-600">Success requires equal focus on guest and host experiences</p>
                  <div className="mt-2 text-xs bg-white p-1 rounded font-medium text-airbnb">
                    4M+ hosts earning $4K+/month
                  </div>
                </div>
                <div className="p-4 bg-airbnb-light_gray rounded-lg text-center relative">
                  <div className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-white border-2 border-airbnb flex items-center justify-center text-xs font-bold text-airbnb">3</div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-2 text-airbnb"><path d="M15 2H9a1 1 0 0 0-1 1v2c0 .6.4 1 1 1h6c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1Z"></path><path d="M8 5v14c0 .6.4 1 1 1h2"></path><path d="M20 5v16c0 1.1-.9 2-2 2h-6c-1.1 0-2-.9-2-2v-6c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v0c0 1.1-.9 2-2 2h-2"></path></svg>
                  <h3 className="font-semibold mb-1">Beyond Transactions</h3>
                  <p className="text-sm text-gray-600">Creating emotional connections and memorable experiences</p>
                  <div className="mt-2 text-xs bg-white p-1 rounded font-medium text-airbnb">
                    42% repeat booking rate
                  </div>
                </div>
              </div>

              <Separator className="my-6" />

              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Key Product Learnings</h3>
                <div className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                  15+ years of innovation
                </div>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="h-5 w-5 rounded-full border border-airbnb text-airbnb flex items-center justify-center mt-0.5 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 7"></path></svg>
                  </div>
                  <div>
                    <span>Visual design and usability directly impact trust and conversion</span>
                    <span className="text-xs bg-green-100 text-green-800 px-1.5 rounded ml-1">+38% Conv.</span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-5 w-5 rounded-full border border-airbnb text-airbnb flex items-center justify-center mt-0.5 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 7"></path></svg>
                  </div>
                  <div>
                    <span>Community-building features turn users into brand advocates</span>
                    <span className="text-xs bg-blue-100 text-blue-800 px-1.5 rounded ml-1">72% NPS</span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-5 w-5 rounded-full border border-airbnb text-airbnb flex items-center justify-center mt-0.5 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 7"></path></svg>
                  </div>
                  <div>
                    <span>Personalization at scale requires sophisticated data infrastructure</span>
                    <span className="text-xs bg-purple-100 text-purple-800 px-1.5 rounded ml-1">580TB data</span>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-5 w-5 rounded-full border border-airbnb text-airbnb flex items-center justify-center mt-0.5 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 7"></path></svg>
                  </div>
                  <div>
                    <span>Product evolution must anticipate regulatory challenges, not just react to them</span>
                    <span className="text-xs bg-orange-100 text-orange-800 px-1.5 rounded ml-1">56+ cities</span>
                  </div>
                </li>
              </ul>
              
              <div className="mt-6 pt-4 border-t">
                <div className="flex justify-between items-center">
                  <div className="flex gap-x-2 text-sm">
                    <span className="text-airbnb font-bold">$113B+</span> Annual GMV
                  </div>
                  <div className="flex gap-x-2 text-sm">
                    <span className="text-airbnb font-bold">7M+</span> Active Listings
                  </div>
                  <div className="flex gap-x-2 text-sm">
                    <span className="text-airbnb font-bold">4M+</span> Hosts Worldwide
                  </div>
                  <div className="flex gap-x-2 text-sm">
                    <span className="text-airbnb font-bold">220+</span> Countries & Regions
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Index;