
'use client';
import { motion } from 'framer-motion';
import { LogoLoop } from '@/components/logo-loop';
import Image from 'next/image';

const techLogos = [
  { node: <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" height="40" width="40" alt="Python" />, title: 'Python' },
  { node: <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" height="40" width="40" alt="C" />, title: 'C' },
  { node: <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" height="40" width="40" alt="MongoDB" />, title: 'MongoDB' },
  { node: <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuresqldatabase/azuresqldatabase-original.svg" height="40" width="40" alt="Azure SQL" />, title: 'Azure SQL' },
  { node: <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" height="40" width="40" alt="Figma" />, title: 'Figma' },
  { node: <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" height="40" width="40" alt="VS Code" />, title: 'VS Code' },
  { node: <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg" height="40" width="40" alt="Solidity" />, title: 'Solidity' },
  { node: <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hardhat/hardhat-original.svg" height="40" width="40" alt="Hardhat" />, title: 'Hardhat' },
  { node: <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg" height="40" width="40" alt="IntelliJ" />, title: 'IntelliJ' },
  { node: <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" height="40" width="40" alt="Canva" />, title: 'Canva' },
  { node: <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg" height="40" width="40" alt="MATLAB" />, title: 'MATLAB' },
  { node: <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="40" width="40" alt="React" />, title: 'React' },
  { node: <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg" height="40" width="40" alt="Prisma" />, title: 'Prisma' },
  { node: <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original-wordmark.svg" height="40" width="40" alt="Arduino" />, title: 'Arduino' },
  { node: <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" height="40" width="40" alt="Java" />, title: 'Java' },
  { node: <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg" height="40" width="40" alt="GitHub" />, title: 'GitHub' },
  { node: <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg" height="40" width="40" alt="Devicon" />, title: 'Devicon' },
  { node: <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" height="40" width="40" alt="NPM" />, title: 'NPM' },
  { node: <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/latex/latex-original.svg" height="40" width="40" alt="LaTeX" />, title: 'LaTeX' },
];

export default function SkillsSection() {
  return (
    <motion.section
      id="skills"
      className="w-full pt-20 lg:pt-32 pb-10 lg:pb-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold">Tools <span className="primary-gradient-text">&</span> Technologies</h2>
        <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
          A look at the modern technologies I work with to bring ideas to life.
        </p>
        <div className="mt-12 relative overflow-hidden">
          <LogoLoop
            logos={techLogos}
            speed={80}
            direction="left"
            logoHeight={48}
            gap={60}
            pauseOnHover
            scaleOnHover
            ariaLabel="Technology partners"
          />
        </div>
      </div>
    </motion.section>
  );
}
