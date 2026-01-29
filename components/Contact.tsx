"use client";

import Section from "./Section";
import { Mail, Phone, Linkedin, MessageCircle } from "lucide-react";

import ContactForm from "./ContactForm";

interface ContactProps {
    content: any;
}

export default function Contact({ content }: ContactProps) {
    return (
        <Section id="contact" className="pb-40 pt-20">
            <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-3xl p-8 md:p-12 border border-white/10 text-center relative overflow-hidden">
                {/* Decorative glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[80px]" />

                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 relative z-10">{content.title}</h2>
                <p className="text-white/60 mb-10 max-w-lg mx-auto relative z-10 text-lg">
                    {content.location}
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-6 relative z-10">
                    <a
                        href={`https://wa.me/${content.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 bg-[#25D366] text-white px-6 py-3 rounded-full font-medium hover:bg-[#20bd5a] transition-colors w-full md:w-auto justify-center"
                    >
                        <MessageCircle className="w-5 h-5" />
                        {content.cta}
                    </a>
                    <a
                        href={content.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 bg-white/5 text-white px-6 py-3 rounded-full font-medium border border-white/10 hover:bg-white/10 transition-colors w-full md:w-auto justify-center"
                    >
                        <Linkedin className="w-5 h-5" />
                        LinkedIn
                    </a>
                    <a
                        href={`tel:${content.phone}`}
                        className="flex items-center gap-3 bg-white/5 text-white px-6 py-3 rounded-full font-medium border border-white/10 hover:bg-white/10 transition-colors w-full md:w-auto justify-center"
                    >
                        <Phone className="w-5 h-5" />
                        {content.phone}
                    </a>
                </div>

                <div className="relative z-10 pt-10 border-t border-white/10 mt-10">
                    <h3 className="text-xl font-medium text-white mb-4">Or send a direct message</h3>
                    <ContactForm />
                </div>
            </div>
        </Section>
    );
}
