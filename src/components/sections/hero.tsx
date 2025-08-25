'use client';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <motion.section 
      id="home" 
      className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
        <div className="relative z-10 container mx-auto px-4 flex flex-col items-center">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter">
                <span className="primary-gradient-text">Tanish</span> Sunita Pareek
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-3xl text-foreground/80">
                Versatile professional skilled in graphic design, UI/UX, blockchain, and community management. Experienced in leading hackathons, managing coding clubs, and delivering impactful visuals.
            </p>
        </div>

        <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
            <a href="#about" aria-label="Scroll down">
                <ChevronDown className="h-8 w-8 text-foreground/50" />
            </a>
        </motion.div>
    </motion.section>
  );
}
