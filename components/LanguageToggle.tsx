"use client";

import { motion } from "framer-motion";

interface LanguageToggleProps {
    language: "es" | "en";
    setLanguage: (lang: "es" | "en") => void;
}

export default function LanguageToggle({ language, setLanguage }: LanguageToggleProps) {
    return (
        <div className="fixed top-6 right-6 z-50 flex items-center gap-2 bg-black/20 backdrop-blur-md p-1 rounded-full border border-white/10">
            <button
                onClick={() => setLanguage("es")}
                className={`relative px-3 py-1 text-sm font-medium rounded-full transition-colors ${language === "es" ? "text-white" : "text-white/50 hover:text-white"
                    }`}
            >
                {language === "es" && (
                    <motion.div
                        layoutId="active-lang"
                        className="absolute inset-0 bg-white/10 rounded-full"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                )}
                ES
            </button>
            <button
                onClick={() => setLanguage("en")}
                className={`relative px-3 py-1 text-sm font-medium rounded-full transition-colors ${language === "en" ? "text-white" : "text-white/50 hover:text-white"
                    }`}
            >
                {language === "en" && (
                    <motion.div
                        layoutId="active-lang"
                        className="absolute inset-0 bg-white/10 rounded-full"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                )}
                EN
            </button>
        </div>
    );
}
