import { Button } from '@/components/ui/button';
import { Download, Eye } from 'lucide-react';
import Link from 'next/link';
import { RpmCounter } from '../rpm-counter';
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
        <div className="absolute inset-0 bg-grid-white/[0.05] dark:bg-grid-black/[0.1]"></div>
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

        <div className="relative z-10 container mx-auto px-4 flex flex-col items-center">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter">
                <span className="text-primary">Tanish</span> Sunita Pareek
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-2xl text-foreground/80">
                A design-driven developer crafting high-performance digital experiences at the intersection of UI/UX, Blockchain, and community building.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                    <a href="/Tanish_Sunita_Pareek_CV.pdf" download>
                        <Download className="mr-2" />
                        Download CV
                    </a>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                    <Link href="#portfolio">
                        <Eye className="mr-2" />
                        View Portfolio
                    </Link>
                </Button>
            </div>
        </div>

        <div className="absolute bottom-8 right-8 z-10">
            <RpmCounter />
        </div>
    </motion.section>
  );
}
