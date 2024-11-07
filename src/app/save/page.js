"use client";
import React, { useContext } from "react";
import { FavoritesContext } from "@/Context/favoritesContext";
import Header from "@/Components/Navbar/Header";
import Navbar from "@/Components/Navbar/Navbar";
import FavoritesCounter from "@/Components/favourite/favouites";
import Image from "next/image";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import Footer from "@/Components/Footer/Footer";

const FavoritesPage = () => {
  const { favorites, toggleFavorite } = useContext(FavoritesContext);

  return (
    <>
      <Navbar />
      <Header />

      <section className="bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto py-12 px-4">
          <h1 className="text-4xl font-bold mb-4 text-blue-950 text-center">
            My Dream Destinations
          </h1>
          <div className="flex justify-center mb-8 mx-auto">
            <FavoritesCounter />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container mx-auto py-12 px-4">
          {favorites.length === 0 ? (
            <div className="text-center py-16">
              <h2 className="text-2xl font-semibold text-gray-600 mb-2">
                Your favorites list is empty
              </h2>
              <p className="text-gray-500 mb-8">
                Start exploring and save your dream properties!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mx-auto">
              {favorites.map((property, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105"
                >
                  <div className="relative w-full h-0 pb-[75%]">
                    <Image
                      src={property.imageSrc}
                      alt={property.title}
                      layout="fill"
                      className="object-cover"
                    />
                    <button
                      onClick={() => toggleFavorite(property)}
                      className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
                    >
                      <FaHeart className="text-red-600 text-xl" />
                    </button>
                  </div>
                  <div className="p-4">
                    <h2 className="text-xl font-bold text-blue-950 mb-2">
                      {property.title}
                    </h2>
                    <p className="text-gray-600 mb-2 flex items-center">
                      <span className="mr-1">📍</span> {property.location}{" "}
                      ,Egypt
                    </p>
                    <div className="flex items-center mb-2">
                      <span className="text-yellow-400 mr-1">⭐</span>
                      <span className="text-gray-700">{property.rating}</span>
                      <span className="text-gray-500 text-sm ml-2">
                        ({property.reviews} reviews)
                      </span>
                    </div>
                    <p className="text-blue-950 font-bold text-lg mb-4">
                      EGP {property.nights}
                    </p>
                    <button className="w-full bg-blue-950 text-white py-2 rounded-md hover:bg-blue-900 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default FavoritesPage;
