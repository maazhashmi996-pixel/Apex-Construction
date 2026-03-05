import Navbar from "@/Components/Navbar/page";
import AboutVIPSection from "@/Components/Sections/AboutVipSection";
import Hero from "@/Components/Sections/hero";
import ProjectSection from "@/Components/Sections/ProjectSection";
import ServicesVIPSection from "@/Components/Sections/ServicesVIPSection";
import TeamSection from "@/Components/Sections/TeamSection";
import VIPFooter from "@/Components/Sections/VIPFOOTER";
import { div } from "framer-motion/client";
import Image from "next/image";

export default function Home() {
  return (

    <div>
      <Hero />
      <ProjectSection />
      <AboutVIPSection />
      <TeamSection />
      <ServicesVIPSection />
      <VIPFooter />
    </div>
  );
}
