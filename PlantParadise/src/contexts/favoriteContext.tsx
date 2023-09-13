import React, { createContext, useState, useContext } from 'react';

const FavoriteContext = createContext();

export const useFavorites = () => {
  return useContext(FavoriteContext);
};

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (plant) => {
    const isFavorited = favorites.some((fav) => fav.id === plant.id);
    if (isFavorited) {
      setFavorites((prev) => prev.filter((fav) => fav.id !== plant.id));
    } else {
      setFavorites((prev) => [...prev, plant]);
    }
  };

  return (
    <FavoriteContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};
