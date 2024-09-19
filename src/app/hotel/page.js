"use client";
import GuestReviews from "@/Components/HotelPage/GuestReviews";
import TravelersAsking from "@/Components/HotelPage/TravelersAsking";
import Header from "@/Components/Navbar/Header";
import Navbar from "@/Components/Navbar/Navbar";
import SearchBar from "@/Components/searchBar/AttractionSearch";
import { useState } from "react";

function Hotel() {
  const InfoTabs = [
    "Overview",
    "Apartment Info & Price",
    "Facilities",
    "House Rules",
    "Guest Reviews",
  ];
  const [activeTab, setActiveTab] = useState("Overview");
  return (
    <>
      <Navbar />
      <Header />
      <div className="bg-gradient-to-b from-[#003B95] to-[#003B95] bg-no-repeat bg-[length:100%_50%]">
        <SearchBar />
      </div>
      <section className=" mx-auto  py-8 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48">
        <div className="flex w-full overflow-x-auto pb-4 mb-6">
          {InfoTabs.map((Tab) => (
            <button
              key={Tab}
              className={`flex-1 px-6 py-2 text-sm text-center font-medium ${
                activeTab === Tab
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab(Tab)}
            >
              {Tab}
            </button>
          ))}
        </div>
      </section>

      <section className="container mx-auto  py-8 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48">
        <GuestReviews />
      </section>
      <section className="container mx-auto  py-8 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48">
        <TravelersAsking />
      </section>
    </>
  );
}

export default Hotel;
