"use client";

import { motion } from "framer-motion";

export const EventDate = () => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-white mb-6">Mark Your Calendars</h2>
      <div className="flex justify-center items-center space-x-4">
        <motion.div
          className="w-32 h-32 rounded-2xl bg-white/10 backdrop-blur-lg flex flex-col justify-center items-center border border-white/20"
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 255, 255, 0.2)" }}
        >
          <div className="text-4xl font-bold text-cyan-300">08</div>
          <div className="text-lg text-white">NOV</div>
        </motion.div>
        <div className="text-4xl font-bold text-fuchsia-500">-</div>
        <motion.div
          className="w-32 h-32 rounded-2xl bg-white/10 backdrop-blur-lg flex flex-col justify-center items-center border border-white/20"
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 255, 255, 0.2)" }}
        >
          <div className="text-4xl font-bold text-cyan-300">09</div>
          <div className="text-lg text-white">NOV</div>
        </motion.div>
      </div>
    </div>
  );
};
