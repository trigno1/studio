'use client';

import { useEffect, useRef, useState } from 'react';

const Star = ({
  x,
  y,
  radius,
  opacity,
}: {
  x: number;
  y: number;
  radius: number;
  opacity: number;
}) => (
  <circle
    cx={x}
    cy={y}
    r={radius}
    fill="white"
    opacity={opacity}
    style={{
      transition: 'opacity 0.2s ease-in-out',
    }}
  />
);

const ShootingStar = ({
  x,
  y,
  length,
  angle,
  opacity,
}: {
  x: number;
  y: number;
  length: number;
  angle: number;
  opacity: number;
}) => (
  <line
    x1={x}
    y1={y}
    x2={x + length * Math.cos(angle)}
    y2={y + length * Math.sin(angle)}
    stroke="white"
    strokeWidth="1.5"
    strokeLinecap="round"
    opacity={opacity}
    style={{
      transition: 'opacity 0.5s ease-out',
      filter: 'drop-shadow(0 0 6px rgba(255, 255, 255, 0.8))',
    }}
  />
);

export function ShootingStars() {
  const [stars, setStars] = useState<any[]>([]);
  const [shootingStars, setShootingStars] = useState<any[]>([]);
  const containerRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const { width, height } = containerRef.current.getBoundingClientRect();
    const generateStars = (count: number) => {
      return Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 0.8 + 0.2,
        opacity: Math.random() * 0.5 + 0.2,
      }));
    };
    setStars(generateStars(100));

    const interval = setInterval(() => {
      const newShootingStar = {
        id: Date.now(),
        x: Math.random() * width,
        y: Math.random() * height * 0.5,
        length: Math.random() * 80 + 50,
        angle: Math.PI / 4 + (Math.random() - 0.5) * 0.2,
        opacity: 1,
      };
      setShootingStars((prev) => [...prev, newShootingStar]);

      setTimeout(() => {
        setShootingStars((prev) =>
          prev.map((s) => (s.id === newShootingStar.id ? { ...s, opacity: 0 } : s))
        );
        setTimeout(() => {
          setShootingStars((prev) => prev.filter((s) => s.id !== newShootingStar.id));
        }, 500);
      }, Math.random() * 1000 + 1000);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <svg
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="star-gradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.8)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </radialGradient>
      </defs>
      {stars.map((star, i) => (
        <Star key={i} {...star} />
      ))}
      {shootingStars.map((star) => (
        <ShootingStar key={star.id} {...star} />
      ))}
    </svg>
  );
};
