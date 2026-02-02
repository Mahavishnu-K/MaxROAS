// src/pages/Home.jsx
import { useEffect, useState, useLayoutEffect, useRef } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger' 

import Hero from '../sections/Hero.jsx'
import Services from '../sections/Service.jsx'
import Special from '../sections/Special.jsx'
import Customer from '../sections/Customer.jsx'
import Growth from '../sections/Growth.jsx'
import WorkProcess from '../sections/WorkProcess.jsx'
import Comparison from '../sections/Comparison.jsx'
import NotJustAds from '../sections/NotJustAds.jsx'
import Convince from '../sections/Convince.jsx'

import Navbar from '../components/Navbar/Navbar.jsx'
import Footer from '../components/Footer/Footer.jsx'
import TextParallax from '../components/TextParallax/TextParallax.jsx'

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const [activeSection, setActiveSection] = useState("");

  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const specialRef = useRef(null);
  const customerRef = useRef(null);
  const growthRef = useRef(null);
  const processRef = useRef(null);

  useLayoutEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.8,
    });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    
    gsap.ticker.lagSmoothing(0);

    
    let ctx = gsap.context(() => {
        const sections = [
          { id: "Who are we", ref: heroRef },
          { id: "Clients", ref: specialRef },
          { id: "Service", ref: servicesRef },
          { id: "Community", ref: customerRef },
          { id: "Work", ref: processRef },
          { id: "Growth", ref: growthRef },
        ];

        sections.forEach(({ id, ref }) => {
            if(!ref.current) return;
            
            ScrollTrigger.create({
                trigger: ref.current,
                start: "top center", 
                end: "bottom center",
                onEnter: () => setActiveSection(id),
                onEnterBack: () => setActiveSection(id),
            });
        });
    });

    // Cleanup
    return () => {
        lenis.destroy();
        gsap.ticker.remove(lenis.raf);
        ctx.revert(); 
    }
  },[]);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full overflow-hidden">
        <Navbar 
          scrollToSection={scrollToSection}
          refs={{ heroRef, servicesRef, specialRef, customerRef, growthRef, processRef }}
          activeSection={activeSection}
        />

        <section ref={heroRef}><Hero /></section>
        <section ref={specialRef}><Special /></section>
        <section ref={servicesRef}><Services /></section>
        <section><NotJustAds /></section>
        <TextParallax />
        <section ref={customerRef}><Customer /></section>
        <section ><Comparison /></section>
        <section ref={processRef}><WorkProcess /></section>
        <section ref={growthRef}><Growth /></section>
        <section><Convince /></section>
        <Footer />
    </div>
  )
}

export default Home;