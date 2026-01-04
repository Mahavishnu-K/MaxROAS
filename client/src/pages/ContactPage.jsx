// src/pages/ContactPage.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Lenis from 'lenis';
import Navbar from '../components/Navbar/Navbar.jsx';
import Footer from '../components/Footer/Footer.jsx';
import Contact from '../pages/Contact.jsx'; 
import Scale from '../components/TextParallax/Scale.jsx';

const ContactPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // --- ADD THIS LINE ---
    window.scrollTo(0, 0); 
    // --------------------

    const lenis = new Lenis({ smooth: true, lerp: 0.8 });
    
    // Optional: Also tell Lenis to start at 0
    lenis.scrollTo(0, { immediate: true });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  // Handle Navbar clicks on the contact page
  // Instead of scrolling, we navigate back to Home
  const handleNavClick = () => {
    navigate('/');
  };

  // Mock refs to prevent Navbar errors, but point actions to navigate home
  const mockRefs = {
    heroRef: { current: null },
    servicesRef: { current: null },
    specialRef: { current: null },
    customerRef: { current: null },
    growthRef: { current: null }
  };

  return (
    <div className="w-full bg-white overflow-hidden">
      {/* Reusing Navbar: We override scrollToSection to go Home instead */}
      <Navbar 
        scrollToSection={handleNavClick} 
        refs={mockRefs}
      />
      
      {/* Add padding-top to account for fixed Navbar */}
        <Contact />
        <Scale />
      <Footer />
    </div>
  );
};

export default ContactPage;