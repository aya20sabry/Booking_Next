"use client";
import { IoPersonSharp } from "react-icons/io5";
import { useState, useEffect } from "react";
import { GetHotelRooms } from "@/API/GET";
import { MdBed } from "react-icons/md";
import { IoMdCheckmark } from "react-icons/io";
import { GoTag } from "react-icons/go";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

const RoomTable = ({ hotel, availability, checkInDate, checkOutDate }) => {
  const t = useTranslations("Hotel");
  const locale = useLocale();
  const [rooms, setRooms] = useState([]);
  const [expandedRooms, setExpandedRooms] = useState({});
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(0);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (availability) {
      setLoading(true);
      GetHotelRooms(hotel._id)
        .then((data) => {
          setRooms(data);
        })
        .catch((error) => {
          console.error("Error fetching rooms:", error);
        })
        .finally(() => setLoading(false));
    }
  }, [availability, hotel._id]);

  const bedNameMapping = {
    KingBed: "King Bed",
    QueenBed: "Queen Bed",
    TwinBed: "Twin Bed",
    SofaBed: "Sofa Bed",
    SingleBed: "Single Bed",
  };
  const roomBenfits = {
    wifi: "Free Wi-Fi",
    airConditioning: "Air Conditioning",
    breakfastIncluded: "Free Breakfast",
    parking: "Free Parking",
    poolAccess: "Free Swimming Pool",
    gymAccess: "Free Gym",
    roomService: "Free Room Service",
    spaAccess: "Free Spa Access",
    laundryService: "Free Laundry Service",
    minibar: "Free Minibar",
    oceanView: "Ocean View",
    balcony: "Balcony",
    kitchen: "Kitchen",
    petsAllowed: "Pets Allowed",
    tv: "Free TV",
    safeBox: "Free Safe Box",
    hairDryer: "Free Hair Dryer",
    teaCoffeeMaker: "Free Tea/Coffee Maker",
    freeToiletries: "Free Toiletries",
    dailyHousekeeping: "Daily Housekeeping",
    iron: "Free Iron",
  };

  const toggleExpand = (roomId) => {
    setExpandedRooms((prev) => ({
      ...prev,
      [roomId]: !prev[roomId],
    }));
  };

  rooms.forEach((room) => {
    const renamedBenfits = Object.entries(room?.benefits).reduce(
      (acc, [key, value]) => {
        const newKey = roomBenfits[key] || key;
        acc[newKey] = value;
        return acc;
      },
      {}
    );
  });
  rooms.forEach((room) => {
    const renamedBeds = Object.entries(room.beds).reduce(
      (acc, [key, value]) => {
        const newKey = bedNameMapping[key] || key;
        acc[newKey] = value;
        return acc;
      },
      {}
    );
  });
  function getDateDifference(checkInDate, checkOutDate) {
    let startDate = new Date(checkInDate);
    let endDate = new Date(checkOutDate);
    const difference = endDate.getDay() - startDate.getDay();
    return difference;
  }
  console.log(getDateDifference(checkInDate, checkOutDate));
  console.log(availability);
  console.log(checkInDate);
  console.log(checkOutDate);
  return (
    <>
      <div className="max-w-6xl mx-auto my-0 text-sm">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="loader">Loading...</div>
          </div>
        ) : (
          <table className="max-w-6xl w-full" aria-label="room table">
            <thead>
              <tr>
                <th className="bg-[#4C76B2] text-white font-bold border-b-2 border-r border-[#5BBAFF] p-4 text-center ">
                  {t("room_type")}
                </th>
                <th className="bg-[#4C76B2] text-white font-bold border-b-2 border-r border-[#5BBAFF] p-4 text-center">
                  {t("number_of_guests")}
                </th>
                <th className="bg-[#003B95] text-white font-bold border-b-2 border-r border-[#5BBAFF] p-4 text-center">
                  {t("today_s_price")}
                </th>
                <th className="bg-[#4C76B2] text-white font-bold border-b-2 border-r border-[#5BBAFF] p-4 text-center">
                  {t("your_choices")}
                </th>
                <th className="bg-[#4C76B2] text-white font-bold border-b-2 border-r border-[#5BBAFF] p-4 text-center">
                  {t("select_amount")}
                </th>
                <th className="bg-[#4C76B2] text-white font-bold border-b-2   p-4 text-center"></th>
              </tr>
            </thead>
            <tbody>
              {rooms.map((room, index) => (
                <tr key={index} className="border-b-2 border-[#5BBAFF] ">
                  <td className="p-4 border-r border-[#5BBAFF] max-w-52">
                    <h3 className="text-base font-bold text-[#006ce4] underline">
                      {room.name[locale]}
                    </h3>
                    <div className="flex items-center mt-2">
                      <p className="text-sm flex flex-wrap">
                        {Object.entries(room.beds).map(([key, value]) => (
                          <span key={key} className="flex items-center mr-2">
                            {value !== 0 && (
                              <>
                                {value} {bedNameMapping[key] || key}
                                <MdBed className="ml-1 text-2xl" />
                              </>
                            )}
                          </span>
                        ))}
                      </p>
                    </div>
                    <div className="flex items-center mt-2">
                      <p className="text-xs">{room.subDescription[locale]}</p>
                    </div>
                    <div className="flex items-start mt-2 pb-2 border-b border-[#d8d8d8] ">
                      <p className="text-xs w-full">
                        {room.description[locale]}
                      </p>
                    </div>
                    <div className="flex flex-wrap items-start mt-2">
                      {Object.entries(room?.benefits)
                        .slice(0, expandedRooms[room._id] ? undefined : 4)
                        .map(([key, value]) => (
                          <span
                            key={key}
                            className="text-xs w-full flex items-center"
                          >
                            {value && (
                              <>
                                <IoMdCheckmark className="text-[#12891A] mr-1" />
                                {roomBenfits[key] || key}
                              </>
                            )}{" "}
                          </span>
                        ))}
                      {Object.entries(room?.benefits).length > 4 && (
                        <span
                          className="text-xs w-full text-blue-600  cursor-pointer mt-1 hover:underline"
                          onClick={() => toggleExpand(room._id)}
                        >
                          {expandedRooms[room._id] ? "Show less" : "Show more"}
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="p-4 border-r border-[#5BBAFF] align-top">
                    <div className="flex items-center">
                      {room.roomType.en === "Deluxe Single" ||
                      room.roomType.en === "Standard Single" ? (
                        <IoPersonSharp className="mr-1" />
                      ) : (
                        <>
                          <IoPersonSharp className="mr-1" />
                          <IoPersonSharp className="mr-1" />
                        </>
                      )}
                    </div>
                  </td>
                  <td className="p-4 border-r border-[#5BBAFF] align-top">
                    <p className="font-bold text-base">
                      {t("EGP")} {room.price}
                    </p>
                  </td>
                  <td className="p-4 border-r border-[#5BBAFF] align-top">
                    <ol className="list-disc list-inside">
                      <li>{t("pay_online")}</li>
                      <li>{t("pay_at_the_hotel")}</li>
                    </ol>
                  </td>
                  <td className="p-4 border-r border-[#5BBAFF] align-top">
                    <select
                      className="border rounded p-2"
                      onChange={(e) => {
                        setSelectedRoom(room);
                        setSelectedPrice(
                          Number(e.target.value) *
                            getDateDifference(checkInDate, checkOutDate)
                        );
                      }}
                    >
                      {Array.from(
                        { length: availability[room._id] + 1 },
                        (_, i) => (
                          <option key={i} value={room.price * i}>
                            {i} (EGP{" "}
                            {room.price *
                              i *
                              getDateDifference(checkInDate, checkOutDate)}
                            )
                          </option>
                        )
                      )}
                    </select>
                  </td>
                  {index === 0 && (
                    <td
                      className="p-1  items-start border-r border-[FFFFF] align-top"
                      rowSpan={3}
                    >
                      <div className="text-center">
                        <button className="bg-blue-600 text-white px-12 py-2 rounded w-full">
                          <Link
                            href={`/book?hotel=${hotel._id}&room=${selectedRoom?._id}&type=${selectedRoom?.roomType.en}&price=${selectedPrice}&name=${selectedRoom?.name[locale]}&checkInDate=${checkInDate}&checkOutDate=${checkOutDate}`}
                          >
                            {t("i_ll_reserve")}
                          </Link>
                        </button>
                      </div>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default RoomTable;
