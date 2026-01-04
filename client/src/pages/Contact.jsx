import React from "react";
import Rounded from "../components/RoundedButton/Rounded.jsx";

const Contact = () => {
  return (
    <>
    
    <section className="min-h-screen bg-white items-center justify-center px-6 md:px-20 2xl:px-12 py-28">
      <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        
        {/* --- LEFT COLUMN: Text & Socials --- */}
        <div className="flex flex-col justify-center h-full w-full">

          {/* Heading */}
          <h1 className="text-6xl md:text-7xl text-black font-light mb-6 tracking-tight">
            Let’s Talk
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl max-w-md leading-relaxed mb-6">
            Connect with us today and unlock your brand potential.<br /> Inquiries, collaborations, or just to say hello. We're eager to connect!
          </p>

          <div className="mb-10 flex flex-col gap-5">
            <div>
              <p className="text-2xl font-medium">Contact</p>
              <p>+91 81224 07759</p> 
            </div>
            <div>
              <p className="text-2xl font-medium">Mail</p>
              <p>maxroasindia@gmail.com</p>
            </div>
          </div>
          {/* Social Links */}

          <p className="text-2xl font-medium mb-3">Socials</p>
          <div className="flex flex-row gap-8">
            
            {/* Instagram */}
            <a href="#" className="flex items-center gap-6 group w-fit">
              <div className="transition-transform duration-300 group-hover:scale-110">
                <Rounded
                    backgroundColor="#000000"
                    className="!p-0 w-14 h-14 bg-white rounded-full border border-gray-200 flex items-center justify-center"
                >
                    <div className="w-full h-full flex items-center justify-center">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M18,5A1.25,1.25 0 0,1 19.25,6.25A1.25,1.25 0 0,1 18,7.5A1.25,1.25 0 0,1 16.75,6.25A1.25,1.25 0 0,1 18,5Z" />
                        </svg>
                    </div>
                </Rounded>
              </div>
              {/* <span className="text-sm font-bold tracking-[0.15em] text-gray-700 uppercase">
                Instagram
              </span> */}
            </a>

            {/* Twitter */}
            <a href="#" className="flex items-center gap-6 group w-fit">
              <div className="transition-transform duration-300 group-hover:scale-110">
                <Rounded
                    backgroundColor="#000000"
                    className="!p-0 w-14 h-14 bg-white rounded-full border border-gray-200 flex items-center justify-center"
                >
                    <div className="w-full h-full flex items-center justify-center">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                    </div>
                </Rounded>
              </div>
              {/* <span className="text-sm font-bold tracking-[0.15em] text-gray-700 uppercase">
                Twitter
              </span> */}
            </a>

            {/* LinkedIn */}
            <a href="#" className="flex items-center gap-6 group w-fit">
              <div className="transition-transform duration-300 group-hover:scale-110">
                <Rounded
                    backgroundColor="#000000"
                    className="!p-0 w-14 h-14 bg-white rounded-full border border-gray-200 flex items-center justify-center"
                >
                    <div className="w-full h-full flex items-center justify-center">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                           <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z" />
                        </svg>
                    </div>
                </Rounded>
              </div>
              {/* <span className="text-sm font-bold tracking-[0.15em] text-gray-700 uppercase">
                LinkedIn
              </span> */}
            </a>

            {/* Facebook */}
            <a href="#" className="flex items-center gap-6 group w-fit">
              <div className="transition-transform duration-300 group-hover:scale-110">
                <Rounded
                    backgroundColor="#000000"
                    className="!p-0 w-14 h-14 bg-white rounded-full border border-gray-200 flex items-center justify-center"
                >
                    <div className="w-full h-full flex items-center justify-center">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.15 5.96C15.21 5.96 16.12 6.04 16.12 6.04V8.51H15.01C13.77 8.51 13.38 9.28 13.38 10.07V12.06H16.16L15.72 14.96H13.38V21.96C18.16 21.21 21.82 17.06 21.82 12.06C21.82 6.53 17.32 2.04 12 2.04Z" />
                        </svg>
                    </div>
                </Rounded>
              </div>
              {/* <span className="text-sm font-bold tracking-[0.15em] text-gray-700 uppercase">
                Facebook
              </span> */}
            </a>

          </div>
        </div>

        {/* --- RIGHT COLUMN: Form --- */}
        <div className="bg-white p-0 md:p-8 w-full">
          <form className="flex flex-col gap-10">
            
            {/* Name (Full Width) */}
            <div className="flex flex-col gap-2">
                <label className="text-sm font-bold tracking-[0.15em] uppercase">
                  Name
                </label>
                <input 
                  type="text" 
                  placeholder="Your Name"
                  className="w-full bg-transparent text-gray-800 py-3 border-b-2 focus:outline-none border-black transition-colors placeholder:text-gray-400"
                />
            </div>

            {/* Email & Phone Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Email */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold tracking-[0.15em] uppercase">
                  Email
                </label>
                <input 
                  type="email" 
                  placeholder="Your Email"
                  className="w-full bg-transparent text-gray-800 py-3 border-b-2 focus:outline-none border-black transition-colors placeholder:text-gray-400"
                />
              </div>

              {/* Phone (New Field) */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold tracking-[0.15em] uppercase">
                  Phone
                </label>
                <input 
                  type="tel" 
                  placeholder="+91"
                  className="w-full bg-transparent text-gray-800 py-3 border-b-2 focus:outline-none border-black transition-colors placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold tracking-[0.15em] uppercase">
                Message
              </label>
              <textarea 
                rows="4"
                placeholder="How can we help?"
                className="w-full bg-transparent text-gray-800 py-3 border-b-2 focus:outline-none border-black transition-colors placeholder:text-gray-400 resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button 
              type="button"
              className="w-full bg-black text-white uppercase font-medium py-4 rounded-full transition-colors duration-300 mt-4 tracking-wide"
            >
              Send Inquiry
            </button>

          </form>
        </div>
      </div>
    </section>
    <div className="px-10 pb-10 flex items-center justify-center"> <span className="font-bold mr-2">*DISCLAIMER: </span> If your brand generates less than ₹3L/month or $5K/month in revenue, this is NOT for you. Please do NOT book, as your request will be automatically CANCELED.</div>
    </>
  );
};

export default Contact;