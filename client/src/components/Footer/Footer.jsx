import { memo } from "react";
import Rounded from "../RoundedButton/Rounded";

const Footer = () => {
  // --- Content ---
  const leftLinks = [
   // { name: "Plans & Pricing", href: "/pricing" },
    { name: "About Us", href: "/about-us" },
    { name: "Contact Us", href: "/contact" },
  ];

  const socialLinks = [
        {
            name: "Instagram",
            href: "",
            path: <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M18,5A1.25,1.25 0 0,1 19.25,6.25A1.25,1.25 0 0,1 18,7.5A1.25,1.25 0 0,1 16.75,6.25A1.25,1.25 0 0,1 18,5Z" />
        },
        // {
        //     name: "Facebook",
        //     href: "#",
        //     path: <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.15 5.96C15.21 5.96 16.12 6.04 16.12 6.04V8.51H15.01C13.77 8.51 13.38 9.28 13.38 10.07V12.06H16.16L15.72 14.96H13.38V21.96C18.16 21.21 21.82 17.06 21.82 12.06C21.82 6.53 17.32 2.04 12 2.04Z" />
        // },
        // {
        //     name: "X (Twitter)",
        //     href: "#",
        //     path: <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        // },
        // {
        //     name: "LinkedIn",
        //     href: "#",
        //     path: <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z" />
        // },
        {
          name: "WhatsApp",
          href: "https://wa.me/+918122497759", 
          path: <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        }
  ];

  return (
    <>
      <footer className="footerWrapperStyle">
        {/* Background Big Text */}
        <div className="backgroundTextStyle">MaxROAS</div>

        {/* Added className 'footerCardStyle' for mobile override */}
        <div className="footerCardStyle">
          
          {/* Top Section - Added className 'topSectionStyle' for mobile override */}
          <div className="topSectionStyle">
            
            {/* 1. Left Column: Links */}
            {/* Added className 'left-columnStyle' */}
            <div className="left-columnStyle">
              {leftLinks.map((link) => (
                <a key={link.name} href={link.href} className="footer-link">
                  {link.name}
                </a>
              ))}
            </div>

            {/* 2. Center Column: Brand + Socials */}
            <div className="centerColumnStyle">
                <div className="flex flex-col leading-none justify-center text-white">
                    <div className="text-6xl [@media(max-width:385px)]:text-[56px] font-normal">Max</div>
                    <div className="text-8xl [@media(max-width:385px)]:text-[84px] font-bold roas-text">ROAS</div>
                    <div className="text-[20px] [@media(max-width:385px)]:text-[18px] mt-1 ml-[8px]">Your in-house digital team</div>
                </div>
              
              <div className="social-container flex gap-3 md:mt-6">
                {socialLinks.map((item, index) => (
                    <Rounded
                        key={index}
                        backgroundColor="#000000"
                        // Adjusted sizes: w-16 h-16 for mobile, md:w-20 md:h-20 for desktop
                        className="!p-0 w-16 h-16 md:w-20 md:h-20 bg-white rounded-full border-none flex items-center justify-center"
                        aria-label={item.name}
                    >
                        <a 
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full h-full flex items-center justify-center"
                        >
                            <svg 
                                viewBox="0 0 24 24" 
                                fill="currentColor" 
                                className="w-8 h-8 md:w-10 md:h-10 transition-transform duration-300 group-hover:scale-110" 
                            >
                                {item.path}
                            </svg>
                        </a>
                    </Rounded>
                ))}
              </div>
            </div>

            {/* 3. Right Column: Contact Us */}
            {/* Added className 'right-columnStyle' */}
            <div className="right-columnStyle">
              {/* <h4 className="column-title">Contact Us</h4>
              
              <div className="contact-block">
                <p className="contact-name">Kokilavani</p>
                <p className="contact-role">Founder | Max ROAS</p>
                <p className="contact-address">
                  Gayatri Complex. PPM,<br />
                  Tiruchengode, TN, IN
                </p>
                <a href="mailto:maxroasindia@gmail.com" className="contact-email">
                  maxroasindia@gmail.com
                </a>
              </div> */}
            </div>
          </div>

          {/* Bottom Section */}
          <div className="bottomSectionStyle">
            <span>© 2025 Max ROAS. All right reserved.</span>
            <span style={{margin: '0 5px'}} className="hidden md:block" >|</span>
            <a href="/terms" className="legal-link">Terms of Service</a>
            <span style={{margin: '0 5px'}}>|</span>
            <a href="/privacy" className="legal-link">Privacy Policy</a>
          </div>

        </div>
      </footer>

      <style>{`
        @font-face {
            font-family: 'Slussen Expanded Black';
            src: url('/font/Slussen-Expanded-Black.woff2') format('woff2');
            font-weight: normal;
            font-style: normal;
            font-display: swap;
        }

        .roas-text {
            line-height: 0.8; /* Tighter desktop leading */
        }

        .footer-link {
          font-size: 1.1rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.9);
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .footer-link:hover {
          color: #fff;
          transform: translateX(5px);
        }

        .column-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: #fff;
          margin-bottom: 0.5rem;
        }
        
        .contact-block {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        .contact-name {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.9);
          margin: 0;
        }
        .contact-role {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.6);
          margin: 0 0 0.5rem 0;
        }
        .contact-address {
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.5;
          margin: 0 0 0.5rem 0;
        }
        .contact-email {
          color: rgba(255, 255, 255, 0.9);
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s;
        }

        .contact-email:hover {
          color: #fff;
          text-decoration: underline;
        }

        .centerColumnStyle {
          flex: 1 1 300px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4rem;
        }

        .footerWrapperStyle {
          position: relative;
          width: 100%;
          padding: 6rem 1.5rem 5rem;
          display: flex;
          justify-content: center;
          overflow: hidden;
          min-height: 100vh;
          background-color: #000;
          color: white;
        }

        .backgroundTextStyle {
          position: absolute;
          bottom: -1%;
          left: 50%;
          transform: translateX(-50%);
          font-family: "Slussen Expanded Black", sans-serif;
          font-size: clamp(6rem, 18vw, 15rem);
          font-weight: 900;
          background: linear-gradient(180deg, #303030 0%, #000 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          z-index: 0;
          user-select: none;
          pointer-events: none;
          white-space: nowrap;
          opacity: 0.5;
        }

        .footerCardStyle {
          position: relative;
          width: 100%;
          max-width: 1400px;
          height: 510px;
          padding: clamp(2rem, 5vw, 4rem);
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          z-index: 1;
          display: flex;
          flex-direction: column;
          gap: 3rem;
          margin-bottom: 6rem;
        }

        .topSectionStyle {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 3rem;
        }

        .left-columnStyle {
          flex: 1 1 200px;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .right-columnStyle {
          flex: 1 1 200px;
          display: flex;
          flex-direction: column;
          text-align: right;
          align-items: flex-end;
          gap: 1rem;
        }

        .bottomSectionStyle {
          display: flex;
          justify-content: center;
          align-items: center;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.85rem;
          flex-wrap: wrap;
          gap: 0.5rem;
          text-align: center;
        }

        .social-container {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }

        .legal-link {
          color: rgba(255, 255, 255, 0.6);
          text-decoration: none;
          transition: color 0.3s;
        }
        .legal-link:hover {
          color: #fff;
        }

        /* -----------------------------------------------------------------
           MOBILE RESPONSIVE OVERRIDES
           Using !important ensures we override the inline styles 
           without changing the original JS objects.
        ----------------------------------------------------------------- */
        @media (max-width: 768px) {

            .roas-text {
                line-height: 0.8 !important;
            }

            .footerCardStyle {
                height: auto !important; /* Overrides 510px fixed height */
                padding-bottom: 3rem !important;
                gap: 1rem !important;
            }

            .topSectionStyle {
                flex-direction: column !important;
                align-items: center !important;
                text-align: left !important;
                gap: 0;
            }
            
            .centerColumnStyle {
               gap: 1rem !important;
            }

            /* Center align the Left Links column */
            .left-columnStyle {
                align-items: left !important;
                text-align: left !important;
                flex: 1 1 110px !important; 
                gap: 0.5rem !important;
                width: 100%;
            }

            /* Center align the Contact column */
            .right-columnStyle {
                display: none !important; /* Hides the right column on mobile */
            }

            /* Ensure hover effect on links doesn't push them off-center on mobile */
            .footer-link:hover {
                transform: translateX(0); 
                color: #fff;
                text-decoration: underline;
            }

            .backgroundTextStyle {
              font-size: clamp(1rem, 16vw, 6rem) !important; /* Adjust size for smaller screens */
              transform: translateY(-60%) !important; /* Center vertically on smaller screens */
              left: -5% !important; /* Keep centered horizontally */
            }
        }
      `}</style>
    </>
  );
};

export default memo(Footer);