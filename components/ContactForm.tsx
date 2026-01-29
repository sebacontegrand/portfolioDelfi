"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

const formSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data: FormData) => {
        setStatus("submitting");
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (!response.ok) throw new Error("Failed to send");

            setStatus("success");
            reset();
            setTimeout(() => setStatus("idle"), 5000);
        } catch (error) {
            console.error(error);
            setStatus("error");
            setTimeout(() => setStatus("idle"), 5000);
        }
    };

    return (
        <div className="w-full max-w-lg mx-auto bg-white/5 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/10 mt-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-1">
                        Name
                    </label>
                    <input
                        {...register("name")}
                        type="text"
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all"
                        placeholder="John Doe"
                    />
                    {errors.name && (
                        <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-1">
                        Email
                    </label>
                    <input
                        {...register("email")}
                        type="email"
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all"
                        placeholder="john@example.com"
                    />
                    {errors.email && (
                        <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-1">
                        Message
                    </label>
                    <textarea
                        {...register("message")}
                        rows={4}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all resize-none"
                        placeholder="Tell me about your project..."
                    />
                    {errors.message && (
                        <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>
                    )}
                </div>

                <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-medium py-3 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-2"
                >
                    {status === "submitting" ? (
                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : status === "success" ? (
                        <>
                            <CheckCircle2 className="w-5 h-5 text-white" />
                            Sent Successfully
                        </>
                    ) : status === "error" ? (
                        <>
                            <AlertCircle className="w-5 h-5" />
                            Try Again
                        </>
                    ) : (
                        <>
                            Send Message
                            <Send className="w-4 h-4" />
                        </>
                    )}
                </button>
            </form>
        </div>
    );
}
