"use client";
import React, { useState, useRef, useEffect } from "react";
import { IoBedOutline } from "react-icons/io5";
import { LuUser2 } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import Datepicker from "react-tailwindcss-datepicker";
import { useRouter } from "next/navigation";
const SearchBar = () => {
  const router = useRouter();
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
  const [guestInfo, setGuestInfo] = useState({
    adults: 2,
    children: 0,
    rooms: 1,
  });
  const [openSection, setOpenSection] = useState(null);
  const [isVacationHome, setIsVacationHome] = useState(false);
  const [isTravelingWithPets, setIsTravelingWithPets] = useState(false);

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
        dropdownRef.current.style.top = `${rect.bottom + window.scrollY}px`;
      }
    }
  }, [openSection]);

  const handleSearch = () => {
    const queryParams = new URLSearchParams({
      destination,
      startDate: value.startDate,
      endDate: value.endDate,
      adults: guestInfo.adults,
      children: guestInfo.children,
      rooms: guestInfo.rooms,

      isVacationHome,
      isTravelingWithPets,
    });

    router.push(`/searchResults?${queryParams.toString()}`);
    console.log("Searching for:", {
      destination,
      dateRange: value,
      guestInfo,
      isVacationHome,
      isTravelingWithPets,
    });
  };

  const handleSectionClick = (section) => {
    setOpenSection(section === openSection ? null : section);
  };

  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });

  const handleGuestChange = (type, operation) => {
    setGuestInfo((prev) => ({
      ...prev,
      [type]:
        operation === "add" ? prev[type] + 1 : Math.max(0, prev[type] - 1),
    }));
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
    <>
      <div className="w-full max-w-6xl mx-auto ">
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
              {`${guestInfo.adults} adults · ${guestInfo.children} children · ${guestInfo.rooms} room`}
            </span>
          </div>
          <button
            className="border-4 rounded-lg border-yellow-300 bg-blue-600 "
            onClick={handleSearch}
          >
            <span className="text-white px-8 py-3 text-xl font-semibold hover:bg-blue-700 transition-colors">
              Search
            </span>
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

        {openSection === "guests" && (
          <div
            ref={dropdownRef}
            className="p-4 bg-white shadow-lg z-10 border border-gray-200 rounded-lg absolute"
          >
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-semibold">Adults</span>
                <div className="flex items-center space-x-2 border-2 border-gray-200 rounded-lg">
                  <button
                    onClick={() => handleGuestChange("adults", "subtract")}
                    className="w-8 h-8 flex items-center justify-center text-xl font-semibold text-blue-700 hover:bg-blue-100"
                  >
                    -
                  </button>
                  <span>{guestInfo.adults}</span>
                  <button
                    onClick={() => handleGuestChange("adults", "add")}
                    className="w-8 h-8 flex items-center justify-center text-xl font-semibold text-blue-700 hover:bg-blue-100"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold">Children</span>
                <div className="flex items-center space-x-2 border-2 border-gray-200 rounded-lg">
                  <button
                    onClick={() => handleGuestChange("children", "subtract")}
                    className="w-8 h-8 flex items-center justify-center text-xl font-semibold text-blue-700 hover:bg-blue-100"
                  >
                    -
                  </button>
                  <span>{guestInfo.children}</span>
                  <button
                    onClick={() => handleGuestChange("children", "add")}
                    className="w-8 h-8 flex items-center justify-center text-xl font-semibold text-blue-700 hover:bg-blue-100"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold">Rooms</span>
                <div className="flex items-center space-x-2 border-2 border-gray-200 rounded-lg">
                  <button
                    onClick={() => handleGuestChange("rooms", "subtract")}
                    className="w-8 h-8 flex items-center justify-center text-xl font-semibold text-blue-700 hover:bg-blue-100"
                  >
                    -
                  </button>
                  <span>{guestInfo.rooms}</span>
                  <button
                    onClick={() => handleGuestChange("rooms", "add")}
                    className="w-8 h-8 flex items-center justify-center text-xl font-semibold text-blue-700 hover:bg-blue-100"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span>Looking for a vacation home or apartment?</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    value=""
                    className="sr-only peer"
                    checked={isVacationHome}
                    onChange={() => setIsVacationHome(!isVacationHome)}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
              </div>
              <div className="flex justify-between items-center">
                <span>Traveling with pets?</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    value=""
                    className="sr-only peer"
                    checked={isTravelingWithPets}
                    onChange={() =>
                      setIsTravelingWithPets(!isTravelingWithPets)
                    }
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
              </div>

              <button
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                onClick={() => setOpenSection(null)}
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SearchBar;
