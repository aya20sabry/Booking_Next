import {
  CalendarIcon,
  LocationMarkerIcon,
  ClockIcon,
  UserIcon,
} from "@heroicons/react/outline";

const TaxiBook = () => {
  return (
    <div className="flex flex-col items-center mt-10 bg-gray-100">
      <h1 className="text-2xl font-bold">Book your airport taxi</h1>
      <p className="text-gray-500">
        Easy transportation between the airport and your accommodations
      </p>

      <div className="flex justify-center items-center space-x-4 mt-4">
        <div className="flex items-center space-x-2">
          <input type="radio" id="oneway" name="trip" defaultChecked />
          <label htmlFor="oneway" className="text-blue-500">
            One-way
          </label>
          <input type="radio" id="return" name="trip" />
          <label htmlFor="return" className="text-gray-500">
            Return
          </label>
        </div>
      </div>

      <div className="flex justify-center items-center space-x-2 mt-4">
        <div className="flex items-center p-4 border-2 border-yellow-400 rounded-md">
          <LocationMarkerIcon className="w-5 h-5 mr-2" />
          <input
            type="text"
            placeholder="Enter pick-up location"
            className="outline-none w-full"
          />
        </div>

        <div className="flex items-center p-4 border-2 border-yellow-400 rounded-md">
          <LocationMarkerIcon className="w-5 h-5 mr-2" />
          <input
            type="text"
            placeholder="Enter destination"
            className="outline-none w-full"
          />
        </div>

        <div className="flex items-center p-4 border-2 border-yellow-400 rounded-md">
          <CalendarIcon className="w-5 h-5 mr-2" />
          <input
            type="text"
            placeholder="25/09/2024"
            className="outline-none"
          />
        </div>

        <div className="flex items-center p-4 border-2 border-yellow-400 rounded-md">
          <ClockIcon className="w-5 h-5 mr-2" />
          <input type="text" placeholder="12:00" className="outline-none" />
        </div>

        <div className="flex items-center p-4 border-2 border-yellow-400 rounded-md">
          <UserIcon className="w-5 h-5 mr-2" />
          <input type="number" value="1" className="outline-none w-12" />
        </div>

        <button className="bg-blue-500 text-white font-semibold p-4 rounded-md">
          Search
        </button>
      </div>

      <div className="flex justify-center items-center space-x-8 mt-8">
        <div className="flex flex-col items-center">
          <div className="bg-green-100 p-2 rounded-full">
            <svg
              className="w-6 h-6 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4v16m8-8H4"
              ></path>
            </svg>
          </div>
          <p className="font-semibold">Flight tracking</p>
          <p className="text-gray-500 text-center">
            Your driver will track your flight and wait for you if it&apos;s
            delayed
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="bg-yellow-100 p-2 rounded-full">
            <svg
              className="w-6 h-6 text-yellow-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4l3 3"
              ></path>
            </svg>
          </div>
          <p className="font-semibold">One clear price</p>
          <p className="text-gray-500 text-center">
            Your price is confirmed up front – no extra costs, no cash required
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="bg-blue-100 p-2 rounded-full">
            <svg
              className="w-6 h-6 text-blue-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4l3 3"
              ></path>
            </svg>
          </div>
          <p className="font-semibold">Tried and true service</p>
          <p className="text-gray-500 text-center">
            We work with professional drivers and have 24/7 customer care
          </p>
        </div>
      </div>
    </div>
  );
};

export default TaxiBook;
