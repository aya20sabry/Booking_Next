"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ENFlag from "@/app/Public/ENFlag.png";
import { MdMenu } from "react-icons/md";
import { BsHouseAdd } from "react-icons/bs";

import { FaRegUserCircle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="mainColor text-white py-4">
        <div className="max-w-7xl lg:mx-44 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link href="/" className="font-bold text-2xl BodyFont">
            Booking.com
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-4">
            <button className="mainColor navHover  px-3 py-2 rounded">
              EGP
            </button>
            <button className="mainColor navHover px-3 py-2 rounded">
              <Image
                src={ENFlag}
                className="rounded-full"
                alt="Language"
                width={24}
                height={24}
              />
            </button>
            <button className="mainColor navHover px-3 py-2 rounded">
              {" "}
              <span className="infolink  "></span>
            </button>

            <button className="mainColor navHover px-3 py-2 rounded">
              List your property
            </button>
            <button className="bg-white text-blue-700 text-sm hover:bg-blue-100 px-3 py-2 rounded border-blue-900 font-medium">
              Register
            </button>
            <button className="bg-white text-blue-700 text-sm hover:bg-blue-100 px-3 py-2 rounded  border-blue-900 font-medium">
              Sign in
            </button>
          </div>

          {/* Mobile menu */}
          <div className="flex md:hidden space-x-4">
            <Link href="/signin" className="text-white text-2xl">
              <FaRegUserCircle />
            </Link>
            <button
              onClick={() => setIsMenuOpen(true)}
              className="text-white text-2xl"
            >
              <MdMenu />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu  */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-white z-50 md:hidden"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="flex flex-col  h-full">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-4 right-4 text-black text-2xl"
              >
                &times;
              </button>
              <div className="flex flex-col items-start justify-start space-y-4 h-full p-6 mt-10">
                <h1 className="text-2xl font-bold">More</h1>
                <button className="   px-3 py-2 rounded">
                  EGP Egyptian Pound
                </button>
                <button className="  px-3 py-2 rounded flex items-center space-x-2">
                  <Image
                    src={ENFlag}
                    className="rounded-full me-2"
                    alt="Language"
                    width={24}
                    height={24}
                  />{" "}
                  English (US)
                </button>
                <button className="  px-3 py-2 rounded flex items-center space-x-2">
                  <BsHouseAdd className="text-2xl me-2" /> List your property
                </button>
                <button className="  px-3 py-2 rounded">
                  {" "}
                  <span className="infolink  "></span> Contact Customer Service
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
