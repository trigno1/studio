
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
        description: "Spearheaded design, content, and technical operations to scale a fast-growing tech community. Designed branding, led growth strategy, and managed recruitment to deliver impactful learning experiences." 
    },
    { 
        icon: <Trophy className="h-6 w-6 text-primary" />, 
        date: "Jan 2025 - Present", 
        title: "Lead Organizer", 
        company: "Code For Bharat S1 & S2", 
        description: "Organized and scaled a national hackathon from 1,500+ participants in S1 to over 10,500+ in S2. Directed technical operations, content creation, and graphic design to foster community growth and innovation." 
    },
    { 
        icon: <Briefcase className="h-6 w-6 text-primary" />, 
        date: "Mar 2024 - Present", 
        title: "Blockchain Developer", 
        company: "tecXaro", 
        description: "Promoted within 4 months for contributions to smart contract security and scalability on Ethereum & BSC. Authored technical documentation and investor decks to align business and technical strategies." 
    },
    { 
        icon: <Users className="h-6 w-6 text-primary" />, 
        date: "Sep 2024 - Present", 
        title: "Club Manager", 
        company: "Algo Club", 
        description: "Expanded a coding community from 0 to 500+ members by organizing 10+ workshops and mentorship sessions. Built a structured content pipeline to sustain long-term community growth." 
    },
    { 
        icon: <GitFork className="h-6 w-6 text-primary" />, 
        date: "Summer 2024", 
        title: "Contributor", 
        company: "GSSoC 2024", 
        description: "Contributed to multiple open-source projects, enhancing code quality and implementing new features. Collaborated with distributed teams to resolve issues, write documentation, and improve scalability." 
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
