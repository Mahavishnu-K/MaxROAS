import React from "react";
import Button from "@/components/Button/Button"; 

const Convince = () => {
  return (
    <section className="py-24 bg-white text-black">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* --- TOP CONTENT --- */}
        <div className="flex flex-col items-center text-center xl:mb-10">
          <h2 className="text-4xl md:text-5xl mb-6 leading-tight">
            We don’t believe in <br className="hidden md:block" /> convincing with words
          </h2>
          
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl leading-relaxed font-medium mb-8">
            Book a discovery call, and we’ll analyze your brand and share a
            30-day ad strategy with a projected ROAS before running any
            ads. Review the plan, see how efficient it is, and then decide. Sounds good?
          </p>

          {/* <div className="bg-black text-white px-6 py-2 text-lg font-bold">
            Sounds good ?
          </div> */}
        </div>

        {/* --- BOTTOM CONTENT (Grid) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Left Column: Graph & Legend */}
          <div className="relative">
            {/* Legend */}

            {/* Image */}
            <div className="w-full">
                {/* Using the filename you provided */}
                <img 
                    src="/letscale.png" 
                    alt="Profit vs Time Graph" 
                    className="w-full h-auto object-contain"
                />
            </div>
          </div>

          {/* Right Column: CTA */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-8">
            <h3 
                className="text-4xl md:text-6xl leading-tight"
            >
                Let’s Scale Your Brand
            </h3>
            
            {/* Using your custom Button component */}
            {/* invert={false} gives Black Background / White Text */}
            <div className="origin-top">
                <Button text="Book a Call" invert={false} />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Convince;