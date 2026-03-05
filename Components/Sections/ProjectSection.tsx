"use client";
import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, ChevronLeft, ChevronRight, ShoppingCart, ArrowUpRight } from "lucide-react";

// --- Project Data with Premium AI-Inspired Imagery ---
const projects = [
    {
        id: 1,
        name: "Sky High Residency",
        desc: "Luxury 5-bedroom apartments with panoramic city views.",
        price: "$450,000",
        details: "Exclusive rooftop garden, smart home automation, and 24/7 concierge service. Designed for those who seek the clouds.",
        gallery: [
            "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2000",
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2000",
            "https://images.unsplash.com/photo-1600585154340-be6199f7d009?q=80&w=2000",
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2000"
        ]
    },
    {
        id: 2,
        name: "Golden Gate Mall",
        desc: "Premium commercial spaces in the heart of the city.",
        price: "$1.2M",
        details: "Central HVAC, high-speed elevators, and luxury retail outlets. A masterpiece of modern retail architecture.",
        gallery: [
            "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2000", // High-end Retail AI look
            "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?q=80&w=2000", // Modern Mall Interior
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000", // Corporate Glass facade
            "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000"  // Luxury lobby
        ]
    },
    {
        id: 3,
        name: "Oceanic Villas",
        desc: "Modern beachfront living with private infinity pools.",
        price: "$850,000",
        details: "Direct beach access and sustainable architectural design. Wake up to the sound of infinity.",
        gallery: [
            "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2000",
            "https://images.unsplash.com/photo-1512918766675-ed406e3e7f02?q=80&w=2000",
            "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2000",
            "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?q=80&w=2000"
        ]
    },
    {
        id: 4,
        name: "The Penthouse",
        desc: "Unmatched elegance at the highest peak.",
        price: "$2.5M",
        details: "Triple-height ceilings and a private helipad access. The ultimate symbol of status and engineering.",
        gallery: [
            "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=2000",
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2000",
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2000",
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2000"
        ]
    },
];

const ModalGallery = ({ images }: { images: string[] }) => {
    const [imgIndex, setImgIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setImgIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
        }, 3500);
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

    useEffect(() => {
        if (isPaused || selectedProject) return;
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, [isPaused, selectedProject, nextSlide]);

    return (
        <section className="py-28 bg-white text-slate-900 overflow-hidden px-6">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
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
                            <button onClick={prevSlide} className="p-5 border border-slate-200 rounded-full hover:bg-slate-900 hover:text-white transition-all duration-500">
                                <ChevronLeft size={24} />
                            </button>
                            <button onClick={nextSlide} className="p-5 border border-slate-200 rounded-full hover:bg-slate-900 hover:text-white transition-all duration-500">
                                <ChevronRight size={24} />
                            </button>
                        </div>
                        <button className="group flex items-center gap-3 bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold hover:bg-[#c19206] transition-all duration-300">
                            EXPLORE ALL PROJECTS <ArrowUpRight size={18} />
                        </button>
                    </div>
                </div>

                {/* Slider Grid */}
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
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="absolute top-8 right-8 scale-0 group-hover:scale-100 transition-transform duration-500">
                                        <div className="bg-white/90 backdrop-blur-md p-5 rounded-full shadow-2xl text-[#c19206]">
                                            <Plus size={32} strokeWidth={3} />
                                        </div>
                                    </div>
                                    <div className="absolute bottom-10 left-10 right-10">
                                        <p className="text-[#c19206] font-black text-sm mb-2 tracking-widest uppercase">{proj.price}</p>
                                        <h3 className="text-3xl font-black text-slate-900 group-hover:text-[#c19206] transition-colors leading-tight">{proj.name}</h3>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Modal Detail Section */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[200] bg-slate-900/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 100 }} animate={{ scale: 1, y: 0 }}
                            className="bg-white text-slate-900 w-full max-w-7xl rounded-[4rem] overflow-hidden grid lg:grid-cols-12 shadow-2xl h-full max-h-[90vh]"
                        >
                            <div className="lg:col-span-7 relative bg-slate-100">
                                <ModalGallery images={selectedProject.gallery} />
                            </div>

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
                                            <p className="text-[10px] font-bold text-slate-400 uppercase">Architecture</p>
                                            <p className="font-bold text-slate-800 italic">Apex Signature</p>
                                        </div>
                                        <div className="border-l-4 border-slate-100 pl-6">
                                            <p className="text-[10px] font-bold text-slate-400 uppercase">Status</p>
                                            <p className="font-bold text-[#c19206]">Exclusive</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-10 border-t border-slate-100">
                                    <div>
                                        <p className="text-xs font-bold text-slate-400">VALUATION</p>
                                        <p className="text-4xl font-black text-slate-900">{selectedProject.price}</p>
                                    </div>
                                    <button className="w-full sm:w-auto bg-[#c19206] text-white px-12 py-6 rounded-[2rem] font-black flex items-center justify-center gap-3 hover:bg-slate-900 transition-all shadow-xl">
                                        BOOK VIEWING <ShoppingCart size={22} />
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