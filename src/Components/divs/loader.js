"use client";
import { motion } from "framer-motion";
import { IoAirplane } from "react-icons/io5";

function Loaders() {
  return (
    <div className="flex justify-center items-center h-screen">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 100, opacity: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      >
        <IoAirplane className="text-6xl text-blue-900" />
      </motion.div>
    </div>
  );
}

export default Loaders;
