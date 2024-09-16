"use client";
import DestinationCard from "@/Components/Cards/Destination";
import FeatureItem from "@/Components/Cards/Feature";
import Main from "@/Components/divs/Main";
import Footer from "@/Components/Footer/Footer";
import Heading from "@/Components/Headings/Heading";
import Header from "@/Components/Navbar/Header";
import Navbar from "@/Components/Navbar/Navbar";
import { AttractionsPage, destinations } from "@/Static/images";
import { features } from "@/Static/icons";
import { useState } from "react";
import AttractionCard from "@/Components/Cards/AttractionCard";
import { regions } from "@/Static/Arrays";
import AttractionSearch from "@/Components/searchBar/AttractionSearch";
function Attractions() {
  const [activeRegion, setActiveRegion] = useState("Europe");
  return (
    <>
      <Navbar />
      <Header />
      <Main
        title="Attractions, activities, and experiences"
        description="Discover new attractions and experiences to match your interests and travel style"
      />
      <div className=" -mt-6 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48 mb-4">
        <AttractionSearch />
      </div>
      <section className="py-8 sm:py-20">
        <div className="flex justify-start items-start flex-col px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48">
          <Heading title="Nearby destinations" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-4 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48">
          {destinations.map((dest) => (
            <DestinationCard key={dest.name} {...dest} />
          ))}
        </div>
      </section>
      <section className="py-4 sm:py-8">
        <div className="flex justify-start items-start flex-col px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48">
          <Heading title="We've got you covered" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8  px-4 py-4 sm:px-8 md:px-16 lg:px-24 xl:px-48 ">
          {features.map((feature, index) => (
            <FeatureItem
              key={index}
              Icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
        <div className=" border-t  border-gray-200 mx-48"></div>
      </section>
      <section className="pt-4 pb-2">
        <div className="flex justify-start items-start flex-col px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48">
          <Heading
            title="Explore more destinations"
            description="Find things to do in cities around the world"
          />
        </div>
        <div className="container mx-auto  py-8 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48">
          <div className="flex overflow-x-auto pb-4 mb-6">
            {regions.map((region) => (
              <button
                key={region}
                className={`px-4 py-2 text-sm font-medium mr-2 ${
                  activeRegion === region
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveRegion(region)}
              >
                {region}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {AttractionsPage.map((dest) => (
              <AttractionCard key={dest.name} {...dest} />
            ))}
          </div>
        </div>
      </section>
      <section className="pt-2 pb-4    px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48">
        <div className="border border-gray-200 p-4 mt-4 rounded-lg">
          <h3 className="text-sm font-semibold text-gray-800 mb-2">
            {"Tell us how we are doing and where we can improve"}
          </h3>
          <a
            href="#"
            className="text-blue-700 text-sm hover:text-blue-800 transition-colors duration-200"
          >
            Leave feedback
          </a>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Attractions;
