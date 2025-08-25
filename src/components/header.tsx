'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Download, ChevronsRight } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Experience', href: '#experience' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Education', href: '#education' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      const sections = navItems.map(item => document.getElementById(item.href.substring(1)));
      let currentSection = 'home';
      
      for (const section of sections) {
          if (section && section.offsetTop <= window.scrollY + 100) {
            currentSection = section.id;
          }
      }
      if(currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-8 transition-all duration-300',
        scrolled ? 'h-16 bg-background/80 backdrop-blur-lg border-b' : 'h-20'
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link href="#home" className="text-2xl font-black uppercase text-primary tracking-widest">
        Tanish
      </Link>
      <nav className="hidden md:flex items-center space-x-2">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              'relative px-3 py-2 text-sm font-medium transition-colors hover:text-primary',
              activeSection === item.href.substring(1) ? 'text-primary' : 'text-foreground/80'
            )}
          >
            {item.name}
            {activeSection === item.href.substring(1) && (
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                layoutId="underline"
              />
            )}
          </Link>
        ))}
      </nav>
      <div className="flex items-center space-x-2">
        <Button asChild className="group overflow-hidden relative">
          <a href="/Tanish_Sunita_Pareek_CV.pdf" download>
            <span className="flex items-center transition-transform duration-300 group-hover:-translate-x-3">
              <Download className="h-4 w-4 mr-2" />
              Download CV
            </span>
            <span className="absolute right-0 flex items-center pr-2 translate-x-10 group-hover:translate-x-0 transition-transform duration-300">
                <ChevronsRight className="h-5 w-5" />
            </span>
          </a>
        </Button>
      </div>
    </motion.header>
  );
}
