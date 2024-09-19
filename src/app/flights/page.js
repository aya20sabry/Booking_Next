"use client";
import SmFooter from "@/Components/Footer/smFooter";
import Header from "@/Components/Navbar/Header";
import Navbar from "@/Components/Navbar/Navbar";
import { FaPlaneDeparture, FaPlaneArrival, FaExchangeAlt, FaCalendarAlt } from "react-icons/fa";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState } from "react";
import Link from "next/link";
// import Dropdown from './../../compnant/Dropdown/Dropdown';

import Image from 'next/image';
import Dropdown from './../../Components/Drowpdown/Dropdown';






function Flights() {
  const [fromAirport, setFromAirport] = useState("From?");
  const [toAirport, setToAirport] = useState("To?");
  const [date, setDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const [counts, setCounts] = useState({
    adults: 1,
    students: 0,
    seniors: 0,
    youths: 0,
    children: 0,
    toddlers: 0,
    infants: 0,
  });
  const [selectedOption, setSelectedOption] = useState('1 adult');
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const [selectedOption1, setSelectedOption1] = useState('Round-trip');
  const [selectedOption3, setSelectedOption3] = useState('Economy');

  const toggleDropdown = (index) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  const handleCountChange = (category, change) => {
    setCounts((prev) => ({ ...prev, [category]: Math.max(0, prev[category] + change) }));
  };

  const swapAirports = () => {
    const temp = fromAirport;
    setFromAirport(toAirport);
    setToAirport(temp);
  };

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
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
    <>
      <Navbar />
      <Header />






    <div className="items-center pt-20 bg-custom-bg" style={{ textAlign: 'left' }}>
      <h1 className="font-semibold text-gray-800 pl-56 mb-28 text-2xl font-custome">
        Search hundreds of flight sites at once.
      </h1>

      {/* Dropdown items */}
      <div className="gap-4 justify-center items-center bg-gray-100 mx-40 ">
      <Dropdown
    options={['', 'Round-trip', 'Multi-city']}
    selected={selectedOption1}
    onSelect={setSelectedOption1}
    isOpen={openDropdownIndex === 0}
    onToggle={() => toggleDropdown(0)}
    className="text-sm  "
  />

        <Dropdown
          options={Object.keys(counts)}
          selected={selectedOption}
          onSelect={setSelectedOption}
          isOpen={openDropdownIndex === 1}
          onToggle={() => toggleDropdown(1)}
          className="text-sm"
          zIndex={10}
        />
    

        <Dropdown
          options={['Economy', 'Premium Economy', 'Business', 'First']}
          selected={selectedOption3}
          onSelect={setSelectedOption3}
          isOpen={openDropdownIndex === 2}
          onToggle={() => toggleDropdown(2)}
          className="text-sm"
          zIndex={10}
        />
      </div>

      {/* Search form */}
      <div className="p-4 flex items-center space-x-4 rounded-lg mx-40 pl-50 relative">
        <div
          className="flex items-center border border-gray-300 rounded-md px-4 py-2 space-x-2 font:font-custome"
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
            className="bg-transparent outline-none text-gray-600"
          />
        </div>

        <Image
          src="data:image/svg+xml;base64,PHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgIHZpZXdCb3g9IjAgMCAyMDAgMjAwIiB3aWR0aD0iMS4yNWVtIiBoZWlnaHQ9IjEuMjVlbSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBjbGFzcz0iYy1QXy0taWNvbiBjLVBfLS1tb2QtcmVzcG9uc2l2ZSIgcm9sZT0icHJlc2VudGF0aW9uIj48cGF0aCBkPSJNNTYuMjM4IDE1NC44MDFjLTI1LjI3MS0zMC4zMjYtMzAuMzM1LTMzLjIwMS0yNS0zOS42MDNsMjUtMzBsMTEuNTIzIDkuNjAzTDUzLjAxMyAxMTIuNUgxMjB2MTVINTMuMDEzbDE0Ljc0OSAxNy42OTlsLTExLjUyNCA5LjYwMnptODYuNTI0LTQwbC0xMS41MjMtOS42MDNMMTQ1Ljk4NyA4Ny41SDgwdi0xNWg2NS45ODdsLTE0Ljc0OS0xNy42OTlsMTEuNTIzLTkuNjAzbDI1IDMwYzUuMzM1IDYuNDAzLjI3MiA5LjI3OC0yNC45OTkgMzkuNjAzeiI+PC9wYXRoPjwvc3ZnPg=="
          onClick={swapAirports}
          width={40}
          height={50}
          className="bg-white"
          alt="Descriptive text"
        />

        <div
          className="flex items-center border border-gray-300 rounded-md px-4 py-2 space-x-2"
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
            className="bg-transparent outline-none text-gray-600"
          />
        </div>

        <button
          className="flex items-center border border-gray-300 rounded-md px-4 py-2 space-x-2"
          onClick={toggleCalendar}
        >
          <FaCalendarAlt className="text-gray-500" />
          <span>{date.toDateString()}</span>
        </button>

        {showCalendar && (
          <div className="absolute top-16 left-0 mt-2 z-50 bg-white p-2 rounded-md shadow-lg">
            <Calendar
              onChange={setDate}
              value={date}
              className="custom-calendar"
            />
          </div>
        )}

        <Link href="/flight" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
          Search
        </Link>
      </div>
    </div>



      <SmFooter />
    </>
  )

}

export default Flights;
