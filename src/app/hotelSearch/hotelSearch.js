"use client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const HotelSearch = () => {
  const router = useRouter();
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
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Search Results</h1>
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
  );
};

export default HotelSearch;
