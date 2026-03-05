"use client";
import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, ChevronLeft, ChevronRight, ShoppingCart, ArrowUpRight } from "lucide-react";

// --- Project Data ---
const projects = [
    {
        id: 1,
        name: "Sky High Residency",
        desc: "Luxury 5-bedroom apartments with panoramic city views.",
        price: "$450,000",
        details: "Exclusive rooftop garden, smart home automation, and 24/7 concierge service.",
        gallery: [
            "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80",
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80",
            "https://images.unsplash.com/photo-1600585154340-be6199f7d009?q=80",
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80"
        ]
    },
    {
        id: 2,
        name: "Golden Gate Mall",
        desc: "Premium commercial spaces in the heart of the city.",
        price: "$1.2M",
        details: "Central HVAC, high-speed elevators, and luxury retail outlets.",
        gallery: [
            "https://images.unsplash.com/photo-1555633514-abcee6ad93e1?q=80",
            "https://images.unsplash.com/photo-1567449303078-57ad995bd301?q=80",
            "https://images.unsplash.com/photo-1582037928769-181f2644ecb7?q=80",
            "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80"
        ]
    },
    {
        id: 3,
        name: "Oceanic Villas",
        desc: "Modern beachfront living with private infinity pools.",
        price: "$850,000",
        details: "Direct beach access and sustainable architectural design.",
        gallery: [
            "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80",
            "https://images.unsplash.com/photo-1512918766675-ed406e3e7f02?q=80",
            "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80",
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80"
        ]
    },
    {
        id: 4,
        name: "The Penthouse",
        desc: "Unmatched elegance at the highest peak.",
        price: "$2.5M",
        details: "Triple-height ceilings and a private helipad access.",
        gallery: [
            "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?q=80",
            "https://images.unsplash.com/photo-1512914890251-2f96a9b0bbe2?q=80",
            "https://images.unsplash.com/photo-1600585154340-be6199f7d009?q=80",
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80"
        ]
    },
];

// --- Sub-Component for Modal Auto-Slider ---
const ModalGallery = ({ images }: { images: string[] }) => {
    const [imgIndex, setImgIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setImgIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
        }, 3500); // Modal images change every 3.5s
        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <div className="relative w-full h-full overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.img
                    key={imgIndex}
                    src={images[imgIndex]}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 1 }}
                    className="w-full h-full object-cover"
                />
            </AnimatePresence>
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, i) => (
                    <div key={i} className={`h-1.5 transition-all duration-500 rounded-full ${imgIndex === i ? "w-8 bg-[#c19206]" : "w-2 bg-white/40"}`} />
                ))}
            </div>
        </div>
    );
};

export default function ProjectSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedProject, setSelectedProject] = useState<null | typeof projects[0]>(null);
    const [isPaused, setIsPaused] = useState(false);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev < projects.length - 3 ? prev + 1 : 0));
    }, []);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : projects.length - 3));
    };

    // Auto-Move Logic for Main Slider
    useEffect(() => {
        if (isPaused || selectedProject) return;
        const interval = setInterval(nextSlide, 5000); // Moves every 5 seconds
        return () => clearInterval(interval);
    }, [isPaused, selectedProject, nextSlide]);

    return (
        <section className="py-28 bg-white text-slate-900 overflow-hidden px-6">
            <div className="max-w-7xl mx-auto">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                        <span className="text-[#c19206] font-bold tracking-[0.4em] uppercase text-xs mb-4 block">Our Excellence</span>
                        <h2 className="text-5xl md:text-7xl font-black leading-[1.1]">
                            Iconic <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c19206] to-[#eec044] italic font-serif font-normal">Masterpieces</span>
                        </h2>
                    </motion.div>

                    <div className="flex flex-col items-end gap-6">
                        <div className="flex gap-3">
                            <button onClick={prevSlide} className="p-5 border border-slate-200 rounded-full hover:bg-slate-900 hover:text-white transition-all duration-500 shadow-sm">
                                <ChevronLeft size={24} />
                            </button>
                            <button onClick={nextSlide} className="p-5 border border-slate-200 rounded-full hover:bg-slate-900 hover:text-white transition-all duration-500 shadow-sm">
                                <ChevronRight size={24} />
                            </button>
                        </div>
                        <button
                            onClick={() => window.open("/projects", "_blank")}
                            className="group flex items-center gap-3 bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold hover:bg-[#c19206] transition-all duration-300 shadow-xl shadow-slate-200"
                        >
                            EXPLORE ALL PROJECTS <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </div>
                </div>

                {/* Main Slider Grid */}
                <div className="relative" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
                    <motion.div
                        className="flex gap-8"
                        animate={{ x: `-${currentIndex * (100 / 3.03)}%` }}
                        transition={{ type: "spring", stiffness: 80, damping: 20 }}
                    >
                        {projects.map((proj) => (
                            <motion.div
                                key={proj.id}
                                className="min-w-[calc(33.333%-22px)] group cursor-pointer"
                                onClick={() => setSelectedProject(proj)}
                            >
                                <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden mb-8 shadow-2xl shadow-slate-200 border border-slate-100">
                                    <img
                                        src={proj.gallery[0]}
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                        alt={proj.name}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60" />
                                    <div className="absolute top-8 right-8 scale-0 group-hover:scale-100 transition-transform duration-500">
                                        <div className="bg-white/90 backdrop-blur-md p-5 rounded-full shadow-2xl text-[#c19206]">
                                            <Plus size={32} strokeWidth={3} />
                                        </div>
                                    </div>
                                    <div className="absolute bottom-10 left-10 right-10">
                                        <p className="text-[#c19206] font-black text-sm mb-2 tracking-widest">{proj.price}</p>
                                        <h3 className="text-3xl font-black text-slate-900 group-hover:text-[#c19206] transition-colors">{proj.name}</h3>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* VIP Detail Modal with Auto-Slider Gallery */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[200] bg-white/80 backdrop-blur-2xl flex items-center justify-center p-4 md:p-10"
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 100 }} animate={{ scale: 1, y: 0 }}
                            className="bg-white text-slate-900 w-full max-w-7xl rounded-[4rem] overflow-hidden grid lg:grid-cols-12 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border border-slate-100 h-full max-h-[90vh]"
                        >
                            {/* Image Side (Auto-Sliding) */}
                            <div className="lg:col-span-7 relative bg-slate-100">
                                <ModalGallery images={selectedProject.gallery} />
                            </div>

                            {/* Content Side */}
                            <div className="lg:col-span-5 p-10 md:p-16 flex flex-col justify-between relative overflow-y-auto">
                                <button onClick={() => setSelectedProject(null)} className="absolute top-10 right-10 p-4 bg-slate-50 hover:bg-slate-900 hover:text-white rounded-full transition-all">
                                    <X size={24} />
                                </button>

                                <div>
                                    <span className="text-[#c19206] font-bold uppercase text-xs tracking-[0.4em] mb-6 block">Premium Unit</span>
                                    <h3 className="text-5xl font-black mb-6 leading-tight">{selectedProject.name}</h3>
                                    <p className="text-slate-500 text-lg leading-relaxed mb-8">{selectedProject.details}</p>

                                    <div className="grid grid-cols-2 gap-6 mb-8">
                                        <div className="border-l-4 border-slate-100 pl-6">
                                            <p className="text-[10px] font-bold text-slate-400 uppercase">Location</p>
                                            <p className="font-bold text-slate-800">Prime District</p>
                                        </div>
                                        <div className="border-l-4 border-slate-100 pl-6">
                                            <p className="text-[10px] font-bold text-slate-400 uppercase">Status</p>
                                            <p className="font-bold text-[#c19206]">Available</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-10 border-t border-slate-100">
                                    <div>
                                        <p className="text-xs font-bold text-slate-400">INVESTMENT STARTING AT</p>
                                        <p className="text-4xl font-black text-slate-900">{selectedProject.price}</p>
                                    </div>
                                    <button className="w-full sm:w-auto bg-[#c19206] text-white px-12 py-6 rounded-[2rem] font-black flex items-center justify-center gap-3 hover:bg-slate-900 transition-all shadow-2xl shadow-[#c19206]/40">
                                        PURCHASE NOW <ShoppingCart size={22} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}