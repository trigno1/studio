
'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Image from 'next/image';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Education', href: '#education' },
  { name: 'Blog', href: '#blog' },
  { name: 'Resume', href: '#resume' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

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
      <Link href="#home" className="flex items-center">
        <Image src="/Logo.png" alt="Tanish Sunita Pareek Logo" width={120} height={40} className="h-10 w-auto" />
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
      <div className="md:hidden flex items-center gap-2">
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col space-y-4 pt-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'text-lg font-medium transition-colors hover:text-primary',
                    activeSection === item.href.substring(1) ? 'text-primary' : 'text-foreground/80'
                  )}
                  onClick={closeMobileMenu}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
}
