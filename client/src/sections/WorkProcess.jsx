import React from "react";

// Data Array mapping titles to your specific filenames
const steps = [
  {
    title: "Discovery Call",
    img: "/work/Discovery call.png",
  },
  {
    title: "Market & Brand Analysis",
    img: "/work/Market analysis.png",
  },
  {
    title: "30-Day ROAS Plan",
    img: "/work/ROAS plan.png",
  },
  {
    title: "No Upfront Payment",
    img: "/work/No upfront.png",
  },
  {
    title: "Run Ads for 30 Days",
    img: "/work/Run Ads.png",
  },
  {
    title: "Guaranteed ROAS Delivery",
    img: "/work/Delivery.png",
  },
  {
    title: "Pay Only If We Deliver",
    img: "/work/Pay.png",
    hasArrow: true, // Special flag for the arrow connector
  },
  {
    title: "No Results? No Payment",
    img: "/work/Pay Result.png",
  },
];

const WorkProcess = () => {
  return (
    <section className="py-28 min-h-screen bg-white text-black">
      <div className="container mx-auto max-w-full px-6">
        
        {/* Section Heading */}
        <h2 className="text-4xl md:text-6xl text-center mb-16">
          How We Work
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-16 gap-x-8 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center relative group">
              
              {/* Icon Container */}
              <div className="md:w-auto md:h-32 mb-6 relative">
                <img
                  src={step.img}
                  alt={step.title}
                  className="w-full h-full object-contain filter hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-medium max-w-[200px] leading-tight">
                {step.title}
              </h3>

              {/* Special Arrow Connector (Only for the 7th item) */}
              {step.hasArrow && (
                <div className="hidden lg:flex absolute -right-24 top-8 flex-col items-center justify-center w-40">
                  <span className="text-[10px] md:text-xs font-semibold mb-1 text-gray-600 whitespace-nowrap">
                    Only 5% ratio
                  </span>
                  <span className="text-[10px] md:text-xs font-semibold mb-0 text-gray-600 whitespace-nowrap -mt-1">
                    on our journey
                  </span>
                  {/* CSS Arrow Line */}
                  <div className="relative w-full h-[1px] bg-black mt-1">
                    <div className="absolute left-0 -top-[3px] w-1.5 h-1.5 bg-black rounded-full"></div>
                    <div className="absolute right-0 -top-[3px] w-0 h-0 border-t-[4px] border-t-transparent border-l-[6px] border-l-black border-b-[4px] border-b-transparent"></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;