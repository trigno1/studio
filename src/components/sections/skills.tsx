'use client';
import { motion } from 'framer-motion';
import { LogoLoop } from '@/components/logo-loop';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiSolidity,
  SiNodedotjs,
  SiMongodb,
  SiGit,
  SiFigma,
  SiCanva,
} from 'react-icons/si';

const techLogos = [
  { node: <SiReact />, title: 'React', href: 'https://react.dev' },
  { node: <SiNextdotjs />, title: 'Next.js', href: 'https://nextjs.org' },
  { node: <SiTypescript />, title: 'TypeScript', href: 'https://www.typescriptlang.org' },
  { node: <SiTailwindcss />, title: 'Tailwind CSS', href: 'https://tailwindcss.com' },
  { node: <SiSolidity />, title: 'Solidity', href: 'https://soliditylang.org/' },
  { node: <SiNodedotjs />, title: 'Node.js', href: 'https://nodejs.org/' },
  { node: <SiMongodb />, title: 'MongoDB', href: 'https://www.mongodb.com/' },
  { node: <SiGit />, title: 'Git', href: 'https://git-scm.com/' },
  { node: <SiFigma />, title: 'Figma', href: 'https://www.figma.com/' },
  { node: <SiCanva />, title: 'Canva', href: 'https://www.canva.com/' },
];

export default function SkillsSection() {
  return (
    <motion.section
      id="skills"
      className="w-full py-20 lg:py-32"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold">Tools & Technologies</h2>
        <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
          A look at the modern technologies I work with to bring ideas to life.
        </p>
        <div className="mt-12 relative overflow-hidden">
          <LogoLoop
            logos={techLogos}
            speed={80}
            direction="left"
            logoHeight={40}
            gap={60}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="hsl(var(--background))"
            ariaLabel="Technology partners"
          />
        </div>
      </div>
    </motion.section>
  );
}
