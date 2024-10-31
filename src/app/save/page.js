// pages/favorites.js
"use client"; // This component should also be a client component
// import Header from "@/Components/Navbar/Header";
// import Navbar from "@/Components/Navbar/Navbar";
import React, { useContext } from 'react';
import { FavoritesContext } from '@/Context/favoritesContext';
import Header from "@/Components/Navbar/Header";
import Navbar from "@/Components/Navbar/Navbar";
import FavoritesCounter from '@/Components/favourite/favouites';
import Image from "next/image";
import Main from "@/Components/divs/Main";
import SearchBar from "@/Components/searchBar/searchBar";
import { FaRegHeart, FaHeart } from "react-icons/fa";

const FavoritesPage = () => {
    const { favorites, toggleFavorite } = useContext(FavoritesContext);

    return (
        <>
            <Navbar />
            <Header />
           
            <section>
                <div className="container mx-auto py-8">
                    <h1 className="text-4xl font-bold mb-3">My next trip</h1>
                    <FavoritesCounter />
                </div>
            </section>
            <section className="bg-gray-100">
                <div className="container mx-auto py-8 bg-weight-800">
                    {favorites.length === 0 ? (
                        <p>No favorite properties yet.</p>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
                            {favorites.map((property, index) => (
                                <div key={index} className="p-4 border rounded relative">
                                    <div className="relative w-full h-0 pb-[75%]">
                                        <Image src={property.imageSrc} alt={property.title} layout="fill" />
                                    </div>
                                    <h2 className="text-lg font-bold">{property.title}</h2>
                                    <p>{property.location}</p>
                                    <p>{property.rating} stars</p>
                                    <p>{property.reviews} reviews</p>
                                    <p>EGP {property.newPrice}</p>
                                    
                                    <button 
                                        onClick={() => toggleFavorite(property)} 
                                        className="absolute top-2 right-2 bg-white rounded-full p-2 z-10"
                                    >
                                        {favorites.some(fav => fav.title === property.title) ? (
                                            <FaHeart className="text-red-700" />
                                        ) : (
                                            <FaRegHeart />
                                        )}
                                    </button>
                                    <button>View property</button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}

export default FavoritesPage;