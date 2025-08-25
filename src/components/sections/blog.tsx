'use client';
import { motion } from 'framer-motion';

export default function BlogSection() {
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
                    Coming soon! I'll be sharing insights on technology, design, and community building. Stay tuned for articles and tutorials.
                </p>
            </div>
        </motion.section>
    );
}
