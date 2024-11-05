"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from 'next/navigation';
import Header from "@/Components/Navbar/Header";
import Navbar from "@/Components/Navbar/Navbar";
import SearchBar from "@/Components/searchBar/searchBar";
import { FaAngleRight } from "react-icons/fa6";
import { hotels } from "@/Static/Hotels";
import { LuArrowUpDown } from "react-icons/lu";
import { HiChevronUpDown } from "react-icons/hi2";
import Image from "next/image";

function SearchResults() {
  const searchParams = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchData, setSearchData] = useState({});
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [sortOption, setSortOption] = useState("recommended");
  const [filters, setFilters] = useState({
    amenities: {
      breakfast: false,
      beach: false,
      pool: false
    },
    priceRange: 1000,
    starRating: []
  });

  useEffect(() => {
    if (searchParams) {
      const searchDataObj = {
        destination: searchParams.get('destination'),
        startDate: searchParams.get('startDate'),
        endDate: searchParams.get('endDate'),
        adults: searchParams.get('adults'),
        children: searchParams.get('children'),
        rooms: searchParams.get('rooms'),
        isVacationHome: searchParams.get('isVacationHome') === "true",
        isTravelingWithPets: searchParams.get('isTravelingWithPets') === "true",
      };
      setSearchData(searchDataObj);

      // Apply all filters
      let filtered = hotels.filter(hotel => 
        hotel.location.toLowerCase().includes(searchDataObj.destination?.toLowerCase() || '')
      );

      // Filter by amenities
      if (filters.amenities.breakfast) {
        filtered = filtered.filter(hotel => hotel.amenities.includes('Breakfast'));
      }
      if (filters.amenities.beach) {
        filtered = filtered.filter(hotel => hotel.amenities.includes('Beach Access'));
      }
      if (filters.amenities.pool) {
        filtered = filtered.filter(hotel => hotel.amenities.includes('Pool'));
      }

      // Filter by price
      filtered = filtered.filter(hotel => hotel.price <= filters.priceRange);

      // Filter by star rating
      if (filters.starRating.length > 0) {
        filtered = filtered.filter(hotel => filters.starRating.includes(hotel.stars));
      }

      setFilteredHotels(filtered);
    }
  }, [searchParams, filters]);

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
    let sortedHotels = [...filteredHotels];
    
    switch(event.target.value) {
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
        // Default sorting (recommended)
        sortedHotels = [...hotels];
    }
    
    setFilteredHotels(sortedHotels);
  };

  const handleAmenityChange = (amenity) => {
    setFilters(prev => ({
      ...prev,
      amenities: {
        ...prev.amenities,
        [amenity]: !prev.amenities[amenity]
      }
    }));
  };

  const handlePriceRangeChange = (event) => {
    setFilters(prev => ({
      ...prev,
      priceRange: parseInt(event.target.value)
    }));
  };

  const handleStarRatingChange = (stars) => {
    setFilters(prev => {
      const newStarRating = prev.starRating.includes(stars)
        ? prev.starRating.filter(s => s !== stars)
        : [...prev.starRating, stars];
      return {
        ...prev,
        starRating: newStarRating
      };
    });
  };

  return (
    <>
      <Navbar />
      <Header />
      <div className="bg-gradient-to-b from-[#003B95] to-[#003B95] bg-no-repeat bg-[length:100%_50%]">
        <SearchBar />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-20 py-4">
        {/* Breadcrumbs */}
        <nav className="text-xs mb-4 overflow-x-auto whitespace-nowrap">
          <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
              <a href="#" className="text-blue-600 hover:underline">Home</a>
              <FaAngleRight className="w-4 h-4 mx-1" />
            </li>
            <li className="flex items-center">
              <a href="#" className="text-blue-600 hover:underline">Egypt</a>
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
            
            <div className={`${isFilterOpen ? "block" : "hidden"} lg:block bg-white rounded-lg shadow-md p-4`}>
              <h2 className="text-lg font-bold mb-4">Filter by:</h2>
              
              {/* Popular filters */}
              <div className="mb-6">
                <h3 className="font-semibold mb-2">Popular filters</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={filters.amenities.breakfast}
                      onChange={() => handleAmenityChange('breakfast')}
                    />
                    <span>Breakfast included</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={filters.amenities.beach}
                      onChange={() => handleAmenityChange('beach')}
                    />
                    <span>Beach access</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={filters.amenities.pool}
                      onChange={() => handleAmenityChange('pool')}
                    />
                    <span>Pool</span>
                  </label>
                </div>
              </div>

              {/* Price range */}
              <div className="mb-6">
                <h3 className="font-semibold mb-2">Your budget (per night)</h3>
                <input 
                  type="range" 
                  min="0" 
                  max="1000" 
                  value={filters.priceRange}
                  onChange={handlePriceRangeChange}
                  className="w-full"
                />
                <div className="flex justify-between text-sm">
                  <span>$0</span>
                  <span>${filters.priceRange}+</span>
                </div>
              </div>

              {/* Star rating */}
              <div className="mb-6">
                <h3 className="font-semibold mb-2">Star rating</h3>
                <div className="space-y-2">
                  {[5, 4, 3, 2, 1].map((stars) => (
                    <label key={stars} className="flex items-center">
                      <input
                        type="checkbox"
                        className="mr-2"
                        checked={filters.starRating.includes(stars)}
                        onChange={() => handleStarRatingChange(stars)}
                      />
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
                  {searchData.destination}: {filteredHotels.length} properties found
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
                  <div key={index} className="flex flex-col md:flex-row gap-4 border-b pb-4">
                    <div className="w-full md:w-1/3 relative h-48">
                      <Image
                        src={hotel.image}
                        alt={hotel.name}
                        fill
                        className="rounded-lg object-cover"
                      />
                    </div>
                    
                    <div className="w-full md:w-2/3 flex flex-col justify-between">
                      <div>
                        <h2 className="text-xl font-bold text-blue-600 hover:underline cursor-pointer">
                          {hotel.name}
                        </h2>
                        <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                          <span>{hotel.location}</span>
                          <span>•</span>
                          <span>{hotel.distance} from center</span>
                        </div>
                        <p className="text-sm mt-2">{hotel.description}</p>
                        
                        {/* Room features */}
                        <div className="mt-2">
                          <span className="text-sm font-semibold">Room features:</span>
                          <div className="flex flex-wrap gap-2 mt-1">
                            {hotel.amenities?.map((amenity, i) => (
                              <span key={i} className="text-xs bg-gray-100 px-2 py-1 rounded">
                                {amenity}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Price and Rating Section */}
                      <div className="flex justify-between items-end mt-4">
                        <div className="flex items-center gap-2">
                          <div className="bg-blue-900 text-white px-2 py-1 rounded">
                            {hotel.rating}
                          </div>
                          <div>
                            <div className="font-bold">Excellent</div>
                            <div className="text-sm text-gray-600">{hotel.reviewCount} reviews</div>
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <div className="text-sm text-gray-600">1 night, 2 adults</div>
                          <div className="text-2xl font-bold">EGP {hotel.price}</div>
                          <div className="text-xs text-gray-600 mb-2">+EGP {Math.round(hotel.price * 0.1)} taxes and fees</div>
                          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors">
                            See availability
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchResults;