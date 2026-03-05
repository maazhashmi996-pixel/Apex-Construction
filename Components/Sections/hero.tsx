"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ArrowRight } from "lucide-react";

const slides = [
    {
        id: 1,
        title: "Building The Future",
        subtitle: "Modern Engineering",
        desc: "Transforming skylines with innovative architectural solutions and sustainable building practices.",
        img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "Luxury Interiors",
        subtitle: "Precision Details",
        desc: "Crafting premium spaces that combine aesthetic elegance with structural integrity.",
        img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2062&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "Industrial Giants",
        subtitle: "Scalable Infrastructure",
        desc: "Delivering massive scale industrial projects with unmatched efficiency and safety standards.",
        img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
    }
];

export default function Hero() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative h-screen w-full overflow-hidden bg-slate-900">
            <AnimatePresence mode="wait">
                <motion.div
                    key={current}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="relative h-full w-full"
                >
                    {/* Background Image with Ken Burns Effect */}
                    <motion.div
                        initial={{ scale: 1.2 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 6, ease: "linear" }}
                        className="absolute inset-0 w-full h-full"
                    >
                        <img
                            src={slides[current].img}
                            className="w-full h-full object-cover"
                            alt="Construction"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/40 to-transparent" />
                    </motion.div>

                    {/* Text Content */}
                    <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-center">
                        <div className="max-w-3xl overflow-hidden">
                            <motion.span
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                className="inline-block text-[#c19206] font-black uppercase tracking-[0.3em] text-sm mb-4"
                            >
                                {slides[current].subtitle}
                            </motion.span>

                            <motion.h1
                                initial={{ y: 100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.7, duration: 0.8 }}
                                className="text-5xl md:text-8xl font-black text-white leading-tight mb-6"
                            >
                                {slides[current].title.split(" ").map((word, i) => (
                                    <span key={i} className={i === 1 ? "text-[#c19206] italic font-serif" : ""}>
                                        {word}{" "}
                                    </span>
                                ))}
                            </motion.h1>

                            <motion.p
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.9, duration: 0.8 }}
                                className="text-lg text-white/70 max-w-xl mb-10 leading-relaxed font-light"
                            >
                                {slides[current].desc}
                            </motion.p>

                            <motion.div
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 1.1, duration: 0.8 }}
                                className="flex flex-wrap gap-5"
                            >
                                <button className="group bg-[#c19206] text-white px-8 py-4 rounded-sm font-bold flex items-center gap-3 hover:bg-white hover:text-slate-900 transition-all duration-300">
                                    EXPLORE PROJECTS <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                                </button>
                                <button className="px-8 py-4 border border-white/30 text-white font-bold hover:bg-white/10 transition-all">
                                    OUR SERVICES
                                </button>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Slide Indicators */}
            <div className="absolute bottom-10 left-6 z-20 flex gap-4">
                {slides.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => setCurrent(index)}
                        className="group cursor-pointer"
                    >
                        <div className="h-1 w-12 bg-white/20 relative overflow-hidden">
                            {current === index && (
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: "100%" }}
                                    transition={{ duration: 6, ease: "linear" }}
                                    className="absolute h-full bg-[#c19206]"
                                />
                            )}
                        </div>
                        <span className={`text-[10px] font-bold mt-2 inline-block ${current === index ? "text-white" : "text-white/40"}`}>
                            0{index + 1}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}