'use client';
import { motion } from 'framer-motion';
import { Carousel, Card as CarouselCard, BlurImage } from '@/components/ui/expandable-carousel';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Card, CardContent, CardTitle } from '@/components/ui/card';

const blogPosts = [
    {
        src: '/digital-agreements.png',
        title: 'Smart Contracts: Simplifying Digital Agreements',
        category: 'Technology',
        url: '#',
        hint: 'digital contract signature',
    },
    {
        src: '/investing in stock market.png',
        title: 'Unlocking the Stock Market as a College Student',
        category: 'Community',
        url: '#',
        hint: 'stock market chart',
    },
    {
        src: 'https://picsum.photos/1280/720',
        title: 'Blockchain: Is It the Solution for Secure and Transparent Elections?',
        category: 'Blockchain',
        url: '#',
        hint: 'secure voting blockchain',
    },
];

export default function BlogSection() {
    const cards = blogPosts.map((post, index) => (
        <Link href={post.url} key={index} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
            <Card className="group overflow-hidden cursor-pointer h-full flex flex-col shadow-lg hover:shadow-primary/30 transition-shadow w-full">
                <div className="overflow-hidden aspect-video relative">
                    <BlurImage 
                        src={post.src}
                        alt={post.title} 
                        data-ai-hint={post.hint} 
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                </div>
                <CardContent className="p-6 flex-grow flex flex-col">
                    <Badge variant="outline" className="mb-2 self-start">{post.category}</Badge>
                    <CardTitle className="text-xl">{post.title}</CardTitle>
                </CardContent>
            </Card>
        </Link>
    ));

    return (
        <motion.section
            id="blog"
            className="w-full py-20 lg:py-32"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
        >
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-5xl font-bold">My Blogs</h2>
                <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
                    Here are some of my thoughts on technology, design, and community building.
                </p>
            </div>
            <div className="mt-8">
                <Carousel items={cards} />
            </div>
        </motion.section>
    );
}
