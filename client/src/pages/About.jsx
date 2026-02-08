import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "@/components/Button/Button"; // Adjust path if necessary

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      
      // 1. Drop Cap Animation (The big B, O, W)
      const letters = gsap.utils.toArray(".drop-cap");
      letters.forEach((letter) => {
        gsap.fromTo(
          letter,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: letter,
              start: "top 85%",
            },
          }
        );
      });

      // 2. Parallax Text Effect
      // We select paragraphs and lists to move slightly slower than scroll
      const parallaxElements = gsap.utils.toArray(".parallax-text");
      parallaxElements.forEach((el) => {
        gsap.fromTo(
          el,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              end: "top 60%",
              scrub: 1, // Smooth scrubbing
            },
          }
        );
      });

      // 3. Image Reveal Animation
      const images = gsap.utils.toArray(".reveal-image");
      images.forEach((img) => {
        gsap.fromTo(
          img,
          { scale: 0.9, opacity: 0, filter: "blur(10px)" },
          {
            scale: 1,
            opacity: 1,
            filter: "blur(0px)",
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: img,
              start: "top 70%",
            },
          }
        );
      });

      const tl = gsap.timeline();
      
      tl.to([".hero-subtext"], {
        y: 0,
        opacity: 1,
        duration: 1.5,
        stagger: 0.5,
        ease: "power3.out",
      });


    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full bg-black select-none text-white overflow-hidden pt-24 md:pt-32 pb-20">
        
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
            <div 
                className="w-full h-full"
                style={{
                    backgroundImage: `linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)`,
                    backgroundSize: '4rem 4rem'
                }}
            ></div>
        </div>
 
      {/* Page Title */}
      <div className="flex justify-center mb-8 lg:mb-20">
        <div className="relative">
            <h1 className="text-4xl md:text-6xl tracking-wide">About Us</h1>
            
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-7xl flex justify-center items-center flex-col gap-10 md:gap-20 z-10">

        {/* --- SECTION 1: FOUNDERS --- */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col gap-6 order-last lg:order-first">
            <h2 className="text-2xl md:text-4xl leading-tight overflow-hidden">
              <span className="drop-cap text-6xl md:text-[85px] text-[#ffffff] mr-1 float-left">B</span>
              <span className="hero-subtext inline-block opacity-0 translate-y-[100%]">uilt by marketers, <br/> driven by results.</span>
            </h2>
            
            <div className="hero-subtext opacity-0 translate-y-[50%] space-y-6 text-gray-300 text-base md:text-xl leading-relaxed">
              <p>
                Max ROAS was founded by performance marketing experts & partners,
                Kokila and Avinash. With a combined experience across digital marketing
                agencies, in-house brand teams, and corporate marketing environments,
                we've worked closely with fast-growing fashion and D2C brands and seen
                the reality behind the scenes.
              </p>
              
              <h3 className="text-white font-semibold text-xl pt-4">Why Max ROAS Was Born</h3>
              <p className="text-base md:text-xl">
                While helping a well-known fashion brand scale through paid ads, we
                uncovered a recurring problem in the market.
              </p>
            </div>
          </div>

          {/* IMAGE CONTAINER: First on Mobile, Last on Desktop */}
          <div className="lg:col-span-5 reveal-image order-first lg:order-last">
             <div className="relative overflow-hidden">
                <img 
                    src="/about/About1.png" 
                    alt="Founders Kokila and Avinash" 
                    className="w-full h-auto object-cover cursor-pointer transition-all duration-700"
                />
             </div>
          </div>
        </section>


        <section>
            {/* Quote Pill */}
            <div className="parallax-text relative">
                <p className="text-center font-semibold text-xl md:text-[28px] mb-10">
                    “ Most brands don’t fail because ads don’t work, <br className="hidden md:block"/>
                    they fail because marketing lacks ownership ”
                </p>
            </div>

            <div className="parallax-text pb-10">
                <p className="font-semibold text-center text-xl md:text-2xl mb-4 text-white">What we observed repeatedly</p>
                <ul className="text-base md:text-2xl space-y-2 md:text-center text-gray-300">
                <li className="flex items-start gap-3 md:block"><span className="md:hidden mt-2.5 w-2 h-2 bg-white rounded-full flex-shrink-0"></span>Agencies don’t work closely with the product or brand reality.</li>
                <li className="flex items-start gap-3 md:block"><span className="md:hidden mt-2.5 w-2 h-2 bg-white rounded-full flex-shrink-0"></span>Campaigns are handled by freshers or inexperienced executors.</li>
                <li className="flex items-start gap-3 md:block"><span className="md:hidden mt-2.5 w-2 h-2 bg-white rounded-full flex-shrink-0"></span>Brands struggle to hire or retain expert in-house teams while scaling.</li>
                <li className="flex items-start gap-3 md:block"><span className="md:hidden mt-2.5 w-2 h-2 bg-white rounded-full flex-shrink-0"></span>Growth becomes unpredictable due to lack of analysis and learnings.</li>
                </ul>
                <p className="mt-4 text-base md:text-center text-gray-400 italic">
                    This gap between strategy and execution is where most brands lose momentum.
                </p>
            </div>
        </section>

        {/* --- SECTION 2: LEARNINGS --- */}
        <section className="min-h-[600px] grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Image Left on Desktop */}
          <div className="hidden md:block lg:col-span-5 order-2 lg:order-1 reveal-image">
             <div className="relative overflow-hidden">
                <img 
                    src="/about/About2.png" 
                    alt="Strategic planning" 
                    className="w-full h-auto object-cover cursor-pointer transition-all duration-700"
                />
                {/* 3+ Years Badge */}
                <div className="absolute top-6 left-6 bg-[#ffffff] text-black font-bold px-6 py-2 rounded-full shadow-lg text-lg">
                    3+ Years
                </div>
             </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col gap-6">
            <h2 className="text-2xl md:text-4xl leading-tight overflow-hidden">
              <span className="drop-cap text-6xl md:text-[85px] text-[#ffffff] mr-1 float-left">O</span>
              <span className="drop-cap md:inline-block">ur learnings before <br className="hidden md:block"/> launching Max ROAS</span>
            </h2>

            <div className="md:hidden lg:col-span-5 reveal-image">
              <div className="relative overflow-hidden">
                  <img 
                      src="/about/About2.png" 
                      alt="Strategic planning" 
                      className="w-full h-auto object-cover cursor-pointer transition-all duration-700"
                  />
                  {/* 3+ Years Badge */}
                  <div className="absolute top-6 left-6 bg-[#ffffff] text-black font-bold px-6 py-2 rounded-full shadow-lg text-lg">
                      3+ Years
                  </div>
              </div>
            </div>

            <div className="parallax-text text-gray-300 text-base md:text-lg leading-relaxed space-y-6">
                <p>
                    Instead of rushing to start another agency, we did the opposite. For more
                    than 3+ years, we partnered with a select number of brands, immersing
                    ourselves in their products, audiences, and growth goals.
                </p>
                <p>
                    Through this process, we refined scalable ad frameworks, built repeatable
                    growth systems, and learned what truly drives long-term revenue not
                    vanity metrics.
                </p>
                <p className="font-medium text-white">
                    This phase shaped what Max ROAS stands for today.
                </p>
            </div>

             {/* Core Belief Box */}
             <div className="parallax-text">
                <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2 text-center">Our Core Belief</p>
                <p className="text-center font-semibold text-xl md:text-[28px]">
                    “ Anyone working on a brand’s marketing <br className="hidden md:block"/>
                    should treat it like their own business. ”
                </p>
            </div>
          </div>
        </section>

        {/* --- SECTION 3: DIFFERENTIATOR --- */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 flex flex-col gap-6">
                <h2 className="text-2xl md:text-4xl leading-tight overflow-hidden">
                    <span className="drop-cap text-6xl md:text-[85px] text-[#ffffff] mr-1 float-left">W</span>
                    <span className="drop-cap md:inline-block">hat makes Max ROAS <br className="hidden md:block"/> different</span>
                </h2>
                
                <p className="parallax-text text-gray-300 text-base md:text-lg">
                    We didn’t want to be “just another agency”. So we built Max ROAS to function as,
                </p>

                <div className="flex md:hidden lg:col-span-5 reveal-image justify-center">
                    <div className="bg-white rounded-lg p-12 w-full max-w-sm aspect-square flex flex-col justify-center items-center text-left shadow-[0_0_50px_rgba(255,255,255,0.05)]">
                        <div className="flex flex-col leading-none justify-center text-black">
                        <div className="text-6xl font-normal">Max</div>
                        <div className="text-8xl font-bold leading-[0.8]">ROAS</div>
                        <div className="text-[20px] mt-1 ml-[8px]">Your in-house digital team</div>
                    </div>
                    </div>
                </div>

                {/* Highlight Strip */}
                <div className="parallax-text my-4">
                    <p className="text-white font-extrabold text-xl md:text-[28px] skew-x-2">
                        An In-House Marketing Team,  <span className="font-medium">Without the In-House Burden</span>
                    </p>
                </div>

                <ul className="parallax-text space-y-4 text-gray-300 text-base md:text-lg mt-2">
                    <li className="flex items-start gap-3">
                        <span className="mt-2.5 w-2 h-2 bg-white rounded-full flex-shrink-0"></span>
                        We work inside your business, not outside it
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="mt-2.5 w-2 h-2 bg-white rounded-full flex-shrink-0"></span>
                        Strategy, execution, and optimization are handled by experts
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="mt-2.5 w-2 h-2 bg-white rounded-full flex-shrink-0"></span>
                        Focus on quality over quantity, always
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="mt-2.5 w-2 h-2 bg-white rounded-full flex-shrink-0"></span>
                        Every decision is tied to revenue, not impressions and followers
                    </li>
                </ul>
            </div>

            {/* Logo Box */}
            <div className="hidden md:flex lg:col-span-5 reveal-image justify-center">
                <div className="bg-white rounded-lg p-12 w-full max-w-sm aspect-square flex flex-col justify-center items-center text-left shadow-[0_0_50px_rgba(255,255,255,0.05)]">
                    <div className="flex flex-col leading-none justify-center text-black">
                    <div className="text-6xl font-normal">Max</div>
                    <div className="text-8xl font-bold leading-[0.8]">ROAS</div>
                    <div className="text-[20px] mt-1 ml-[8px]">Your in-house digital team</div>
                </div>
                </div>
            </div>
        </section>

        {/* --- SECTION 4: PROMISE & CTA --- */}
        <section className="flex flex-col items-center justify-center gap-12 lg:gap-16 py-10">
            <div className="parallax-text text-center">
                <h3 className="text-3xl md:text-6xl mb-4">Our Promise!</h3>
                <p className="text-2xl md:text-5xl font-bold mb-4 lg:mb-6">Brand Growth = Our Success</p>
                <p className="text-xl text-gray-400 font-medium">We grow only when your brand grows</p>
            </div>

            <div className="z-10">
                 {/* Invert true makes the button white on black bg */}
                <Button text="Reach Us" invert={true} />
            </div>
        </section>

      </div>
    </div>
  );
};

export default About;