import React from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
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
    <div className='flex flex-col justify-center items-center bg-gradient-to-b from-pink-200 to-pink-400 px-3 md:px-10 py-4 md:py-10'>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
        {items.map((item) => (
          <div key={item.id} className='w-[193px] md:w-[300px] p-4'>
            <img
              src={imageMap[item.img]}
              alt={item.name}
              className='w-full h-48 object-contain'
            />
            <p className='text-gray-700 font-bold mt-2'>{item.name}</p>
            <p className='text-gray-500 text-sm'>{item.cartegory}</p>
            <p className='text-blue-500 font-bold'>{item.price}</p>
            <button className='bg-white px-4 py-2 shadow-md w-full'>
              + ADD
            </button>
          </div>
        ))}
      </div>
      <div className='flex justify-center items-center mt-10'>
        <FaChevronLeft className='text-gray-700 mr-4 hover:text-pink-400' />
        <div className='flex items-end gap-5'>
          <Link className='flex items-center justify-center rounded-full w-8 h-8 bg-blue-500 font-bold'>
            1
          </Link>
          <Link className='flex items-center justify-center rounded-full w-8 h-8 bg-white font-bold'>
            2
          </Link>
          <Link className='flex items-center justify-center rounded-full w-8 h-8 bg-white font-bold'>
            3
          </Link>
          <Link className='flex items-center justify-center rounded-full w-8 h-8 bg-white font-bold'>
            4
          </Link>
          <p>...</p>
          <Link className='flex items-center justify-center rounded-full w-8 h-8 bg-white font-bold'>
            10
          </Link>
        </div>
        <FaChevronRight className='text-gray-700 ml-4 hover:text-pink-400' />
      </div>
    </div>
  );
};

export default Listings;
