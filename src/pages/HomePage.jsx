import React from "react";
import Header from "../container/Header";
import Listings from "../container/Listings";
import { useCart } from "../context/CartContext";
import { useFavorites } from "../context/FavoritesContext";
import { useRatings } from "../context/RatingsContext";

const HomePage = () => {
  const { addToCart } = useCart();
  const { toggleFavorite } = useFavorites();
  const { rateProduct } = useRatings();

  return (
    <div>
      <Header />
      <Listings
        addToCart={addToCart}
        toggleFavorite={toggleFavorite}
        rateProduct={rateProduct}
      />
    </div>
  );
};

export default HomePage;
