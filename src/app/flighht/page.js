"use client";
import Image from "next/image";
import { useState } from "react";
import Bus from "@/Public/Bus.png";
import MS from "@/Public/MS.png";
import cairo from "@/Public/cairo.png";
import FlightFilter from "./../testflight/page";
import { useLocale } from "next-intl";
import Navbar from "@/Components/Navbar/Navbar";
import Header from "@/Components/Navbar/Header";
import ComponantFlight from "@/Components/flight/flight";
import Footer from "@/Components/Footer/Footer";
import { Link } from "lucide-react";

const FlightCard = () => {
  const locale = useLocale();
  const [stops, setStops] = useState({
    nonstop: true,
    oneStop: true,
    twoPlusStops: false,
  });

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setStops((prevStops) => ({ ...prevStops, [name]: checked }));
  };

  const flights = [
    [
      {
        airline: "flyadeal",
        departureTime: "17:00",
        arrivalTime: "22:30",
        duration: "2h 10m",
        from: "Bus",
        to: "JED",
        direct: true,
        logo: Bus,
      },
      {
        airline: "flyadeal",
        departureTime: "07:10",
        arrivalTime: "08:35",
        duration: "1h 25m",
        from: "JED",
        to: "Bus",
        direct: true,
        logo: Bus,
      },
    ],
    [
      {
        airline: "flyadeal",
        departureTime: "22:00",
        arrivalTime: "00:15",
        duration: "2h 15m",
        from: "CAI",
        to: "JED",
        direct: true,
        logo: MS,
      },
      {
        airline: "flyadeal",
        departureTime: "06:30",
        arrivalTime: "08:00",
        duration: "1h 30m",
        from: "JED",
        to: "CAI",
        direct: true,
        logo: MS,
      },
    ],
    [
      {
        airline: "flyadeal",
        departureTime: "21:45",
        arrivalTime: "00:05",
        duration: "2h 20m",
        from: "CAI",
        to: "JED",
        direct: true,
        logo: cairo,
      },
      {
        airline: "flyadeal",
        departureTime: "06:50",
        arrivalTime: "08:20",
        duration: "1h 30m",
        from: "JED",
        to: "CAI",
        direct: true,
        logo: cairo,
      },
    ],
    [
      {
        airline: "flyadeal",
        departureTime: "18:00",
        arrivalTime: "23:30",
        duration: "3h 20m",
        from: "Bus",
        to: "JED",
        direct: true,
        logo: Bus,
      },
      {
        airline: "flyadeal",
        departureTime: "08:10",
        arrivalTime: "09:35",
        duration: "2h 25m",
        from: "JED",
        to: "Bus",
        direct: true,
        logo: Bus,
      },
    ],
    [
      {
        airline: "flyadeal",
        departureTime: "21:45",
        arrivalTime: "00:05",
        duration: "2h 20m",
        from: "CAI",
        to: "JED",
        direct: true,
        logo: cairo,
      },
      {
        airline: "flyadeal",
        departureTime: "06:50",
        arrivalTime: "08:20",
        duration: "1h 30m",
        from: "JED",
        to: "CAI",
        direct: true,
        logo: cairo,
      },
    ],
  ];

  return (
    <div>
      <Navbar />
      <Header />
      <div className="bg-[#FEBB02]">
        <ComponantFlight />
      </div>

      <div className="grid grid-cols-3 gap-4 pr-48 pl-48 bg-[#F0F3F5]">
        <div className="col-span-1 bg-white border border-gray-300 p-6 rounded-lg shadow-lg mt-4 w-72 ">
          <FlightFilter />
          <div className="flex items-center justify-center w-full h-20">
            <div className="relative w-full max-w-md">
              {/* <div className="absolute left-0 w-4 h-4 bg-white border-2 border-blue-500 rounded-full"></div> */}
              {/* <div className="w-full border-t-2 border-blue-500"></div> */}
              {/* <div className="absolute right-0 w-4 h-4 bg-white border-2 border-blue-500 rounded-full"></div> */}
            </div>
          </div>
        </div>

        {/* Flights Display */}
        <div className="col-span-2 text-gray-800 p-4">
          <div className="space-y-4">
            {flights.map((flightGroup, index) => (
              <div
                key={index}
                className="bg-white p-4 shadow-lg rounded-md flex justify-between items-center"
              >
                <div>
                  <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">
                    Best
                  </span>
                  {flightGroup.map((flight, flightIndex) => (
                    <div key={flightIndex} className="flex items-center py-2">
                      <div className="flex flex-col items-center mr-44">
                        <Image
                          src={flight.logo}
                          alt={flight.airline}
                          width={40}
                          height={40}
                        />
                        <p className="text-blue-600 block">{flight.airline}</p>
                      </div>
                      <div className="text-sm">
                        <div className="font-medium text-lg text-blue-600">
                          {flight.departureTime}
                        </div>
                        <div className="text-gray-400 text-xs">
                          {flight.from}
                        </div>
                      </div>
                      <div className="flex-1 text-center">
                        <div className="border-b border-l border-gray-400 mx-2"></div>
                        <div className="text-gray-500 text-xs mr-10 ml-10 mt-2">
                          {flight.direct ? "EG3146517" : ""}
                        </div>
                      </div>
                      <div className="text-sm">
                        <div className="font-medium text-lg text-blue-600">
                          {flight.arrivalTime}
                        </div>
                        <div className="text-gray-400 text-xs">{flight.to}</div>
                      </div>
                      <div className="text-xs text-gray-500 pl-28">
                        {flight.duration}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col items-end space-y-2">
                  <div className="text-xl font-semibold">6,268£</div>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    View Deal
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-gray-100 p-6 border-t border-gray-300">
            <button className="bg-gray-700 text-white font-semibold py-2 px-4 rounded mb-4 w-full">
              Show more results
            </button>
            <p className="text-gray-700 text-sm">
              <span className="font-bold">*</span> Prices are per person, are
              for e–tickets, and include all taxes & fees in £. Whilst we aim
              for accurate prices and fees,
              <Link href="">
                <a className="text-blue-600 hover:underline">
                  they are not guaranteed
                </a>
              </Link>
              , and may be subject to last-minute changes over which we have no
              control. Finally, some train and bus prices may not include a
              service fee added by the provider at checkout.
            </p>
            <p className="text-gray-700 text-sm mt-4">
              <span className="font-bold">†</span> Hacker Fares tickets are sold
              to/from a destination via different airlines and are subject to
              each airline&apos;s booking requirements and terms, including
              changes to itineraries. Any changes made to one of your tickets
              will not necessarily afford rights to change the other ticket.
              Fares change frequently and are subject to availability.
              International travel may require proof of return flight.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FlightCard;
