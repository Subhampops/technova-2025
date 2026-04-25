"use client";

import { AboutSection } from "@/components/ui/about-section";
import { CountdownTimer } from "@/components/ui/countdown-timer";
import { EventDate } from "@/components/ui/event-date";
import { EventsSection } from "@/components/ui/events-section";
import { TeamSection } from "@/components/ui/team-section";
import { LocationSection } from "@/components/ui/location-section";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { ParticlesBackground } from "@/components/ui/particles-background";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <div id="home" className="relative min-h-screen overflow-hidden flex items-center justify-center">
        <ParticlesBackground />
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-fuchsia-600 to-cyan-500 opacity-40 blur-3xl"></div>
        </div>

        {/* Hero Content */}
        <motion.div
          className="relative z-10 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="mb-4 text-5xl font-bold tracking-tight sm:text-7xl lg:text-8xl text-white"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 120 }}
          >
            Tech<span className="text-cyan-300">Nova</span> 2025
          </motion.h1>

          <motion.div
            className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.3, delayChildren: 0.5 }}
          >
            <motion.div
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg"
              variants={itemVariants}
            >
              <EventDate />
            </motion.div>
            <motion.div
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg"
              variants={itemVariants}
            >
              <h2 className="text-3xl font-bold text-white mb-4">Countdown to Launch</h2>
              <CountdownTimer targetDate="2025-11-08T00:00:00" />
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-12 flex flex-wrap justify-center gap-8"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1, type: "spring", stiffness: 120 }}
          >
            <motion.div whileTap={{ scale: 0.95 }}>
              <InteractiveHoverButton className="text-lg border-cyan-300 border-2">
                <Link href="/#events">Register Now</Link>
              </InteractiveHoverButton>
            </motion.div>
            <motion.div whileTap={{ scale: 0.95 }}>
              <InteractiveHoverButton className="text-lg border-fuchsia-500 border-2">
                <Link href="#about">Know More</Link>
              </InteractiveHoverButton>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 20 }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <svg
            className="h-8 w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </div>
      <AboutSection />
      <TeamSection />
      <LocationSection />
      <EventsSection />
    </main>
  );
}

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 120 } },
};