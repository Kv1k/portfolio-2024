"use client"
import React, { useEffect, useState } from 'react'
import Menu from './Menu'
import { usePathname } from 'next/navigation'
import MenuMobile from './MenuMobile'

const ResponsiveNav = () => {
  const pathname = usePathname()
  const showResponsiveNav = pathname?.includes("/experience");
  const [isDesktop, setIsDesktop] = useState(false);
  
  useEffect(() => {
    // Vérifier si nous sommes dans un environnement client
    if (typeof window !== 'undefined') {
      const checkIfDesktop = () => {
        setIsDesktop(window.innerWidth >= 1024);
      };

      // Initialiser la valeur de isDesktop
      checkIfDesktop();

      // Ajouter un écouteur d'événement pour la mise à jour de la largeur de la fenêtre
      window.addEventListener('resize', checkIfDesktop);

      // Nettoyer l'écouteur lorsque le composant est démonté
      return () => {
        window.removeEventListener('resize', checkIfDesktop);
      };
    }
  }, []);
  return (
    <div>

      {!showResponsiveNav && isDesktop && <Menu />}
      {!showResponsiveNav && !isDesktop && <MenuMobile />}
    </div>
  )
}

export default ResponsiveNav
