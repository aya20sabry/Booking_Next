"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";

const HotelSearch = ({
  name,
  rating,
  location,
  distance,
  description,
  image,
  reviewCount,
  score,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-300 p-4 mb-4">
      <div className="flex flex-col md:flex-row">
        {/* Image and heart section */}
        <div className="md:w-1/3 pr-4 relative mb-4 md:mb-0">
          <Image
            src={image}
            alt={name}
            className="rounded-lg w-full md:w-60"
            width={240}
            height={240}
          />
          <button
            className="absolute top-4 right-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsFavorite(!isFavorite)}
          >
            {isFavorite ? (
              <FaHeart className="text-red-600 w-5 h-5" />
            ) : (
              <FaRegHeart className="text-gray-600 w-5 h-5" />
            )}
          </button>
        </div>

        {/* Name, location, and description section */}
        <div className="md:w-1/2 pr-4">
          <h2 className="text-xl font-bold text-blue-600">{name}</h2>
          <div className="flex items-center text-yellow-400 mb-2 text-xl">
            {"★".repeat(Math.floor(rating))}
            {rating % 1 !== 0 && "½"}
            {"☆".repeat(5 - Math.ceil(rating))}
          </div>
          <div className="flex items-center gap-2 mb-2">
            <p className="text-xs text-blue-600 underline font-semibold">
              {location}
            </p>
            <p className="text-xs text-gray-600">{distance} from downtown</p>
          </div>
          <p className="text-xs">{description}</p>
        </div>

        {/* Reviews, score, and button section */}
        <div className=" flex flex-col">
          <div className=" mb-4 flex  items-center justify-between">
            <div className="flex flex-col">
              <span className="font-semibold text-sm block">
                {score >= 9 ? "Exceptional" : "Very Good"}
              </span>
              <span className="text-xs text-gray-600 block">
                {reviewCount} reviews
              </span>
            </div>
            <div className="bg-blue-900 text-white font-bold py-1 px-2 rounded mt-1 inline-block">
              {score}
            </div>
          </div>
          <div>
            <Link href="/hotel">
              <button className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600">
                Show prices
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelSearch;
