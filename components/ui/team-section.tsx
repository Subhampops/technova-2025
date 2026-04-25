"use client";

import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { crewData } from "@/lib/crew";
import Image from "next/image";
import { Linkedin } from "lucide-react";
import Link from "next/link";

export const TeamSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section
      id="team"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="h-[800px] w-[800px] rounded-full bg-gradient-to-tr from-cyan-500 to-fuchsia-600 opacity-20 blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center"
        >
          <motion.h2
            variants={itemVariants}
            className="mb-20 text-4xl font-bold tracking-tight text-white sm:text-6xl"
          >
            Meet the Crew
          </motion.h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {crewData.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="h-full"
            >
              <Card className="h-full bg-white/5 border border-white/10 rounded-2xl backdrop-blur-lg flex flex-col items-center text-center shadow-lg p-8">
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  width={128}
                  height={128}
                  className="rounded-full mb-4 border-4 border-cyan-300/50"
                />
                <h3 className="text-2xl font-bold text-cyan-300">{member.name}</h3>
                <p className="text-white/80 mb-4">{member.designation}</p>
                <div className="flex justify-center">
                  <Link href={member.socialProfileUrl} target="_blank" className="p-2 border-2 border-white/80 rounded-full hover:border-cyan-300 transition-colors">
                    <Linkedin className="text-white/80 group-hover:text-cyan-300 transition-colors" />
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};