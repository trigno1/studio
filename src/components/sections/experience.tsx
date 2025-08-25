'use client';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';

const experiences = [
    {
        role: "UI/UX Designer",
        company: "Google",
        period: "May 2023 - Present",
        description: "Leading design on key features for a flagship product, focusing on user-centric design principles and collaborating with cross-functional teams to deliver intuitive and engaging experiences."
    },
    {
        role: "Product Designer",
        company: "Meta",
        period: "Jan 2022 - Apr 2023",
        description: "Worked on the core user experience for a major social platform, contributing to features used by millions daily. Specialized in mobile-first design and rapid prototyping."
    },
    {
        role: "Design Intern",
        company: "Sketch",
        period: "May 2021 - Aug 2021",
        description: "Assisted the core design team with UI asset creation, user research, and competitive analysis. Contributed to the design system and helped streamline the design workflow."
    }
];

export default function ExperienceSection() {
    return (
        <motion.section
            id="experience"
            className="w-full py-20 lg:py-32"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
        >
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-5xl font-bold text-center">Work Experience</h2>
                <p className="mt-4 text-lg text-center text-foreground/70 max-w-2xl mx-auto">My professional journey and roles I've held.</p>

                <div className="mt-16 grid gap-8 md:grid-cols-1 max-w-3xl mx-auto">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="flex flex-col md:flex-row">
                                <CardHeader className="flex-shrink-0">
                                    <div className='flex items-center gap-4'>
                                        <div className='p-3 bg-primary/10 rounded-full'>
                                            <Briefcase className="h-6 w-6 text-primary" />
                                        </div>
                                        <div>
                                            <CardTitle>{exp.role}</CardTitle>
                                            <CardDescription>{exp.company} • {exp.period}</CardDescription>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent className="pt-0 md:pt-6">
                                    <p className="text-foreground/80">{exp.description}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}
