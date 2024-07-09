import React from "react";
import Header from "../container/Header";
import Listings from "../container/Listings";
import { useCart } from "../context/CartContext";
import { useFavorites } from "../context/FavoritesContext";
import { useRatings } from "../context/RatingsContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      <ToastContainer />
    </div>
  );
};

export default HomePage;
