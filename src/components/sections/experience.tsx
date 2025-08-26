
'use client';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Users, Star, Trophy, GitFork } from "lucide-react";
import { motion } from "framer-motion";

const experiences = [
    { 
        icon: <Star className="h-6 w-6 text-primary" />, 
        date: "Dec 2024 - Present", 
        title: "Co-Founder", 
        company: "TechMasters Community", 
        description: "As a co-founder, I spearhead design, content, and technical operations to scale our fast-growing tech community. I design branding and digital assets for workshops and hackathons, collaborate with teams to deliver impactful learning experiences, and lead our community growth strategy through partnerships and outreach. I also manage content operations and recruitment, successfully mentoring new team members." 
    },
    { 
        icon: <Trophy className="h-6 w-6 text-primary" />, 
        date: "Jan 2025 - Present", 
        title: "Lead Organizer", 
        company: "Code For Bharat S1 & S2", 
        description: "I led the organization of two large-scale national hackathons. In Season 1, we achieved over 1,500 registrations and 130+ project submissions. For Season 2, we scaled to over 10,500 registrations from thousands of colleges nationwide. I directed technical operations, content creation, and graphic design while developing problem statements and digital assets to communicate our vision. My role involved collaborating with cross-functional teams to strengthen branding and foster community growth." 
    },
    { 
        icon: <Briefcase className="h-6 w-6 text-primary" />, 
        date: "Mar 2024 - Present", 
        title: "Blockchain Developer", 
        company: "tecXaro", 
        description: "I was promoted within four months for my key contributions to smart contract security, gas optimization, and scalability. I develop and review blockchain solutions on Ethereum and BSC to ensure reliability and performance. Additionally, I author technical documentation, MoUs, and investor decks to align our business and technical strategies." 
    },
    { 
        icon: <Users className="h-6 w-6 text-primary" />, 
        date: "Sep 2024 - Present", 
        title: "Club Manager", 
        company: "Algo Club", 
        description: "I expanded our coding community from the ground up to over 500 active members by creating peer-learning programs and tech talks. I organized more than 10 workshops, coding challenges, and mentorship sessions with industry professionals. A key part of my role was building a structured content and event pipeline to ensure the long-term, sustainable growth of our community." 
    },
    { 
        icon: <GitFork className="h-6 w-6 text-primary" />, 
        date: "Summer 2024", 
        title: "Contributor", 
        company: "GSSoC 2024", 
        description: "During the GirlScript Summer of Code, I contributed to multiple open-source projects, focusing on enhancing code quality and implementing new features. This involved collaborating with distributed teams to resolve issues, write clean and thorough documentation, and improve the overall scalability of the projects." 
    },
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
                <h2 className="text-3xl md:text-5xl font-bold text-center">Leadership <span className="primary-gradient-text">&</span> Experience</h2>
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
                                        <p className="text-justify">{item.description}</p>
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
