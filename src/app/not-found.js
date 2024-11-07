"use client";
import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Navbar/Header";
import Navbar from "@/Components/Navbar/Navbar";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaSearchLocation, FaCompass } from "react-icons/fa";

function NotFound() {
  return (
    <>
      <Navbar />
      <Header />
      <main className="min-h-[60vh] bg-gradient-to-b from-white to-blue-50 px-6 py-24 sm:py-32 lg:px-8 relative overflow-hidden">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 right-20 opacity-10"
        >
          <FaCompass className="text-[200px] text-blue-500" />
        </motion.div>

        <div className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FaSearchLocation className="mx-auto text-6xl text-[#003B95] mb-4" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl font-semibold text-[#003B95]"
          >
            404
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl"
          >
            Oops! Page not found
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-6 text-lg leading-7 text-gray-600"
          >
            Looks like you&apos;ve ventured into uncharted territory.
            <br />
            The page you&apos;re looking for has gone exploring!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-10 flex items-center justify-center gap-x-6"
          >
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-md bg-[#003B95] px-14 py-3 text-sm font-semibold text-white 
                         shadow-lg hover:shadow-xl transition-all duration-200 hover:bg-blue-800
                         flex items-center gap-2"
              >
                <span>Return Home</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  →
                </motion.span>
              </motion.button>
            </Link>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-100 to-transparent opacity-50" />
      </main>
      <Footer />
    </>
  );
}

export default NotFound;
