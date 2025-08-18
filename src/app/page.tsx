'use client';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from '@/components/loading-screen';
import Header from '@/components/header';
import HeroSection from '@/components/sections/hero';
import PortfolioSection from '@/components/sections/portfolio';
import AchievementsSection from '@/components/sections/achievements';
import ContactSection from '@/components/sections/contact';
import Footer from '@/components/footer';

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen onFinish={() => setLoading(false)} />}
      </AnimatePresence>

      <Header />
      <main className="flex flex-col pt-16">
        <HeroSection />
        <PortfolioSection />
        <AchievementsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
