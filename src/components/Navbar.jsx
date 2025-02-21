import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/zlogo.png";
import mobileLogo from "../assets/mobileLogo.png";
import { FaRegHeart } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { RiShoppingBagLine } from "react-icons/ri";
import { HiOutlineMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='flex items-center justify-between px-[14px] md:px-[10px] lg:px-[100px] bg-[#171717] md:bg-white font-SansSerifFLF'>
      <div className='flex flex-row-reverse md:flex-row items-center'>
        <div className='flex items-center ml-[150px] md:ml-0 w-[55px] h-[45px] md:w-[150px] md:h-[90px]'>
          <Link to='/'>
            <img src={logo} alt='Zee logo' className='hidden md:block' />
            <img src={mobileLogo} alt='Zee logo' className='md:hidden block' />
          </Link>
        </div>
        <div className='flex md:hidden text-white' onClick={toggleMenu}>
          {menuOpen ? <HiX size={24} /> : <HiOutlineMenu size={24} />}
        </div>
        <ul className='hidden md:flex text-base font-custom-weight md:ml-[20px] lg:ml-[92px]'>
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
      <div className='flex items-center md:gap-3 lg:gap-10'>
        <div className='hidden md:flex items-center'>
          <div className='bg-[#4670DC] p-2 text-white'>
            <IoSearchOutline style={{ transform: "rotate(-275deg)" }} />
          </div>
          <input
            type='text'
            placeholder='What are you looking for?'
            className='outline-none p-1 font-medium text-base border'
          />
        </div>
        <Link to='/favourite'>
          <FaRegHeart className='hidden md:block' size={24} />
        </Link>
        <Link to='/cart' className='text-white md:text-black'>
          <RiShoppingBagLine size={24} />
        </Link>
      </div>
      {menuOpen && (
        <ul className='absolute top-[65px] left-0 w-full bg-[#1E1E1E] bg-opacity-30 backdrop-blur-sm text-white text-base flex flex-col items-center space-y-4 py-4'>
          <li>
            <Link to='/' onClick={toggleMenu}>
              MEN
            </Link>
          </li>
          <li>
            <Link to='/' onClick={toggleMenu}>
              WOMEN
            </Link>
          </li>
          <li>
            <Link to='/' onClick={toggleMenu}>
              CHILDREN
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
