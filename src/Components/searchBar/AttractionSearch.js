"use client";
import React, { useState, useRef, useEffect } from "react";
import { IoBedOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import Datepicker from "react-tailwindcss-datepicker";

const SearchBar = () => {
  const [destination, setDestination] = useState("");
  const [allSuggestions] = useState([
    "Hurghada,EG",
    "Cairo, EG",
    "Alexandria, EG",
    "Giza, EG",
    "Dahab, EG",
  ]);
  const [filteredSuggestions, setFilteredSuggestions] =
    useState(allSuggestions);
  const [openSection, setOpenSection] = useState(null);
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });

  const destinationRef = useRef(null);
  const calendarRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !destinationRef.current.contains(event.target) &&
        !calendarRef.current.contains(event.target)
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
      }[openSection];

      if (activeRef.current) {
        const rect = activeRef.current.getBoundingClientRect();
        dropdownRef.current.style.width = `${rect.width}px`;
        dropdownRef.current.style.left = `${rect.left}px`;
        dropdownRef.current.style.top = `${rect.bottom + window.scrollY}px`;
      }
    }
  }, [openSection]);

  const handleSearch = () => {
    console.log("Searching for:", { destination, dateRange: value });
  };

  const handleSectionClick = (section) => {
    setOpenSection(section === openSection ? null : section);
  };

  const handleDestinationChange = (e) => {
    const inputValue = e.target.value;
    setDestination(inputValue);

    if (inputValue.trim() === "") {
      setFilteredSuggestions(allSuggestions);
    } else {
      const filtered = allSuggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(inputValue.toLowerCase())
      );
      setFilteredSuggestions(filtered);
    }

    if (openSection !== "destination") {
      setOpenSection("destination");
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setDestination(suggestion);
    setOpenSection(null);
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row">
        <div
          ref={destinationRef}
          className="flex-grow flex items-center px-4 py-2 border-4 rounded-lg border-yellow-300 bg-white cursor-pointer lg:-me-4 relative"
          onClick={() => handleSectionClick("destination")}
        >
          <IoBedOutline className="h-8 w-8 text-gray-600 mr-2" />
          <input
            type="text"
            placeholder="Where are you going?"
            className="w-full outline-none text-gray-700 text-sm border-none"
            value={destination}
            onChange={handleDestinationChange}
            onFocus={() => setOpenSection("destination")}
          />
        </div>
        <div
          ref={calendarRef}
          className="flex-grow relative"
          onClick={() => handleSectionClick("calendar")}
        >
          <Datepicker
            value={value}
            onChange={(newValue) => setValue(newValue)}
            placeholder="Select your dates"
            popoverDirection="down"
            showShortcuts={false}
            inputClassName="w-full h-16 px-4 py-2 border-4 rounded-lg border-yellow-300 bg-white cursor-pointer text-sm font-semibold text-gray-700 outline-none ps-10"
            toggleClassName="absolute left-3 top-1/2 transform -translate-y-1/2 w-8 h-8"
          />
        </div>
        <button
          className="bg-blue-600 text-white px-8 py-3 text-xl font-semibold border-4 rounded-lg border-yellow-300 hover:bg-blue-700 transition-colors lg:-ml-4"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      {openSection === "destination" && (
        <div
          ref={dropdownRef}
          className="absolute z-10 w-full bg-white border border-gray-200 rounded-lg shadow-lg mt-1"
        >
          <ul className="py-2">
            {filteredSuggestions.map((suggestion, index) => (
              <li
                key={index}
                className="px-4 py-2 font-semibold hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                <IoLocationOutline className="inline-block text-black mr-2 text-3xl" />
                {suggestion}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
