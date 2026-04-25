"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { eventData } from "@/lib/events";

export const EventsSection = () => {
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

  const competitions = eventData.filter((event) => event.title !== "Workshop");
  const workshop = eventData.find((event) => event.title === "Workshop");

  const handleRegisterClick = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <section
      id="events"
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
            className="mb-16 text-4xl font-bold tracking-tight text-white sm:text-6xl"
          >
            Join the Action
          </motion.h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12"
        >
          {competitions.map((event, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="h-full"
            >
              <Card className="h-full bg-white/5 border border-cyan-300/20 rounded-2xl backdrop-blur-xl flex flex-col shadow-lg shadow-cyan-500/10">
                <CardHeader className="p-6">
                  <CardTitle className="text-3xl font-bold text-cyan-300">
                    {event.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0 flex-grow flex flex-col justify-between">
                  <p className="text-white/80 mb-6 text-lg">{event.description}</p>
                  <div className="flex justify-between items-center text-center mb-6">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">Solo</h4>
                      <p className="font-bold text-cyan-300 text-md">{event.soloRegistration}</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">Team</h4>
                      <p className="font-bold text-cyan-300 text-md">{event.teamRegistration}</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">Size</h4>
                      <p className="font-bold text-cyan-300 text-md">{event.minTeamSize} - {event.maxTeamSize}</p>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <InteractiveHoverButton
                      className="border-cyan-300 border-2"
                      onClick={() => handleRegisterClick(event.registrationLink)}
                    >
                      Register Now
                    </InteractiveHoverButton>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {workshop && (
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            whileHover={{ scale: 1.05 }}
            className="max-w-2xl mx-auto"
          >
            <Card className="h-full bg-white/5 border border-fuchsia-500/20 rounded-2xl backdrop-blur-xl flex flex-col shadow-lg shadow-fuchsia-500/10">
              <CardHeader className="p-8">
                <CardTitle className="text-3xl font-bold text-fuchsia-400">
                  {workshop.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0 flex-grow flex flex-col justify-between">
                <p className="text-white/80 text-lg">{workshop.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>
    </section>
  );
};