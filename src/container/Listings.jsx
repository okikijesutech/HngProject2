import React from "react";
import { Link } from "react-router-dom";
import {
  FaChevronLeft,
  FaChevronRight,
  FaStar,
  FaRegStar,
  FaRegHeart,
} from "react-icons/fa";
import item1 from "../assets/item1.png";
import item2 from "../assets/item2.png";
import item3 from "../assets/item3.png";
import item4 from "../assets/item4.png";
import item5 from "../assets/item5.png";
import item6 from "../assets/item6.png";
import item7 from "../assets/item7.png";
// Add imports for the rest of your images
import itemData from "../items.json";

const imageMap = {
  "item1.png": item1,
  "item2.png": item2,
  "item3.png": item3,
  "item4.png": item4,
  "item5.png": item5,
  "item6.png": item6,
  "item7.png": item7,
};

const items = itemData;

const Listings = () => {
  return (
    <div className='flex flex-col items-center bg-gradient-to-b from-pink-200 to-pink-400 pt-4  pb-40 md:px-24 py-12 md:py-16'>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-x-[16px] gap-y-[92px] md:gap-x-[214px] md:gap-y-[149px]'>
        {items.map((item) => (
          <div key={item.id} className='w-[193px] h-[32opx] md:w-[300px]'>
            <div className='shadow-md'>
              <img
                src={imageMap[item.img]}
                alt={item.name}
                className='w-full h-48 object-fill'
              />
            </div>
            <div className='text-base font-normal'>
              <p>{item.name}</p>
              <p>{item.cartegory}</p>
              <p className='text-[#4670DC] font-bold '>{item.price}</p>
            </div>
            <div className='flex justify-between my-2 md:my-1'>
              <div className='flex'>
                <FaStar
                  size={24}
                  color='#F68B1E'
                  style={{
                    filter: "drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.2))",
                  }}
                />
                <FaStar
                  size={24}
                  color='#F68B1E'
                  style={{
                    filter: "drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.2))",
                  }}
                />
                <FaStar
                  size={24}
                  color='#F68B1E'
                  style={{
                    filter: "drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.2))",
                  }}
                />
                <FaRegStar
                  size={24}
                  color='#F68B1E'
                  style={{
                    filter: "drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.2))",
                  }}
                />
                <FaRegStar
                  size={24}
                  color='#F68B1E'
                  style={{
                    filter: "drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.2))",
                  }}
                />
              </div>
              <FaRegHeart
                size={24}
                color='#EC0000'
                style={{
                  filter: "drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.2))",
                }}
              />
            </div>
            <button className='bg-white px-4 py-2 shadow-md w-full font-bold text-xs border border-[#171717]'>
              + ADD
            </button>
          </div>
        ))}
      </div>
      <div className='flex justify-center items-center mt-56'>
        <FaChevronLeft className='text-black mr-20 ' size={24} />
        <div className='flex items-end gap-5'>
          <Link className='flex items-center justify-center rounded-full w-10 h-10 bg-[#D7CECE80] font-bold'>
            1
          </Link>
          <Link className='flex items-center justify-center rounded-full w-10 h-10 bg-[#D7CECE80] font-bold'>
            2
          </Link>
          <Link className='flex items-center justify-center rounded-full w-10 h-10 bg-[#4670DC] font-bold'>
            3
          </Link>
          <Link className='flex items-center justify-center rounded-full w-10 h-10 bg-[#D7CECE80] font-bold'>
            4
          </Link>
          <p>...</p>
          <Link className='flex items-center justify-center rounded-full w-10 h-10 bg-[#D7CECE80] font-bold'>
            5
          </Link>
        </div>
        <FaChevronRight className='text-black ml-20 ' size={24} />
      </div>
    </div>
  );
};

export default Listings;
