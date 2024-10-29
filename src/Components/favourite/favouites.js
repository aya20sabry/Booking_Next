import React, { useContext } from 'react';
import { FavoritesContext } from '@/Context/favoritesContext';

const FavoritesCounter = () => {
    const { getFavoritesCount } = useContext(FavoritesContext);
    const count = getFavoritesCount();

    return (
        <div className="relative">
            <button className="flex items-center">
                <span className="text-lg ">properties saved</span>
                <span>
                    {count}
                </span>
            </button>
        </div>
    );
};

export default FavoritesCounter;