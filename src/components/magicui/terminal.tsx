
"use client";

import { motion, useInView } from "framer-motion";
import { FC, ReactNode, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedSpanProps {
  className?: string;
  children: ReactNode;
}

export const AnimatedSpan: FC<AnimatedSpanProps> = ({
  className,
  children,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateY(10px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
      }}
      className={className}
    >
      {children}
    </div>
  );
};

interface TypingAnimationProps {
  text: string;
  duration?: number;
  className?: string;
}

export const TypingAnimation: FC<TypingAnimationProps> = ({
  text,
  duration = 50,
  className,
}) => {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (!isTyping) return;
    
    if (displayText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length + 1));
      }, duration);
      return () => clearTimeout(timeout);
    } else {
        setIsTyping(false);
    }
  }, [displayText, text, duration, isTyping]);


  return (
    <div className={cn("font-mono text-sm tracking-wider", className)}>
        {displayText}
        {isTyping && <span className="animate-caret-blink inline-block h-4 w-2 translate-y-0.5 bg-white" />}
    </div>
  );
};

interface TerminalProps {
  className?: string;
  children: ReactNode;
  textClassName?: string;
}

export const Terminal: FC<TerminalProps> = ({
  className,
  children,
  textClassName,
}) => {
  return (
    <div
      className={cn(
        "relative w-full max-w-3xl overflow-hidden rounded-lg border border-zinc-700 bg-zinc-900/70 p-4 pt-10 text-white backdrop-blur-sm md:p-6 md:pt-12",
        className,
      )}
    >
      <div className="absolute left-4 top-4 flex gap-2 md:left-6 md:top-6">
        <span className="h-3 w-3 rounded-full bg-red-500"></span>
        <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
        <span className="h-3 w-3 rounded-full bg-green-500"></span>
      </div>
      <div
        className={cn(
          "h-full overflow-y-auto font-mono text-sm space-y-2",
          textClassName,
        )}
      >
        {children}
      </div>
    </div>
  );
};
