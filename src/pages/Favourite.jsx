import React from "react";
import { Link } from "react-router-dom";
import ListingItemCard from "../components/ListingItemCard";
import products from "../items.json";
import imageMap from "../imageMap";
import { useFavorites } from "../context/FavoritesContext";
import { useCart } from "../context/CartContext";
import { useRatings } from "../context/RatingsContext";

const Favourite = () => {
  const { favorites } = useFavorites();
  const { addToCart } = useCart();
  const { rateProduct } = useRatings();

  const favoriteProducts = products.filter((product) =>
    favorites.includes(product.id)
  );

  return (
    <div className='bg-gradient-to-b from-[#FFFCFB] to-[#FBCDBD] p-4 min-h-screen flex flex-col items-center'>
      <div className='text-center mb-6'>
        <h1 className='text-3xl md:text-4xl font-bold text-[#4670DC]'>
          Your Favorite Items
        </h1>
      </div>

      {favoriteProducts.length === 0 ? (
        <div className='text-center mt-20'>
          <h2 className='text-2xl md:text-3xl text-gray-700 mb-4'>
            You have no favorite items.
          </h2>
          <p className='text-lg md:text-xl text-gray-500 mb-6'>
            Browse our products and add items to your favorites!
          </p>
          <Link to='/'>
            <button className='bg-[#4670DC] text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-[#3655b3] transition duration-300'>
              Go to Shop
            </button>
          </Link>
        </div>
      ) : (
        <div className='flex flex-col items-center'>
          <div className='grid grid-cols-2 md:grid-cols-3 gap-4 mt-12'>
            {favoriteProducts.map((product) => (
              <div key={product.id} className='md:px-10 lg:px-24'>
                <ListingItemCard
                  item={product}
                  imageMap={imageMap}
                  addToCart={addToCart}
                  toggleFavorite={() => toggleFavorite(product.id)}
                  rateProduct={rateProduct}
                />
              </div>
            ))}
          </div>
          <div className='mt-6'>
            <Link to='/'>
              <button className='bg-[#4670DC] text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-[#3655b3] transition duration-300'>
                Go to Home
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Favourite;
