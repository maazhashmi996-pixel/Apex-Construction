"use client";
import React from "react";
import { motion } from "framer-motion";
import {
    Facebook,
    Instagram,
    Linkedin,
    Twitter,
    Mail,
    Phone,
    MapPin,
    ArrowUpRight,
    Send
} from "lucide-react";

export default function VIPFooter() {
    const currentYear = new Date().getFullYear();

    const footerLinks = [
        { title: "Company", links: ["About Us", "Our Team", "Careers", "News"] },
        { title: "Services", links: ["Pre-Construction", "General Contracting", "Design Build", "Management"] },
        { title: "Support", links: ["Contact", "Privacy Policy", "Terms of Use", "Sitemap"] }
    ];

    return (
        <footer className="relative bg-[#0a0a0a] text-white pt-24 pb-12 overflow-hidden">

            {/* Background Aesthetic - Large Watermark */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none opacity-[0.02] select-none">
                <h1 className="text-[25vw] font-black leading-none translate-y-20">APEX</h1>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Upper Section: Newsletter & Branding */}
                <div className="grid lg:grid-cols-2 gap-20 pb-20 border-b border-white/10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="space-y-8"
                    >
                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter">
                            LET'S BUILD YOUR <br />
                            <span className="text-[#c19206] italic font-serif font-light">Vision Together.</span>
                        </h2>
                        <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-full bg-[#c19206] flex items-center justify-center shadow-[0_0_20px_rgba(193,146,6,0.4)]">
                                <Phone size={20} />
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Inquiries</p>
                                <p className="text-xl font-bold">+1 (555) APEX-GROUP</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white/5 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10"
                    >
                        <p className="text-lg font-medium mb-6 text-slate-300">Subscribe for project updates & insights.</p>
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="Your Email Address"
                                className="w-full bg-white/5 border border-white/10 py-5 px-8 rounded-2xl focus:outline-none focus:border-[#c19206] transition-all text-white"
                            />
                            <button className="absolute right-2 top-2 bottom-2 bg-[#c19206] hover:bg-[#eec044] text-white px-6 rounded-xl transition-all flex items-center gap-2 group">
                                <span className="font-bold text-sm">JOIN</span>
                                <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* Middle Section: Links & Info */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 py-20">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-black tracking-tighter italic">APEX<span className="text-[#c19206]">.</span></h3>
                        <p className="text-slate-400 leading-relaxed font-medium">
                            Providing a superior building experience through trust, consistency, and peace of mind since 2005.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                                <motion.a
                                    key={i}
                                    href="#"
                                    whileHover={{ y: -5, color: "#c19206" }}
                                    className="h-10 w-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 transition-all"
                                >
                                    <Icon size={18} />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {footerLinks.map((group, i) => (
                        <div key={i} className="space-y-8">
                            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-[#c19206]">{group.title}</h4>
                            <ul className="space-y-4">
                                {group.links.map((link, j) => (
                                    <li key={j}>
                                        <a href="#" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 group">
                                            <span className="w-0 group-hover:w-2 h-px bg-[#c19206] transition-all" />
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm font-medium">
                    <p>© {currentYear} Apex Construction Group. All rights reserved.</p>
                    <div className="flex items-center gap-8">
                        <div className="flex items-center gap-2">
                            <MapPin size={14} className="text-[#c19206]" />
                            <span>Lahore, Pakistan</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Mail size={14} className="text-[#c19206]" />
                            <span>hello@apex.com</span>
                        </div>
                    </div>
                    <motion.button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        whileHover={{ scale: 1.1 }}
                        className="flex items-center gap-2 text-white font-bold"
                    >
                        BACK TO TOP <ArrowUpRight size={16} />
                    </motion.button>
                </div>
            </div>
        </footer>
    );
}