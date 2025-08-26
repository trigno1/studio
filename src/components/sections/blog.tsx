'use client';
import { motion } from 'framer-motion';
import { Carousel, Card as CarouselCard } from '@/components/ui/expandable-carousel';

const blogPosts = [
    {
        src: 'https://picsum.photos/1277/720',
        title: 'My Journey into Web3 and Blockchain',
        category: 'Technology',
        content: () => <div>This is a blog post about Web3.</div>,
        url: '#',
    },
    {
        src: 'https://picsum.photos/1277/720',
        title: 'The Art of Community Building',
        category: 'Community',
        content: () => <div>Tips on building a great community.</div>,
        url: '#',
    },
    {
        src: 'https://picsum.photos/1277/720',
        title: 'UI/UX Principles for Developers',
        category: 'Design',
        content: () => <div>Design principles for developers.</div>,
        url: '#',
    },
];

export default function BlogSection() {
    const cards = blogPosts.map((post, index) => (
        <a href={post.url} key={index} target="_blank" rel="noopener noreferrer">
             <CarouselCard
                card={{
                    src: post.src,
                    title: post.title,
                    category: post.category,
                    content: post.content,
                }}
                index={index}
            />
        </a>
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
