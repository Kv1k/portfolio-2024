"use client"
import React, { useEffect } from 'react';
import ScrollSection from './ScrollSection';
import MobileSection from './MobileSection';

const Home = () => {
  useEffect(() => {
    const handleResize = () => {
      const isDesktop = window.innerWidth >= 1024;

      // Sauvegarder l'état de l'écran dans le localStorage
      const previousScreenType = localStorage.getItem('screenType');
      const currentScreenType = isDesktop ? 'desktop' : 'mobile';

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
  }, []);

  return (
    <>
      <div className='hidden lg:block' id='desktop-section'>
        <ScrollSection />
      </div>
      <div className='block lg:hidden' id='mobile-section'>
        <MobileSection />
      </div>
    </>
  );
};

export default Home;
