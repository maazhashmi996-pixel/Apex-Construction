"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Compass,
    Construction,
    Building2,
    PenTool,
    CheckCircle2,
    ArrowRight,
    ShieldCheck
} from "lucide-react";

const services = [
    {
        id: "pre-con",
        title: "Pre-Construction",
        icon: <Compass className="w-6 h-6" />,
        description: "Our Pre-construction Services provide our clients with upfront peace of mind by resolving potential project challenges.",
        points: ["Design Direction", "Value Engineering", "Refined Scheduling", "Zoning & Permitting", "Constructability Analysis"],
        image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000"
    },
    {
        id: "gen-con",
        title: "General Contracting",
        icon: <Construction className="w-6 h-6" />,
        description: "Delivering unmatched quality through meticulous oversight. We manage every nut and bolt to ensure perfection.",
        points: ["Sub-contractor Management", "Site Supervision", "Safety Compliance", "Quality Control", "Materials Procurement"],
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2000"
    },
    {
        id: "con-man",
        title: "Construction Management",
        icon: <Building2 className="w-6 h-6" />,
        description: "Apex acts as your advocate, managing budget, schedule, and quality standards meticulously.",
        points: ["Project Oversight", "Budget Optimization", "Risk Mitigation", "Timeline Tracking", "Executive Reporting"],
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2000"
    },
    {
        id: "des-build",
        title: "Design Build",
        icon: <PenTool className="w-6 h-6" />,
        description: "A single point of responsibility. We unify design and construction for a faster experience.",
        points: ["Collaborative Design", "Accelerated Delivery", "Cost Certainty", "Unified Responsibility", "Sustainable Solutions"],
        image: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?q=80&w=2000"
    }
];

export default function ServicesVIPSection() {
    const [activeTab, setActiveTab] = useState(services[0]);

    return (
        <section className="bg-slate-50 py-20 md:py-32 px-4 md:px-6">
            <div className="max-w-[1400px] mx-auto">

                {/* Header Area */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-[#c19206] font-bold tracking-[0.4em] uppercase text-xs mb-4 block">Our Expertise</span>
                        <h2 className="text-5xl md:text-8xl font-black text-slate-900 leading-[0.9] tracking-tighter">
                            BEYOND <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c19206] to-[#eec044] italic font-serif font-light">Excellence</span>
                        </h2>
                    </motion.div>
                    <p className="text-slate-500 text-base md:text-lg max-w-sm font-medium border-l-2 border-[#c19206] pl-6">
                        Investing in building systems technology ensuring quality and lean construction.
                    </p>
                </div>

                {/* --- MOBILE VIEW (Single Large Cards) --- */}
                <div className="flex flex-col gap-10 md:hidden">
                    {services.map((service) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-100"
                        >
                            <div className="relative h-[300px]">
                                <img src={service.image} className="w-full h-full object-cover" alt={service.title} />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute bottom-6 left-6 flex items-center gap-3">
                                    <div className="bg-[#c19206] p-3 rounded-xl text-white">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-2xl font-black text-white uppercase tracking-tight">{service.title}</h3>
                                </div>
                            </div>
                            <div className="p-8">
                                <p className="text-slate-600 font-medium mb-6 leading-relaxed">
                                    {service.description}
                                </p>
                                <div className="grid gap-3">
                                    {service.points.map((p, i) => (
                                        <div key={i} className="flex items-center gap-3 text-slate-800 font-bold text-sm">
                                            <CheckCircle2 className="w-4 h-4 text-[#c19206]" />
                                            {p}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* --- DESKTOP VIEW (VIP Tab System) --- */}
                <div className="hidden md:grid lg:grid-cols-12 gap-10 items-stretch">
                    <div className="lg:col-span-4 flex flex-col gap-4">
                        {services.map((service) => (
                            <button
                                key={service.id}
                                onClick={() => setActiveTab(service)}
                                className={`relative group flex items-center justify-between p-8 rounded-[2rem] transition-all duration-500 text-left ${activeTab.id === service.id ? "bg-slate-900 text-white shadow-2xl scale-[1.05]" : "bg-white text-slate-400 hover:bg-slate-100"
                                    }`}
                            >
                                <div className="flex items-center gap-6 relative z-10">
                                    <div className={`p-3 rounded-xl transition-colors duration-500 ${activeTab.id === service.id ? "bg-[#c19206] text-white" : "bg-slate-100 text-slate-400"}`}>
                                        {service.icon}
                                    </div>
                                    <span className={`text-xl font-black uppercase tracking-wider ${activeTab.id === service.id ? "text-white" : "text-slate-600"}`}>
                                        {service.title}
                                    </span>
                                </div>
                                <ArrowRight className={`w-6 h-6 transition-transform duration-500 ${activeTab.id === service.id ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"}`} />
                            </button>
                        ))}
                    </div>

                    <div className="lg:col-span-8 bg-white rounded-[4rem] shadow-2xl border border-slate-100 overflow-hidden relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab.id}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4 }}
                                className="h-full grid grid-cols-2"
                            >
                                <div className="p-16 flex flex-col justify-center">
                                    <h3 className="text-4xl font-black text-slate-900 mb-6 uppercase tracking-tight">{activeTab.title}</h3>
                                    <div className="w-16 h-1.5 bg-[#c19206] rounded-full mb-8" />
                                    <p className="text-slate-600 text-lg leading-relaxed mb-8 font-medium">{activeTab.description}</p>
                                    <div className="space-y-4">
                                        {activeTab.points.map((point, i) => (
                                            <div key={i} className="flex items-center gap-3 text-slate-700 font-bold">
                                                <CheckCircle2 className="w-5 h-5 text-[#c19206]" />
                                                <span className="text-sm tracking-wide">{point}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="relative overflow-hidden">
                                    <motion.img
                                        key={activeTab.image}
                                        initial={{ scale: 1.2 }}
                                        animate={{ scale: 1 }}
                                        transition={{ duration: 1 }}
                                        src={activeTab.image}
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent" />
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}