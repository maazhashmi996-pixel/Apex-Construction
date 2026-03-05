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
        description: "Our Pre-construction Services provide our clients with an upfront peace of mind by resolving potential project challenges prior to construction, reducing project risks, and identifying areas for cost savings.",
        details: "Apex's Pre-construction Services are a critical component and lend to the success of the owner’s project. Our PC services are offered in the development, design, and construction phases.",
        points: ["Design Direction", "Value Engineering", "Refined Scheduling", "Zoning & Permitting Management", "Constructability Analysis"],
        image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000"
    },
    {
        id: "gen-con",
        title: "General Contracting",
        icon: <Construction className="w-6 h-6" />,
        description: "Delivering unmatched quality through meticulous oversight. We manage every nut and bolt to ensure the blueprint becomes a reality without compromise.",
        details: "As General Contractors, we take full responsibility for the site, safety, and sub-contractor management, ensuring a seamless flow from ground-breaking to handover.",
        points: ["Sub-contractor Management", "Site Supervision", "Safety Compliance", "Quality Control", "Materials Procurement"],
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2000"
    },
    {
        id: "con-man",
        title: "Construction Management",
        icon: <Building2 className="w-6 h-6" />,
        description: "Apex acts as your advocate, managing the intricate details of the construction process to maintain budget, schedule, and quality standards.",
        details: "We integrate top-level executives to oversee all projects, providing a stringent Site Safety Manager to monitor safety procedures.",
        points: ["Project Oversight", "Budget Optimization", "Risk Mitigation", "Timeline Tracking", "Executive Reporting"],
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2000"
    },
    {
        id: "des-build",
        title: "Design Build",
        icon: <PenTool className="w-6 h-6" />,
        description: "A single point of responsibility. We unify the design and construction phases to provide a faster, more cost-effective building experience.",
        details: "Our goal is saving money, time and peace of mind for our clients through a streamlined, collaborative design-to-build workflow.",
        points: ["Collaborative Design", "Accelerated Delivery", "Cost Certainty", "Unified Responsibility", "Sustainable Solutions"],
        image: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?q=80&w=2000"
    }
];

export default function ServicesVIPSection() {
    const [activeTab, setActiveTab] = useState(services[0]);

    return (
        <section className="bg-slate-50 py-32 px-6 overflow-hidden">
            <div className="max-w-[1400px] mx-auto">

                {/* Header Area */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="max-w-2xl"
                    >
                        <span className="text-[#c19206] font-bold tracking-[0.4em] uppercase text-xs mb-4 block">Our Expertise</span>
                        <h2 className="text-6xl md:text-8xl font-black text-slate-900 leading-[0.9] tracking-tighter">
                            BEYOND <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c19206] to-[#eec044] italic font-serif font-light">Excellence</span>
                        </h2>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-slate-500 text-lg max-w-sm font-medium leading-relaxed border-l-2 border-[#c19206] pl-6"
                    >
                        We focus on investing in building systems technology ensuring quality and lean construction.
                    </motion.p>
                </div>

                {/* Main Interactive Grid */}
                <div className="grid lg:grid-cols-12 gap-10 items-stretch min-h-[700px]">

                    {/* Left: Vertical Navigation (VIP Style) */}
                    <div className="lg:col-span-4 flex flex-col gap-4">
                        {services.map((service) => (
                            <button
                                key={service.id}
                                onClick={() => setActiveTab(service)}
                                className={`relative group flex items-center justify-between p-8 rounded-[2rem] transition-all duration-500 text-left overflow-hidden ${activeTab.id === service.id
                                        ? "bg-slate-900 text-white shadow-2xl scale-[1.02]"
                                        : "bg-white text-slate-400 hover:bg-slate-100"
                                    }`}
                            >
                                {/* Background Glow Effect */}
                                {activeTab.id === service.id && (
                                    <motion.div
                                        layoutId="tabGlow"
                                        className="absolute inset-0 bg-gradient-to-r from-[#c19206]/20 to-transparent pointer-events-none"
                                    />
                                )}

                                <div className="flex items-center gap-6 relative z-10">
                                    <div className={`p-3 rounded-xl transition-colors duration-500 ${activeTab.id === service.id ? "bg-[#c19206] text-white" : "bg-slate-100 text-slate-400"
                                        }`}>
                                        {service.icon}
                                    </div>
                                    <span className={`text-xl font-black uppercase tracking-wider transition-colors duration-500 ${activeTab.id === service.id ? "text-white" : "text-slate-600"
                                        }`}>
                                        {service.title}
                                    </span>
                                </div>

                                <ArrowRight className={`w-6 h-6 transition-transform duration-500 ${activeTab.id === service.id ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                                    }`} />
                            </button>
                        ))}

                        {/* Floating Trust Badge */}
                        <div className="mt-auto p-10 bg-[#c19206] rounded-[3rem] text-white relative overflow-hidden group">
                            <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:scale-110 transition-transform duration-700">
                                <ShieldCheck size={200} />
                            </div>
                            <h4 className="text-2xl font-black mb-2 italic">Peace of Mind</h4>
                            <p className="text-white/80 text-sm font-medium leading-relaxed">
                                Building strong relationships built on trust, consistency, and peace of mind for our clients.
                            </p>
                        </div>
                    </div>

                    {/* Right: Dynamic Content Display */}
                    <div className="lg:col-span-8 bg-white rounded-[4rem] shadow-xl border border-slate-100 overflow-hidden relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="h-full grid md:grid-cols-2"
                            >
                                {/* Content Side */}
                                <div className="p-12 md:p-16 flex flex-col">
                                    <div className="mb-10">
                                        <h3 className="text-4xl font-black text-slate-900 mb-6 uppercase tracking-tight">
                                            {activeTab.title}
                                        </h3>
                                        <div className="w-16 h-1.5 bg-[#c19206] rounded-full mb-8" />
                                        <p className="text-slate-500 text-lg leading-relaxed mb-6 font-medium">
                                            {activeTab.description}
                                        </p>
                                        <p className="text-slate-400 text-sm leading-relaxed mb-10">
                                            {activeTab.details}
                                        </p>
                                    </div>

                                    <div className="space-y-4">
                                        <p className="text-xs font-black uppercase tracking-widest text-[#c19206] mb-4">Apex Offers:</p>
                                        <div className="grid grid-cols-1 gap-3">
                                            {activeTab.points.map((point, i) => (
                                                <div key={i} className="flex items-center gap-3 text-slate-700 font-bold group">
                                                    <CheckCircle2 className="w-5 h-5 text-[#c19206] transition-transform group-hover:scale-125" />
                                                    <span className="text-sm tracking-wide">{point}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Image/Visual Side */}
                                <div className="relative overflow-hidden bg-slate-100 hidden md:block">
                                    <motion.img
                                        initial={{ scale: 1.2 }}
                                        animate={{ scale: 1 }}
                                        transition={{ duration: 1.5 }}
                                        src={activeTab.image}
                                        className="absolute inset-0 w-full h-full object-cover"
                                        alt={activeTab.title}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent" />

                                    {/* Overlay Stats or Label */}
                                    <div className="absolute bottom-12 right-12 flex flex-col items-end">
                                        <span className="text-white text-[120px] font-black leading-none opacity-20 select-none">
                                            APEX
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </section>
    );
}