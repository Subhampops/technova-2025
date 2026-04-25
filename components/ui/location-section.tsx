"use client";

import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { venueData } from "@/lib/venue";
import { Card } from "@/components/ui/card";

export const LocationSection = () => {
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
      id="location"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="h-[800px] w-[800px] rounded-full bg-gradient-to-tr from-fuchsia-600 to-cyan-500 opacity-20 blur-3xl"></div>
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
            className="mb-20 text-4xl font-bold tracking-tight text-cyan-300 sm:text-6xl"
          >
            Find Your Way to Us
          </motion.h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <motion.div
            variants={itemVariants}
            className="h-96"
          >
            <Card className="h-full bg-white/5 border border-white/10 rounded-2xl backdrop-blur-lg shadow-lg overflow-hidden">
              <iframe
                src={venueData.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Card>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Card className="h-full bg-white/5 border border-white/10 rounded-2xl backdrop-blur-lg shadow-lg p-8 text-white/80 text-lg">
              <h3 className="text-3xl font-bold text-cyan-300 mb-4">
                {venueData.name}
              </h3>
              <p className="mb-6">{venueData.description}</p>
              <div>
                <ul className="space-y-4">
                  {venueData.transportModes.map((mode, index) => (
                    <li key={index}>
                      <strong className="text-cyan-300">{mode.mode}:</strong>{" "}
                      {mode.details}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};