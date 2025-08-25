'use client';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Users, Star, Trophy } from "lucide-react";
import { motion } from "framer-motion";

const experiences = [
    { icon: <Briefcase className="h-6 w-6 text-primary" />, date: "Mar 2024 - Present", title: "Blockchain Developer", company: "tecXaro", description: "Promoted within 4 months for contributions to blockchain projects enhancing smart contract security and efficiency. Supported content team by drafting MoUs, documentation, and professional presentations." },
    { icon: <Trophy className="h-6 w-6 text-primary" />, date: "Jan 2025 - Present", title: "Lead Organizer", company: "Code For Bharat Hackathon", description: "Organized and led a national-level hackathon with 10,000+ participants. Directed end-to-end event management, sponsor relations, mentor coordination, branding, and community management." },
    { icon: <Star className="h-6 w-6 text-primary" />, date: "Dec 2024 - Present", title: "Co-Founder", company: "TechMasters Community", description: "Lead initiatives in design, content, and technical operations. Created digital assets for workshops and hackathons, collaborating with tech and content teams for impactful communication." },
    { icon: <Users className="h-6 w-6 text-primary" />, date: "Sep 2024 - Present", title: "Club Manager", company: "Algo Club", description: "Expanded coding community from 0 to 500+ active members through peer-learning initiatives. Organized 10+ technical workshops and coding challenges with industry mentors." },
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

                <div className="relative mt-16 max-w-3xl mx-auto">
                    <div className="absolute left-1/2 top-0 h-full w-0.5 bg-border -translate-x-1/2 hidden md:block"></div>

                    {experiences.map((item, index) => (
                        <div key={index} className="relative flex md:items-center mb-12 w-full">
                             <div className="md:absolute md:left-1/2 md:top-1/2 w-4 h-4 bg-primary rounded-full md:-translate-x-1/2 md:-translate-y-1/2 border-4 border-background hidden md:block"></div>

                            <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8 md:ml-auto'}`}>
                                <Card className={`w-full text-left`}>
                                    <CardHeader>
                                        <div className="flex items-center gap-4">
                                            <div className="p-2 bg-primary/10 rounded-full">{item.icon}</div>
                                            <div>
                                                <p className="text-sm text-muted-foreground">{item.company} • {item.date}</p>
                                                <CardTitle>{item.title}</CardTitle>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <p>{item.description}</p>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}
