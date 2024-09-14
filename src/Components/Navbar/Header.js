"use client";
import Link from "next/link";
import { IoBedOutline } from "react-icons/io5";
import { PiAirplaneTilt } from "react-icons/pi";
import { IoCarOutline } from "react-icons/io5";
import { MdOutlineAttractions } from "react-icons/md";
import { usePathname } from "next/navigation";

function Header() {
  const pathname = usePathname();

  const getButtonClass = (path) => {
    const isActive = pathname === path;
    return `px-2 sm:px-3 py-1 sm:py-2 rounded-full flex items-center text-xs sm:text-sm  navHover ${
      isActive ? "hoverEffect border border-white" : ""
    }`;
  };

  return (
    <header className="mainColor text-white py-2 sm:py-4">
      <div className="flex flex-wrap justify-center sm:justify-start space-x-2 sm:space-x-4 px-2 sm:px-5 lg:mx-44 gri">
        <Link href="/">
          <button className={getButtonClass("/")}>
            <IoBedOutline className="mr-1 sm:mr-2 text-lg sm:text-2xl" /> Stays
          </button>
        </Link>
        <Link href="/flights">
          <button className={getButtonClass("/flights")}>
            <PiAirplaneTilt className="mr-1 sm:mr-2 text-lg sm:text-2xl" />{" "}
            Flights
          </button>
        </Link>
        <Link href="/cars">
          <button className={getButtonClass("/cars")}>
            <IoCarOutline className="mr-1 sm:mr-2 text-lg sm:text-2xl" /> Car
            rentals
          </button>
        </Link>
        <Link href="/attractions">
          <button className={getButtonClass("/attractions")}>
            <MdOutlineAttractions className="mr-1 sm:mr-2 text-lg sm:text-2xl" />{" "}
            Attractions
          </button>
        </Link>
        <Link href="/taxi">
          <button className={`${getButtonClass("/taxi")} hidden sm:flex`}>
            <span className="mr-1 sm:mr-2 text-xs border-t border-b border-spacing-0">
              TAXI
            </span>
            Airport taxis
          </button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
