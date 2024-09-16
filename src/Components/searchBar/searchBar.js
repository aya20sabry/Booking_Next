"use client";
import React, { useState, useRef, useEffect } from "react";
import { IoBedOutline } from "react-icons/io5";
import { LuCalendarDays } from "react-icons/lu";
import { LuUser2 } from "react-icons/lu";

const SearchBar = () => {
  const [destination, setDestination] = useState("");
  const [dateRange, setDateRange] = useState("Sun, Sep 15 — Wed, Sep 18");
  const [guestInfo, setGuestInfo] = useState("2 adults · 0 children · 1 room");
  const [openSection, setOpenSection] = useState(null);

  const destinationRef = useRef(null);
  const calendarRef = useRef(null);
  const guestInfoRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !destinationRef.current.contains(event.target) &&
        !calendarRef.current.contains(event.target) &&
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
        calendar: calendarRef,
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

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row">
        <div
          ref={destinationRef}
          className="flex-grow flex items-center px-4 py-2 border-4 rounded-lg border-yellow-400 bg-white cursor-pointer lg:-me-4"
          onClick={() => handleSectionClick("destination")}
        >
          <IoBedOutline className="h-8 w-8 text-gray-600 mr-2" />
          <input
            type="text"
            placeholder="Where are you going?"
            className="w-full outline-none text-gray-700 text-sm"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </div>
        <div
          ref={calendarRef}
          className="flex-grow flex items-center px-4 py-2 border-4 rounded-lg border-yellow-400 bg-white cursor-pointer lg:-me-4"
          onClick={() => handleSectionClick("calendar")}
        >
          <LuCalendarDays className="h-6 w-6 text-gray-600 mr-2" />
          <span className="text-black font-semibold text-sm">{dateRange}</span>
        </div>
        <div
          ref={guestInfoRef}
          className="flex-grow flex items-center px-4 py-2 border-4 rounded-lg border-yellow-400 bg-white cursor-pointer lg:-me-4 lg:-ms-4"
          onClick={() => handleSectionClick("guests")}
        >
          <LuUser2 className="h-6 w-6 text-gray-600 mr-2" />
          <span className="text-black font-semibold text-sm">{guestInfo}</span>
        </div>
        <button
          className="bg-blue-600 text-white px-8 py-3 text-xl font-semibold border-4 rounded-lg border-yellow-400 hover:bg-blue-700 transition-colors"
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
          {openSection === "calendar" && <p>Calendar options</p>}
          {openSection === "guests" && <p>Guest selection options</p>}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
