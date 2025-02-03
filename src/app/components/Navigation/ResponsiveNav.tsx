"use client"
import React from 'react'
import Menu from './Menu'
import { usePathname } from 'next/navigation'
import MenuMobile from './MenuMobile'

const ResponsiveNav = () => {
  const pathname = usePathname()
  const showResponsiveNav = pathname?.includes("/experience");
  const isDesktop = typeof window !== "undefined" && window.innerWidth >= 1024;

  return (
    <div>

      {!showResponsiveNav && isDesktop && <Menu />}
      {!showResponsiveNav && !isDesktop && <MenuMobile />}
    </div>
  )
}

export default ResponsiveNav
