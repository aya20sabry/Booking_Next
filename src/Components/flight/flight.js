"use client";

import {
  FaPlaneDeparture,
  FaPlaneArrival,
  FaExchangeAlt,
  FaCalendarAlt,
} from "react-icons/fa";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Datepicker from "react-tailwindcss-datepicker";
import { FaChevronDown } from "react-icons/fa";
import Dropdown from "../Drowpdown/Dropdown";

export default function ComponantFlight() {
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });

  const [fromAirport, setFromAirport] = useState("From?");
  const [toAirport, setToAirport] = useState("To?");
  const [date, setDate] = useState(new Date());
  const [isCheckInCalendarOpen, setIsCheckInCalendarOpen] = useState(false);
  const [isCheckOutCalendarOpen, setIsCheckOutCalendarOpen] = useState(false);
  const [counts, setCounts] = useState({
    adults: 1,
    students: 0,
    seniors: 0,
    youths: 0,
    children: 0,
    toddlers: 0,
    infants: 0,
  });
  const [selectedOption, setSelectedOption] = useState("1 adult");
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const [selectedOption1, setSelectedOption1] = useState("Round-trip");
  const [selectedOption3, setSelectedOption3] = useState("Economy");

  const toggleDropdown = (index) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  const handleCountChange = (category, change) => {
    setCounts((prev) => ({
      ...prev,
      [category]: Math.max(0, prev[category] + change),
    }));
  };

  const swapAirports = () => {
    const temp = fromAirport;
    setFromAirport(toAirport);
    setToAirport(temp);
  };

  const toggleCheckInCalendar = () => {
    setIsCheckInCalendarOpen(!isCheckInCalendarOpen);
  };

  const toggleCheckOutCalendar = () => {
    setIsCheckOutCalendarOpen(!isCheckOutCalendarOpen);
  };

  const [borderStyle, setBorderStyle] = useState({});
  const handleClick = () => {
    setBorderStyle({ border: "1px solid black" });
  };

  const [borderStylee, BorderStyle] = useState({});
  const handleClic = () => {
    BorderStyle({ border: "1px solid black" });
  };
  return (
    // <Header/>

    <div className="items-center pt-5  " style={{ textAlign: "left" }}>
      <div className="gap-4  items-center  mx-64  flex ">
        <Dropdown
          options={["one-way", "Round-trip", "Multi-city"]}
          selected={selectedOption1}
          onSelect={setSelectedOption1}
          isOpen={openDropdownIndex === 0}
          onToggle={() => toggleDropdown(0)}
          className="text-sm  "
        />
        <FaChevronDown />

        <Dropdown
          options={Object.keys(counts)}
          selected={selectedOption}
          onSelect={setSelectedOption}
          isOpen={openDropdownIndex === 1}
          onToggle={() => toggleDropdown(1)}
          className="text-sm"
          zIndex={10}
        />
        <FaChevronDown />

        <Dropdown
          options={["Economy", "Premium Economy", "Business", "First"]}
          selected={selectedOption3}
          onSelect={setSelectedOption3}
          isOpen={openDropdownIndex === 2}
          onToggle={() => toggleDropdown(2)}
          className="text-sm"
          zIndex={10}
        />
        <FaChevronDown />
      </div>

      {/* Search form */}
      <div className="p-4 flex items-center space-x-4  mx-64  pl-50 relative">
        <div
          className="flex items-center border border-gray-300 rounded-lg px-4 py-2 space-x-2 font:font-custome bg-[#F0F3F5]"
          style={borderStylee}
        >
          <Image
            src="data:image/svg+xml;base64,PHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgIHZpZXdCb3g9IjAgMCAyMDAgMjAwIiB3aWR0aD0iMS4yNWVtIiBoZWlnaHQ9IjEuMjVlbSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBjbGFzcz0iVG43ei1pY29uIiByb2xlPSJwcmVzZW50YXRpb24iPjxwYXRoIGQ9Ik0xNzguMDgxIDQxLjk3M2MtMi42ODEgMi42NjMtMTYuMDY1IDE3LjQxNi0yOC45NTYgMzAuMjIxYzAgMTA3LjkxNiAzLjU1OCA5OS44MTUtMTQuNTU1IDExNy44MDdsLTE0LjM1OC02MC40MDJsLTE0LjY3LTE0LjU3MmMtMzguODczIDM4LjYwNi0zMy4wMTUgOC43MTEtMzMuMDE1IDQ1LjY2OWMuMDM3IDguMDcxLTMuMzczIDEzLjM4LTguMjYzIDE4LjIzN0w1MC42NiAxNDguMzlsLTMwLjc1MS0xMy41MTNjMTAuMDk0LTEwLjAxNyAxNS42MDktOC4yMDcgMzkuNDg4LTguMjA3YzguMTI3LTE2LjY2NiAxOC4xNzMtMjMuODEgMjYuMDMzLTMxLjYyTDcwLjc5IDgwLjUwOUwxMCA2Ni4yNjljMTcuMTUzLTE3LjAzOSA2LjYzOC0xMy44OTUgMTE4LjM5Ni0xMy44OTVjMTIuOTYtMTIuODczIDI2Ljg4Mi0yNy43MDMgMjkuNTc0LTMwLjM3N2M3Ljc0NS03LjY5MiAyOC4wMTctMTQuMzU3IDMxLjIwNS0xMS4xOTFjMy4xODcgMy4xNjYtMy4zNDkgMjMuNDc0LTExLjA5NCAzMS4xNjd6bS0xMy42NzQgNDIuNDY5bC04LjA5OSA4LjAyN3YyMy41OGMxNy41MDgtMTcuNTUgMjEuOTYzLTE3Ljc2NyA4LjA5OS0zMS42MDd6bS00OC4xMjUtNDcuOTIzYy0xMy42NzgtMTMuNjUyLTEyLjY0Mi0xMC44MjgtMzIuMTUyIDguNTdoMjMuNjI1bDguNTI3LTguNTd6Ij48L3BhdGg+PC9zdmc+"
            width={25}
            height={50}
          />
          <input
            type="text"
            placeholder="From?"
            value={fromAirport}
            onChange={(e) => setFromAirport(e.target.value)}
            onClick={handleClic}
            className=" outline-none text-gray-600 bg-[#F0F3F5]"
          />
        </div>

        <Image
          src="data:image/svg+xml;base64,PHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgIHZpZXdCb3g9IjAgMCAyMDAgMjAwIiB3aWR0aD0iMS4yNWVtIiBoZWlnaHQ9IjEuMjVlbSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBjbGFzcz0iYy1QXy0taWNvbiBjLVBfLS1tb2QtcmVzcG9uc2l2ZSIgcm9sZT0icHJlc2VudGF0aW9uIj48cGF0aCBkPSJNNTYuMjM4IDE1NC44MDFjLTI1LjI3MS0zMC4zMjYtMzAuMzM1LTMzLjIwMS0yNS0zOS42MDNsMjUtMzBsMTEuNTIzIDkuNjAzTDUzLjAxMyAxMTIuNUgxMjB2MTVINTMuMDEzbDE0Ljc0OSAxNy42OTlsLTExLjUyNCA5LjYwMnptODYuNTI0LTQwbC0xMS41MjMtOS42MDNMMTQ1Ljk4NyA4Ny41SDgwdi0xNWg2NS45ODdsLTE0Ljc0OS0xNy42OTlsMTEuNTIzLTkuNjAzbDI1IDMwYzUuMzM1IDYuNDAzLjI3MiA5LjI3OC0yNC45OTkgMzkuNjAzeiI+PC9wYXRoPjwvc3ZnPg=="
          onClick={swapAirports}
          width={40}
          height={50}
          className="bg-[#F0F3F5]"
          alt="Descriptive text"
        />

        <div
          className="flex items-center border border-gray-300 rounded-lg px-1 py-2 space-x-2 bg-[#F0F3F5] rounded-lg"
          style={borderStyle}
        >
          <Image
            src="data:image/svg+xml;base64,PHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgIHZpZXdCb3g9IjAgMCAyMDAgMjAwIiB3aWR0aD0iMS4yNWVtIiBoZWlnaHQ9IjEuMjVlbSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBjbGFzcz0iVG43ei1pY29uIiByb2xlPSJwcmVzZW50YXRpb24iPjxwYXRoIGQ9Ik0xNzguMDgxIDQxLjk3M2MtMi42ODEgMi42NjMtMTYuMDY1IDE3LjQxNi0yOC45NTYgMzAuMjIxYzAgMTA3LjkxNiAzLjU1OCA5OS44MTUtMTQuNTU1IDExNy44MDdsLTE0LjM1OC02MC40MDJsLTE0LjY3LTE0LjU3MmMtMzguODczIDM4LjYwNi0zMy4wMTUgOC43MTEtMzMuMDE1IDQ1LjY2OWMuMDM3IDguMDcxLTMuMzczIDEzLjM4LTguMjYzIDE4LjIzN0w1MC42NiAxNDguMzlsLTMwLjc1MS0xMy41MTNjMTAuMDk0LTEwLjAxNyAxNS42MDktOC4yMDcgMzkuNDg4LTguMjA3YzguMTI3LTE2LjY2NiAxOC4xNzMtMjMuODEgMjYuMDMzLTMxLjYyTDcwLjc5IDgwLjUwOUwxMCA2Ni4yNjljMTcuMTUzLTE3LjAzOSA2LjYzOC0xMy44OTUgMTE4LjM5Ni0xMy44OTVjMTIuOTYtMTIuODczIDI2Ljg4Mi0yNy43MDMgMjkuNTc0LTMwLjM3N2M3Ljc0NS03LjY5MiAyOC4wMTctMTQuMzU3IDMxLjIwNS0xMS4xOTFjMy4xODcgMy4xNjYtMy4zNDkgMjMuNDc0LTExLjA5NCAzMS4xNjd6bS0xMy42NzQgNDIuNDY5bC04LjA5OSA4LjAyN3YyMy41OGMxNy41MDgtMTcuNTUgMjEuOTYzLTE3Ljc2NyA4LjA5OS0zMS42MDd6bS00OC4xMjUtNDcuOTIzYy0xMy42NzgtMTMuNjUyLTEyLjY0Mi0xMC44MjgtMzIuMTUyIDguNTdoMjMuNjI1bDguNTI3LTguNTd6Ij48L3BhdGg+PC9zdmc+"
            width={25}
            height={50}
          />
          <input
            type="text"
            placeholder="To?"
            value={toAirport}
            onChange={(e) => setToAirport(e.target.value)}
            onClick={handleClick}
            className=" outline-none text-gray-600 bg-[#F0F3F5]"
          />
        </div>

        <div className="relative w-64">
          <FaCalendarAlt
            className="absolute left-3 top-3 text-gray-500 cursor-pointer"
            onClick={toggleCheckInCalendar}
          />
          <Datepicker
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
              setIsCheckInCalendarOpen(false);
            }}
            placeholder="Check-in Date — Check-out Date"
            popoverDirection="down"
            showShortcuts={false}
            inputClassName="w-full h-10 px-10 py-2 border-2 rounded-lg border-[#F0F3F5] cursor-pointer text-sm font-semibold text-gray-700 outline-none bg-[#F0F3F5]"
          />
        </div>

        <div className="relative w-64">
          <FaCalendarAlt
            className="absolute left-3 top-3 text-gray-500 cursor-pointer"
            onClick={toggleCheckOutCalendar}
          />
          <Datepicker
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
              setIsCheckOutCalendarOpen(false);
            }}
            placeholder="Check-out Date — Check-out Date"
            popoverDirection="down"
            showShortcuts={false}
            inputClassName="w-full h-10 px-10 py-2 border-2 rounded-lg border-[#F0F3F5] cursor-pointer text-sm font-semibold text-gray-700 outline-none bg-[#F0F3F5]"
          />
        </div>
        <Link href="flighht">
        <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded shadow hover:bg-blue-600 transition duration-200">
          Search
        </button>
        </Link>
      </div>
    </div>
  );
}
