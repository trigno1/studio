
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
    <span
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateY(20px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
      }}
      className={className}
    >
      {children}
    </span>
  );
};

interface TypingAnimationProps {
  text: string | string[];
  duration?: number;
  className?: string;
}

export const TypingAnimation: FC<TypingAnimationProps> = ({
  text,
  duration = 200,
  className,
}) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (Array.isArray(text)) {
      if (currentIndex < text.length) {
        const currentLine = text[currentIndex];
        if (displayText.length < currentLine.length) {
          const timeout = setTimeout(() => {
            setDisplayText(currentLine.slice(0, displayText.length + 1));
          }, duration);
          return () => clearTimeout(timeout);
        } else {
          const lineBreakTimeout = setTimeout(() => {
            setCurrentIndex(currentIndex + 1);
            setDisplayText(""); // Reset for the next line
          }, duration * 5); // Pause before starting next line
          return () => clearTimeout(lineBreakTimeout);
        }
      }
    } else {
      // Handle single string text
      if (displayText.length < text.length) {
        const timeout = setTimeout(() => {
          setDisplayText(text.slice(0, displayText.length + 1));
        }, duration);
        return () => clearTimeout(timeout);
      }
    }
  }, [displayText, text, duration, currentIndex]);

  const displayedText = Array.isArray(text)
    ? text.slice(0, currentIndex).map((line, index) => <div key={index}>{line}</div>)
    : null;

  return (
    <span className={cn("font-mono text-sm tracking-wider", className)}>
      {Array.isArray(text) && displayedText}
      <div>
        {displayText}
        <span className="animate-caret-blink inline-block h-4 w-2 translate-y-0.5 bg-white" />
      </div>
    </span>
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
          "h-full overflow-y-auto font-mono text-sm",
          textClassName,
        )}
      >
        {children}
      </div>
    </div>
  );
};
