"use client";
import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Navbar/Header";
import Navbar from "@/Components/Navbar/Navbar";
import { motion } from "framer-motion";
import { IoAirplane } from "react-icons/io5";

function Loading() {
  return (
    <>
      <Navbar />
      <Header />
      <div className="flex justify-center items-center h-screen">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 100, opacity: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        >
          <IoAirplane className="text-6xl text-blue-900" />
        </motion.div>
      </div>
      <Footer />
    </>
  );
}

export default Loading;
