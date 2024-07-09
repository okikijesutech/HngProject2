import React, { useContext } from "react";
import { FaStar, FaRegStar, FaHeart, FaRegHeart } from "react-icons/fa";
import { useFavorites } from "../context/FavoritesContext";
import { useRatings } from "../context/RatingsContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ListingItemCard = ({ item, imageMap, addToCart }) => {
  const { favorites, toggleFavorite } = useFavorites();
  const { ratings, rateProduct } = useRatings();

  const isFavorite = favorites.includes(item.id);
  const itemRating = ratings[item.id] || 0;

  const handleAddToCart = (item) => {
    addToCart(item);
    toast.success("Item added successfully to cart!");
  };

  const handleToggleFavorite = (itemId) => {
    toggleFavorite(itemId);
    if (!isFavorite) {
      toast.info("Item added to favorites!");
    } else {
      toast.warning("Item removed from favorites!");
    }
  };

  return (
    <div className='w-[193px] h-[320px] md:w-[225px] lg:w-[300px] font-Helvetica p-1 group hover:shadow-lg transition-shadow duration-300'>
      <div className='shadow-md'>
        <img
          src={imageMap[item.img]}
          alt={item.name}
          className='w-full h-40 md:h-48 object-fill'
        />
      </div>
      <div className='text-base font-normal'>
        <p>{item.name}</p>
        <p>{item.category}</p>
        <p className='text-[#4670DC] font-bold'>{item.price}</p>
      </div>
      <div className='flex justify-between my-2 md:my-1'>
        <div className='flex'>
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <span
                key={index}
                onClick={() => rateProduct(item.id, index + 1)}
                className='cursor-pointer'
              >
                {index < itemRating ? (
                  <FaStar
                    size={24}
                    color='#F68B1E'
                    style={{
                      filter: "drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.2))",
                    }}
                  />
                ) : (
                  <FaRegStar
                    size={24}
                    color='#F68B1E'
                    style={{
                      filter: "drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.2))",
                    }}
                  />
                )}
              </span>
            ))}
        </div>
        <span
          onClick={() => handleToggleFavorite(item.id)}
          className='cursor-pointer'
        >
          {isFavorite ? (
            <FaHeart
              size={24}
              color='#EC0000'
              className='group-hover:text-red-600 transition-transform duration-300 ease-in-out transform group-hover:scale-110'
              style={{
                filter: "drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.2))",
              }}
            />
          ) : (
            <FaRegHeart
              size={24}
              color='#EC0000'
              className='group-hover:text-red-600 transition-transform duration-300 ease-in-out transform group-hover:scale-110'
              style={{
                filter: "drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.2))",
              }}
            />
          )}
        </span>
      </div>
      <button
        className='bg-white px-4 py-2 shadow-md w-full font-bold text-xs border border-[#171717]'
        onClick={() => handleAddToCart(item)}
      >
        + ADD
      </button>
    </div>
  );
};

export default ListingItemCard;
