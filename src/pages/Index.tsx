
          <Wireframe className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Feature Impact Map</h3>
              <div className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Based on 2023 user research</div>
            </div>
            <div className="relative h-[500px] border border-gray-200 rounded bg-white overflow-hidden">
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
                
                {/* Feature dots with improved spacing and non-overlapping labels */}
                
                {/* High Value, Low Effort Quadrant */}
                <div className="absolute top-[15%] left-[18%] group">
                  <div className="h-5 w-5 rounded-full bg-airbnb flex items-center justify-center text-white text-xs font-bold shadow-lg">1</div>
                  <div className="absolute top-7 left-1/2 -translate-x-1/2 bg-white border border-gray-200 rounded-lg p-2 shadow-md min-w-max">
                    <div className="text-[10px] font-semibold text-gray-800 text-center">Secure Payments</div>
                    <div className="text-[9px] bg-airbnb text-white px-2 py-0.5 rounded-full text-center mt-1">98% critical</div>
                  </div>
                </div>
                
                <div className="absolute top-[32%] left-[25%] group">
                  <div className="h-5 w-5 rounded-full bg-airbnb flex items-center justify-center text-white text-xs font-bold shadow-lg">3</div>
                  <div className="absolute top-7 left-1/2 -translate-x-1/2 bg-white border border-gray-200 rounded-lg p-2 shadow-md min-w-max">
                    <div className="text-[10px] font-semibold text-gray-800 text-center">Reviews System</div>
                    <div className="text-[9px] bg-airbnb text-white px-2 py-0.5 rounded-full text-center mt-1">91% trust factor</div>
                  </div>
                </div>
                
                <div className="absolute top-[45%] left-[12%] group">
                  <div className="h-5 w-5 rounded-full bg-airbnb flex items-center justify-center text-white text-xs font-bold shadow-lg">5</div>
                  <div className="absolute top-7 left-1/2 -translate-x-1/2 bg-white border border-gray-200 rounded-lg p-2 shadow-md min-w-max">
                    <div className="text-[10px] font-semibold text-gray-800 text-center">Messaging</div>
                    <div className="text-[9px] bg-airbnb text-white px-2 py-0.5 rounded-full text-center mt-1">87% usage</div>
                  </div>
                </div>
                
                {/* High Value, High Effort Quadrant */}
                <div className="absolute top-[12%] left-[72%] group">
                  <div className="h-5 w-5 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold shadow-lg">2</div>
                  <div className="absolute top-7 left-1/2 -translate-x-1/2 bg-white border border-gray-200 rounded-lg p-2 shadow-md min-w-max">
                    <div className="text-[10px] font-semibold text-gray-800 text-center">AI Recommendations</div>
                    <div className="text-[9px] bg-blue-500 text-white px-2 py-0.5 rounded-full text-center mt-1">+42% conversion</div>
                  </div>
                </div>
                
                <div className="absolute top-[25%] left-[85%] group">
                  <div className="h-5 w-5 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-bold shadow-lg">4</div>
                  <div className="absolute top-7 right-0 bg-white border border-gray-200 rounded-lg p-2 shadow-md min-w-max">
                    <div className="text-[10px] font-semibold text-gray-800 text-center">Virtual Tours</div>
                    <div className="text-[9px] bg-green-500 text-white px-2 py-0.5 rounded-full text-center mt-1">+36% engagement</div>
                  </div>
                </div>
                
                <div className="absolute top-[38%] left-[68%] group">
                  <div className="h-5 w-5 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold shadow-lg">7</div>
                  <div className="absolute top-7 left-1/2 -translate-x-1/2 bg-white border border-gray-200 rounded-lg p-2 shadow-md min-w-max">
                    <div className="text-[10px] font-semibold text-gray-800 text-center">Dynamic Pricing</div>
                    <div className="text-[9px] bg-blue-500 text-white px-2 py-0.5 rounded-full text-center mt-1">+18% revenue</div>
                  </div>
                </div>
                
                <div className="absolute top-[48%] left-[78%] group">
                  <div className="h-5 w-5 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-bold shadow-lg">8</div>
                  <div className="absolute top-7 right-0 bg-white border border-gray-200 rounded-lg p-2 shadow-md min-w-max">
                    <div className="text-[10px] font-semibold text-gray-800 text-center">Experiences</div>
                    <div className="text-[9px] bg-green-500 text-white px-2 py-0.5 rounded-full text-center mt-1">$1.7B market</div>
                  </div>
                </div>
                
                {/* Low Value, Low Effort Quadrant */}
                <div className="absolute top-[62%] left-[28%] group">
                  <div className="h-5 w-5 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold shadow-lg">6</div>
                  <div className="absolute bottom-7 left-1/2 -translate-x-1/2 bg-white border border-gray-200 rounded-lg p-2 shadow-md min-w-max">
                    <div className="text-[10px] font-semibold text-gray-800 text-center">Calendar Sync</div>
                    <div className="text-[9px] bg-blue-500 text-white px-2 py-0.5 rounded-full text-center mt-1">72% adoption</div>
                  </div>
                </div>
                
                <div className="absolute top-[78%] left-[15%] group">
                  <div className="h-5 w-5 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold shadow-lg">11</div>
                  <div className="absolute bottom-7 left-1/2 -translate-x-1/2 bg-white border border-gray-200 rounded-lg p-2 shadow-md min-w-max">
                    <div className="text-[10px] font-semibold text-gray-800 text-center">Wishlists</div>
                    <div className="text-[9px] bg-blue-500 text-white px-2 py-0.5 rounded-full text-center mt-1">64% usage</div>
                  </div>
                </div>
                
                {/* Low Value, High Effort Quadrant */}
                <div className="absolute top-[68%] left-[72%] group">
                  <div className="h-5 w-5 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-bold shadow-lg">9</div>
                  <div className="absolute bottom-7 left-1/2 -translate-x-1/2 bg-white border border-gray-200 rounded-lg p-2 shadow-md min-w-max">
                    <div className="text-[10px] font-semibold text-gray-800 text-center">Eco Badges</div>
                    <div className="text-[9px] bg-green-500 text-white px-2 py-0.5 rounded-full text-center mt-1">+16% premium</div>
                  </div>
                </div>
                
                <div className="absolute top-[82%] left-[55%] group">
                  <div className="h-5 w-5 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-bold shadow-lg">10</div>
                  <div className="absolute bottom-7 left-1/2 -translate-x-1/2 bg-white border border-gray-200 rounded-lg p-2 shadow-md min-w-max">
                    <div className="text-[10px] font-semibold text-gray-800 text-center">Group Planning</div>
                    <div className="text-[9px] bg-green-500 text-white px-2 py-0.5 rounded-full text-center mt-1">Low priority</div>
                  </div>
                </div>
              </div>
            </div>
          </Wireframe>
