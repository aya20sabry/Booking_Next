"use client";
import Link from "next/link";
import { IoBedOutline } from "react-icons/io5";
import { PiAirplaneTilt } from "react-icons/pi";
import { IoCarOutline } from "react-icons/io5";
import { MdOutlineAttractions } from "react-icons/md";
import { useRouter } from "next/navigation";

function Header({ href }) {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <>
      <header className="mainColor text-white py-2 sm:py-4">
        <div className="flex flex-wrap justify-center sm:justify-start space-x-2 sm:space-x-4 px-2 sm:px-5 lg:mx-44 gri">
          <Link href="/">
            <button
              className={`px-2 sm:px-3 py-1 sm:py-2 rounded-full flex items-center text-xs sm:text-sm ${
                isActive ? "hoverEffect border border-white" : ""
              }`}
            >
              <IoBedOutline className="mr-1 sm:mr-2 text-lg sm:text-2xl" />{" "}
              Stays
            </button>
          </Link>
          <button
            className={`px-2 sm:px-3 py-1 sm:py-2 rounded-full flex items-center text-xs sm:text-sm ${
              isActive ? "hoverEffect border border-white" : ""
            }`}
          >
            <PiAirplaneTilt className="mr-1 sm:mr-2 text-lg sm:text-2xl" />{" "}
            Flights
          </button>
          <button
            className={`px-2 sm:px-3 py-1 sm:py-2 rounded-full flex items-center text-xs sm:text-sm ${
              isActive ? "hoverEffect border border-white" : ""
            }`}
          >
            <IoCarOutline className="mr-1 sm:mr-2 text-lg sm:text-2xl" /> Car
            rentals
          </button>
          <button
            className={`px-2 sm:px-3 py-1 sm:py-2 rounded-full flex items-center text-xs sm:text-sm ${
              isActive ? "hoverEffect border border-white" : ""
            }`}
          >
            <MdOutlineAttractions className="mr-1 sm:mr-2 text-lg sm:text-2xl" />{" "}
            Attractions
          </button>
          <button
            className={`px-2 sm:px-3 py-1 sm:py-2 rounded-full flex items-center text-xs sm:text-sm ${
              isActive ? "hoverEffect border border-white" : ""
            } hidden sm:flex`}
          >
            <span className="mr-1 sm:mr-2 text-xs border-t border-b border-spacing-0">
              TAXI
            </span>
            Airport taxis
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
