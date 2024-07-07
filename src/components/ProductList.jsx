import React from "react";
import { FaStar, FaRegStar, FaRegHeart } from "react-icons/fa";

const ProductList = ({ items }) => {
  return (
    <div className='hidden md:flex flex-col gap-4 border-r border-black pr-4'>
      {items.map((item) => (
        <div key={item.name} className='w-full p-4 flex'>
          <div className='w-[100px] md:w-[200px]'>
            <img
              src={item.img}
              alt={item.name}
              className='w-full h-48 object-fill'
            />
          </div>
          <div className='w-full pl-4'>
            <div className='text-base font-normal'>
              <p>{item.name}</p>
              <p>{item.cartegory}</p>
              <p className='text-[#4670DC] font-bold'>{item.price}</p>
            </div>
            <div className='flex justify-between my-2 md:my-1'>
              <div className='flex'>
                <FaStar size={24} color='#F68B1E' />
                <FaStar size={24} color='#F68B1E' />
                <FaStar size={24} color='#F68B1E' />
                <FaRegStar size={24} color='#F68B1E' />
                <FaRegStar size={24} color='#F68B1E' />
              </div>
              <FaRegHeart size={24} color='#EC0000' />
            </div>
            <button className='bg-white px-4 py-2 shadow-md w-full border border-[#171717]'>
              + ADD
            </button>
          </div>
        </div>
      ))}
      <button className='bg-[#D7CECE80] text-white px-4 py-2 mx-auto mt-10 w-full'>
        Add More
      </button>
    </div>
  );
};

export default ProductList;
