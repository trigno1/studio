
'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';

const phrases = [
    "just woke up",
    "having tea",
    "having a bath",
    "getting ready",
    "applying perfume",
];

const finalPhrase = "here I come!";

export default function LoadingScreen({ onFinish }: { onFinish: () => void }) {
    const [index, setIndex] = useState(0);
    const [showFinal, setShowFinal] = useState(false);

    useEffect(() => {
        if (index < phrases.length) {
            const timer = setTimeout(() => {
                setIndex(prevIndex => prevIndex + 1);
            }, 2500); // Duration for each phrase (type + erase)
            return () => clearTimeout(timer);
        } else {
            const finalTimer = setTimeout(() => {
                setShowFinal(true);
                // Wait a bit after the final phrase before finishing
                setTimeout(onFinish, 1500);
            }, 1000); // 1-second delay before the final phrase
            return () => clearTimeout(finalTimer);
        }
    }, [index, onFinish]);

    const variants = {
        hidden: { opacity: 0 },
        visible: (i: number) => ({
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: i * 0.1,
            },
        }),
    };

    const letterVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.div
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
            <div className="flex items-center justify-center font-mono text-xl md:text-3xl lg:text-4xl h-12 text-center">
                <AnimatePresence mode="wait">
                    {!showFinal ? (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, transition: { duration: 0.5 } }}
                            exit={{ opacity: 0, transition: { duration: 0.5 } }}
                            className="flex items-center"
                        >
                            <span className="text-foreground/80 mr-3">I am</span>
                            <motion.div
                                className="flex"
                                initial="hidden"
                                animate="visible"
                                variants={variants}
                            >
                                {(phrases[index] || "").split("").map((char, i) => (
                                    <motion.span key={i} variants={letterVariants}>
                                        {char}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="final"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }}
                            className="font-bold text-primary"
                        >
                            {finalPhrase}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

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
