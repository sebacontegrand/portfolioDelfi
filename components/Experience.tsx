"use client";

import Section from "./Section";
import { Briefcase } from "lucide-react";

interface ExperienceProps {
    content: any;
}

export default function Experience({ content }: ExperienceProps) {
    return (
        <Section id="experience" className="bg-white/5 rounded-3xl backdrop-blur-sm my-20 border border-white/5">
            <div className="flex items-center gap-3 mb-10">
                <div className="p-3 bg-blue-500/20 rounded-xl text-blue-400">
                    <Briefcase className="w-6 h-6" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">{content.title}</h2>
            </div>

            <div className="space-y-12">
                {content.items.map((item: any, index: number) => (
                    <div key={index} className="relative pl-8 md:pl-0">
                        {/* Timeline line for mobile */}
                        <div className="absolute left-0 top-2 bottom-0 w-px bg-white/10 md:hidden" />

                        <div className="md:grid md:grid-cols-4 md:gap-8">
                            <div className="hidden md:block col-span-1 text-right pt-1">
                                <span className="text-sm font-mono text-white/50">{item.period}</span>
                            </div>

                            <div className="md:col-span-3 pb-8 border-l border-white/10 md:pl-8 relative last:pb-0 last:border-l-0 group">
                                {/* Timeline dot */}
                                <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-blue-500 hidden md:block shadow-[0_0_10px_rgba(59,130,246,0.5)] z-20" />

                                {/* Background Image for the Item */}
                                <div className="absolute inset-0 -left-4 -right-4 -top-4 -bottom-4 rounded-2xl overflow-hidden pointer-events-none md:ml-8">
                                    <div className="absolute inset-0 bg-black/60 z-10 group-hover:bg-black/40 transition-colors duration-500" />
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-transparent z-10" />
                                    <img
                                        src={index === 0 ? "/dashboard.png" : "/funnel.png"}
                                        alt=""
                                        className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700 blur-[1px] group-hover:blur-0"
                                    />
                                </div>

                                <div className="relative z-20 p-4 md:p-0">
                                    <div className="md:hidden text-sm font-mono text-white/50 mb-2">{item.period}</div>
                                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{item.role}</h3>
                                    <div className="text-blue-400 font-medium mb-4">{item.company}</div>
                                    <ul className="space-y-3">
                                        {item.description.map((desc: string, i: number) => (
                                            <li key={i} className="text-white/70 leading-relaxed flex items-start gap-3 text-sm md:text-base">
                                                <span className="block w-1.5 h-1.5 rounded-full bg-white/30 mt-2.5 shrink-0" />
                                                {desc}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
