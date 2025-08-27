
'use client';

import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import Galaxy from '@/components/galaxy';
import { useState, useEffect } from 'react';
import LoadingScreen from '@/components/loading-screen';
import { AnimatePresence } from 'framer-motion';
import { SmoothCursor } from '@/components/magicui/smooth-cursor';
import { Analytics } from "@vercel/analytics/react"

const metadata: Metadata = {
  title: 'Tanish Sunita Pareek | Portfolio',
  description: 'Versatile professional skilled in graphic design, UI/UX, blockchain, and community management. Explore the portfolio of Tanish Sunita Pareek.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>{String(metadata.title)}</title>
        <meta name="description" content={String(metadata.description)} />
        <link rel="icon" href="/logo-tanish.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <SmoothCursor />
        <AnimatePresence>
          {loading && <LoadingScreen onFinish={() => setLoading(false)} />}
        </AnimatePresence>
        
        {!loading && (
          <>
            <div style={{ width: '100%', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: -1 }}>
              <Galaxy 
                mouseRepulsion={true}
                mouseInteraction={true}
                density={1.5}
                glowIntensity={0.5}
                saturation={0.8}
                hueShift={240}
              />
            </div>
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              forcedTheme="dark"
            >
              {children}
              <Analytics />
              <Toaster />
            </ThemeProvider>
          </>
        )}
      </body>
    </html>
  );
}
