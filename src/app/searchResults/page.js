"use client";
import { useState } from "react";
import Header from "@/Components/Navbar/Header";
import Navbar from "@/Components/Navbar/Navbar";
import SearchBar from "@/Components/searchBar/searchBar";
import { FaAngleRight } from "react-icons/fa6";
import HotelSearch from "@/Components/Cards/HotelSearch";
import { hotels } from "@/Static/Hotels";
import { LuArrowUpDown } from "react-icons/lu";
import { HiChevronUpDown } from "react-icons/hi2";
import Filters from "@/Components/divs/Filters";
import { useLocale } from "next-intl";
function SearchResults() {
  const locale = useLocale();
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <>
      <Navbar />
      <Header />
      <div className="bg-gradient-to-b from-[#003B95] to-[#003B95] bg-no-repeat bg-[length:100%_50%]">
        <SearchBar />
      </div>
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

        <div className="flex flex-col lg:flex-row">
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
          <div className="w-full lg:w-3/4">
            <h1 className="text-lg sm:text-xl font-bold mb-4">
              Sharm El Sheikh: 789 properties found
            </h1>
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
            <div className="space-y-4">
              {hotels.map((hotel, index) => (
                <HotelSearch key={index} {...hotel} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchResults;
