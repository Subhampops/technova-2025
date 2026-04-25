"use client";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";

const aboutData = [
  {
    title: "What is TechNova?",
    description:
      "TechNova is a premier annual tech conference that brings together the brightest minds in the industry. From groundbreaking keynotes to hands-on workshops, we explore the future of technology and its impact on our world.",
  },
  {
    title: "Our Mission",
    description:
      "Our mission is to foster innovation, collaboration, and learning. We aim to create a platform where developers, entrepreneurs, and tech enthusiasts can connect, share ideas, and push the boundaries of what's possible.",
  },
  {
    title: "Why Attend?",
    description:
      "Network with industry leaders, gain insights from expert-led sessions, and discover the latest trends and technologies. Whether you're looking to advance your career, showcase your project, or simply get inspired, TechNova is the place to be.",
  },
];

export const AboutSection = () => {
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
      id="about"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Glow */}
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
            className="mb-12 text-4xl font-bold tracking-tight text-white sm:text-6xl"
          >
            The Future of Tech, Today.
          </motion.h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {aboutData.map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full bg-white/5 border border-white/10 rounded-2xl backdrop-blur-lg">
                <CardContent className="p-8">
                  <h3 className="mb-4 text-2xl font-bold text-cyan-300">
                    {item.title}
                  </h3>
                  <p className="text-white/80">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};