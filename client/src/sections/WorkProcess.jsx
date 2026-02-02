import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Data Array
const steps = [
  { title: "Discovery Call", img: "/work/Discovery call.png" },
  { title: "Market & Brand Analysis", img: "/work/Market analysis.png" },
  { title: "30-Day ROAS Plan", img: "/work/ROAS plan.png" },
  { title: "No Upfront Payment", img: "/work/No upfront.png" },
  { title: "Run Ads for 30 Days", img: "/work/Run Ads.png" },
  { title: "Guaranteed ROAS Delivery", img: "/work/Delivery.png" },
  { title: "Pay Only If We Deliver", img: "/work/Pay.png", hasArrow: true },
  { title: "No Results? No Payment", img: "/work/Pay Result.png" },
];

const WorkProcess = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      
      // Select the heading and the grid items
      const heading = ".work-heading";
      const items = ".work-step-item";

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 40%", 
          once: true, 
        }
      });

      // 1. Reveal Heading
      tl.from(heading, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      });

      // 2. Staggered Reveal of Process Steps
      tl.from(items, {
        y: 50,          // Slide up from 50px below
        opacity: 0,     // Fade in from 0
        scale: 0.9,     // Slight zoom in effect
        duration: 0.6,
        stagger: 0.4,   // 0.1s delay between each item (Creates the 'wave')
        ease: "back.out(1.7)" // Adds a subtle 'pop' overshoot at the end
      }, "-=0.4"); // Start slightly before heading finishes

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 2xl:py-28 min-h-screen bg-white text-black">
      <div className="container mx-auto max-w-full px-6  [@media(max-height:600px)]:px-14">
        
        {/* Section Heading */}
        <h2 className="work-heading text-3xl md:text-[46px] 2xl:text-6xl [@media(max-height:600px)]:text-4xl text-center mb-6 2xl:mb-16">
          How We Work
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 md:gap-y-16 gap-x-8 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            // Added 'work-step-item' class for GSAP targeting
            <div key={index} className="work-step-item flex flex-col items-center text-center relative group">
              
              {/* Icon Container */}
              <div className="md:w-auto h-20 md:h-28 2xl:h-32 [@media(max-height:600px)]:h-24 mb-2 2xl:mb-6 relative">
                <img
                  src={step.img}
                  alt={step.title}
                  className="w-full h-full object-contain filter hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Title */}
              <h3 className="text-sm md:text-lg laptop:text-xl [@media(max-height:600px)]:text-lg font-medium max-w-[200px] leading-tight">
                {step.title}
              </h3>

              {/* Special Arrow Connector */}
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