import React, { useContext } from 'react';
import { FavoritesContext } from '@/Context/favoritesContext';
import { FaRegHeart, FaHeart } from "react-icons/fa";
const FavoritesCounter = () => {
    const { getFavoritesCount } = useContext(FavoritesContext);
    const count = getFavoritesCount();

    return (
        <div className="relative">
            <button className="flex items-center">
                <span><FaRegHeart className="color-red-300 " /></span>
            <span>
                    {count}
                </span>
                <span className="text-lg ">properties saved</span>
                
            </button>
        </div>
    );
};

export default FavoritesCounter;