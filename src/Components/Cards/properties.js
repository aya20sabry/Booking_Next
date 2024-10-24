"use client";
import Image from "next/image";
import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

function Properties({
  imageSrc,
  title,
  location,
  rating,
  reviews,
  nights,
  oldPrice,
  newPrice,
}) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    
    <div className="w-full max-w-sm mx-auto rounded overflow-hidden shadow-lg flex flex-col h-full relative">
      <div className="relative w-full h-0 pb-[75%]">
        <Image
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={imageSrc}
          alt={title}
          layout="fill"
        />
        <button
          className="absolute top-2 right-2 bg-white rounded-full p-2 z-10"
          onClick={() => setIsFavorite(!isFavorite)}
        >
          {isFavorite ? <FaHeart className="text-red-700" /> : <FaRegHeart />}
        </button>
      </div>
      <div className="flex flex-col flex-grow p-4">
        <h5 className="text-lg font-bold mb-2">{title}</h5>
        <p className="text-gray-600 mb-2 text-sm">{location}</p>
        <div className="flex items-center mb-2">
          <span className="mainColor text-white text-xs font-bold rounded px-2 py-1">
            {rating}
          </span>
          <span className="ml-2 text-gray-500 text-sm">{reviews} reviews</span>
        </div>
      </div>
      <div className="text-gray-900 p-4 flex flex-wrap items-center justify-between mt-auto">
        <span className="text-gray-500 text-sm">{nights} nights</span>
        <div className="flex items-center space-x-2">
          <span className="line-through text-red-500 text-sm">
            EGP {oldPrice}
          </span>
          <span className="font-bold text-base">EGP {newPrice}</span>
        </div>
      </div>
    </div>
  );
}

export default Properties;
