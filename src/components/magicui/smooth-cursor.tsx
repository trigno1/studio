
"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export function SmoothCursor() {
  const cursorSize = 25;

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  const manageMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    mouse.x.set(clientX);
    mouse.y.set(clientY);
  };

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, []);

  return (
    <motion.div
      style={{
        left: smoothMouse.x,
        top: smoothMouse.y,
      }}
      className="pointer-events-none fixed z-50"
    >
        <svg
            width={cursorSize}
            height={cursorSize}
            viewBox="0 0 24 24"
            fill="hsl(var(--primary))"
            stroke="hsl(var(--background))"
            strokeWidth="1.5"
            strokeLinejoin="round"
            strokeLinecap="round"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
            <path d="M13 13l6 6" />
        </svg>
    </motion.div>
  );
}
