"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import find from "@/Public/Find.png";

const Animated = () => {
  const words = ["homes", "apartments", "villas", "cottages"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center w-full max-w-6xl mx-auto px-4 shadow-2xl rounded-lg relative overflow-hidden h-[300px]">
      <div className="absolute left-1/3 transform -translate-x-1/2 bg-blue-600 text-white p-12 rounded-full flex flex-col items-center justify-center space-y-4 w-[500px] h-[500px]">
        <h2 className="text-3xl font-bold flex items-center justify-between">
          Find{" "}
          <span className="relative inline-block overflow-visible h-[1.2em] w-[5em] ms-3">
            <AnimatePresence mode="wait">
              <motion.span
                key={currentWordIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex items-center justify-start"
              >
                <span className="border-b-4 border-yellow-400 text-white">
                  {words[currentWordIndex]}
                </span>
              </motion.span>
            </AnimatePresence>
          </span>{" "}
        </h2>
        <h2 className="text-2xl -ms-6 font-bold">for your next trip</h2>
        <button className="bg-white text-blue-600 px-20 py-2 rounded-sm text-xs font-semibold ms-8">
          Discover homes
        </button>
      </div>
      <div className="hidden md:block absolute right-4 top-1/2 transform -translate-y-1/2">
        <Image
          src={find}
          alt="Placeholder"
          className="rounded-lg shadow-lg"
          width={360}
          height={250}
        />
      </div>
      <div className="absolute -left-4 bottom-0 -translate-y-1/2 w-16 h-16 bg-yellow-500 rounded-full"></div>
    </div>
  );
};

export default Animated;
