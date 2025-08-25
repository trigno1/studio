import Header from '@/components/header';
import HeroSection from '@/components/sections/hero';
import AboutSection from '@/components/sections/about';
import ExperienceSection from '@/components/sections/experience';
import PortfolioSection from '@/components/sections/portfolio';
import SkillsSection from '@/components/sections/skills';
import EducationSection from '@/components/sections/education';
import BlogSection from '@/components/sections/blog';
import ResumeSection from '@/components/sections/resume';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col pt-16">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <PortfolioSection />
        <SkillsSection />
        <EducationSection />
        <BlogSection />
        <ResumeSection />
      </main>
      <Footer />
    </>
  );
}
