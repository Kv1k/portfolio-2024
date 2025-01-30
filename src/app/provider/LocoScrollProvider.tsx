"use client";

import React, { createContext, useContext, useRef, useEffect, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LocoScrollContext = createContext(null);

export const LocoScrollProvider = ({ children }) => {
  const scrollContainerRef = useRef(null);
  const [locoScroll, setLocoScroll] = useState(null);


  // Fonction pour synchroniser le scroll dans les composants enfants
 
  const setScrollContRef = (ref) => (scrollContainerRef.current = ref);

  useEffect(() => {
    if (!scrollContainerRef.current) return;

    // Initialisation de LocomotiveScroll
    const locoScroll = new LocomotiveScroll({
      el: scrollContainerRef.current,
      smooth: true,
      direction: "horizontal", // Scroll horizontal uniquement
      smartphone: {
        smooth: false, // Désactiver pour mobile
        direction: "vertical", // Scroll natif
      },
      tablet: {
        smooth: false, // Désactiver pour tablette
        direction: "vertical", // Scroll natif
      },
    });

    // Synchroniser ScrollTrigger avec LocomotiveScroll
    setLocoScroll(locoScroll);

    

    // Cleanup lorsque le composant est démonté
    return () => {
      locoScroll.destroy();
    };
  }, []);

  return (
    <LocoScrollContext.Provider
      value={{
        locoScroll,
        scrollContainerRef,
        setScrollContRef
      }}
    >
      <div >
        {children}
      </div>
    </LocoScrollContext.Provider>
  );
};

export const useLocoScroll = () => {
  const context = useContext(LocoScrollContext);
  if (!context) {
    console.warn("useLocoScroll must be used within a LocoScrollProvider");
    return { locoScroll: null };
  }
  return context;
};
