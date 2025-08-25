'use client';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Users, BookOpen, Star } from "lucide-react";
import { motion } from "framer-motion";

const achievements = [
    { icon: <Trophy className="h-6 w-6 text-primary" />, date: "Jan 2025 - Present", title: "Lead Organizer, Code For Bharat", description: "Organized and led a national-level hackathon with over 10,000 participants across India." },
    { icon: <Users className="h-6 w-6 text-primary" />, date: "Sep 2024 - Present", title: "Algo Club Manager", description: "Expanded a coding community from 0 to over 500 active members through peer-learning initiatives." },
    { icon: <Star className="h-6 w-6 text-primary" />, date: "Dec 2024 - Present", title: "Co-Founder, TechMasters Community", description: "Leading initiatives in design, content, and technical operations for community growth and engagement." },
    { icon: <BookOpen className="h-6 w-6 text-primary" />, date: "2023 - 2026", title: "Bachelor of Computer Applications", description: "Pursuing a BCA from the University of Engineering and Management, Jaipur." },
];

export default function AchievementsSection() {
    return (
        <motion.section 
            id="achievements" 
            className="w-full py-20 lg:py-32"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
        >
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-5xl font-bold text-center">Education & Achievements</h2>
                <p className="mt-4 text-lg text-center text-foreground/70 max-w-2xl mx-auto">My academic background and key accomplishments.</p>

                <div className="relative mt-16 max-w-3xl mx-auto">
                    <div className="absolute left-1/2 top-0 h-full w-0.5 bg-border -translate-x-1/2 hidden md:block"></div>

                    {achievements.map((item, index) => (
                        <div key={index} className="relative flex md:items-center mb-12 w-full">
                             <div className="md:absolute md:left-1/2 md:top-1/2 w-4 h-4 bg-primary rounded-full md:-translate-x-1/2 md:-translate-y-1/2 border-4 border-background hidden md:block"></div>

                            <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8 md:ml-auto'}`}>
                                <Card className={`w-full text-left`}>
                                    <CardHeader>
                                        <div className="flex items-center gap-4">
                                            <div className="p-2 bg-primary/10 rounded-full">{item.icon}</div>
                                            <div>
                                                <p className="text-sm text-muted-foreground">{item.date}</p>
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
