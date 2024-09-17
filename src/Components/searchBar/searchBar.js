"use client";
import React, { useState, useRef, useEffect } from "react";
import { IoBedOutline } from "react-icons/io5";
import { LuCalendarDays } from "react-icons/lu";
import { LuUser2 } from "react-icons/lu";
import Datepicker from "react-tailwindcss-datepicker";

const SearchBar = () => {
  const [destination, setDestination] = useState("");
  const [guestInfo, setGuestInfo] = useState("2 adults · 0 children · 1 room");
  const [openSection, setOpenSection] = useState(null);

  const destinationRef = useRef(null);
  const guestInfoRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !destinationRef.current.contains(event.target) &&
        !guestInfoRef.current.contains(event.target)
      ) {
        setOpenSection(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (openSection && dropdownRef.current) {
      const activeRef = {
        destination: destinationRef,
        guests: guestInfoRef,
      }[openSection];

      if (activeRef.current) {
        const rect = activeRef.current.getBoundingClientRect();
        dropdownRef.current.style.width = `${rect.width}px`;
        dropdownRef.current.style.left = `${rect.left}px`;
      }
    }
  }, [openSection]);

  const handleSearch = () => {
    console.log("Searching for:", { destination, dateRange, guestInfo });
  };

  const handleSectionClick = (section) => {
    setOpenSection(section === openSection ? null : section);
  };
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });

  return (
    <>
      <div className="w-full max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row">
          <div
            ref={destinationRef}
            className="flex-grow flex items-center px-4 py-2 border-4 rounded-lg border-yellow-300 bg-white cursor-pointer lg:-me-4"
            onClick={() => handleSectionClick("destination")}
          >
            <IoBedOutline className="h-8 w-8 text-gray-600 mr-2" />
            <input
              type="text"
              placeholder="Where are you going?"
              className="w-full outline-none text-gray-700 text-sm border-none"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>
          <div className="flex-grow relative">
            <Datepicker
              value={value}
              onChange={(newValue) => setValue(newValue)}
              placeholder="Check-in Date — Check-out Date"
              popoverDirection="down"
              showShortcuts={false}
              inputClassName="w-full h-16 px-4 py-2 border-4 rounded-lg border-yellow-300 bg-white cursor-pointer text-sm font-semibold text-gray-700 outline-none ps-10"
              toggleClassName="absolute left-3 top-1/2 transform -translate-y-1/2 w-8 h-8"
            />
          </div>
          <div
            ref={guestInfoRef}
            className="flex-grow flex items-center px-4 py-2 border-4 rounded-lg border-yellow-300 bg-white cursor-pointer lg:-me-4 lg:-ms-4"
            onClick={() => handleSectionClick("guests")}
          >
            <LuUser2 className="h-6 w-6 text-gray-600 mr-2" />
            <span className="text-black font-semibold text-sm">
              {guestInfo}
            </span>
          </div>
          <button
            className="bg-blue-600 text-white px-8 py-3 text-xl font-semibold border-4 rounded-lg border-yellow-300 hover:bg-blue-700 transition-colors"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>

        {openSection && (
          <div
            ref={dropdownRef}
            className="p-4 bg-white shadow-lg z-10 border border-gray-200 rounded-lg absolute "
          >
            {openSection === "destination" && <p>Destination search options</p>}
            {openSection === "guests" && <p>Guest selection options</p>}
          </div>
        )}
      </div>
      <div
        id="dropdown"
        class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
      >
        <ul
          class="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefaultButton"
        >
          <li>
            <a
              href="#"
              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#"
              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Settings
            </a>
          </li>
          <li>
            <a
              href="#"
              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Earnings
            </a>
          </li>
          <li>
            <a
              href="#"
              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SearchBar;
