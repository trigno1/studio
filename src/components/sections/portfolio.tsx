'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '../ui/badge';
import { ExternalLink } from 'lucide-react';
import { Button } from '../ui/button';

const portfolioItems = [
    { id: 1, title: 'Multi-Chain NFT Claiming System', category: 'Blockchain', image: '/nft.png', hint: 'blockchain network', description: 'Developing a decentralized application (DApp) for secure NFT claims across Ethereum and Polygon. Implemented authentication with OAuth, crypto wallets, and QR-based transfers for seamless UX.', tags: ['ThirdWeb', 'Solidity', 'Node.js', 'MongoDB'] },
    { id: 2, title: 'Smart Resume Analyzer with ATS Grading', category: 'AI/ML', image: 'https://placehold.co/600x400.png', hint: 'resume document', description: 'Developing an application that evaluates resumes using ATS algorithms and provides optimization feedback. Implemented keyword extraction, scoring system, and recommendation engine to enhance ATS compatibility.', tags: ['Python', 'NLP', 'Machine Learning'] },
];

export default function PortfolioSection() {
    return (
        <motion.section 
            id="portfolio" 
            className="w-full py-20 lg:py-32"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
        >
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-5xl font-bold text-center">My Portfolio</h2>
                
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
                    <AnimatePresence>
                        {portfolioItems.map(item => (
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
