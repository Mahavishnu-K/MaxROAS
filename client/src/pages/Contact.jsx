import React from "react";
import Rounded from "../components/RoundedButton/Rounded.jsx";

const Contact = () => {
  return (
    <section className="min-h-screen bg-white flex items-center justify-center px-4 md:px-12">
      <div className="container mx-auto pb-28 max-w-7xl flex gap-12 lg:gap-24 items-center">
        
        {/* --- LEFT COLUMN: Text & Socials --- */}
        <div className="flex flex-col justify-center h-full w-full pt-1">
          
          {/* Badge */}
          <div className="mb-6">
            <span className="border border-gray-300 px-4 py-2 text-xs font-bold tracking-[0.2em] text-gray-600 uppercase">
              Contact
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-6xl md:text-7xl text-black font-light mb-4 tracking-tight">
            Let’s Talk
          </h1>

          {/* Description */}
          <p className="text-gray-500 text-lg md:text-xl max-w-md leading-relaxed mb-12">
            Reach out for inquiries, collaborations, or just to say hello. We're eager to connect!
          </p>

          {/* Social Links */}
          <div className="flex flex-col gap-6">
            
            {/* Instagram */}
            <a href="#" className="flex items-center gap-6 group">
              <div className="shadow-sm transition-transform duration-300 group-hover:scale-110">
                <Rounded
                    backgroundColor="#000000"
                    // 2. Exact same styling classes as your Customer Arrow buttons
                    // I adjusted w-20 h-20 to w-14 h-14 to be more appropriate size for footer icons, 
                    // but you can change back to w-20 h-20 if you want them huge.
                    className="!p-0 w-14 h-14 bg-white rounded-full border-none flex items-center justify-center"
                    
                >
                    <a 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full h-full flex items-center justify-center"
                    >
                        {/* 3. SVG with fill="currentColor". 
                        The 'Rounded' component handles the hover -> white color transition automatically */}
                        <svg 
                            viewBox="0 0 24 24" 
                            fill="currentColor" 
                            className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" // Optional: added scale on hover for polish
                        >
                            <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M18,5A1.25,1.25 0 0,1 19.25,6.25A1.25,1.25 0 0,1 18,7.5A1.25,1.25 0 0,1 16.75,6.25A1.25,1.25 0 0,1 18,5Z" />
                        </svg>
                    </a>
                </Rounded>
              </div>
              <span className="text-sm font-bold tracking-[0.15em] text-gray-700 uppercase">
                Instagram
              </span>
            </a>

            {/* Twitter */}
            <a href="#" className="flex items-center gap-6 group">
              <div className="shadow-sm transition-transform duration-300 group-hover:scale-110">
                <Rounded
                    backgroundColor="#000000"
                    // 2. Exact same styling classes as your Customer Arrow buttons
                    // I adjusted w-20 h-20 to w-14 h-14 to be more appropriate size for footer icons, 
                    // but you can change back to w-20 h-20 if you want them huge.
                    className="!p-0 w-14 h-14 bg-white rounded-full border-none flex items-center justify-center"
                >
                    <a 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full h-full flex items-center justify-center"
                    >
                        {/* 3. SVG with fill="currentColor". 
                        The 'Rounded' component handles the hover -> white color transition automatically */}
                        <svg 
                            viewBox="0 0 24 24" 
                            fill="currentColor" 
                            className="w-7 h-7 transition-transform duration-300 group-hover:scale-110" // Optional: added scale on hover for polish
                        >
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                    </a>
                </Rounded>
              </div>
              <span className="text-sm font-bold tracking-[0.15em] text-gray-700 uppercase">
                Twitter
              </span>
            </a>

            {/* Linked In */}
            <a href="#" className="flex items-center gap-6 group">
              <div className="shadow-sm transition-transform duration-300 group-hover:scale-110">
                <Rounded
                    backgroundColor="#000000"
                    // 2. Exact same styling classes as your Customer Arrow buttons
                    // I adjusted w-20 h-20 to w-14 h-14 to be more appropriate size for footer icons, 
                    // but you can change back to w-20 h-20 if you want them huge.
                    className="!p-0 w-14 h-14 bg-white rounded-full border-none flex items-center justify-center"
                >
                    <a 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full h-full flex items-center justify-center"
                    >
                        {/* 3. SVG with fill="currentColor". 
                        The 'Rounded' component handles the hover -> white color transition automatically */}
                        <svg 
                            viewBox="0 0 24 24" 
                            fill="currentColor" 
                            className="w-9 h-9 transition-transform duration-300 group-hover:scale-110" // Optional: added scale on hover for polish
                        >
                           <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z" />
                        </svg>
                    </a>
                </Rounded>
              </div>
              <span className="text-sm font-bold tracking-[0.15em] text-gray-700 uppercase">
                Linked In
              </span>
            </a>

            {/* Facebook (Using Globe icon to match reference image) */}
            <a href="#" className="flex items-center gap-6 group">
              <div className="shadow-sm transition-transform duration-300 group-hover:scale-110">
                <Rounded
                    backgroundColor="#000000"
                    // 2. Exact same styling classes as your Customer Arrow buttons
                    // I adjusted w-20 h-20 to w-14 h-14 to be more appropriate size for footer icons, 
                    // but you can change back to w-20 h-20 if you want them huge.
                    className="!p-0 w-14 h-14 bg-white rounded-full border-none flex items-center justify-center"
                >
                    <a 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full h-full flex items-center justify-center"
                    >
                        {/* 3. SVG with fill="currentColor". 
                        The 'Rounded' component handles the hover -> white color transition automatically */}
                        <svg 
                            viewBox="0 0 24 24" 
                            fill="currentColor" 
                            className="w-10 h-10 transition-transform duration-300 group-hover:scale-110" // Optional: added scale on hover for polish
                        >
                            <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.15 5.96C15.21 5.96 16.12 6.04 16.12 6.04V8.51H15.01C13.77 8.51 13.38 9.28 13.38 10.07V12.06H16.16L15.72 14.96H13.38V21.96C18.16 21.21 21.82 17.06 21.82 12.06C21.82 6.53 17.32 2.04 12 2.04Z" />
                        </svg>
                    </a>
                </Rounded>
              </div>
              <span className="text-sm font-bold tracking-[0.15em] text-gray-700 uppercase">
                Facebook
              </span>
            </a>

          </div>
        </div>

        {/* --- RIGHT COLUMN: Form --- */}
        <div className="bg-white p-8 md:p-12 shadow-sm rounded-sm w-full">
          <form className="flex flex-col gap-8">
            
            {/* Name & Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Name */}
              <div className="flex flex-col gap-3">
                <label className="text-xs font-bold tracking-[0.15em] text-gray-600 uppercase">
                  Name
                </label>
                <input 
                  type="text" 
                  placeholder="Your Name"
                  className="w-full bg-[#F5F7F8] text-gray-700 p-4 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-300 transition-all placeholder:text-gray-400"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-3">
                <label className="text-xs font-bold tracking-[0.15em] text-gray-600 uppercase">
                  Email
                </label>
                <input 
                  type="email" 
                  placeholder="Your Email"
                  className="w-full bg-[#F5F7F8] text-gray-700 p-4 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-300 transition-all placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-3">
              <label className="text-xs font-bold tracking-[0.15em] text-gray-600 uppercase">
                Message
              </label>
              <textarea 
                rows="6"
                placeholder="Your Message"
                className="w-full bg-[#F5F7F8] text-gray-700 p-4 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-300 transition-all placeholder:text-gray-400 resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button 
              type="button"
              className="w-full bg-black text-white font-medium py-4 rounded-md transition-colors duration-300 mt-2"
            >
              Send Message
            </button>

          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;