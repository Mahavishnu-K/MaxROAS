import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Growth = () => {
  const containerRef = useRef(null);
  const pathRef = useRef(null);
  const dashedPathRef = useRef(null);
  const dotRef = useRef(null);
  
  // Refs for number counting
  const campaignRef = useRef(null);
  const salesRef = useRef(null);
  const orderRef = useRef(null);
  const conversionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      
      // Configuration for the trigger point
      // We define this once to ensure everything starts at the exact same scroll position
      const triggerConfig = {
        trigger: containerRef.current,
        start: "top 70%", // Animation starts when top of section hits 70% viewport height
        once: true,       // IMPORTANT: Ensures it only runs once per visit
      };

      const tl = gsap.timeline({
        scrollTrigger: triggerConfig
      });

      // Reset strokeDashoffset to 0 (draws the line)
      tl.to([pathRef.current, dashedPathRef.current], {
        strokeDashoffset: 0,
        duration: 6,
        ease: "power2.out",
      });

      // Animate the dot appearance
      gsap.from(dotRef.current, {
        scale: 0,
        opacity: 0,
        delay: 2.5, 
        duration: 0.5,
        ease: "back.out(2)",
        scrollTrigger: triggerConfig // Ensure dot waits for scroll too
      });

      // 2. Animate the Numbers (Counter Effect)
      const animateValue = (ref, start, end, suffix = "", prefix = "") => {
        gsap.fromTo(ref, 
          { textContent: start },
          { 
            textContent: end, 
            duration: 3, 
            ease: "power1.out",
            snap: { textContent: 0.1 },
            // ADDED: scrollTrigger here so numbers wait for scroll
            scrollTrigger: triggerConfig, 
            onUpdate: function() {
              let val = parseFloat(this.targets()[0].textContent);
              if (ref === salesRef.current) {
                 ref.innerHTML = prefix + val.toFixed(2) + suffix;
              } else if(ref === conversionRef.current) {
                 ref.innerHTML = prefix + val.toFixed(2) + suffix;
              } else {
                 ref.innerHTML = prefix + Math.ceil(val) + suffix;
              }
            }
          }
        );
      };

      animateValue(campaignRef.current, 0, 10," Cr+");
      animateValue(salesRef.current, 0, 2.5, " Cr+");
      animateValue(orderRef.current, 0, 1000, "+");
      animateValue(conversionRef.current, 0, 2, "+", "x");

      // 3. Fade in badges
      gsap.from(".growth-badge", {
        scale: 0,
        opacity: 0,
        duration: 2,
        delay: 0.5,
        ease: "back.out(1.7)",
        // ADDED: scrollTrigger here so badges wait for scroll
        scrollTrigger: triggerConfig 
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="pt-24 md:px-16 2xl:px-4 min-h-screen flex flex-col justify-center bg-black">
      <div className="container mx-auto max-w-[1400px]">
        
        {/* --- Header / Title --- */}
        <h2 className="text-white text-5xl 2xl:text-6xl font-bold text-left mb-4">
            Real Results.
            <span className="opacity-50 font-light"> Real Growth.</span>
        </h2>

        {/* --- Dashboard Card --- */}
        <div className="p-2 2xl:p-6 relative overflow-hidden">
            
            {/* Top Metrics Grid */}
            <div className="flex justify-between mb-12 px-4 md:px-0 flex-wrap gap-8">

                {/* Metric 0: Ad Campaigns (approx width needed ~150px) */}
                <div className="text-left min-w-[150px]">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-gray-500 font-medium text-sm uppercase tracking-wide">Revenue Through Ads</span>
                    </div>
                    {/* Added 'tabular-nums' to ensure numbers don't jitter while counting */}
                    <h3 className="text-5xl text-white 2xl:text-6xl tabular-nums">
                        <span ref={campaignRef}>0</span>
                    </h3>
                </div>

                {/* Metric 2: Total Sales (Needs more space for 'Cr+') */}
                <div className="text-left min-w-[220px]">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-gray-500 font-medium text-sm uppercase tracking-wide">Strategic Ad Spend Managed</span>
                    </div>
                    <h3 className="text-5xl text-white 2xl:text-6xl tabular-nums">
                        <span ref={salesRef}>0</span>
                    </h3>
                </div>

                {/* Metric 3: Orders */}
                <div className="text-left min-w-[150px]">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-gray-500 font-medium text-sm uppercase tracking-wide">High-Performance Campaigns</span>                        
                    </div>
                    <h3 className="text-5xl text-white 2xl:text-6xl tabular-nums">
                        <span ref={orderRef}>0</span>
                    </h3>
                </div>

                 {/* Metric 4: Conv Rate */}
                 <div className="text-left min-w-[180px]">
                    <div className="flex items-center gap-2">
                        <span className="text-gray-500 font-medium text-sm uppercase tracking-wide">Average Revenue Growth</span>
                    </div>
                    <h3 className="text-5xl text-white 2xl:text-6xl tabular-nums">
                        <span ref={conversionRef}>0</span>
                    </h3>
                </div>

            </div>

            {/* --- The Graph --- */}
            <div className="relative w-full h-[450px] 2xl:h-[500px] mt-10 -mx-4 md:mx-0">
                <svg 
                    viewBox="0 0 1000 400" 
                    className="w-full h-full p-5 2xl:p-0 overflow-visible"
                    preserveAspectRatio="none"
                >
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#0099FF" stopOpacity="0.2" />
                            <stop offset="100%" stopColor="#0099FF" stopOpacity="0" />
                        </linearGradient>
                    </defs>

                    {/* 1. Dotted Line */}
                    <path
                        ref={dashedPathRef}
                        d="M-5,350 C100,345 200,330 300,310 C400,290 500,300 600,290 C700,270 800,260 900,240 C950,230 980,180 1005,150"
                        fill="none"
                        stroke="#4B5563"
                        strokeWidth="3"
                        strokeDasharray="10, 10"
                        style={{ 
                            strokeDasharray: "1500", 
                            strokeDashoffset: "1500"
                         }}
                    />

                    {/* 2. Solid Line */}
                    <path
                        ref={pathRef}
                        d="M-5,280 C80,260 180,220 280,200 C380,180 480,150 580,150 C680,150 750,180 820,160 C880,140 920,80 1005,20"
                        fill="url(#gradient)" 
                        stroke="#0099FF" 
                        strokeWidth="5"
                        strokeLinecap="round"
                        style={{ 
                            strokeDasharray: "1500", 
                            strokeDashoffset: "1500" 
                        }}
                    />
                    
                    {/* 3. Glowing Dot */}
                    <circle 
                        ref={dotRef}
                        cx="1005" cy="20" r="8" 
                        fill="#0099FF" 
                        stroke="white" 
                        strokeWidth="2"
                    />

                </svg>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Growth;