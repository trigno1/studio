'use client';
import Image from "next/image";
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay";
import * as React from "react";

const images = [
    { src: "https://placehold.co/600x400.png", alt: "Tanish Pareek 1", hint: "portrait professional" },
    { src: "https://placehold.co/600x400.png", alt: "Tanish Pareek 2", hint: "working computer" },
    { src: "https://placehold.co/600x400.png", alt: "Tanish Pareek 3", hint: "team collaboration" },
];

export default function AboutSection() {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    );

    return (
        <motion.section
            id="about"
            className="w-full py-20 lg:py-32"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
        >
            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                    <h2 className="text-3xl md:text-5xl font-bold">About Me</h2>
                    <p className="mt-4 text-lg text-foreground/80">
                        I am a versatile and driven professional with a passion for technology and design. My expertise spans across graphic design, UI/UX, blockchain development, and community management. I thrive on leading impactful projects, from organizing large-scale hackathons to building and nurturing vibrant coding communities.
                    </p>
                    <p className="mt-4 text-lg text-foreground/80">
                        With a strong foundation in both creative and technical domains, I enjoy solving complex problems and delivering high-quality results. Whether it's crafting compelling visuals, developing secure smart contracts, or fostering collaborative environments, I am dedicated to making a positive impact.
                    </p>
                </div>
                <div className="order-1 md:order-2">
                    <Carousel 
                        className="w-full max-w-sm mx-auto"
                        plugins={[plugin.current]}
                        onMouseEnter={plugin.current.stop}
                        onMouseLeave={plugin.current.reset}
                    >
                        <CarouselContent>
                            {images.map((image, index) => (
                            <CarouselItem key={index}>
                                <div className="p-1">
                                <Card>
                                    <CardContent className="flex aspect-square items-center justify-center p-0 overflow-hidden rounded-lg">
                                        <Image src={image.src} alt={image.alt} data-ai-hint={image.hint} width={600} height={400} className="w-full h-full object-cover" />
                                    </CardContent>
                                </Card>
                                </div>
                            </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </div>
        </motion.section>
    );
}
