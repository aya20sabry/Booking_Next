"use client";
import Image from "next/image";
import { motion } from "framer-motion";

function AttractionCard({ name, things, image }) {
  return (
    <div className="overflow-hidden rounded-lg">
      <div className="relative overflow-hidden rounded-lg shadow-md">
        <motion.div whileHover={{ scale: 1.08 }} transition={{ duration: 0.3 }}>
          <Image
            src={image}
            alt={name}
            width={260}
            height={145}
            className="object-cover w-full rounded-lg"
          />
        </motion.div>
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
          <h3 className="text-base font-semibold text-white">{name}</h3>
          <p className="text-xs text-white">{things} things to do</p>
        </div>
      </div>
    </div>
  );
}

export default AttractionCard;
