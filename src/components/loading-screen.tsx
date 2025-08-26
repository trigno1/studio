
'use client';

import { Terminal, AnimatedSpan, TypingAnimation } from '@/components/magicui/terminal';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function LoadingScreen({ onFinish }: { onFinish: () => void }) {
    const [step, setStep] = useState(0);
    const [showFlash, setShowFlash] = useState(false);

    const totalDuration = 11000; // Total estimated time for all typing animations

    useEffect(() => {
        const timers = [
            setTimeout(() => setStep(1), 1000),
            setTimeout(() => setStep(2), 2000),
            setTimeout(() => setStep(3), 3000),
            setTimeout(() => setStep(4), 5000),
            setTimeout(() => setStep(5), 7000),
            setTimeout(() => setStep(6), 9000),
            setTimeout(() => setStep(7), 9500),
            setTimeout(() => setStep(8), 10000),
            setTimeout(() => setStep(9), 10500),
            setTimeout(() => setStep(10), 11000),
            setTimeout(() => {
                setShowFlash(true);
                setTimeout(onFinish, 1500); // Flash duration
            }, totalDuration + 500)
        ];

        return () => timers.forEach(clearTimeout);
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
                {step >= 0 && <TypingAnimation text="> Hey! Simon Riley are you ready" />}
                {step >= 1 && <AnimatedSpan className="text-green-500">✔ Checking launch list</AnimatedSpan>}
                {step >= 2 && <AnimatedSpan className="text-green-500">✔ Vehicle Systems check</AnimatedSpan>}
                {step >= 3 && <AnimatedSpan className="text-green-500">✔ Launchpad and Range Operations check</AnimatedSpan>}
                {step >= 4 && <AnimatedSpan className="text-green-500">✔ Launch Control Center ready</AnimatedSpan>}
                {step >= 5 && <AnimatedSpan className="text-green-500">✔ Crew Status ready</AnimatedSpan>}
                {step >= 6 && <TypingAnimation text="> Countdown" />}
                {step >= 7 && <TypingAnimation className="text-red-500" text="3" />}
                {step >= 8 && <TypingAnimation className="text-red-500" text="2" />}
                {step >= 9 && <TypingAnimation className="text-red-500" text="1" />}
                {step >= 10 && <TypingAnimation className="text-red-500" text="0 🚀 Liftoff!" />}
            </Terminal>
            {showFlash && (
                <div className="absolute inset-0 z-[101] bg-white animate-flash" />
            )}
        </motion.div>
    );
}
