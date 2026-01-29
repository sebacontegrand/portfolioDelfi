"use client";

import { useState } from "react";
import { content } from "@/data/content";
import LanguageToggle from "@/components/LanguageToggle";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [lang, setLang] = useState<"en" | "es">("es");
  const t = content[lang];

  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-hidden relative selection:bg-blue-500/30">
      <LanguageToggle language={lang} setLanguage={setLang} />

      {/* Decorative Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      {/* Wrap content in AnimatePresence based on language key if specific transitions needed, 
           but simple react state update is usually enough for text replacement. 
           We'll use a simple fade key on the main wrapper for smooth lang switch feel */}

      <AnimatePresence mode="wait">
        <motion.div
          key={lang}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Hero content={t.hero} />
          <div className="max-w-5xl mx-auto px-6">
            <section id="about" className="mb-20 scroll-mt-32">
              <p className="text-xl md:text-2xl leading-relaxed text-white/80 max-w-4xl font-light">
                {t.about.description}
              </p>
            </section>
            <Experience content={t.experience} />
            <Skills content={t.skills} />
            <Education content={t.education} />
            <Contact content={t.contact} />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Footer copyright */}
      <footer className="py-8 text-center text-white/30 text-sm">
        © {new Date().getFullYear()} Delfina Conte-Grand. All rights reserved.
      </footer>
    </main>
  );
}
