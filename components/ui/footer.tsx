import React from "react";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-10 flex items-center justify-center min-h-[200px]">
      <div className="container mx-auto px-4">
        <div className="bg-black/40 backdrop-blur-sm rounded-lg p-8 shadow-2xl border border-gray-700">
          <p className="text-xl md:text-lg text-center text-white font-medium leading-relaxed">
            Made with{" "}
            <FaHeart className="inline-block text-red-500 mx-1 animate-pulse" />{" "}
            by the{" "}
            <span className="font-bold text-cyan-500">
              Tech Club of Asansol Engineering College
            </span>{" "}
            &{" "}
            <span className="font-bold text-fuchsia-400">Subham Bhattacharya</span>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
