"use client";
import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, ChevronLeft, ChevronRight, ShoppingCart, ArrowUpRight } from "lucide-react";

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
            "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2000",
            "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?q=80&w=2000",
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000",
            "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000"
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
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, i) => (
                    <div key={i} className={`h-1 transition-all duration-500 rounded-full ${imgIndex === i ? "w-6 bg-[#c19206]" : "w-1.5 bg-white/40"}`} />
                ))}
            </div>
        </div>
    );
};

export default function ProjectSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedProject, setSelectedProject] = useState<null | typeof projects[0]>(null);
    const [isPaused, setIsPaused] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Screen size check for responsive slider logic
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const nextSlide = useCallback(() => {
        const limit = isMobile ? projects.length - 1 : projects.length - 3;
        setCurrentIndex((prev) => (prev < limit ? prev + 1 : 0));
    }, [isMobile]);

    const prevSlide = () => {
        const limit = isMobile ? projects.length - 1 : projects.length - 3;
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : limit));
    };

    useEffect(() => {
        if (isPaused || selectedProject) return;
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, [isPaused, selectedProject, nextSlide]);

    return (
        <section className="py-16 md:py-28 bg-white text-slate-900 overflow-hidden px-4 md:px-6">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:20 gap-8">
                    <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                        <span className="text-[#c19206] font-bold tracking-[0.4em] uppercase text-[10px] md:text-xs mb-3 md:4 block">Our Excellence</span>
                        <h2 className="text-4xl md:text-7xl font-black leading-tight md:leading-[1.1]">
                            Iconic <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c19206] to-[#eec044] italic font-serif font-normal">Masterpieces</span>
                        </h2>
                    </motion.div>

                    <div className="flex flex-row-reverse md:flex-col items-center md:items-end gap-4 md:gap-6 w-full md:w-auto justify-between">
                        <div className="flex gap-2 md:3">
                            <button onClick={prevSlide} className="p-3 md:p-5 border border-slate-200 rounded-full hover:bg-slate-900 hover:text-white transition-all duration-500">
                                <ChevronLeft size={20} />
                            </button>
                            <button onClick={nextSlide} className="p-3 md:p-5 border border-slate-200 rounded-full hover:bg-slate-900 hover:text-white transition-all duration-500">
                                <ChevronRight size={20} />
                            </button>
                        </div>
                        <button className="text-[10px] md:text-base group flex items-center gap-2 md:gap-3 bg-slate-900 text-white px-6 md:px-10 py-3 md:py-5 rounded-xl md:rounded-2xl font-bold hover:bg-[#c19206] transition-all duration-300">
                            EXPLORE ALL <ArrowUpRight size={14} className="md:w-[18px]" />
                        </button>
                    </div>
                </div>

                {/* Slider Grid */}
                <div className="relative" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
                    <motion.div
                        className="flex gap-4 md:gap-8"
                        animate={{ x: isMobile ? `-${currentIndex * 104}%` : `-${currentIndex * (100 / 3.03)}%` }}
                        transition={{ type: "spring", stiffness: 60, damping: 15 }}
                    >
                        {projects.map((proj) => (
                            <motion.div
                                key={proj.id}
                                // FIXED: On mobile width is 100%, on desktop 33%
                                className="min-w-full lg:min-w-[calc(33.333%-22px)] group cursor-pointer"
                                onClick={() => setSelectedProject(proj)}
                            >
                                <div className="relative aspect-[4/5] rounded-[2rem] md:rounded-[3rem] overflow-hidden mb-6 md:mb-8 shadow-xl border border-slate-100">
                                    <img
                                        src={proj.gallery[0]}
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                        alt={proj.name}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

                                    <div className="absolute top-4 right-4 md:top-8 md:right-8 scale-90 md:scale-0 md:group-hover:scale-100 transition-transform duration-500">
                                        <div className="bg-white/90 backdrop-blur-md p-3 md:p-5 rounded-full shadow-2xl text-[#c19206]">
                                            <Plus className="size-6 md:size-8" strokeWidth={3} />                                        </div>
                                    </div>

                                    <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10">
                                        <p className="text-[#c19206] font-black text-[10px] md:text-sm mb-1 md:mb-2 tracking-widest uppercase">{proj.price}</p>
                                        <h3 className="text-2xl md:text-3xl font-black text-white md:text-slate-900 md:group-hover:text-[#c19206] transition-colors leading-tight">{proj.name}</h3>
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
                        className="fixed inset-0 z-[200] bg-slate-900/95 backdrop-blur-xl flex items-center justify-center p-2 md:p-10"
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 50 }} animate={{ scale: 1, y: 0 }}
                            className="bg-white text-slate-900 w-full max-w-7xl rounded-[2rem] md:rounded-[4rem] overflow-hidden grid lg:grid-cols-12 shadow-2xl h-[95vh] md:h-full md:max-h-[90vh]"
                        >
                            <div className="lg:col-span-7 h-[40%] lg:h-full relative bg-slate-100">
                                <ModalGallery images={selectedProject.gallery} />
                            </div>

                            <div className="lg:col-span-5 p-6 md:p-16 flex flex-col justify-between relative overflow-y-auto">
                                <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 md:top-10 md:right-10 p-3 bg-slate-50 hover:bg-slate-900 hover:text-white rounded-full transition-all">
                                    <X size={20} />
                                </button>

                                <div>
                                    <span className="text-[#c19206] font-bold uppercase text-[10px] tracking-[0.4em] mb-4 md:mb-6 block">Premium Unit</span>
                                    <h3 className="text-3xl md:text-5xl font-black mb-4 md:mb-6 leading-tight">{selectedProject.name}</h3>
                                    <p className="text-slate-500 text-sm md:text-lg leading-relaxed mb-6 md:8">{selectedProject.details}</p>

                                    <div className="grid grid-cols-2 gap-4 md:gap-6 mb-6 md:8">
                                        <div className="border-l-2 md:border-l-4 border-slate-100 pl-4 md:pl-6">
                                            <p className="text-[8px] md:text-[10px] font-bold text-slate-400 uppercase">Architecture</p>
                                            <p className="text-sm md:text-base font-bold text-slate-800 italic">Apex Signature</p>
                                        </div>
                                        <div className="border-l-2 md:border-l-4 border-slate-100 pl-4 md:pl-6">
                                            <p className="text-[8px] md:text-[10px] font-bold text-slate-400 uppercase">Status</p>
                                            <p className="text-sm md:text-base font-bold text-[#c19206]">Exclusive</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 md:pt-10 border-t border-slate-100">
                                    <div className="text-center sm:text-left">
                                        <p className="text-[10px] font-bold text-slate-400">VALUATION</p>
                                        <p className="text-2xl md:text-4xl font-black text-slate-900">{selectedProject.price}</p>
                                    </div>
                                    <button className="w-full sm:w-auto bg-[#c19206] text-white px-8 md:px-12 py-4 md:py-6 rounded-xl md:rounded-[2rem] font-black flex items-center justify-center gap-3 hover:bg-slate-900 transition-all shadow-xl text-sm md:text-base">
                                        BOOK VIEWING <ShoppingCart size={18} />
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