'use client';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';

const experiences = [
    {
        role: "Blockchain Developer",
        company: "tecXaro",
        period: "Mar 2024 - Present",
        description: "Promoted within 4 months for contributions to blockchain projects enhancing smart contract security and efficiency. Supported content team by drafting MoUs, documentation, and professional presentations."
    },
    {
        role: "Lead Organizer",
        company: "Code For Bharat Hackathon",
        period: "Jan 2025 - Present",
        description: "Organized and led a national-level hackathon with 10,000+ participants. Directed end-to-end event management, sponsor relations, mentor coordination, branding, and community management."
    },
    {
        role: "Co-Founder",
        company: "TechMasters Community",
        period: "Dec 2024 - Present",
        description: "Lead initiatives in design, content, and technical operations. Created digital assets for workshops and hackathons, collaborating with tech and content teams for impactful communication."
    },
    {
        role: "Club Manager",
        company: "Algo Club",
        period: "Sep 2024 - Present",
        description: "Expanded coding community from 0 to 500+ active members through peer-learning initiatives. Organized 10+ technical workshops and coding challenges with industry mentors."
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
                <h2 className="text-3xl md:text-5xl font-bold text-center">Leadership & Experience</h2>
                <p className="mt-4 text-lg text-center text-foreground/70 max-w-2xl mx-auto">My professional journey and community involvement.</p>

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
