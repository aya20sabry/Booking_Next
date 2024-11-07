"use client";

import Navbar from "@/Components/Navbar/Navbar";
import Header from "@/Components/Navbar/Header";
import { useLocale } from "next-intl";
import ComponantFlight from "@/Components/flight/flight";
import SmFooter from "@/Components/Footer/smFooter";
export default function Flights() {
  const locale = useLocale();
  return (
    <>
      <Navbar />
      <Header />
      <div
        className="items-center pt-20 bg-custom-bg mb-20 h-lvh"
        style={{ textAlign: "left" }}
      >
        <h1 className="font-semibold text-gray-800 pl-56 mb-28 text-2xl font-custome">
          Search hundreds of flight sites at once.
        </h1>

        <ComponantFlight />
      </div>
      <SmFooter />
    </>
  );
}
