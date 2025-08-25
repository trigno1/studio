'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '../ui/badge';
import { ExternalLink } from 'lucide-react';

const portfolioItems = [
    { id: 1, title: 'Multi-Chain NFT Claiming System', category: 'Blockchain', image: 'https://placehold.co/600x400.png', hint: 'blockchain network', description: 'Developing a decentralized application (DApp) for secure NFT claims across Ethereum and Polygon. Implemented authentication with OAuth, crypto wallets, and QR-based transfers for seamless UX.', tags: ['ThirdWeb', 'Solidity', 'Node.js', 'MongoDB'] },
    { id: 2, title: 'Smart Resume Analyzer with ATS Grading', category: 'AI/ML', image: 'https://placehold.co/600x400.png', hint: 'resume document', description: 'Developing an application that evaluates resumes using ATS algorithms and provides optimization feedback. Implemented keyword extraction, scoring system, and recommendation engine to enhance ATS compatibility.', tags: ['Python', 'NLP', 'Machine Learning'] },
    { id: 3, title: 'F1 Telemetry Dashboard', category: 'UI/UX', image: 'https://placehold.co/600x400.png', hint: 'racing dashboard', description: 'A conceptual F1-style dashboard designed for real-time race telemetry analysis. Built with Next.js and focused on data visualization and a high-performance user interface.', tags: ['Figma', 'Next.js', 'Vercel'] },
    { id: 4, title: 'F1 Community Hub', category: 'Community', image: 'https://placehold.co/600x400.png', hint: 'social media', description: 'Developed and managed a Discord community for Formula 1 enthusiasts, growing it to over 5,000 active members through engaging content and events.', tags: ['Discord', 'Community Management'] },
    { id: 5, title: 'Aero Dynamics', category: 'Design', image: 'https://placehold.co/600x400.png', hint: 'abstract shapes', description: 'A series of 3D renders exploring the principles of aerodynamics through abstract visual design. Created using Blender and Photoshop.', tags: ['Blender', 'Photoshop'] },
    { id: 6, title: 'Racing Lines Blog', category: 'Content', image: 'https://placehold.co/600x400.png', hint: 'blog article', description: 'A content series breaking down complex topics in motorsport technology for a general audience. Focused on SEO and long-form technical writing.', tags: ['Writing', 'SEO'] },
];

const categories = ['All', 'Blockchain', 'AI/ML', 'UI/UX', 'Community', 'Design', 'Content'];

export default function PortfolioSection() {
    const [filter, setFilter] = useState('All');
    const filteredItems = filter === 'All' ? portfolioItems : portfolioItems.filter(item => item.category === filter);

    return (
        <motion.section 
            id="portfolio" 
            className="w-full py-20 lg:py-32 bg-secondary/30"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
        >
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-5xl font-bold text-center">My Portfolio</h2>
                <p className="mt-4 text-lg text-center text-foreground/70 max-w-2xl mx-auto">A selection of projects that showcase my skills and passion for creating impactful digital solutions.</p>
                
                <div className="flex justify-center flex-wrap gap-2 mt-8 mb-12">
                    {categories.map(category => (
                        <Button key={category} variant={filter === category ? 'default' : 'outline'} onClick={() => setFilter(category)} className="rounded-full">{category}</Button>
                    ))}
                </div>

                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence>
                        {filteredItems.map(item => (
                            <motion.div key={item.id} layout initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} transition={{ duration: 0.3 }} whileHover={{ y: -8, transition: { duration: 0.2 } }}>
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <Card className="group overflow-hidden cursor-pointer h-full flex flex-col shadow-lg hover:shadow-primary/30 transition-shadow">
                                            <CardHeader className="p-0">
                                                <div className="overflow-hidden aspect-video"><Image src={item.image} alt={item.title} width={600} height={400} data-ai-hint={item.hint} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" /></div>
                                            </CardHeader>
                                            <CardContent className="p-6 flex-grow">
                                                <Badge variant="outline" className="mb-2">{item.category}</Badge>
                                                <CardTitle className="text-xl">{item.title}</CardTitle>
                                            </CardContent>
                                        </Card>
                                    </DialogTrigger>
                                    <DialogContent className="sm:max-w-[625px]">
                                        <DialogHeader>
                                            <DialogTitle className="text-2xl">{item.title}</DialogTitle>
                                            <DialogDescription>{item.description}</DialogDescription>
                                        </DialogHeader>
                                        <div className="py-4"><Image src={item.image} alt={item.title} width={600} height={400} data-ai-hint={item.hint} className="w-full rounded-md" /></div>
                                        <div className="flex flex-wrap gap-2">{item.tags.map(tag => <Badge key={tag}>{tag}</Badge>)}</div>
                                        <Button variant="outline" asChild className="mt-4"><a href="#" target="_blank" rel="noopener noreferrer"><ExternalLink className="mr-2 h-4 w-4" /> View Project</a></Button>
                                    </DialogContent>
                                </Dialog>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </motion.section>
    );
}
