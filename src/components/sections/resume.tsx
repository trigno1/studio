'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

export default function ResumeSection() {
    return (
        <motion.section 
            id="resume" 
            className="w-full py-20 lg:py-32"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
        >
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-5xl font-bold text-center">My Resume</h2>
                <div className="mt-12 max-w-4xl mx-auto">
                    <div className="bg-card/50 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-xl border shadow-lg">
                        <div className="overflow-hidden rounded-lg">
                            <Image
                                src="/cv.png"
                                alt="Tanish Sunita Pareek CV"
                                width={1200}
                                height={1697}
                                layout="responsive"
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                    <div className="mt-8 text-center">
                        <Button asChild size="lg">
                            <a href="/Tanish_Sunita_Pareek_CV.pdf" download>
                                <Download className="mr-2 h-5 w-5" />
                                Download PDF Version
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
