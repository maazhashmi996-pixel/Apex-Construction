import Navbar from "@/Components/Navbar/page";
import AboutVIPSection from "@/Components/Sections/AboutVipSection";
import Hero from "@/Components/Sections/hero";
import ProjectSection from "@/Components/Sections/ProjectSection";
import { div } from "framer-motion/client";
import Image from "next/image";

export default function Home() {
  return (

    <div>
      <Hero />
      <ProjectSection />
      <AboutVIPSection />
    </div>
  );
}
