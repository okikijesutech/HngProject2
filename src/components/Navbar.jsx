import React from "react";
import logo from "../assets/zooLogo.png";
import { Link } from "react-router-dom";
import { FaSearch, FaHeart, FaShoppingBag, FaHamburger } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-6 md:px-[100px] bg-black md:bg-white'>
      <div className='flex flex-row-reverse md:flex-row items-center'>
        <div className='ml-[150px] md:ml-0 w-[100px] md:w-auto'>
          <Link to='/'>
            <img src={logo} alt='Zee logo' />
          </Link>
        </div>
        <div className='flex md:hidden text-white'>
          <FaHamburger size={24} />
        </div>
        <ul className='hidden md:flex'>
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
      <div className='flex items-center gap-2'>
        <div className='hidden md:flex items-center'>
          <div className='bg-[#4670DC] px-2 py-2 text-white'>
            <FaSearch />
          </div>
          <input
            type='text'
            placeholder='What are you looking for?'
            className='outline-none p-1 font-light border '
          />
        </div>
        <FaHeart className='hidden md:block' size={24} />
        <Link to='/cart' className='text-white md:text-black'>
          <FaShoppingBag size={24} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
