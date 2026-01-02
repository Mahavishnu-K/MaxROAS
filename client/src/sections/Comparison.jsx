import React from "react";
import Button from "@/components/Button/Button";

const Comparison = () => {

  // Data structure to keep the code clean and text aligned
  const features = [
    { max: "Guaranteed Results", other: "No Guaranteed Results" },
    { max: "No upfront fees", other: "High Upfront fees" },
    { max: "Pay only if you got results", other: "Pay Without ROI Assurance" },
    { max: "No sales percentage", other: "Pay Sales percentage" },
    { max: "Dedicated Ad Experts", other: "Inconsistent Expertise" },
    { max: "Tailored Strategy", other: "Same Strategy For All" },
    { max: "Advance Reporting", other: "Poor Reporting & Analytics" },
    { max: "Timely Communication", other: "No proper communication" },
    { max: "Taking Task Ownership", other: "No True Ownership" },
  ];

  return (
    <section className="pt-28 min-h-screen bg-black text-white">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-6xl flex justify-center mb-4">
            Why Max ROAS Stands Apart
          </h2>
          <p className="text-gray-500 text-lg">
            Stop paying for promises. Start paying for results.
          </p>
        </div>

        {/* Comparison Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* --- CARD 1: MAX ROAS (The Winner) --- */}
          <div className="bg-white text-black rounded-lg p-8 md:p-10 shadow-2xl relative overflow-hidden transform md:scale-110 z-10">
            {/* Header */}
            <div className="text-center mb-10">
              <h3 className="text-3xl font-semibold mb-2">Max ROAS</h3>
              <div className="h-[0.5px] w-full bg-black mx-auto rounded-full"></div>
            </div>

            {/* List */}
            <ul className="space-y-4">
              {features.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6">
                    <img 
                      src="/verified tick black.png" 
                      alt="Verified" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-lg font-medium leading-tight">
                    {item.max}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* --- CARD 2: AGENCIES --- */}
          <div className="rounded-lg p-8 md:p-10 border border-gray-800 shadow-gray-800 shadow-sm relative z-0">
             {/* Header */}
             <div className="text-center mb-10">
              <h3 className="text-2xl mb-2 opacity-60">Agencies or Freelancers/Freelance Portals</h3>
              <div className="h-[0.5px] w-full bg-white mx-auto rounded-full opacity-20"></div>
            </div>

            {/* List */}
            <ul className="space-y-4">
              {features.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-5 h-5">
                    <img 
                      src="/X mark black.png" 
                      alt="Cross" 
                      className="w-full h-full object-contain opacity-70"
                    />
                  </div>
                  <span className="text-lg font-medium leading-tight opacity-60">
                    {item.other}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Call to Action Button */}
        <div className="flex justify-center mt-16">
            <Button text="Book a Call" invert='true'/>
        </div>

      </div>
    </section>
  );
};

export default Comparison;