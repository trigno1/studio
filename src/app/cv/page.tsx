
'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CVPage() {
    return (
        <div className="w-full min-h-screen bg-background dark:bg-gray-900 py-12">
            <motion.div 
                className="container mx-auto px-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                    <h1 className="text-3xl md:text-4xl font-bold">My Curriculum Vitae</h1>
                    <Button asChild size="lg">
                        <a href="/Tanish_Sunita_Pareek_CV.pdf" download>
                            <Download className="mr-2 h-5 w-5" />
                            Download PDF Version
                        </a>
                    </Button>
                </div>
                
                <div className="bg-card p-4 sm:p-6 md:p-8 rounded-xl border shadow-lg">
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
            </motion.div>
        </div>
    );
}
