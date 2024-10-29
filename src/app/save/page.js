// pages/favorites.js
"use client"; // This component should also be a client component
// import Header from "@/Components/Navbar/Header";
// import Navbar from "@/Components/Navbar/Navbar";
import React, { useContext } from 'react';
import { FavoritesContext } from '@/Context/favoritesContext';
import Header from "@/Components/Navbar/Header";
import Navbar from "@/Components/Navbar/Navbar";
import FavoritesCounter from '@/Components/favourite/favouites';


const FavoritesPage = () => {
    const { favorites } = useContext(FavoritesContext);


  return (<>
    
    <Navbar />
     <Header />
     
    
    <div className="container mx-auto py-8">
       <nav className='mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 sm:px-8 md:px-16 lg:px-24 xl:px-48'>
         
            <FavoritesCounter />
        </nav>
      <h1 className="text-2xl font-bold mb-4">Your Favorite Properties</h1>
      {favorites.length === 0 ? (
        <p>No favorite properties yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {favorites.map((property, index) => (
            <div key={index} className="p-4 border rounded">
              <img src={property.imageSrc} alt={property.title} />
              <h2 className="text-lg font-bold">{property.title}</h2>
              <p>{property.location}</p>
              <p>{property.rating} stars</p>
              <p>{property.reviews} reviews</p>
              <p>EGP {property.newPrice}</p>
            </div>
          ))}
        </div>
      )}
    </div>
    </>
    );
}
export default FavoritesPage;


// "use client";
// import Image from "next/image";
// import { useState, useEffect } from "react";
// import { FaRegHeart, FaHeart } from "react-icons/fa";

// function Properties({
//   propertyId, // معرف فريد للعقار
//   imageSrc,
//   title,
//   location,
//   rating,
//   reviews,
//   nights,
//   oldPrice,
//   newPrice,
// }) {
//   const [isFavorite, setIsFavorite] = useState(false);

//   // تحميل حالة المفضلة عند تحميل المكون
//   useEffect(() => {
//     const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
//     const isFav = favorites.some((property) => property.propertyId === propertyId);
//     setIsFavorite(isFav);
//   }, [propertyId]);

//   // دالة للتبديل بين إضافة العقار للمفضلة أو إزالته
//   const toggleFavorite = () => {
//     const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
//     if (isFavorite) {
//       // إذا كان العقار موجودًا في المفضلة، قم بإزالته
//       const updatedFavorites = favorites.filter((property) => property.propertyId !== propertyId);
//       localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
//       setIsFavorite(false);
//     } else {
//       // إذا لم يكن العقار موجودًا، أضفه إلى المفضلة
//       const newProperty = {
//         propertyId,
//         imageSrc,
//         title,
//         location,
//         rating,
//         reviews,
//         nights,
//         oldPrice,
//         newPrice,
//       };
//       favorites.push(newProperty);
//       localStorage.setItem('favorites', JSON.stringify(favorites));
//       setIsFavorite(true);
//     }
//   };

//   return (
//     <div className="w-full max-w-sm mx-auto rounded overflow-hidden shadow-lg flex flex-col h-full relative">
//       <div className="relative w-full h-0 pb-[75%]">
//         <Image
//           className="absolute top-0 left-0 w-full h-full object-cover"
//           src={imageSrc}
//           alt={title}
//           layout="fill"
//         />
//         <button
//           className="absolute top-2 right-2 bg-white rounded-full p-2 z-10"
//           onClick={toggleFavorite}
//         >
//           {isFavorite ? <FaHeart className="text-red-700" /> : <FaRegHeart />}
//         </button>
//       </div>
//       <div className="flex flex-col flex-grow p-4">
//         <h5 className="text-lg font-bold mb-2">{title}</h5>
//         <p className="text-gray-600 mb-2 text-sm">{location}</p>
//         <div className="flex items-center mb-2">
//           <span className="mainColor text-white text-xs font-bold rounded px-2 py-1">
//             {rating}
//           </span>
//           <span className="ml-2 text-gray-500 text-sm">{reviews} reviews</span>
//         </div>
//       </div>
//       <div className="text-gray-900 p-4 flex flex-wrap items-center justify-between mt-auto">
//         <span className="text-gray-500 text-sm">{nights} nights</span>
//         <div className="flex items-center space-x-2">
//           <span className="line-through text-red-500 text-sm">
//             EGP {oldPrice}
//           </span>
//           <span className="font-bold text-base">EGP {newPrice}</span>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Properties;