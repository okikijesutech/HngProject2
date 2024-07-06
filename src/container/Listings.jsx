import React from "react";
import item1 from "../assets/item1.png";
import { Link } from "react-router-dom";
import itemData from "../items.json";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const items = itemData;

const Listings = () => {
  return (
    <div className='flex flex-col justify-center items-center  bg-gradient-to-b from-pink-200 to-pink-400 px-10 py-10'>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
        {items.map((item) => (
          <div key={item.id} className='w-[193px] md:w-[300px] p-4'>
            <img
              src={item.img}
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
