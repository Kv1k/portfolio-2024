"use client"
import React, { useEffect, useRef, useState } from 'react';
import ScrollSection from './ScrollSection';
import MobileSection from './MobileSection';
import SmoothScrolling from './SmoothScrolling';
import Menu from './Navigation/Menu'
import { usePathname } from 'next/navigation'
import { LenisRef } from "lenis/react"; 

const Home = () => {      
  const pathname = usePathname()

  const ref = useRef<LenisRef>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const showResponsiveNav = pathname?.includes("/experience");
  const [hasMounted, setHasMounted] = useState(false); 

  useEffect(() => {
    setHasMounted(true);
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
      const isNowDesktop = window.innerWidth >= 1024;
      const previousScreenType = localStorage.getItem("screenType");
      const currentScreenType = isNowDesktop ? "desktop" : "mobile";
  
      // Vérifier si le type d'écran a changé
      if (previousScreenType && previousScreenType !== currentScreenType) {
        localStorage.setItem("screenType", currentScreenType);
        window.location.reload(); // 🔄 Reload la page
      } else {
        localStorage.setItem("screenType", currentScreenType);
      }
    };
  
    
    
    handleResize(); 
    window.addEventListener("resize", handleResize);
  
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  if (!hasMounted) {
    return <div className="loader">Chargement...</div>; 
  }
  
  return (
    <div id={isDesktop ? "desktop-section" : "mobile-section"}>
      {isDesktop ? (
        
        <SmoothScrolling ref={ref}>
           {!showResponsiveNav && <Menu isDesktop={isDesktop} />}
           <ScrollSection /> 
        </SmoothScrolling>
      ) : (
        <>
          
          {!showResponsiveNav &&<Menu isDesktop={isDesktop}/>}
          <MobileSection />
        </>
      )}
    </div>
  );
}

export default Home;