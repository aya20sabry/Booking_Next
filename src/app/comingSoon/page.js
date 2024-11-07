"use client";
import { motion } from "framer-motion";
import { FaPlaneDeparture, FaCloud } from "react-icons/fa";
import styles from "./ComingSoon.module.css";
import React from "react";
import Link from "next/link";

function ComingSoon() {
  return (
    <div
      className={`${styles.container} flex flex-col items-center justify-center p-4`}
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-white text-center"
      >
        <motion.div
          animate={{ x: [0, 100, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
          className="absolute top-20 left-10"
        >
          <FaCloud
            className={`${styles.cloud} text-white text-6xl opacity-50`}
          />
        </motion.div>
        <motion.div
          animate={{
            x: [-50, 400],
            rotate: 15,
          }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: "linear",
          }}
          className="mb-8 relative"
          style={{ width: "400px" }}
        >
          <FaPlaneDeparture className="text-white text-5xl" />
        </motion.div>

        <motion.h1
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className={`${styles.title} text-5xl font-bold mb-4`}
        >
          Coming Soon
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xl mb-8"
        >
          We&apos;re preparing for takeoff! Something exciting is on the
          horizon.
        </motion.p>

        <motion.div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-white"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8"
        >
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-white text-blue-500 rounded-full font-semibold
                         hover:bg-blue-50 transition-colors duration-200
                         shadow-lg hover:shadow-xl"
            >
              Back to Home
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default ComingSoon;
