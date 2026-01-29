"use client";

import Section from "./Section";
import { GraduationCap } from "lucide-react";

interface EducationProps {
    content: any;
}

export default function Education({ content }: EducationProps) {
    return (
        <Section id="education">
            <div className="flex items-center gap-3 mb-10">
                <div className="p-3 bg-pink-500/20 rounded-xl text-pink-400">
                    <GraduationCap className="w-6 h-6" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">{content.title}</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {content.items.map((item: any, index: number) => (
                    <div
                        key={index}
                        className="flex flex-col p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-all"
                    >
                        <span className="text-sm font-mono text-white/50 mb-2">{item.period}</span>
                        <h3 className="text-xl font-bold text-white mb-2">{item.degree}</h3>
                        <p className="text-white/70">{item.institution}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
}
