import OpenLayersMap from "@/Components/divs/OpenLayersMap";
import { useState } from "react";
import {
  FaSwimmingPool,
  FaWifi,
  FaCoffee,
  FaParking,
  FaSpa,
} from "react-icons/fa";
import { MdCleaningServices, MdFreeBreakfast, MdAir } from "react-icons/md";
import { TbMassage } from "react-icons/tb";
import { IoClose } from "react-icons/io5";

function Filteration({
  isFilterOpen,
  setIsFilterOpen,
  searchData,
  onFilterChange,
}) {
  const initialFilters = {
    priceRange: {
      min: 0,
      max: 10000,
      current: 5000,
    },
    amenities: {
      Pool: false,
      WiFi: false,
      Breakfast: false,
      Parking: false,
      Spa: false,
      AirConditioning: false,
      PrivateBathroom: false,
      Laundry: false,
      RoomService: false,
      Massage: false,
    },
    views: {
      SeaView: false,
      PoolView: false,
      GardenView: false,
      MountainView: false,
      CityView: false,
    },
    mealOptions: {
      Breakfast: false,
      Lunch: false,
      Dinner: false,
      AllInclusive: false,
    },
    accessibility: {
      WheelchairAccessible: false,
      Elevator: false,
      GroundFloor: false,
    },
    rating: null,
  };

  const [filters, setFilters] = useState(initialFilters);

  const handleFilterChange = (category, item) => {
    const newFilters = {
      ...filters,
      [category]: {
        ...filters[category],
        [item]: !filters[category][item],
      },
    };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handlePriceChange = (value) => {
    const newFilters = {
      ...filters,
      priceRange: {
        ...filters.priceRange,
        current: value,
      },
    };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const clearFilters = () => {
    setFilters(initialFilters);
    onFilterChange(initialFilters);
  };

  const hasActiveFilters = () => {
    return (
      filters.rating !== null ||
      filters.priceRange.current !== filters.priceRange.max ||
      Object.values(filters.amenities).some((value) => value) ||
      Object.values(filters.views).some((value) => value) ||
      Object.values(filters.mealOptions).some((value) => value) ||
      Object.values(filters.accessibility).some((value) => value)
    );
  };

  const getAmenityIcon = (amenity) => {
    const icons = {
      Pool: <FaSwimmingPool className="w-4 h-4 mr-2" />,
      WiFi: <FaWifi className="w-4 h-4 mr-2" />,
      Breakfast: <MdFreeBreakfast className="w-4 h-4 mr-2" />,
      Parking: <FaParking className="w-4 h-4 mr-2" />,
      Spa: <FaSpa className="w-4 h-4 mr-2" />,
      AirConditioning: <MdAir className="w-4 h-4 mr-2" />,
      Laundry: <MdCleaningServices className="w-4 h-4 mr-2" />,
      Massage: <TbMassage className="w-4 h-4 mr-2" />,
    };
    return icons[amenity] || null;
  };

  return (
    <div className="w-full lg:w-1/4">
      <div className="flex justify-between items-center mb-4">
        <button
          className="lg:hidden w-full bg-blue-500 text-white py-2 rounded"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
        >
          {isFilterOpen ? "Hide Filters" : "Show Filters"}
        </button>
        {hasActiveFilters() && (
          <button
            onClick={clearFilters}
            className="flex items-center text-blue-600 hover:text-blue-800"
          >
            <IoClose className="w-4 h-4 mr-1" />
            Clear filters
          </button>
        )}
      </div>

      <div
        className={`${
          isFilterOpen ? "block" : "hidden"
        } lg:block bg-white rounded-lg shadow-md p-4`}
      >
        {/* Map Section */}
        <div className="mb-6">
          <div className="rounded-lg border border-gray-200 overflow-hidden">
            <OpenLayersMap destination={searchData.destination} />
          </div>
        </div>

        {/* Price range */}
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Price per night</h3>
          <input
            type="range"
            min={filters.priceRange.min}
            max={filters.priceRange.max}
            value={filters.priceRange.current}
            onChange={(e) => handlePriceChange(e.target.value)}
            className="w-full"
          />
          <div className="flex justify-between text-sm">
            <span>EGP {filters.priceRange.min}</span>
            <span>EGP {filters.priceRange.current}</span>
          </div>
        </div>

        {/* Popular amenities */}
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Popular amenities</h3>
          <div className="space-y-2">
            {Object.entries(filters.amenities).map(([key, value]) => (
              <label key={key} className="flex items-center">
                <input
                  type="checkbox"
                  checked={value}
                  onChange={() => handleFilterChange("amenities", key)}
                  className="mr-2"
                />
                <div className="flex items-center">
                  {getAmenityIcon(key)}
                  <span className="capitalize">
                    {key.replace(/([A-Z])/g, " $1").trim()}
                  </span>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Meal Options */}
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Meal Options</h3>
          <div className="space-y-2">
            {Object.entries(filters.mealOptions).map(([key, value]) => (
              <label key={key} className="flex items-center">
                <input
                  type="checkbox"
                  checked={value}
                  onChange={() => handleFilterChange("mealOptions", key)}
                  className="mr-2"
                />
                <span className="capitalize">
                  {key.replace(/([A-Z])/g, " $1").trim()}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Views */}
        <div className="mb-6">
          <h3 className="font-semibold mb-2">View</h3>
          <div className="space-y-2">
            {Object.entries(filters.views).map(([key, value]) => (
              <label key={key} className="flex items-center">
                <input
                  type="checkbox"
                  checked={value}
                  onChange={() => handleFilterChange("views", key)}
                  className="mr-2"
                />
                <span className="capitalize">
                  {key.replace(/([A-Z])/g, " $1").trim()}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Accessibility */}
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Accessibility</h3>
          <div className="space-y-2">
            {Object.entries(filters.accessibility).map(([key, value]) => (
              <label key={key} className="flex items-center">
                <input
                  type="checkbox"
                  checked={value}
                  onChange={() => handleFilterChange("accessibility", key)}
                  className="mr-2"
                />
                <span className="capitalize">
                  {key.replace(/([A-Z])/g, " $1").trim()}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Star rating */}
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Star rating</h3>
          <div className="space-y-2">
            {[5, 4, 3, 2, 1].map((stars) => (
              <label key={stars} className="flex items-center">
                <input
                  type="radio"
                  name="rating"
                  checked={filters.rating === stars}
                  onChange={() => {
                    const newFilters = { ...filters, rating: stars };
                    setFilters(newFilters);
                    onFilterChange(newFilters);
                  }}
                  className="mr-2"
                />
                <span>{stars} stars</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filteration;
