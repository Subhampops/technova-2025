"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useActiveSection } from "@/lib/use-active-section";

const navLinks = [
  { title: "Home", href: "#home" },
  { title: "About", href: "#about" },
  { title: "Team", href: "#team" },
  { title: "Location", href: "#location" },
  { title: "Events", href: "#events" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const activeSection = useActiveSection(["home", "about", "team", "location", "events"]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1.5 }}
      className="fixed top-4 left-0 right-0 w-full z-50 flex justify-center"
    >
      <div className="hidden md:flex items-center justify-center bg-white/5 border border-white/10 rounded-full backdrop-blur-xl px-8 py-3 shadow-lg">
        <ul className="flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.title}>
              <Link
                href={link.href}
                className={`transition-colors text-lg ${activeSection === link.href.substring(1) ? "text-cyan-300" : "text-white/70 hover:text-white"}`}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="md:hidden flex items-center justify-between bg-white/5 border border-white/10 rounded-full backdrop-blur-xl px-6 py-3 shadow-lg w-[90%]">
        <Link href="/" className="text-white font-bold text-xl">
          TechNova
        </Link>
        <button onClick={toggleMenu} className="text-white">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-20 w-[90%] bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl p-6 shadow-lg"
          >
            <ul className="flex flex-col items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.title}>
                  <Link href={link.href} className="text-white/80 hover:text-cyan-300 transition-colors text-lg" onClick={toggleMenu}>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};