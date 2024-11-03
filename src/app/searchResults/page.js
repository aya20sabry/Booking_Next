"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Header from "@/Components/Navbar/Header";
import Navbar from "@/Components/Navbar/Navbar";
import SearchBar from "@/Components/searchBar/searchBar";
import { FaAngleRight } from "react-icons/fa6";
import { hotels } from "@/Static/Hotels";
import { LuArrowUpDown } from "react-icons/lu";
import { HiChevronUpDown } from "react-icons/hi2";
import Image from "next/image";
import {
  GetHotelID,
  GetHotels,
  GetHotelReviews,
  GetHotelAmenities,
} from "@/API/GET";
import HotelSearch from "@/Components/Cards/HotelSearch";
import Loading from "../loading";
import OpenLayersMap from "@/Components/divs/OpenLayersMap";

function SearchResults() {
  const searchParams = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchData, setSearchData] = useState({});
  const [hotelsData, setHotelsData] = useState([]);
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortOption, setSortOption] = useState("recommended");
  const [hotelsWithDetails, setHotelsWithDetails] = useState([]);
  const searchDataObj = {
    destination: searchParams.get("destination"),
    startDate: searchParams.get("startDate"),
    endDate: searchParams.get("endDate"),
    adults: searchParams.get("adults"),
    children: searchParams.get("children"),
    rooms: searchParams.get("rooms"),
    isVacationHome: searchParams.get("isVacationHome") === "true",
    isTravelingWithPets: searchParams.get("isTravelingWithPets") === "true",
  };

  useEffect(() => {
    if (searchParams) {
      setSearchData(searchDataObj);

      const fetchHotelsWithDetails = async () => {
        try {
          const hotels = await GetHotels();

          // Fetch reviews and amenities for each hotel
          const hotelsWithDetailsPromises = hotels.map(async (hotel) => {
            const [reviews, amenities] = await Promise.all([
              GetHotelReviews(hotel._id),
              GetHotelAmenities(hotel._id),
            ]);

            return {
              ...hotel,
              reviews,
              amenities,
            };
          });

          const detailedHotels = await Promise.all(hotelsWithDetailsPromises);
          setHotelsData(detailedHotels);
          console.log(detailedHotels);

          if (searchDataObj.destination) {
            let destination = searchDataObj.destination
              .toLowerCase()
              .trim(",")
              .split(",")[0];
            const filtered = detailedHotels.filter(
              (hotel) =>
                hotel.location.city.en.toLowerCase() === destination &&
                hotel.approved === true
            );
            setFilteredHotels(filtered);
          } else {
            setFilteredHotels(detailedHotels);
          }
          setIsLoading(false);
        } catch (error) {
          console.error("Error fetching hotel details:", error);
          setIsLoading(false);
        }
      };

      fetchHotelsWithDetails();
    }
  }, [searchParams]);

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
    let sortedHotels = [...filteredHotels];

    switch (event.target.value) {
      case "price-low":
        sortedHotels.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        sortedHotels.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        sortedHotels.sort((a, b) => b.rating - a.rating);
        break;
      default:
        sortedHotels = [...filteredHotels];
    }

    setFilteredHotels(sortedHotels);
  };

  return (
    <>
      <Navbar />
      <Header />
      <div className="bg-gradient-to-b from-[#003B95] to-[#003B95] bg-no-repeat bg-[length:100%_50%]">
        <SearchBar />
      </div>
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <Loading />
        </div>
      ) : (
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-20 py-4">
          {/* Breadcrumbs */}
          <nav className="text-xs mb-4 overflow-x-auto whitespace-nowrap">
            <ol className="list-none p-0 inline-flex">
              <li className="flex items-center">
                <a href="#" className="text-blue-600 hover:underline">
                  Home
                </a>
                <FaAngleRight className="w-4 h-4 mx-1" />
              </li>
              <li className="flex items-center">
                <a href="#" className="text-blue-600 hover:underline">
                  Egypt
                </a>
                <FaAngleRight className="w-4 h-4 mx-1" />
              </li>
              <li>Search results</li>
            </ol>
          </nav>
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Filters Section */}
            <div className="w-full lg:w-1/4">
              <button
                className="lg:hidden w-full bg-blue-500 text-white py-2 rounded mb-4"
                onClick={() => setIsFilterOpen(!isFilterOpen)}
              >
                {isFilterOpen ? "Hide Filters" : "Show Filters"}
              </button>
              <div
                className={`${
                  isFilterOpen ? "block" : "hidden"
                } lg:block bg-white rounded-lg shadow-md p-4`}
              >
                <div className=" rounded-lg border-1 border-gray-500 ">
                  <OpenLayersMap destination={searchData.destination} />
                </div>
                <h2 className="text-lg font-bold my-4">Filter by:</h2>
                {/* Popular filters */}
                <div className="mb-6">
                  <h3 className="font-semibold mb-2">Popular filters</h3>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span>Breakfast included</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span>Beach access</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span>Pool</span>
                    </label>
                  </div>
                </div>
                {/* Price range */}
                <div className="mb-6">
                  <h3 className="font-semibold mb-2">
                    Your budget (per night)
                  </h3>
                  <input type="range" min="0" max="1000" className="w-full" />
                  <div className="flex justify-between text-sm">
                    <span>$0</span>
                    <span>$1000+</span>
                  </div>
                </div>
                {/* Star rating */}
                <div className="mb-6">
                  <h3 className="font-semibold mb-2">Star rating</h3>
                  <div className="space-y-2">
                    {[5, 4, 3, 2, 1].map((stars) => (
                      <label key={stars} className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span>{stars} stars</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* Results Section */}
            <div className="w-full lg:w-3/4">
              <div className="bg-white rounded-lg shadow-md p-4">
                <div className="flex justify-between items-center mb-4">
                  <h1 className="text-xl font-bold">
                    {searchData.destination || "Hotels"} :{" "}
                    {filteredHotels.length} properties found
                  </h1>
                  <div className="relative">
                    <select
                      className="appearance-none bg-white border border-gray-300 rounded-full py-2 px-8 text-sm"
                      value={sortOption}
                      onChange={handleSortChange}
                    >
                      <option value="recommended">Recommended</option>
                      <option value="price-low">Price (lowest first)</option>
                      <option value="price-high">Price (highest first)</option>
                      <option value="rating">Rating (highest first)</option>
                    </select>
                    <HiChevronUpDown className="absolute right-3 top-1/2 transform -translate-y-1/2" />
                  </div>
                </div>
                {/* Hotel Results */}
                <div className="space-y-4">
                  {filteredHotels.map((hotel, index) => (
                    <HotelSearch
                      key={index}
                      name={hotel.name.en}
                      rating={hotel.rating || 0}
                      location={hotel.location.Address.en}
                      distance="2.5 km"
                      image={hotel.images[0]}
                      reviewCount={hotel.reviews?.length || 0}
                      score={hotel.AverageRating || 0}
                      id={hotel._id}
                      reviews={hotel.reviews}
                      amenities={hotel.amenities}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SearchResults;
