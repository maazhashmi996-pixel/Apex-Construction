"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, HardHat } from "lucide-react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-[100] transition-all duration-500 ${scrolled ? "bg-white/80 backdrop-blur-md py-4 shadow-lg" : "bg-transparent py-6"
            }`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <div className="bg-[#c19206] p-2 rounded-lg">
                        <HardHat className="text-white" size={24} />
                    </div>
                    <span className={`text-2xl font-black tracking-tighter ${scrolled ? "text-slate-900" : "text-white"}`}>
                        CONSTRUCT<span className="text-[#c19206]">O</span>
                    </span>
                </div>

                <div className="hidden md:flex items-center gap-8">
                    {["Home", "Projects", "Services", "About"].map((item) => (
                        <a key={item} href={`#${item.toLowerCase()}`}
                            className={`text-sm font-bold uppercase tracking-widest hover:text-[#c19206] transition-colors ${scrolled ? "text-slate-600" : "text-white/90"
                                }`}>
                            {item}
                        </a>
                    ))}
                    <button className="bg-[#c19206] text-white px-6 py-3 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-slate-900 transition-all">
                        Get a Quote
                    </button>
                </div>

                <div className="md:hidden text-[#c19206]">
                    <Menu size={28} />
                </div>
            </div>
        </nav>
    );
}