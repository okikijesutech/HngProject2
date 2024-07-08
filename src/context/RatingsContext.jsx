import React, { createContext, useState, useContext } from "react";

export const RatingsContext = createContext();

export const RatingsProvider = ({ children }) => {
  const [ratings, setRatings] = useState({});

  const rateProduct = (id, rating) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [id]: rating,
    }));
  };

  return (
    <RatingsContext.Provider value={{ ratings, rateProduct }}>
      {children}
    </RatingsContext.Provider>
  );
};

export const useRatings = () => {
  return useContext(RatingsContext);
};
