"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 40, stiffness: 400, mass: 0.4 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - (isHovered ? 24 : 8));
      cursorY.set(e.clientY - (isHovered ? 24 : 8));
    };

    const handleMouseOver = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handleHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" || 
        target.tagName === "BUTTON" || 
        target.closest("button") || 
        target.closest("a") ||
        target.classList.contains("interactive")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseenter", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mouseover", handleHoverStart);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseenter", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseover", handleHoverStart);
    };
  }, [isHovered, cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] mix-blend-screen hidden md:block"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        width: isHovered ? 56 : 16,
        height: isHovered ? 56 : 16,
        backgroundColor: isHovered ? "rgba(244, 63, 94, 0.2)" : "rgb(244, 63, 94)", // Warna Pink Rose
        border: isHovered ? "2px solid rgb(244, 63, 94)" : "none",
      }}
      animate={{
        scale: isHovered ? 1.1 : 1,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 25 }}
    />
  );
}