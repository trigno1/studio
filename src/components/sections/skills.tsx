'use client';
import { motion } from 'framer-motion';
import { LogoLoop } from '@/components/logo-loop';
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiSolidity,
  SiNodedotjs,
  SiMongodb,
  SiGit,
  SiFigma,
  SiCanva,
  SiPython,
  SiGithub,
  SiArduino,
  SiThirdweb,
  SiPostgresql,
  SiNpm,
  SiPrisma,
  SiVsco,
  SiFirebase,
  SiIntellijidea,
  SiLatex,
  SiNextdotjs,
} from 'react-icons/si';
import { Database } from 'lucide-react';

const techLogos = [
  { node: <SiReact size={32} />, title: 'React' },
  { node: <SiNextdotjs size={32} />, title: 'Next.js' },
  { node: <SiTypescript size={32} />, title: 'TypeScript' },
  { node: <SiTailwindcss size={32} />, title: 'Tailwind CSS' },
  { node: <SiSolidity size={32} />, title: 'Solidity' },
  { node: <SiPython size={32} />, title: 'Python' },
  { node: <SiNodedotjs size={32} />, title: 'Node.js' },
  { node: <SiMongodb size={32} />, title: 'MongoDB' },
  { node: <Database size={32} />, title: 'SQL' },
  { node: <SiGit size={32} />, title: 'Git' },
  { node: <SiGithub size={32} />, title: 'GitHub' },
  { node: <SiFigma size={32} />, title: 'Figma' },
  { node: <SiCanva size={32} />, title: 'Canva' },
  { node: 'Matlab', title: 'Matlab' },
  { node: <SiArduino size={32} />, title: 'Arduino' },
  { node: 'Hardhat', title: 'Hardhat' },
  { node: <SiThirdweb size={32} />, title: 'ThirdWeb' },
  { node: <SiNpm size={32} />, title: 'NPM' },
  { node: <SiPrisma size={32} />, title: 'Prisma' },
  { node: <SiVsco size={32} />, title: 'VS Code' },
  { node: <SiFirebase size={32} />, title: 'Firebase' },
  { node: <SiIntellijidea size={32} />, title: 'IntelliJ IDEA' },
  { node: 'Remix', title: 'Remix IDE' },
  { node: <SiLatex size={32} />, title: 'LaTeX' },
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
