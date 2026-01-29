"use client";

import Section from "./Section";
import { Cpu } from "lucide-react";

interface SkillsProps {
    content: any;
}

export default function Skills({ content }: SkillsProps) {
    return (
        <Section id="skills">
            <div className="flex items-center gap-3 mb-10">
                <div className="p-3 bg-purple-500/20 rounded-xl text-purple-400">
                    <Cpu className="w-6 h-6" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">{content.title}</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {content.categories.map((category: any, index: number) => (
                    <div
                        key={index}
                        className="bg-white/5 p-6 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors group"
                    >
                        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-blue-500 group-hover:shadow-[0_0_10px_rgba(59,130,246,0.8)] transition-all" />
                            {category.name}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {category.items.map((skill: string, i: number) => (
                                <span
                                    key={i}
                                    className="px-3 py-1 bg-white/5 rounded-lg text-sm text-white/70 border border-white/5"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
