"use client"
import React from 'react'
import Menu from './Menu'
import { usePathname } from 'next/navigation'

const ResponsiveNav = () => {
  const pathname = usePathname()
  const showResponsiveNav = pathname?.includes("/experience");
  return (
    <div>
      {!showResponsiveNav && <Menu />}
     
    </div>
  )
}

export default ResponsiveNav
