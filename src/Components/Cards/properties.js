"use client";
import React, { useContext, useState } from "react";
import Image from "next/image";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { FavoritesContext } from "@/Context/favoritesContext";
import Link from "next/link";

function Properties({
  id,
  imageSrc,
  title,
  location,
  rating,
  reviews,
  nights,
  oldPrice,
  newPrice,
  reviewsCount,
}) {
  const { favorites, toggleFavorite } = useContext(FavoritesContext);
  const isFavorite = favorites.some((fav) => fav.title === title);

  const handleToggleFavorite = (e) => {
    e.stopPropagation();
    e.preventDefault();
    const newFavorite = {
      title,
      imageSrc,
      location,
      rating,
      reviews,
      nights,
      oldPrice,
      newPrice,
      reviewsCount,
      id,
    };
    toggleFavorite(newFavorite);
  };

  return (
    <Link href={`/hotel?id=${id}`} className="block">
      <div className="w-full h-[405px] max-w-sm mx-auto overflow-hidden shadow-lg flex flex-col relative border-2 border-gray-200 rounded-lg hover:cursor-pointer">
        <div className="relative w-full h-0 pb-[75%]">
          <Image
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={imageSrc}
            alt={title}
            layout="fill"
          />
          <button
            className="absolute top-2 right-2 bg-white rounded-full p-2 z-10"
            onClick={handleToggleFavorite}
          >
            {isFavorite ? <FaHeart className="text-red-700" /> : <FaRegHeart />}
          </button>
        </div>
        <div className="flex flex-col flex-grow p-4">
          <h5 className="text-lg font-bold mb-2">{title}</h5>
          <p className="text-gray-600 mb-2 text-sm">{location} , Egypt</p>
          <div className="flex items-center mb-2">
            <span className="mainColor text-white text-xs font-bold rounded px-2 py-1">
              {reviews ? reviews : "New"}
            </span>
            <span className="ml-2 text-gray-500 text-sm">
              {reviewsCount} reviews
            </span>
          </div>
        </div>
        <div className="text-gray-900 p-4 flex flex-wrap items-end justify-end mt-auto">
          <div className="flex items-center space-x-1 ">
            <span className=" text-gray-500 text-xs">Starting from</span>
            <span className="font-bold text-base"> EGP {nights}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Properties;
