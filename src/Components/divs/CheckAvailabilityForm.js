"use client";
import { useState, useEffect } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import { useSearchParams } from "next/navigation";

export default function CheckAvailabilityForm({
  setAvailability,
  setCheckInDate,
  setCheckOutDate,
  initialCheckInDate,
  initialCheckOutDate,
}) {
  const searchParams = useSearchParams();
  const [error, setError] = useState(null);
  const [value, setValue] = useState({
    startDate: initialCheckInDate,
    endDate: initialCheckOutDate,
  });
  let hotelId = searchParams.get("id");
  console.log("hotelId", hotelId);
  console.log(initialCheckInDate);
  console.log(initialCheckOutDate);
  useEffect(() => {
    const checkInitialAvailability = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/check-availability",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              hotelId: hotelId,
              checkInDate: initialCheckInDate,
              checkOutDate: initialCheckOutDate,
            }),
          }
        );

        if (!response.ok) {
          throw new Error("Failed to check initial availability");
        }

        const data = await response.json();
        setAvailability(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setAvailability(null);
      }
    };

    checkInitialAvailability();
  }, [initialCheckInDate, initialCheckOutDate, setAvailability]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/check-availability", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          hotelId: hotelId,
          checkInDate: value.startDate,
          checkOutDate: value.endDate,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to check availability");
      }

      const data = await response.json();
      setAvailability(data);
      console.log(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setAvailability(null);
    }
  };

  console.log(value);
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex items-start  py-4">
        <div className=" flex items-center w-80">
          <Datepicker
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
              setCheckInDate(newValue.startDate);
              setCheckOutDate(newValue.endDate);
            }}
            placeholder="Check-in Date — Check-out Date"
            popoverDirection="down"
            showShortcuts={false}
            inputClassName=" h-12 w-80 px-4 py-2 border-4 rounded-lg border-yellow-400 bg-white cursor-pointer text-sm font-semibold text-gray-700 outline-none ps-10"
            toggleClassName="absolute left-3 top-1/2 transform -translate-y-1/2 w-8 h-8"
          />
        </div>
        <button
          type="submit"
          className="-ml-12 z-10 text-center bg-[#006ce4] text-white px-4 py-2 rounded-lg border-4 border-yellow-400 hover:bg-blue-800 hover:text-white"
        >
          Change search
        </button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
