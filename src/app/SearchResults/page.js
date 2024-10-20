"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Header from "@/Components/Navbar/Header";
import Navbar from "@/Components/Navbar/Navbar";
import SearchBar from "@/Components/searchBar/searchBar";
import { FaAngleRight } from "react-icons/fa6";
import HotelSearch from "@/Components/Cards/HotelSearch"; // Keep this import for card display
import Filters from "@/Components/divs/Filters";
import { hotels } from "@/Static/Hotels"; // For mock hotel data
import { LuArrowUpDown } from "react-icons/lu";
import { HiChevronUpDown } from "react-icons/hi2";

function SearchResults() {
  const router = useRouter();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchData, setSearchData] = useState({});

  useEffect(() => {
    if (router.query) {
      setSearchData({
        destination: router.query.destination,
        startDate: router.query.startDate,
        endDate: router.query.endDate,
        adults: router.query.adults,
        children: router.query.children,
        rooms: router.query.rooms,
        isVacationHome: router.query.isVacationHome === "true",
        isTravelingWithPets: router.query.isTravelingWithPets === "true",
      });
    }
  }, [router.query]);

  return (
    <>
      <Navbar />
      <Header />
      <div className="bg-gradient-to-b from-[#003B95] to-[#003B95] bg-no-repeat bg-[length:100%_50%]">
        <SearchBar />
      </div>

      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-20 py-4">
        <nav className="text-xs mb-4 overflow-x-auto whitespace-nowrap">
          <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
              <a href="#" className="text-blue-600">
                Home
              </a>
              <FaAngleRight className="w-4 h-4 mx-1" />
            </li>
            <li className="flex items-center">
              <a href="#" className="text-blue-600">
                Egypt
              </a>
              <FaAngleRight className="w-4 h-4 mx-1" />
            </li>
            <li className="flex items-center">
              <a href="#" className="text-blue-600">
                South Sinai
              </a>
              <FaAngleRight className="w-4 h-4 mx-1" />
            </li>
            <li className="flex items-center">
              <a href="#" className="text-blue-600">
                Sharm El Sheikh
              </a>
              <FaAngleRight className="w-4 h-4 mx-1" />
            </li>
            <li>Search results</li>
          </ol>
        </nav>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row">
          {/* Filters Section */}
          <div className="w-full lg:w-1/4 lg:pr-4 mb-4 lg:mb-0">
            <button
              className="lg:hidden w-full bg-blue-500 text-white py-2 rounded mb-4"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              {isFilterOpen ? "Hide Filters" : "Show Filters"}
            </button>
            <div className={`${isFilterOpen ? "block" : "hidden"} lg:block`}>
              <Filters />
            </div>
          </div>

          {/* Search Results Section */}
          <div className="w-full lg:w-3/4">
            <h1 className="text-lg sm:text-xl font-bold mb-4">
              {searchData.destination}: {hotels.length} properties found
            </h1>
            {/* Sort and View Options */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
              <div className="relative hover:scale-95 cursor-pointer mb-2 sm:mb-0">
                <div className="absolute inset-y-0 left-0 flex items-center px-2 text-gray-700">
                  <LuArrowUpDown />
                </div>
                <select className="appearance-none bg-white border border-gray-300 rounded-full py-2 px-8 pr-8">
                  <option>Sort by: Our top picks</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <HiChevronUpDown />
                </div>
              </div>
              <div className="rounded-full border-2 border-gray-400 p-1 bg-gray-100">
                <button className="bg-white border-2 border-gray-300 rounded-full text-gray-800 px-4 py-2 mr-2 text-xs">
                  List
                </button>
                <button className="text-gray-800 px-4 py-2 rounded-full text-xs">
                  Grid
                </button>
              </div>
            </div>

            {/* Display Search Results */}
            <div className="space-y-4">
              {hotels.map((hotel, index) => (
                <HotelSearch key={index} {...hotel} />
              ))}
            </div>

            {/* Additional Search Data Section */}
            <div className="mt-8">
              <h1 className="text-2xl font-bold mb-4">Search Details</h1>
              <div className="space-y-4">
                <div className="border p-4 rounded-lg">
                  <h2 className="text-xl font-semibold">Location</h2>
                  <p>{searchData.destination}</p>
                </div>

                <div className="border p-4 rounded-lg">
                  <h2 className="text-xl font-semibold">Dates</h2>
                  <p>Check-in: {searchData.startDate}</p>
                  <p>Check-out: {searchData.endDate}</p>
                </div>

                <div className="border p-4 rounded-lg">
                  <h2 className="text-xl font-semibold">Guest Info</h2>
                  <p>{`${searchData.adults} adults · ${searchData.children} children · ${searchData.rooms} room(s)`}</p>
                </div>

                <div className="border p-4 rounded-lg">
                  <h2 className="text-xl font-semibold">Additional Info</h2>
                  <p>{`Vacation Home: ${searchData.isVacationHome ? "Yes" : "No"}`}</p>
                  <p>{`Traveling with Pets: ${searchData.isTravelingWithPets ? "Yes" : "No"}`}</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default SearchResults;
