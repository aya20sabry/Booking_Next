"use client";
import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoIosHeartEmpty } from "react-icons/io";
import { LuShare2, LuTreePine } from "react-icons/lu";
import { BsTag } from "react-icons/bs";
import PhotoGallery from "@/Components/Cards/photoGallery";
import { FaAngleRight, FaStar, FaAngleLeft } from "react-icons/fa6";
import { TbParkingCircle } from "react-icons/tb";
import { LiaHotTubSolid } from "react-icons/lia";
import { PiTShirt } from "react-icons/pi";
import {
  MdOutlinePool,
  MdOutlineFreeBreakfast,
  MdOutlineDinnerDining,
} from "react-icons/md";
import {
  FaDumbbell,
  FaCoffee,
  FaUtensils,
  FaConciergeBell,
  FaShuttleVan,
  FaBaby,
  FaTshirt,
  FaUmbrellaBeach,
  FaSpa,
  FaHotTub,
  FaDumbbell as FaFitnessCenter,
  FaYinYang,
  FaHandsWash,
  FaSwimmer,
} from "react-icons/fa";
import { MdOutlineIron } from "react-icons/md";
import { GetHotelReviews } from "@/API/GET";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OpenLayersMap from "./OpenLayersMap";

const facilityIcons = {
  SwimmingPool: MdOutlinePool,
  Gym: FaDumbbell,
  Breakfast: MdOutlineFreeBreakfast,
  Dinner: MdOutlineDinnerDining,
  Lunch: FaUtensils,
  RoomService: FaConciergeBell,
  AirportShuttle: FaShuttleVan,
  Babysitting: FaBaby,
  Laundry: PiTShirt,
  DryCleaning: FaTshirt,
  Ironing: MdOutlineIron,
  Beachfront: FaUmbrellaBeach,
  FreeParking: TbParkingCircle,
  Spa: FaSpa,
  Sauna: FaHotTub,
  SteamRoom: FaHotTub,
  HotTub: LiaHotTubSolid,
  FitnessCenter: FaFitnessCenter,
  Yoga: FaYinYang,
  Massage: FaHandsWash,
  Garden: LuTreePine,
};

function OverView({ hotel, amenities }) {
  console.log(amenities);
  console.log(amenities[0].facilities);
  const [reviews, setReviews] = useState(null);
  const [sliderRef, setSliderRef] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      const data = await GetHotelReviews(hotel._id);
      console.log(data);
      setReviews(data);
    };
    fetchReviews();
  }, []);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <>
      <div className="max-w-6xl mx-auto">
        <section className="flex justify-between items-start gap-4">
          <div>
            <h2 className="text-2xl font-bold">{hotel?.name?.en}</h2>
            <span>
              <FaMapMarkerAlt className="mr-0.5 text-lg text-[#006ce4] inline" />{" "}
              <span className="text-sm">{hotel?.location?.Address?.en}</span>{" "}
              <span className="text-sm font-semibold text-[#006ce4] hover:underline cursor-default">
                -Excellent location
              </span>
            </span>
          </div>
          <div className="text-right">
            <div className="flex items-center justify-end gap-2 mb-2">
              <IoIosHeartEmpty className="text-2xl text-[#006ce4] cursor-pointer mr-2" />
              <LuShare2 className="text-2xl text-[#006ce4] cursor-pointer mr-2" />
              <button className="bg-[#006ce4] text-white px-4 py-2 rounded-md text-sm font-semibold">
                Reserve
              </button>
            </div>
            <div className="flex items-center justify-end gap-1">
              <BsTag className="text-2xl text-[#006ce4] cursor-pointer mr-1" />
              <span className="text-sm text-[#006ce4] font-semibold">
                We Price Match
              </span>
            </div>
          </div>
        </section>
      </div>
      <section className="mx-auto max-w-6xl mt-4">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <PhotoGallery images={hotel?.images} />
          </div>
          <div className="col-span-1 ">
            <div className="bg-white rounded-md">
              <div className="border border-gray-200 rounded-lg">
                <div className="flex justify-end items-center mb-1 border-b p-3">
                  <div className="mr-2 flex flex-col justify-center">
                    <h2 className="text-base font-semibold">Very Good</h2>
                    <p className="text-xs text-gray-600">2,062 reviews</p>
                  </div>
                  <p className="bg-[#003B95] text-white font-bold rounded px-2 py-1 text-lg">
                    8.3
                  </p>
                </div>
                <div className="px-2 py-1">
                  <p className="font-semibold mb-4 text-xs">
                    Guests who stayed here loved
                  </p>

                  <div className="reviews-slider relative">
                    <button
                      onClick={() => sliderRef?.slickPrev()}
                      className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-1 z-10"
                    >
                      <FaAngleLeft className="text-gray-600" />
                    </button>
                    <Slider ref={setSliderRef} {...sliderSettings}>
                      {reviews?.map((review) => (
                        <div key={review._id} className="review-item px-8">
                          <p className="mb-4 px-3 text-xs">
                            &quot;{review.comment.en}&quot;
                          </p>
                          <div className="review-item flex items-center mb-4 px-3">
                            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-2">
                              {review.userId.firstName.charAt(0)}
                            </div>
                            <span className="font-semibold mr-2 text-xs">
                              {review.userId.firstName}
                            </span>
                            <span className="text-gray-600 text-xs">
                              {review.userId.nationality}
                            </span>
                          </div>
                        </div>
                      ))}
                    </Slider>
                    <button
                      onClick={() => sliderRef?.slickNext()}
                      className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-1 z-10"
                    >
                      <FaAngleRight className="text-gray-600" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-md w-[370px] mt-2">
              <div className=" rounded-lg ">
                <OpenLayersMap hotel={hotel} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl">
        <div className="grid grid-cols-3 gap-4 pt-6">
          <div className="col-span-2 ">
            <p className="text-sm whitespace-pre-line">
              {hotel?.description?.en}
            </p>
            <section className="mx-auto max-w-6xl mt-6">
              <h2 className="text-base font-bold">Most popular facilities</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
                {Object.entries(amenities[0].facilities || {}).map(
                  ([facility, value]) => {
                    if (value && facilityIcons[facility]) {
                      const Icon = facilityIcons[facility];
                      return (
                        <div
                          key={facility}
                          className="flex items-center space-x-2"
                        >
                          <Icon className="text-green-600 text-xl" />
                          <span>
                            {facility.replace(/([A-Z])/g, " $1").trim()}
                          </span>
                        </div>
                      );
                    }
                    return null;
                  }
                )}
              </div>
            </section>
          </div>
          <div className="col-span-1 bg-[#F0F6FF] rounded-lg p-6 h-fit">
            <h2 className="text-base font-bold">Property highlights</h2>
            <p className="text-sm font-bold mt-2">
              Perfect for a 1-night stay!
            </p>
            <span className="flex items-center mt-4">
              <TbParkingCircle className="mr-2 text-2xl" />
              <p className="text-sm">
                Free private parking available at the hotel
              </p>
            </span>
            <button className="bg-[#006ce4] text-white w-full rounded-md mt-4 py-2">
              Reserve now
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default OverView;
