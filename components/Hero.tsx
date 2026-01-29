"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface HeroProps {
    content: any;
}

export default function Hero({ content }: HeroProps) {
    return (
        <section className="min-h-screen flex flex-col justify-start pt-32 md:pt-48 px-6 max-w-5xl mx-auto relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] -z-10 animate-pulse" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px] -z-10 animate-pulse delay-1000" />

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-6xl font-extrabold mb-2 tracking-tight"
            >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-white/60">
                    Delfina Conte-Grand
                </span>
            </motion.h1>

            <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-blue-400 font-mono tracking-wider mb-16 text-sm md:text-base uppercase"
            >
                {content.role}
            </motion.span>

            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight text-white/90"
            >
                {content.headline}
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl text-white/70 max-w-2xl mb-10 leading-relaxed"
            >
                {content.subheadline}
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4"
            >
                <a
                    href="#about"
                    className="group flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-full font-medium transition-transform hover:scale-105"
                >
                    {content.cta_primary}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                    href="#contact"
                    className="flex items-center justify-center gap-2 px-8 py-4 rounded-full font-medium text-white border border-white/20 hover:bg-white/10 transition-colors"
                >
                    {content.cta_secondary}
                </a>
            </motion.div>
        </section>
    );
}
