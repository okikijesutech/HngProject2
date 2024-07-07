import React from "react";
import logo from "../assets/zooLogo.png";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { RiShoppingBagLine } from "react-icons/ri";
import { HiBars4 } from "react-icons/hi2";

const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-[14px] md:px-[100px] bg-black md:bg-white'>
      <div className='flex flex-row-reverse md:flex-row items-center'>
        <div className='ml-[150px] md:ml-0 w-[75px] h-[45px] md:w-[150px] md:h-[90px]'>
          <Link to='/'>
            <img src={logo} alt='Zee logo' />
          </Link>
        </div>
        <div className='flex md:hidden text-white'>
          <HiBars4 size={24} />
        </div>
        <ul className='hidden md:flex text-base ml-[92px]'>
          <li className='border-r-2 border-black px-2'>
            <Link to='/'>MEN</Link>
          </li>
          <li className='border-r-2 border-black px-2'>
            <Link to='/'>WOMEN</Link>
          </li>
          <li className='px-2'>
            <Link to='/'>CHILDREN</Link>
          </li>
        </ul>
      </div>
      <div className='flex items-center gap-10'>
        <div className='hidden md:flex items-center'>
          <div className='bg-[#4670DC] p-2  text-white'>
            <IoSearchOutline style={{ transform: "rotate(-275deg)" }} />
          </div>
          <input
            type='text'
            placeholder='What are you looking for?'
            className='outline-none p-1 font-medium text-base border '
          />
        </div>
        <FaRegHeart className='hidden md:block' size={24} />
        <Link to='/cart' className='text-white md:text-black'>
          <RiShoppingBagLine size={24} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
