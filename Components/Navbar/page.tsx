"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, PhoneCall } from "lucide-react";

export default function VIPNavbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Projects", href: "#projects" },
        { name: "Services", href: "#services" },
        { name: "About", href: "#about" },
    ];

    return (
        <nav className={`fixed w-full z-[1000] transition-all duration-700 ${scrolled
            ? "bg-white/90 backdrop-blur-2xl py-3 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)]"
            : "bg-transparent py-6"
            }`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

                {/* --- Logo Area --- */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="relative flex items-center"
                >
                    <a href="/" className="group">
                        {/* Aapki PNG Pic yahan aayegi. 
                           Maine fallback ke liye image tag aur h-12 (height) rakhi hai.
                        */}
                        <img
                            src="/logo.webp"
                            alt="APEX Logo"
                            className={`h-12 md:h-14 w-auto transition-all duration-500 object-contain ${scrolled ? "brightness-100" : "brightness-0 invert"
                                }`}
                        // brightness-0 invert: Isse black logo white ho jayega transparent background par
                        />

                        {/* Subtle Logo Glow Effect */}
                        <div className="absolute -inset-2 bg-[#c19206]/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                </motion.div>

                {/* --- Desktop Navigation --- */}
                <div className="hidden md:flex items-center gap-10">
                    <div className="flex items-center gap-8">
                        {navLinks.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className={`relative text-[13px] font-black uppercase tracking-[0.2em] transition-all duration-300 group ${scrolled ? "text-slate-900" : "text-white"
                                    }`}
                            >
                                {item.name}
                                {/* Animated Underline */}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#c19206] transition-all duration-300 group-hover:w-full" />
                            </a>
                        ))}
                    </div>

                    {/* Premium Call Action */}
                    <div className="h-8 w-px bg-slate-300/30 mx-2" />

                    <button className="relative overflow-hidden group bg-slate-900 text-white px-8 py-3.5 rounded-full font-black text-[11px] uppercase tracking-[0.15em] transition-all hover:shadow-[0_15px_30px_-10px_rgba(193,146,6,0.4)]">
                        <span className="relative z-10 flex items-center gap-2">
                            <PhoneCall size={14} className="group-hover:animate-bounce" />
                            Get a Quote
                        </span>
                        {/* Hover Gradient Overlay */}
                        <div className="absolute inset-0 bg-[#c19206] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    </button>
                </div>

                {/* --- Mobile Toggle --- */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className={`md:hidden p-2 rounded-xl transition-colors ${scrolled ? "bg-slate-100 text-[#c19206]" : "bg-white/10 text-white"
                        }`}
                >
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* --- Mobile Menu Overlay --- */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "100vh" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="fixed inset-0 bg-slate-900 z-[999] flex flex-col items-center justify-center gap-8 md:hidden"
                    >
                        {navLinks.map((item, idx) => (
                            <motion.a
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                key={item.name}
                                href={item.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-4xl font-black text-white uppercase tracking-tighter hover:text-[#c19206] transition-colors"
                            >
                                {item.name}
                            </motion.a>
                        ))}
                        <button className="mt-8 bg-[#c19206] text-white px-10 py-5 rounded-full font-black uppercase tracking-widest">
                            Inquiry Now
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}