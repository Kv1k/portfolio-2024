"use client";
import { LenisRef, ReactLenis } from "lenis/react";
import { forwardRef, ReactNode } from "react";

interface SmoothScrollingProps {
  children: ReactNode;
}

const SmoothScrolling = forwardRef<LenisRef, SmoothScrollingProps>(({ children }, ref) => {
  return (
    <ReactLenis ref={ref} root options={{
      smoothWheel: true, lerp:0.07,  gestureOrientation: "vertical",
      orientation:"horizontal",
      touchMultiplier: 2,
      infinite:false
    }}>
      {children}
    </ReactLenis>
  );
});

SmoothScrolling.displayName = 'SmoothScrolling';

export default SmoothScrolling;
