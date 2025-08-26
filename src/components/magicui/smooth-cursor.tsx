
"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export function SmoothCursor() {
  const cursorSize = 15;

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
    mouse.x.set(clientX - cursorSize / 2);
    mouse.y.set(clientY - cursorSize / 2);
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
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="hsl(var(--primary))"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.2711 0.444569C9.90487 0.197067 9.42852 0.320402 9.18102 0.686649L0.231018 14.82C-0.0164832 15.1862 -0.065538 15.6559 0.124578 16.061L4.66696 19.601C4.85708 20.0061 5.32674 20.1294 5.69299 19.8819L19.8254 10.9319C20.1916 10.6844 20.315 10.2081 20.1675 9.8418L16.6275 0.901802C16.48 0.535555 16.0104 0.320402 15.6441 0.444569L10.2711 0.444569Z"
          fill="hsl(var(--primary))"
        />
      </svg>
    </motion.div>
  );
}
