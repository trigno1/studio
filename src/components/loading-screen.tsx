
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
            setTimeout(() => setStep(1), 1500), // > Hey! Simon Riley are you ready
            setTimeout(() => setStep(2), 2500), // ✔ Checking launch list
            setTimeout(() => setStep(3), 3500), // ✔ Vehicle Systems check
            setTimeout(() => setStep(4), 5000), // ✔ Launchpad and Range Operations check
            setTimeout(() => setStep(5), 6500), // ✔ Launch Control Center ready
            setTimeout(() => setStep(6), 8000), // ✔ Crew Status ready
            setTimeout(() => setStep(7), 9000), // > Countdown
            setTimeout(() => setStep(8), 9500), // 3
            setTimeout(() => setStep(9), 10000), // 2
            setTimeout(() => setStep(10), 10500), // 1
            setTimeout(() => setStep(11), 11000), // 0 🚀 Liftoff!
            setTimeout(() => {
                setShowFlash(true);
                // Call onFinish immediately when the flash starts
                onFinish(); 
            }, totalDuration + 500)
        ];

        return () => timers.forEach(clearTimeout);
    }, [onFinish]);


    return (
        <motion.div
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background p-4"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5, delay: 0.5 } }} // Add a delay before fading out
        >
            <Terminal 
                className="w-full max-w-2xl h-[28rem]"
                textClassName="text-sm md:text-base"
            >
                {step >= 1 && <TypingAnimation text="> Hey! Simon Riley are you ready" />}
                {step >= 2 && <AnimatedSpan className="text-green-500">✔ Checking launch list</AnimatedSpan>}
                {step >= 3 && <AnimatedSpan className="text-green-500">✔ Vehicle Systems check</AnimatedSpan>}
                {step >= 4 && <AnimatedSpan className="text-green-500">✔ Launchpad and Range Operations check</AnimatedSpan>}
                {step >= 5 && <AnimatedSpan className="text-green-500">✔ Launch Control Center ready</AnimatedSpan>}
                {step >= 6 && <AnimatedSpan className="text-green-500">✔ Crew Status ready</AnimatedSpan>}
                {step >= 7 && <TypingAnimation text="> Countdown" />}
                {step >= 8 && <TypingAnimation className="text-red-500" text="3" />}
                {step >= 9 && <TypingAnimation className="text-red-500" text="2" />}
                {step >= 10 && <TypingAnimation className="text-red-500" text="1" />}
                {step >= 11 && <TypingAnimation className="text-red-500" text="0 🚀 Liftoff!" />}
            </Terminal>
            {showFlash && (
                <div className="absolute inset-0 z-[101] bg-white animate-flash" />
            )}
        </motion.div>
    );
}
