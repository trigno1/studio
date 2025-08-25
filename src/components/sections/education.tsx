'use client';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen } from "lucide-react";
import { motion } from "framer-motion";

const education = { 
    icon: <BookOpen className="h-6 w-6 text-primary" />, 
    date: "2023 - ongoing", 
    title: "Bachelor of Computer Applications", 
    description: "Pursuing a BCA from the University of Engineering and Management, Jaipur." 
};

export default function EducationSection() {
    return (
        <motion.section 
            id="education" 
            className="w-full py-20 lg:py-32"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
        >
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-5xl font-bold text-center">Education</h2>
                
                <div className="relative mt-16 max-w-xl mx-auto">
                    <Card className="w-full text-left">
                        <CardHeader>
                            <div className="flex items-center gap-4">
                                <div className="p-2 bg-primary/10 rounded-full">{education.icon}</div>
                                <div>
                                    <p className="text-sm text-muted-foreground">{education.date}</p>
                                    <CardTitle>{education.title}</CardTitle>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p>{education.description}</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </motion.section>
    );
}
