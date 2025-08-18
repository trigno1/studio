'use client';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Zap, Award } from "lucide-react";
import { motion } from "framer-motion";

const achievements = [
    { icon: <Trophy className="h-6 w-6 text-primary" />, date: "May 2023", title: "Winner, ETHGlobal Hackathon", description: "Led a team to victory with a novel DeFi protocol, securing first place among 200+ teams." },
    { icon: <Award className="h-6 w-6 text-primary" />, date: "Jan 2023", title: "Top Community Contributor", description: "Recognized as a top contributor for the open-source project 'AeroUI' for significant code contributions." },
    { icon: <Zap className="h-6 w-6 text-primary" />, date: "Sep 2022", title: "Speaker at Web3 Con", description: "Invited to speak on the future of decentralized identity, presenting to an audience of over 500 developers." },
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
                <h2 className="text-3xl md:text-5xl font-bold text-center">Achievements & Milestones</h2>
                <p className="mt-4 text-lg text-center text-foreground/70 max-w-2xl mx-auto">Key highlights and accomplishments throughout my career.</p>

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
