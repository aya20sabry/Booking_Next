"use client";
import { useState } from "react";
import CheckAvailabilityForm from "./CheckAvailabilityForm";
import RoomTable from "./roomTable";
import { GoTag } from "react-icons/go";
import { useTranslations } from "next-intl";
export default function HotelAvailability({
  hotel,
  initialCheckInDate,
  initialCheckOutDate,
}) {
  const t = useTranslations("Hotel");
  const [availability, setAvailability] = useState(null);
  const [checkInDate, setCheckInDate] = useState(initialCheckInDate);
  const [checkOutDate, setCheckOutDate] = useState(initialCheckOutDate);

  return (
    <div>
      <section className="mx-auto max-w-6xl my-6 flex justify-between">
        <div className="flex flex-col">
          <h3 className="text-2xl font-bold">{t("availability")}</h3>
          <p className="text-base text-[#595959]">
            {t("prices_converted_to_EGP")}
          </p>
        </div>
        <div className="flex items-end">
          <button className="flex items-center bg-white  text-sm font-semibold text-[#006ce4] px-4 py-2 rounded-md hover:bg-blue-50">
            <GoTag className="mx-2 text-lg" /> {t("we_price_match")}
          </button>
        </div>
      </section>
      <CheckAvailabilityForm
        setAvailability={setAvailability}
        setCheckInDate={setCheckInDate}
        setCheckOutDate={setCheckOutDate}
        initialCheckInDate={initialCheckInDate}
        initialCheckOutDate={initialCheckOutDate}
      />
      <RoomTable
        hotel={hotel}
        availability={availability}
        checkInDate={checkInDate}
        checkOutDate={checkOutDate}
      />
    </div>
  );
}
