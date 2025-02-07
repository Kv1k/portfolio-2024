"use client";

import React, { createContext, useContext, useRef, useEffect, useState, ReactNode } from "react";
import LocomotiveScroll from "locomotive-scroll";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface LocoScrollContextType {
  locoScroll: LocomotiveScroll | null;  // locoScroll peut être un objet LocomotiveScroll ou null
  scrollContainerRef: React.RefObject<HTMLElement>;
  setScrollContRef: (ref: HTMLElement) => void;
}

const LocoScrollContext = createContext<LocoScrollContextType | null>(null);

interface LocoScrollProviderProps {
  children: ReactNode; 
}
export const LocoScrollProvider: React.FC<LocoScrollProviderProps> = ({ children }) => {

  const scrollContainerRef = useRef<HTMLElement | null>(null);
  const [locoScroll, setLocoScroll] = useState<LocomotiveScroll | null>(null);

  // Fonction pour synchroniser le scroll dans les composants enfants
 
  const setScrollContRef = (ref: HTMLElement) => (scrollContainerRef.current = ref);

  useEffect(() => {
    if (typeof window !== "undefined") {
    if (!scrollContainerRef.current) return;

    // Initialisation de LocomotiveScroll
    const locoScroll = new LocomotiveScroll({
      el:  document.querySelector("[data-scroll-container]")  ,
      smooth: true,
      direction: "horizontal", // Scroll horizontal uniquement
      smartphone: {
        smooth: false, // Désactiver pour mobile
        direction: "vertical", // Scroll natif
      },
      tablet: {
        smooth: false, // Désactiver pour tablette
        direction: "vertical", // Scroll natif
        breakpoint:1024
      },
    });

    // Synchroniser ScrollTrigger avec LocomotiveScroll
    setLocoScroll(locoScroll);

    

    // Cleanup lorsque le composant est démonté
    return () => {
      locoScroll.destroy();
    };
  }
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
    return { locoScroll: null, scrollContainerRef: null, setScrollContRef: () => {} };
  }
  return context;
};
