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
    { src: "/cropped-image (1)-min (1) - Tanish Sunita Pareek.jpg", alt: "Tanish Pareek 1", hint: "portrait professional" },
    { src: "/image-1 .jpg", alt: "Tanish Pareek 2", hint: "working computer" },
    { src: "/IMG_5393.jpg", alt: "Tanish Pareek 3", hint: "team collaboration" },
    { src: "/Screenshot (142).png", alt: "Tanish Pareek 4", hint: "team collaboration" },
    { src: "/Screenshot (142).png", alt: "Tanish Pareek 5", hint: "team collaboration" },
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
                    <h2 className="text-3xl md:text-5xl font-bold">About <span className="primary-gradient-text">Me</span></h2>
                    <p className="mt-4 text-base text-foreground/80 text-justify">
                        Hi, I am Tanish! I’m a versatile professional passionate about the intersection of blockchain, Web3, design, and community building. My expertise spans blockchain development, Web3 ecosystems, community management, and graphic design, allowing me to merge creative storytelling with technical innovation.
                    </p>
                    <p className="mt-4 text-base text-foreground/80 text-justify">
                        I love leading impactful projects — from organizing large-scale national hackathons with thousands of participants to building vibrant tech communities that foster learning, collaboration, and innovation. Whether it’s designing compelling visuals, developing secure blockchain solutions, or driving community growth, I bring a balance of creativity and technical insight.
                    </p>
                    <p className="mt-4 text-base text-foreground/80 text-justify">
                        Curious, driven, and impact-focused, I aim to contribute to shaping the future of technology and communities through meaningful initiatives.
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
