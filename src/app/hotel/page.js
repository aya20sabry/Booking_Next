"use client";
import GuestReviews from "@/Components/HotelPage/GuestReviews";
import TravelersAsking from "@/Components/HotelPage/TravelersAsking";
import Header from "@/Components/Navbar/Header";
import Navbar from "@/Components/Navbar/Navbar";
import SearchBar from "@/Components/searchBar/AttractionSearch";
import { useState } from "react";

import { FaMapMarkerAlt } from "react-icons/fa";
import { MdPool } from "react-icons/md";
import { FaSpa } from "react-icons/fa";
import { IoMdFitness } from "react-icons/io";
import { IoRestaurantSharp } from "react-icons/io5";
import { MdAirportShuttle } from "react-icons/md";
import { MdRoomService } from "react-icons/md";
import { TbBeach } from "react-icons/tb";
import { MdOutlineWineBar } from "react-icons/md";
import { FaUmbrellaBeach } from "react-icons/fa";
import louxer2 from "@/app/Public/hotel/louxer2.jpg";
import louxer3 from "@/app/Public/hotel/louxer3.jpg";
import miny from "@/app/Public/hotel/miny.png";
import louxer4 from "@/app/Public/hotel/louxer4.jpg";
import louxer6 from "@/app/Public/hotel/louxer6.jpg";
import luoxerr from "@/app/Public/hotel/luoxerr.jpg";
import host from "@/app/Public/hotel/host.jpg";
import { MdFavoriteBorder } from "react-icons/md";
import { PiFlowerTulip } from "react-icons/pi";
import { LiaCitySolid } from "react-icons/lia";
import { PiPersonSimpleSwim } from "react-icons/pi";
import { CiWifiOn } from "react-icons/ci";
import { FaBath } from "react-icons/fa6";
import { MdOutlineSevereCold } from "react-icons/md";
import { Ri24HoursLine } from "react-icons/ri";
import { IoShareSocialOutline } from "react-icons/io5";
import Image from "next/image";
import { TbHeartShare } from "react-icons/tb";
import { IoBookmarkSharp } from "react-icons/io5";
// import { Button } from "@/components/ui/button"

function Hotel() {
  const InfoTabs = [
    "Overview",
    "Apartment Info & Price",
    "Facilities",
    "House Rules",
    "Guest Reviews",
  ];
  const [activeTab, setActiveTab] = useState("Overview");
  return (
    <>
      <Navbar />
      <Header />
      <div className="bg-gradient-to-b from-[#003B95] to-[#003B95] bg-no-repeat bg-[length:100%_50%]">
        <SearchBar />
      </div>

      <section className=" mx-auto  py-8 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48">
        <div className="flex w-full overflow-x-auto pb-4 mb-6">
          {InfoTabs.map((Tab) => (
            <button
              key={Tab}
              className={`flex-1 px-6 py-2 text-sm text-center font-medium ${
                activeTab === Tab
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab(Tab)}
            >
              {Tab}
            </button>
          ))}
        </div>
      </section>
      {/* ///host */}

      <section className="container px-28 ">
        <div className="flex justify-start pt-6 ">
          <h4 className="font-bold px-2">Bellagio Beach Resort & Spa</h4>
          {/* <MdFavoriteBorder style={{color:'blue',paddingLeft:'310px'}}/> */}

          <TbHeartShare style={{ color: "blue", marginLeft: "305px" }} />

          <IoShareSocialOutline style={{ color: "blue", marginLeft: "20px" }} />
          <div className="border border-blue-100 bg-blue-500 px-2 text-white ms-6 Save_10">
            Reserve
          </div>
        </div>
        <div className="flex justify-start pt-3 px-2">
          <FaMapMarkerAlt className="w-2 " style={{ color: "blue" }} />

          <p className="Save_10 px-1">
            12 KM, Al Haya Road, Hurghada, Egypt – Great location - show map
          </p>
          <div className="flex ps-60">
            <IoBookmarkSharp style={{ color: "blue" }} />
            <h4 className="  Save_10 text-blue-400">We Price Match</h4>
          </div>
        </div>
        {/* photo */}
        <div className="flex px-2">
          <div>
            <div className="flex">
              <div className="w-40">
                <Image src={host} alt="My Image" width={200} height={200} />
                <Image
                  src={louxer2}
                  alt="My Image"
                  className=" pt-2"
                  width={200}
                  height={200}
                />
                {/* <Image src={louxer2} alt="My Image" className=" pt-2"  width={200} height={90}/> */}
              </div>
              <div className=" ms-2">
                <Image src={luoxerr} alt="My Image" width={450} height={110} />
              </div>
            </div>
            <div className="flex pt-2">
              <Image src={louxer6} alt="My Image" width={120} height={90} />
              <Image
                className="px-1 "
                src={louxer3}
                alt="My Image"
                width={120}
                height={90}
              />
              <Image
                className="px-1 "
                src={louxer4}
                alt="My Image"
                width={120}
                height={90}
              />
              <Image
                className="px-1 "
                src={louxer3}
                alt="My Image"
                width={120}
                height={90}
              />
              <Image
                className="px-1 "
                src={miny}
                alt="My Image"
                width={120}
                height={90}
              />
            </div>
          </div>

          <div className="w-48 ms-2">
            <div className="max-w-sm mx-auto bg-white border border-gray-200  p-4">
              <div className="flex justify-end items-center mb-3">
                <div>
                  <h3 className=" Sign">Fabulous</h3>
                  <p className="text-gray-500 Save_10">3,910 reviews</p>
                </div>
                <div className="bg-blue-900 text-white rounded-md p-2 w-6 h-6 flex items-center justify-center  Save_10">
                  8.6
                </div>
              </div>

              <div className="mb-3">
                <h4 className="Sign">Guests who stayed here loved</h4>
                <p className="text-gray-600  Save_10">
                  &quot;The breakfast menu and timing were excellent. Nile river
                  and in the evening can watch...&quot;
                </p>
              </div>

              <div className="border-t  pt-4  flex">
                <p className="Sign">Excellent location!</p>
                <div className="flex items-center mx-3">
                  <div className="border border-black px-2 Save_10">9.1</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* border */}
        <div className="flex py-2 ">
          <div className="borderr mx-2 flex">
            <LiaCitySolid style={{ margin: "10px" }} />
            <p className="py-1 Save_10">City view</p>
          </div>
          <div className="borderr mx-1 flex">
            <PiFlowerTulip style={{ margin: "10px" }} />
            <p className="py-1 Save_10">Garden</p>
          </div>
          <div className="borderr2 mx-2 flex">
            <PiPersonSimpleSwim style={{ margin: "10px" }} />
            <p className="py-1 Save_10">Swimming Pool</p>
          </div>
          <div className="borderr mx-2 flex">
            <CiWifiOn style={{ margin: "10px" }} />
            <p className="py-1 Save_10">Free WiFi</p>
          </div>
          <div className="borderr mx-2 flex">
            <PiFlowerTulip style={{ margin: "10px" }} />
            <p className="py-1 Save_10">Terrace</p>
          </div>
          <div className="borderr mx-2 flex">
            <PiFlowerTulip style={{ margin: "10px" }} />
            <p className="py-1 Save_10">Balcony</p>
          </div>
        </div>
        <div className="flex py-2">
          <div className="borderr2 mx-2 flex">
            <LiaCitySolid style={{ margin: "10px" }} />
            <p className="py-1 Save_10">Free parking</p>
          </div>
          <div className="borderr mx-1 flex">
            <FaBath style={{ margin: "10px" }} />
            <p className="py-1 Save_10">Bath</p>
          </div>

          <div className="borderr2 mx-2 flex">
            <MdOutlineSevereCold style={{ margin: "10px" }} />
            <p className="py-1 Save_10">Air conditioning</p>
          </div>
          <div className="borderr2 mx-2 flex">
            <Ri24HoursLine style={{ margin: "10px" }} />
            <p className="py-1 Save_10">24-hour front desk</p>
          </div>
          <div className="borderr2 mx-2 flex">
            <PiFlowerTulip style={{ margin: "10px" }} />
            <p className="py-1 Save_10">Garden</p>
          </div>
        </div>
        {/* pargraph */}
        <section className="flex">
          <div className="Save_10">
            <p>
              You&apos;re eligible for a Genius discount at Steigenberger Resort
              Achti! To save at this property,
            </p>
            <br />
            <p>
              Get the celebrity treatment with world-class service at
              Steigenberger Resort Achti
            </p>
            <p>
              Located on the banks of the River Nile, Steigenberger Resort Achti
              is an 8-acre luxury resort set in lush tropical gardens.
            </p>
            <p>
              All rooms and suites at the Steigenberger Resort Achti are
              air-conditioned and have elegant furnishings. Each room is
              equipped with satellite flat-screen TV. The rooms offer views
              ranging from the Nile,
            </p>
            <br />
            <p>
              The two restaurants onsite are AlKarnak restaurant and terrace
              serving international cuisine and Niño’s Italian restaurant
              serving Italian dishes and pizza. Three bars{" "}
            </p>
            <p>
              The centre of Luxor is located less than 3 km from the hotel. It
              is 2 km from Luxor Temple and Mummification Museum and 3 km from
              Luxor Museum. Steigenberger Resort Achti{" "}
            </p>
            <p>
              Couples particularly like the location — they rated it 9.0 for a
              two-person trip.
            </p>
            <p className="Sign">Most popular facilities</p>
            <div className="flex p-2">
              <MdPool className="" />
              <p className="mx-2">Outdoor swimming pool</p>
              <FaSpa />
              <p className="mx-2">Spa and wellness centre</p>
              <IoMdFitness />

              <p className="mx-2">Fitness centre</p>
              <IoRestaurantSharp />
              <p className="mx-2">6 restaurants</p>
            </div>
            <div className="flex">
              <MdAirportShuttle />

              <p className="mx-2">Airport shuttle</p>
              <MdRoomService />

              <p className="mx-2">Room service</p>
              <TbBeach />

              <p className="mx-2">Beachfront</p>
              <MdOutlineWineBar />
              <p className="mx-2">Bar</p>
              <FaUmbrellaBeach />
              <p className="mx-2">BPrivate beach area</p>
            </div>
          </div>
          <div className="w-80">
            <div className="max-w-md max-h-md  mx-auto bg-blue-200 border border-gray-300 p-2">
              <h3 className="Sign ">Property highlights</h3>
              <div className="flex">
                <FaMapMarkerAlt />

                <p className=" Save_10">
                  Top location: Highly rated by recent guests (8.7)
                </p>
              </div>
              <h3 className=" mb-2 Sign pt-2 ">Property highlights</h3>
              <div className="flex">
                <p className="mr-2 Save_10">FREE private parking!</p>
              </div>
              <h3 className=" mb-2 Sign ">Activities:</h3>
              <p className="mr-2 Save_10">Fitness centre</p>
              <p className="mr-2 Save_10">Spa and wellness centre</p>
              <p className="mr-2 Save_10">Children&apos;s playground</p>
            </div>
          </div>
        </section>
      </section>

      <section className="container mx-auto mt-5  py-8 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48">
        <GuestReviews />
      </section>
      <section className="container mx-auto  py-8 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48">
        <TravelersAsking />
      </section>
    </>
  );
}

export default Hotel;
