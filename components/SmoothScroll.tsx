"use client";

import { ReactLenis } from "@studio-freight/react-lenis";

// Menggunakan 'any' agar TypeScript tidak bentrok saat proses production build
export default function SmoothScroll({ children }: { children: any }) {
  return (
    <ReactLenis 
      root 
      options={{ 
        lerp: 0.08,        
        duration: 1.2,     
      }}
    >
      {children}
    </ReactLenis>
  );
}
