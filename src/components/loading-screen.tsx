
'use client';

import { Terminal, TypingAnimation } from '@/components/magicui/terminal';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';

const loadingPhrases = [
    "Hey! Simon Riley are you ready",
    "Checking launch list",
    "Vehicle Systems check",
    "Launchpad and Range Operations check",
    "Launch Control Center ready",
    "Crew Status ready",
    "Countdown",
    "3",
    "2",
    "1",
    "0 🚀 Liftoff!"
];

export default function LoadingScreen({ onFinish }: { onFinish: () => void }) {
    const [finished, setFinished] = useState(false);
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setFinished(true);
            setTimeout(onFinish, 750); // Wait a bit after animation finishes
        }, (loadingPhrases.length + 1) * 1000); // Approximate duration based on phrases

        return () => clearTimeout(timer);
    }, [onFinish]);


    return (
        <motion.div
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background p-4"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
            <Terminal 
                className="w-full max-w-2xl h-auto"
                textClassName="text-sm md:text-base"
            >
                <TypingAnimation
                    className="text-white"
                    text={loadingPhrases}
                    duration={100}
                />
            </Terminal>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, transition: { delay: 1, duration: 0.5 } }}
            >
                <Button variant="ghost" onClick={onFinish} className="mt-8">
                    Skip Intro
                </Button>
            </motion.div>
        </motion.div>
    );
}
