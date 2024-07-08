import React from "react";
import { Link } from "react-router-dom";
import { FaStar, FaRegStar, FaRegHeart } from "react-icons/fa";

const ListingItemCard = ({ item, imageMap }) => {
  return (
    <div className='w-[193px] h-[320px] md:w-[250px] lg:w-[300px] font-Helvetica'>
      <div className='shadow-md'>
        <img
          src={imageMap[item.img]}
          alt={item.name}
          className='w-full h-40 md:h-48 object-fill'
        />
      </div>
      <div className='text-base font-normal'>
        <p>{item.name}</p>
        <p>{item.cartegory}</p>
        <p className='text-[#4670DC] font-bold'>{item.price}</p>
      </div>
      <div className='flex justify-between my-2 md:my-1'>
        <div className='flex'>
          {Array(3)
            .fill(
              <FaStar
                size={24}
                color='#F68B1E'
                style={{
                  filter: "drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.2))",
                }}
              />
            )
            .concat(
              Array(2).fill(
                <FaRegStar
                  size={24}
                  color='#F68B1E'
                  style={{
                    filter: "drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.2))",
                  }}
                />
              )
            )}
        </div>
        <FaRegHeart
          size={24}
          color='#EC0000'
          style={{ filter: "drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.2))" }}
        />
      </div>
      <Link to='/cart'>
        <button className='bg-white px-4 py-2 shadow-md w-full font-bold text-xs border border-[#171717]'>
          + ADD
        </button>
      </Link>
    </div>
  );
};

export default ListingItemCard;
