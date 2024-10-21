import Image from "next/image";
import Map from "@/Public/Map.png";

function Filters() {
  return (
    <div>
      <div className="bg-gray-100 p-4 rounded-lg mb-4">
        <Image
          src={Map}
          alt="Map"
          className="w-full h-auto mb-2 rounded-lg"
          width={260}
          height={150}
        />
        <button className="w-full bg-blue-500 text-white py-2 rounded">
          Show on map
        </button>
      </div>
      <div>
        <h3 className="font-bold mb-2">Filter by:</h3>
        <h4 className="font-semibold mt-4 mb-2">Your previous filters</h4>
        <div className="space-y-2">
          {["5 stars", "Wonderful: 9+", "Sharks Bay", "Hotels"].map(
            (filter, index) => (
              <div key={index} className="flex items-center">
                <input
                  type="checkbox"
                  id={`filter-${index}`}
                  className="mr-2"
                />
                <label htmlFor={`filter-${index}`} className="text-sm">
                  {filter}
                </label>
                <span className="ml-auto text-gray-500 text-sm">
                  {[90, 168, 40, 70][index]}
                </span>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Filters;
