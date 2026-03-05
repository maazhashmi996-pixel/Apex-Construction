"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ShieldCheck, Users, HardHat, TrendingDown, Award, Anchor } from "lucide-react";

export default function DiscoverApexVIP() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    // High-end Parallax & Smooth Scaling
    const imageScale = useTransform(scrollYProgress, [0, 0.5], [1.1, 1]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const opacityBackground = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 0.05, 0.05, 0]);

    const features = [
        { icon: <Users size={28} />, title: "Elite Management", desc: "Top-tier executives overseeing every blueprint." },
        { icon: <ShieldCheck size={28} />, title: "Zero-Harm Policy", desc: "Stringent safety protocols monitored by global firms." },
        { icon: <HardHat size={28} />, title: "Lean Engineering", desc: "Advanced systems technology for precision builds." },
        { icon: <TrendingDown size={28} />, title: "Fiscal Precision", desc: "Optimizing resources to save time and capital." },
    ];

    return (
        <section ref={containerRef} className="relative bg-white py-32 lg:py-48 overflow-hidden px-6">

            {/* --- Background Luxury Watermark --- */}
            <motion.div
                style={{ opacity: opacityBackground }}
                className="absolute inset-0 pointer-events-none flex items-center justify-center select-none"
            >
                <h1 className="text-[30vw] font-black text-slate-900 leading-none">APEX</h1>
            </motion.div>

            <div className="max-w-[1400px] mx-auto relative z-10">

                {/* --- Top Cinematic Header --- */}
                <div className="flex flex-col items-center text-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-slate-200 bg-slate-50 text-[#c19206] text-xs font-bold tracking-[0.3em] uppercase mb-10"
                    >
                        <Award size={14} /> Established Excellence
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-7xl md:text-[10rem] font-black text-slate-900 leading-[0.85] tracking-tighter"
                    >
                        DISCOVER <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c19206] via-[#eec044] to-[#c19206] italic font-serif font-light">Apex Group</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="mt-12 max-w-2xl text-xl text-slate-400 font-light leading-relaxed"
                    >
                        We don't just build structures; we engineer <span className="text-slate-900 font-semibold">legacies</span>. Apex is the gold standard in modern architectural execution.
                    </motion.p>
                </div>

                {/* --- Interactive Storytelling Grid --- */}
                <div className="grid lg:grid-cols-12 gap-12 items-start mb-40">

                    {/* Left Side: The "Hero" Image with Floating UI */}
                    <div className="lg:col-span-7 relative group">
                        <motion.div
                            style={{ scale: imageScale }}
                            className="relative aspect-[16/10] rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)]"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070"
                                className="w-full h-full object-cover"
                                alt="Modern Skyscraper AI"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/40 via-transparent to-transparent" />
                        </motion.div>

                        {/* Floating Experience Badge */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-10 -right-6 md:right-10 bg-white p-8 rounded-[2.5rem] shadow-2xl border border-slate-100 z-20 hidden md:block"
                        >
                            <div className="flex items-center gap-6">
                                <div className="p-4 bg-[#c19206] text-white rounded-2xl">
                                    <Anchor size={30} />
                                </div>
                                <div>
                                    <p className="text-4xl font-black text-slate-900">25+</p>
                                    <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Years of Foundation</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side: Content & Features */}
                    <div className="lg:col-span-5 lg:pl-10 space-y-16">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="relative"
                        >
                            <div className="absolute -left-6 top-0 w-1 h-full bg-[#c19206]" />
                            <h4 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">Superior Building <br /> Experience</h4>
                            <p className="text-slate-500 text-lg leading-relaxed font-medium">
                                Apex has defined the landscape by employing and retaining the most qualified Project Management professionals. Our focus on <span className="text-[#c19206]">Building Systems Technology</span> ensures every project meets the highest level of client satisfaction.
                            </p>
                        </motion.div>

                        <div className="grid sm:grid-cols-2 gap-6">
                            {features.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ y: -10 }}
                                    className="p-8 bg-slate-50 border border-slate-100 rounded-[2.5rem] hover:bg-white hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500 group"
                                >
                                    <div className="text-[#c19206] mb-6 group-hover:scale-110 transition-transform duration-500">
                                        {item.icon}
                                    </div>
                                    <h5 className="font-black text-slate-900 text-xs uppercase tracking-widest mb-3">{item.title}</h5>
                                    <p className="text-slate-400 text-[13px] leading-snug font-medium">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* --- Bottom VIP Stat Banner --- */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="bg-slate-900 rounded-[5rem] p-16 md:p-24 relative overflow-hidden"
                >
                    {/* Abstract Light Ray Effect */}
                    <div className="absolute -top-1/2 -left-1/4 w-full h-[200%] bg-gradient-to-r from-transparent via-white/5 to-transparent rotate-45 pointer-events-none" />

                    <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
                        <div className="text-left">
                            <h3 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
                                Good People. <br />
                                <span className="text-[#c19206]">Building For</span> <br />
                                Great Clients.
                            </h3>
                            <p className="text-slate-400 text-lg max-w-sm">
                                Successful projects are born from the synergy of elite talent and visionary clients.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-10">
                            <div className="space-y-2">
                                <p className="text-6xl font-black text-white">480<span className="text-[#c19206] text-3xl">+</span></p>
                                <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-500">Projects Delivered</p>
                            </div>
                            <div className="space-y-2">
                                <p className="text-6xl font-black text-white">100<span className="text-[#c19206] text-3xl">%</span></p>
                                <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-500">Commitment</p>
                            </div>
                            <div className="space-y-2">
                                <p className="text-6xl font-black text-white">12</p>
                                <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-500">Global Awards</p>
                            </div>
                            <div className="space-y-2">
                                <p className="text-6xl font-black text-white">0<span className="text-[#c19206] text-3xl">Loss</span></p>
                                <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-500">Safety Incidents</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}