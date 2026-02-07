import React from "react";

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
    <section className="px-5 md:px-0 py-20 md:py-24 2xl:py-28 min-h-screen bg-black text-white">
      {/* 
        Mobile Fix: Changed px-24 to px-5 for mobile, kept px-24 for desktop. 
        Added overflow-hidden to prevent horizontal scroll on small screens.
      */}
      <div className="container mx-auto px-5 md:px-24 2xl:px-6 max-w-6xl overflow-hidden md:overflow-visible">
        
        {/* Header */}
        <div className="text-center mb-10 md:mb-10 2xl:mb-14">
          {/* Mobile Fix: Reduced text size to 3xl for mobile, kept [45px] for desktop */}
          <h2 className="text-3xl md:text-[45px] 2xl:text-6xl flex justify-center mb-3 md:mb-1 2xl:mb-2 [@media(max-height:600px)]:mb-0 [@media(max-height:600px)]:text-[40px] font-normal md:font-normal">
            Why Max ROAS Stands Apart
          </h2>
          {/* Mobile Fix: Reduced text size to base */}
          <p className="text-gray-500 text-base md:text-lg">
            Stop paying for promises. Start paying for results.
          </p>
        </div>

        {/* Comparison Cards Grid */}
        {/* Mobile Fix: Added gap-8 so stacked cards have space. Reset to gap-0 on desktop. */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 2xl:gap-16 justify-items-center">

          {/* --- CARD 2: AGENCIES --- */}
          {/* Mobile Fix: Reduced padding to p-6. */}
          <div className="rounded-lg p-6 md:p-8 2xl:p-10 w-full mx-auto max-w-full md:max-w-[430px] 2xl:max-w-none 2xl:w-full border border-gray-800 shadow-gray-800 shadow-sm relative z-0 bg-[#0a0a0a] md:bg-transparent">
             {/* Header */}
             <div className="text-center mb-6 2xl:mb-10">
              {/* Mobile Fix: Reduced text size for long title */}
              <h3 className="text-xl md:text-2xl mb-2 opacity-90">Agencies or Freelancers</h3>
              <div className="h-[0.5px] w-full bg-white mx-auto rounded-full opacity-20"></div>
            </div>

            {/* List */}
            <ul className="space-y-5 [@media(max-height:600px)]:space-y-3">
              {features.map((item, index) => (
                <li key={index} className="flex items-start gap-3 md:gap-4">
                  <div className="flex-shrink-0 w-5 h-5 [@media(max-height:600px)]:w-4 [@media(max-height:600px)]:h-4">
                    <img 
                      src="/X mark black.png" 
                      alt="Cross" 
                      // Invert filter added for dark mode visibility of black image, or assume generic cross
                      className="w-full h-full object-contain opacity-70 invert-0 md:invert-0"
                    />
                  </div>
                  {/* Mobile Fix: Text base for mobile, text-lg for desktop */}
                  <span className="text-base md:text-lg [@media(max-height:600px)]:text-base font-medium leading-tight opacity-90 [@media(max-height:600px)]:leading-tight text-gray-300 md:text-white">
                    {item.other}
                  </span>
                </li>
              ))}
            </ul>
          </div>
            
            {/* --- CARD 1: MAX ROAS (The Winner) --- */}
          {/* Mobile Fix: Reduced padding to p-6. Kept desktop styling exactly as is. */}
          <div className="bg-white text-black rounded-lg w-full mx-auto max-w-full md:max-w-[430px] 2xl:max-w-none 2xl:w-full p-6 md:p-8 2xl:p-10 relative overflow-hidden transform md:scale-110 z-10 shadow-lg md:shadow-none">
            {/* Header */}
            <div className="text-center mb-6 2xl:mb-10">
              <h3 className="text-2xl md:text-3xl font-semibold mb-2">Max ROAS</h3>
              <div className="h-[0.5px] w-full bg-black mx-auto rounded-full"></div>
            </div>

            {/* List */}
            <ul className="space-y-5">
              {features.map((item, index) => (
                <li key={index} className="flex items-start gap-3 md:gap-4">
                  <div className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 [@media(max-height:600px)]:w-5 [@media(max-height:600px)]:h-5">
                    <img 
                      src="/verified tick black.png" 
                      alt="Verified" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  {/* Mobile Fix: Text base for mobile, text-lg for desktop */}
                  <span className="text-base md:text-lg [@media(max-height:600px)]:text-base font-medium leading-tight [@media(max-height:600px)]:leading-tight">
                    {item.max}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Comparison;