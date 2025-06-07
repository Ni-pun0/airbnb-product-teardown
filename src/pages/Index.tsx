
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SectionTitle from '@/components/SectionTitle';
import PersonaCard from '@/components/PersonaCard';
import UserJourneyStep from '@/components/UserJourneyStep';
import FeatureCategory from '@/components/FeatureCategory';
import Wireframe from '@/components/Wireframe';
import TrustFeature from '@/components/TrustFeature';
import MetricCard from '@/components/MetricCard';
import ListingCard from '@/components/ListingCard';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background">
      <Header />
      <Hero />
      
      {/* User Personas Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle 
            title="User Personas" 
            subtitle="Understanding our diverse user base through detailed persona analysis"
          />
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <PersonaCard
              name="Sarah Chen"
              role="Adventure Seeker"
              age="28, Marketing Manager"
              image="/lovable-uploads/058fdaad-47e7-4b8f-bc5a-1b199c276ebc.png"
              goals={["Find unique experiences", "Travel with friends", "Budget-conscious decisions"]}
              painPoints={["Too many options", "Trust concerns", "Hidden fees"]}
              techComfort="High"
            />
            <PersonaCard
              name="Michael Rodriguez"
              role="Business Traveler"
              age="42, Sales Director"
              image="/lovable-uploads/e936742a-5b0a-492e-b4ca-6ec2f930b51b.png"
              goals={["Reliable bookings", "Luxury amenities", "Business-friendly locations"]}
              painPoints={["Last-minute changes", "Inconsistent quality", "Limited availability"]}
              techComfort="Medium"
            />
            <PersonaCard
              name="Emma Thompson"
              role="Family Coordinator"
              age="38, Teacher"
              image="/lovable-uploads/fa6f9d34-0176-410d-879a-137a69167faf.png"
              goals={["Family-friendly options", "Safety first", "Value for money"]}
              painPoints={["Complex booking process", "Unclear policies", "Limited family amenities"]}
              techComfort="Medium"
            />
          </div>
        </div>
      </section>

      {/* User Journey Section */}
      <section className="py-16 px-4 bg-secondary/10">
        <div className="max-w-6xl mx-auto">
          <SectionTitle 
            title="User Journey Mapping" 
            subtitle="Comprehensive analysis of user touchpoints and experience optimization"
          />
          <div className="grid md:grid-cols-5 gap-6 mt-12">
            <UserJourneyStep
              step="1"
              title="Discovery"
              description="User searches for accommodations"
              emotion="Excited"
              touchpoints={["Search Engine", "Social Media", "Recommendations"]}
              painPoints={["Information overload", "Irrelevant results"]}
              opportunities={["Personalized recommendations", "Smart filtering"]}
            />
            <UserJourneyStep
              step="2"
              title="Research"
              description="Comparing options and reading reviews"
              emotion="Curious"
              touchpoints={["Website", "Reviews", "Photos"]}
              painPoints={["Fake reviews", "Limited info", "Overwhelming choices"]}
              opportunities={["Verified reviews", "Virtual tours", "AI assistance"]}
            />
            <UserJourneyStep
              step="3"
              title="Booking"
              description="Making reservation and payment"
              emotion="Anxious"
              touchpoints={["Booking form", "Payment gateway", "Confirmation"]}
              painPoints={["Complex process", "Hidden fees", "Security concerns"]}
              opportunities={["Simplified checkout", "Transparent pricing", "Multiple payment options"]}
            />
            <UserJourneyStep
              step="4"
              title="Experience"
              description="Staying at the accommodation"
              emotion="Satisfied"
              touchpoints={["Check-in", "Amenities", "Support"]}
              painPoints={["Unmet expectations", "Poor communication", "Limited support"]}
              opportunities={["Digital check-in", "24/7 support", "Experience enhancement"]}
            />
            <UserJourneyStep
              step="5"
              title="Advocacy"
              description="Sharing feedback and returning"
              emotion="Loyal"
              touchpoints={["Review platform", "Social sharing", "Referrals"]}
              painPoints={["No incentive to review", "Complex feedback process"]}
              opportunities={["Loyalty program", "Easy review process", "Referral rewards"]}
            />
          </div>
        </div>
      </section>

      {/* Feature Prioritization Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle 
            title="Feature Prioritization" 
            subtitle="Strategic feature development based on user impact and business value"
          />
          
          {/* Feature Categories */}
          <div className="grid md:grid-cols-3 gap-8 mt-12 mb-16">
            <FeatureCategory
              title="Must-Have Features"
              priority="Critical"
              features={[
                "Secure payment processing",
                "Real-time availability",
                "Mobile-responsive design",
                "Basic search & filter",
                "User authentication"
              ]}
              impact="High user satisfaction and trust"
              timeline="Phase 1 (0-3 months)"
            />
            <FeatureCategory
              title="Performance Features"
              priority="High"
              features={[
                "Advanced search algorithms",
                "Personalized recommendations",
                "Review verification system",
                "Multi-language support",
                "Instant booking confirmation"
              ]}
              impact="Improved user experience and conversion"
              timeline="Phase 2 (3-6 months)"
            />
            <FeatureCategory
              title="Delighter Features"
              priority="Medium"
              features={[
                "AI-powered chatbot",
                "Virtual property tours",
                "Social media integration",
                "Loyalty rewards program",
                "Smart pricing suggestions"
              ]}
              impact="Enhanced engagement and retention"
              timeline="Phase 3 (6-12 months)"
            />
          </div>

          {/* Feature Impact Map */}
          <div className="mb-16">
            <img 
              src="/lovable-uploads/e855d2fe-e0d8-4167-b19a-f05aad402894.png" 
              alt="Feature Impact Map"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Prototyping Section */}
      <section className="py-16 px-4 bg-secondary/10">
        <div className="max-w-6xl mx-auto">
          <SectionTitle 
            title="Prototyping & Wireframes" 
            subtitle="Interactive prototypes demonstrating key user flows and interface designs"
          />
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <Wireframe title="Enhanced Search Interface" tagStyle="destination">
              <div className="space-y-6">
                <div className="bg-secondary/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-3">Smart Search Bar</h4>
                  <div className="bg-white p-3 rounded border border-gray-200">
                    <input 
                      type="text" 
                      placeholder="Where are you going?"
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </div>
                  <div className="mt-3 flex gap-2">
                    <span className="px-2 py-1 bg-primary/10 text-primary text-sm rounded">Paris</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary text-sm rounded">Tokyo</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary text-sm rounded">New York</span>
                  </div>
                </div>
                
                <div className="bg-secondary/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-3">Advanced Filters</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-sm text-gray-600">Price Range</label>
                      <div className="bg-white p-2 rounded border border-gray-200">$50 - $200</div>
                    </div>
                    <div>
                      <label className="text-sm text-gray-600">Property Type</label>
                      <div className="bg-white p-2 rounded border border-gray-200">Apartment</div>
                    </div>
                    <div>
                      <label className="text-sm text-gray-600">Amenities</label>
                      <div className="bg-white p-2 rounded border border-gray-200">WiFi, Kitchen</div>
                    </div>
                    <div>
                      <label className="text-sm text-gray-600">Rating</label>
                      <div className="bg-white p-2 rounded border border-gray-200">4.0+</div>
                    </div>
                  </div>
                </div>

                <div className="bg-secondary/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-3">AI Recommendations</h4>
                  <div className="space-y-2">
                    <div className="bg-white p-3 rounded border border-gray-200">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm">Based on your previous stays</span>
                      </div>
                    </div>
                    <div className="bg-white p-3 rounded border border-gray-200">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-sm">Popular in your area</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Wireframe>

            <Wireframe title="Booking Flow Prototype" tagStyle="booking">
              <div className="space-y-6">
                <div className="bg-secondary/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-3">Property Overview</h4>
                  <div className="bg-white p-3 rounded border border-gray-200">
                    <div className="flex gap-3">
                      <div className="w-16 h-16 bg-gray-200 rounded"></div>
                      <div className="flex-1">
                        <h5 className="font-medium">Cozy Downtown Apartment</h5>
                        <p className="text-sm text-gray-600">2 guests • 1 bedroom • 1 bath</p>
                        <div className="flex items-center gap-1 mt-1">
                          <span className="text-yellow-500">★</span>
                          <span className="text-sm">4.8 (127 reviews)</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-semibold">$85</div>
                        <div className="text-sm text-gray-600">per night</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-secondary/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-3">Booking Details</h4>
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-sm text-gray-600">Check-in</label>
                        <div className="bg-white p-2 rounded border border-gray-200">Mar 15, 2024</div>
                      </div>
                      <div>
                        <label className="text-sm text-gray-600">Check-out</label>
                        <div className="bg-white p-2 rounded border border-gray-200">Mar 18, 2024</div>
                      </div>
                    </div>
                    <div>
                      <label className="text-sm text-gray-600">Guests</label>
                      <div className="bg-white p-2 rounded border border-gray-200">2 adults</div>
                    </div>
                  </div>
                </div>

                <div className="bg-secondary/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-3">Price Breakdown</h4>
                  <div className="bg-white p-3 rounded border border-gray-200 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>$85 × 3 nights</span>
                      <span>$255</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Cleaning fee</span>
                      <span>$25</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Service fee</span>
                      <span>$20</span>
                    </div>
                    <hr />
                    <div className="flex justify-between font-semibold">
                      <span>Total</span>
                      <span>$300</span>
                    </div>
                  </div>
                </div>

                <div className="bg-primary text-white p-3 rounded-lg text-center font-semibold">
                  Reserve Now
                </div>
              </div>
            </Wireframe>
          </div>
        </div>
      </section>

      {/* Trust & Safety Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle 
            title="Trust & Safety Framework" 
            subtitle="Building user confidence through comprehensive safety measures and transparency"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <TrustFeature
              icon="shield-check"
              title="Identity Verification"
              description="Multi-step verification process for all users including photo ID and phone number confirmation"
              metrics="99.2% verification success rate"
            />
            <TrustFeature
              icon="star"
              title="Review System"
              description="Authenticated reviews from verified stays with photo evidence and detailed ratings"
              metrics="4.7/5 average rating across 50K+ reviews"
            />
            <TrustFeature
              icon="lock"
              title="Secure Payments"
              description="PCI-compliant payment processing with fraud detection and buyer protection"
              metrics="0.01% fraud rate, 24h refund processing"
            />
            <TrustFeature
              icon="headphones"
              title="24/7 Support"
              description="Round-the-clock customer support with multilingual assistance and emergency response"
              metrics="<2min average response time"
            />
          </div>
        </div>
      </section>

      {/* Analytics Dashboard Section */}
      <section className="py-16 px-4 bg-secondary/10">
        <div className="max-w-6xl mx-auto">
          <SectionTitle 
            title="Analytics & Performance Metrics" 
            subtitle="Data-driven insights powering platform optimization and user experience enhancement"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <MetricCard
              title="User Engagement"
              value="78%"
              change="+12%"
              trend="up"
              description="Monthly active users showing sustained engagement"
              timeframe="vs last quarter"
            />
            <MetricCard
              title="Conversion Rate"
              value="24.5%"
              change="+5.2%"
              trend="up"
              description="Search to booking conversion rate"
              timeframe="month over month"
            />
            <MetricCard
              title="Customer Satisfaction"
              value="4.7/5"
              change="+0.3"
              trend="up"
              description="Average rating across all bookings"
              timeframe="based on 10K+ reviews"
            />
            <MetricCard
              title="Revenue Growth"
              value="$2.4M"
              change="+18%"
              trend="up"
              description="Monthly recurring revenue"
              timeframe="year over year"
            />
          </div>
        </div>
      </section>

      {/* Competitive Analysis Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle 
            title="Market Analysis & Positioning" 
            subtitle="Strategic positioning analysis against key competitors in the accommodation booking space"
          />
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <ListingCard
              title="Platform Differentiation"
              subtitle="Unique Value Proposition"
              image="/placeholder.svg"
              features={[
                "AI-powered personalized recommendations",
                "Blockchain-verified reviews",
                "Dynamic pricing optimization",
                "Carbon footprint tracking",
                "Local experience integration"
              ]}
              cta="View Strategy"
            />
            <ListingCard
              title="Competitive Advantages"
              subtitle="Market Leadership Areas"
              image="/placeholder.svg"
              features={[
                "15% lower average booking fees",
                "2x faster search performance",
                "98% uptime reliability",
                "24/7 multilingual support",
                "Instant booking confirmation"
              ]}
              cta="Analyze Metrics"
            />
            <ListingCard
              title="Growth Opportunities"
              subtitle="Expansion Strategies"
              image="/placeholder.svg"
              features={[
                "Emerging market penetration",
                "Corporate travel partnerships",
                "Sustainable tourism focus",
                "Extended stay offerings",
                "Local services marketplace"
              ]}
              cta="Explore Plans"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
