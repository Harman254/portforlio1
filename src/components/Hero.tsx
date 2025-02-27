'use client';

import Link from "next/link"
import { Button } from "./ui/button"
import { motion } from "framer-motion"
import { TypewriterEffect } from "./ui/typewriter-effect"

export default function Hero() {
    const words = [
        {
            text: "Build",
        },
        {
            text: "scalable apps",
        },
        
        {
            text: "with",
        },
        {
            text: "Harman Malova",
            className: "text-purple-500 dark:text-purple-400",
        },
        
    ];

    return (
        <section className="w-full min-h-[85vh] relative flex items-center justify-center overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-950 -z-10" />
            
            {/* Animated background shapes */}
            <div className="absolute inset-0 w-full h-full -z-5">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-300 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
                <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-300 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
                <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-300 dark:bg-pink-900/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col items-center space-y-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-4"
                    >
                        <h1 className="text-5xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
                            <TypewriterEffect words={words} />
                        </h1>
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ 
                                duration: 0.5, 
                                delay: 0.3,
                                ease: "easeOut" 
                            }}
                            className="mx-auto max-w-[700px] relative group"
                        >
                            <p className="mx-auto max-w-[700px] bg-gradient-to-r from-gray-500 via-gray-400 to-gray-500 dark:from-gray-400 dark:via-gray-300 dark:to-gray-400 text-transparent bg-clip-text md:text-xl font-medium tracking-tight animate-pulse">
    Full Stack Developer specializing in building 
</p>
                            <span className="bg-gradient-to-r from-purple-500 via-blue-400 to-purple-500 
                                dark:from-purple-400 dark:via-blue-300 dark:to-purple-400 
                                text-transparent bg-clip-text md:text-xl font-medium tracking-tight 
                                inline-block ml-2 transform transition-all duration-300 
                                group-hover:scale-[1.02]"
                            >
                                exceptional digital experiences
                            </span>
                            <div className="absolute -inset-x-2 -inset-y-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 
                                dark:from-purple-400/10 dark:to-blue-400/10 rounded-lg blur-lg 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            />
                        </motion.p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="max-w-[600px] text-gray-500 dark:text-gray-400"
                    >
                        <p className="text-lg mb-8">
                            Crafting modern web applications with cutting-edge technologies.
                            Let's turn your vision into reality.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4 items-center"
                    >
                        <Link href="/projects">
                            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 rounded-full text-lg font-medium transition-all duration-200 shadow-lg hover:shadow-purple-500/25 dark:shadow-none">
                                View Projects
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button variant="outline" className="px-8 py-6 rounded-full text-lg font-medium border-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200">
                                Contact Me
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

