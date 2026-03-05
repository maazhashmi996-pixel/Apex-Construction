"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const teamMembers = [
    {
        id: 1,
        name: "James Wilson",
        role: "Senior Matchmaker",
        // Professional AI Matchmaker Image
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: 2,
        name: "Michael Chen",
        role: "Relationship Expert",
        // Friendly Expert Image
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: 3,
        name: "David Miller",
        role: "Family Consultant",
        // Trustworthy Consultant Image
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: 4,
        name: "Robert Fox",
        role: "Lead Coordinator",
        // Energetic Coordinator Image
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    }
];

export default function TeamSection() {
    return (
        <section className="py-24 bg-[#fffcf5] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="max-w-xl"
                    >
                        <span className="text-[#c19206] font-bold tracking-[0.4em] uppercase text-xs mb-4 block">
                            The Heart of Asaan Rishta
                        </span>
                        <h2 className="text-5xl md:text-7xl font-black text-[#4a1111] leading-[0.85] tracking-tighter">
                            Meet Our <br />
                            <span className="text-[#c19206] italic font-serif font-light">Experts</span>
                        </h2>
                    </motion.div>

                    <Link href="/team">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group flex items-center gap-3 bg-[#4a1111] text-white px-8 py-4 rounded-2xl font-bold hover:bg-[#c19206] transition-all duration-500 shadow-xl shadow-[#4a1111]/20"
                        >
                            EXPLORE ALL TEAM
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                    </Link>
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={member.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.1,
                                ease: "easeOut"
                            }}
                            viewport={{ once: true }}
                            className="group relative"
                        >
                            {/* Image Container */}
                            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border-[12px] border-white shadow-2xl transition-all duration-700 group-hover:shadow-[#c19206]/30 group-hover:-translate-y-4">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                />

                                {/* Social Overlay - Appears on Hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#4a1111] via-[#4a1111]/20 to-transparent opacity-0 group-hover:opacity-90 transition-all duration-500 flex flex-col justify-end p-10">
                                    <div className="flex gap-4 translate-y-10 group-hover:translate-y-0 transition-transform duration-700 delay-100">
                                        <a href="#" className="bg-white/10 backdrop-blur-xl p-3 rounded-2xl hover:bg-[#c19206] transition-all border border-white/20">
                                            <Linkedin size={20} className="text-white" />
                                        </a>
                                        <a href="#" className="bg-white/10 backdrop-blur-xl p-3 rounded-2xl hover:bg-[#c19206] transition-all border border-white/20">
                                            <Twitter size={20} className="text-white" />
                                        </a>
                                        <a href="#" className="bg-white/10 backdrop-blur-xl p-3 rounded-2xl hover:bg-[#c19206] transition-all border border-white/20">
                                            <Facebook size={20} className="text-white" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Info Section */}
                            <div className="mt-8 text-center px-2">
                                <h3 className="text-2xl md:text-3xl font-black text-[#4a1111] group-hover:text-[#c19206] transition-colors duration-300">
                                    {member.name}
                                </h3>
                                <div className="flex items-center justify-center gap-2 mt-2">
                                    <div className="w-4 h-[2px] bg-[#c19206]/30" />
                                    <p className="text-[#c19206] font-extrabold text-[10px] uppercase tracking-[0.25em]">
                                        {member.role}
                                    </p>
                                    <div className="w-4 h-[2px] bg-[#c19206]/30" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}