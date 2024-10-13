"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ENFlag from "@/Public/ENFlag.png";

function NavPlain() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="mainColor text-white py-4">
        <div className="max-w-7xl lg:mx-44 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link href="/" className="font-bold text-lg BodyFont">
            Booking.com
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-4">
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
              <span className="infolink "></span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default NavPlain;
