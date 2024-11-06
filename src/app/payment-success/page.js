"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { BsArrowRight, BsStars } from "react-icons/bs";
import { HiOutlineClipboardList } from "react-icons/hi";

export default function PaymentSuccessPage() {
  const locale = useLocale();
  const router = useRouter();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    const redirectTimer = setTimeout(() => {
      router.push("/");
    }, 5000);

    return () => {
      clearInterval(timer);
      clearTimeout(redirectTimer);
    };
  }, [router]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-green-200/20 to-transparent rounded-full"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [360, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-green-100/20 to-transparent rounded-full"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <motion.div variants={itemVariants} className="relative mb-8">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-green-500 relative"
          >
            <FaCheckCircle className="w-32 h-32" />
            <motion.div
              animate={{
                rotate: 360,
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -top-4 -right-4 text-yellow-400"
            >
              <BsStars className="w-8 h-8" />
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="text-center max-w-3xl mx-auto space-y-6"
        >
          <h1 className="text-7xl font-bold bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
            Payment Successful!
          </h1>

          <p className="text-2xl text-gray-600 leading-relaxed">
            Thank you for your booking. Your transaction has been completed
            successfully.
          </p>

          <motion.div
            className="flex items-center justify-center gap-4 text-gray-500 mt-8"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <HiOutlineClipboardList className="w-6 h-6" />
            <span>View your booking details in your booking page</span>
          </motion.div>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-12 text-center">
          <motion.div className="inline-flex items-center gap-3 px-8 py-4 bg-white/80 backdrop-blur-sm rounded-full shadow-lg">
            <span className="text-gray-600">Redirecting to home in</span>
            <motion.span
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
              }}
              className="text-2xl font-bold text-green-500"
            >
              {countdown}
            </motion.span>
            <BsArrowRight className="text-green-500 w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
