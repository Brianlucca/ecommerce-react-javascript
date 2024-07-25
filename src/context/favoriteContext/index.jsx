import React, { createContext, useState, useEffect } from "react";

export const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  const addToFavorites = (product) => {
    setFavorites((prevFavorites) => {
      const productExists = prevFavorites.some((item) => item.id === product.id);
      if (productExists) {
        return prevFavorites;
      }

      const newFavorites = [...prevFavorites, product];
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
      return newFavorites;
    });
  };

  const removeFromFavorites = (productId) => {
    setFavorites((prevFavorites) => {
      const newFavorites = prevFavorites.filter((product) => product.id !== productId);
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
      return newFavorites;
    });
  };

  return (
    <FavoriteContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
      {children}
    </FavoriteContext.Provider>
  );
};
