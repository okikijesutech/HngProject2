import React from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Promotion = () => {
  return (
    <div className='flex justify-between items-center bg-white md:bg-black md:text-white py-3 pl-[130px] md:pl-[250px] lg:pl-[600px]  pr-[60px] font-SansSerifBookFLF '>
      <div className='flex gap-[21px] md:gap-[25px] items-center'>
        <FaChevronLeft size={12} className='cursor-pointer' />
        <p className='text-xs md:text-xl font-medium'>
          Get 50% off for new members
        </p>
        <FaChevronRight size={12} className='cursor-pointer' />
      </div>
      <div className='hidden ml-4 md:flex md:gap-1 lg:gap-4 text-base lg:text-xl font-medium'>
        <Link to='' className='border border-[#4670DC] p-2'>
          Sign In
        </Link>
        <Link to='' className=' px-3 py-2'>
          Find Stores
        </Link>
      </div>
    </div>
  );
};

export default Promotion;
