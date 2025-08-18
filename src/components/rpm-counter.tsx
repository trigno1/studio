'use client';
import { motion, useSpring, useTransform } from 'framer-motion';
import { useEffect } from 'react';

export function RpmCounter() {
    const rpm = useSpring(0, { stiffness: 100, damping: 30 });
    const lap = useSpring(1, { stiffness: 100, damping: 30 });

    useEffect(() => {
        const rpmAnimation = rpm.on("change", (latest) => {
            if (latest >= 12000) {
                rpm.set(2500);
                lap.set(lap.get() + 1);
            }
        });

        const interval = setInterval(() => {
            rpm.set(rpm.get() + Math.random() * 2000);
        }, 500);

        return () => {
            rpm.stop();
            lap.stop();
            clearInterval(interval);
        };
    }, [rpm, lap]);

    const displayRpm = useTransform(rpm, (v) => Math.round(v).toLocaleString());
    const displayLap = useTransform(lap, (v) => Math.floor(v));

    return (
        <div className="hidden md:flex flex-col items-end p-4 rounded-lg bg-black/20 backdrop-blur-sm border border-white/10 text-right">
            <div className="flex items-baseline">
                <motion.h3 className="text-4xl font-mono font-bold text-primary">{displayRpm}</motion.h3>
                <span className="ml-2 text-sm text-white/70">RPM</span>
            </div>
            <div className="flex items-baseline mt-1">
                <motion.p className="text-xl font-mono text-white/90">{displayLap}</motion.p>
                <span className="ml-2 text-xs text-white/70">/ 58 LAPS</span>
            </div>
        </div>
    );
}
