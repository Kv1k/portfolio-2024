"use client"
import React, { createContext, useContext, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";

// Création du contexte
const LocomotiveScrollContext = createContext(null);

export const useLocomotiveScroll = () => {
  const context = useContext(LocomotiveScrollContext);
  if (!context) {
    throw new Error("useLocomotiveScroll must be used within a LocomotiveScrollProvider");
  }
  return context;
};

// Fournisseur du contexte
export const LocomotiveScrollProvider = ({ children }) => {
  const locoScroll = useRef(null);

  return (
    <LocomotiveScrollContext.Provider value={locoScroll}>
      {children}
    </LocomotiveScrollContext.Provider>
  );
};
