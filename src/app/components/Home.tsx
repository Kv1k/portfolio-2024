"use client"
import React, { useEffect } from 'react';
import ScrollSection from './ScrollSection';
import MobileSection from './MobileSection';
import ResponsiveNav from './Navigation/ResponsiveNav';
import { LocoScrollProvider } from '../context/LocoScrollProvider';

const Home = () => {      
  const isDesktop = window.innerWidth >= 1024;

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        const newIsDesktop = window.innerWidth >= 1024;
        // Sauvegarder l'état de l'écran dans le localStorage
        const previousScreenType = localStorage.getItem('screenType');
        const currentScreenType = newIsDesktop ? 'desktop' : 'mobile';

        // Si le type d'écran change, rafraîchir la page
        if (previousScreenType && previousScreenType !== currentScreenType) {
          localStorage.setItem('screenType', currentScreenType);
          window.location.reload(); // Rafraîchit la page
        } else {
          localStorage.setItem('screenType', currentScreenType);
        }
      };

      // Initialiser le type d'écran
      handleResize();

      // Écouter les changements de taille
      window.addEventListener('resize', handleResize);

      // Nettoyer l'écouteur
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return (
    <>
      {isDesktop ? (
        <div id='desktop-section'>
          <LocoScrollProvider>
            <ResponsiveNav />
            <ScrollSection />
          </LocoScrollProvider>
        </div>
      ) : (
        <div id='mobile-section'>
          <ResponsiveNav />
          <MobileSection />
        </div>
      )}
    </>
  );
};

export default Home;