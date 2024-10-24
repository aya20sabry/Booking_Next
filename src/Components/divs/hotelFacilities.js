"use client";

import HotelAmenities from "@/Components/divs/Facilities";
import { TbParkingCircle } from "react-icons/tb";
import {
  FaCar,
  FaSwimmingPool,
  FaDumbbell,
  FaCoffee,
  FaUtensils,
  FaCocktail,
  FaConciergeBell,
  FaShuttleVan,
  FaBaby,
  FaTshirt,
  FaUmbrellaBeach,
  FaParking,
  FaSpa,
  FaHotTub,
  FaDumbbell as FaFitnessCenter,
  FaYinYang,
  FaHandsWash,
  FaSwimmer,
  FaTree,
  FaPlane,
} from "react-icons/fa";
import SubHeading from "../Headings/SubHeading";
import { MdOutlineIron } from "react-icons/md";
import { useTranslations } from "next-intl";
const facilityIcons = {
  Parking: FaCar,
  SwimmingPool: FaSwimmingPool,
  Gym: FaDumbbell,
  Breakfast: FaCoffee,
  Dinner: FaUtensils,
  Lunch: FaUtensils,
  RoomService: FaConciergeBell,
  AirportShuttle: FaShuttleVan,
  Babysitting: FaBaby,
  Laundry: FaTshirt,
  DryCleaning: FaTshirt,
  Ironing: MdOutlineIron,
  Beachfront: FaUmbrellaBeach,
  FreeParking: TbParkingCircle,
  Spa: FaSpa,
  Sauna: FaHotTub,
  SteamRoom: FaHotTub,
  HotTub: FaHotTub,
  FitnessCenter: FaFitnessCenter,
  Yoga: FaYinYang,
  Massage: FaHandsWash,
  Pool: FaSwimmer,
  Garden: FaTree,
};

function HotelFacilities({ hotel, amenities }) {
  const t = useTranslations("Hotel");
  const facilities = {
    Parking: true,
    SwimmingPool: true,
    Gym: true,
    Breakfast: true,
    Dinner: true,
    Lunch: true,
    RoomService: true,
    AirportShuttle: true,
    Babysitting: true,
    Laundry: true,
    DryCleaning: true,
    Ironing: true,
    Beachfront: true,
    FreeParking: true,
    Spa: true,
    Sauna: true,
  };

  if (!amenities)
    return (
      <div className="flex justify-center items-center h-screen ">
        <FaPlane className="animate-spin text-[#003B95] text-4xl" />
      </div>
    );
  return (
    <>
      <SubHeading title={t("facilities")} description={t("great_facilities")} />
      <section className="mx-auto max-w-6xl my-6 ">
        <h2 className="text-base font-bold">{t("most_popular_facilities")}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
          {Object.entries(amenities[0].facilities || {}).map(
            ([facility, value]) => {
              if (value && facilityIcons[facility]) {
                const Icon = facilityIcons[facility];
                return (
                  <div key={facility} className="flex items-center space-x-2">
                    <Icon className="text-green-600 text-xl" />
                    <span>{facility.replace(/([A-Z])/g, " $1").trim()}</span>
                  </div>
                );
              }
              return null;
            }
          )}
        </div>
      </section>
      <HotelAmenities amenities={amenities} />
    </>
  );
}

export default HotelFacilities;
