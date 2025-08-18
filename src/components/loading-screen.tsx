'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';

const F1CarSVG = () => (
    <svg width="100" height="40" viewBox="0 0 250 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-0 -ml-12 text-primary">
        <path d="M50 50 L150 50 L180 30 L220 30 L230 50 L220 70 L180 70 L150 50 Z" fill="currentColor" />
        <circle cx="70" cy="75" r="15" fill="hsl(var(--background))" stroke="currentColor" strokeWidth="4"/>
        <circle cx="200" cy="75" r="15" fill="hsl(var(--background))" stroke="currentColor" strokeWidth="4"/>
        <path d="M160 50 L190 20" stroke="currentColor" strokeWidth="4" />
        <path d="M140 50 L120 30" stroke="currentColor" strokeWidth="4" />
    </svg>
);


export default function LoadingScreen({ onFinish }: { onFinish: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onFinish, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 35);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <div className="w-full max-w-md px-4">
        <div className="relative h-10 w-full overflow-hidden">
           <motion.div 
             className="absolute h-full w-full"
             style={{ left: `${progress}%` }}
           >
            <F1CarSVG />
           </motion.div>
        </div>
        <div className="relative mt-4 h-2 w-full overflow-hidden rounded-full bg-secondary">
          <motion.div
            className="absolute left-0 top-0 h-full bg-primary"
            animate={{ width: `${progress}%` }}
            transition={{ type: 'spring', stiffness: 50, damping: 20 }}
          />
        </div>
        <p className="mt-4 text-center font-mono text-lg font-bold text-primary">{progress}%</p>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 1, duration: 0.5 } }}
      >
        <Button variant="ghost" onClick={onFinish} className="mt-8">
          Skip Intro
        </Button>
      </motion.div>
    </motion.div>
  );
}
