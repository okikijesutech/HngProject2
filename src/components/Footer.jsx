import React from "react";
import { Link } from "react-router-dom";
import {
  FaTiktok,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaChevronDown,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-black text-white px-[15px] md:px-[100px] py-[20px] md:py-[60px]'>
      <div className='flex gap-4 pb-[70px] border-b-2 border-white'>
        <div className='flex flex-col items-center text-center'>
          <h3 className='font-extralight text-xl'>JOIN OUR EMAIL LIST</h3>
          <p>Receive products news and updates in your inbox</p>
          <input
            type='text'
            placeholder='Enter your email address'
            className='w-full px-3 py-2'
          />
          <div className='flex md:hidden w-[400px] items-start my-6 '>
            <input type='checkbox' className='mt-[5px] mr-2' />
            <p className='text-left'>
              I acknowledge i haveread and understood Privacy Policy and i
              consent to the process ing of my personal data for marketing and
              profiling purposes
            </p>
          </div>
          <button className='bg-white px-4 py-2 text-blue-500 mt-4 w-[100px]'>
            SIGN UP
          </button>
        </div>
        <div className='hidden md:flex w-[425px]'>
          <p>
            <input type='checkbox' className='mr-2' />I acknowledge i have read
            and understood Privacy Policy and i consent to the process ing of my
            personal data for marketing and profiling purposes
          </p>
        </div>
      </div>
      <div className='flex flex-col md:flex-row mt-[70px]  md:gap-[150px]'>
        <div>
          <div className='flex justify-between items-center px-3 md:px-0 py-2 md:py-0 border border-gray-500 md:border-none '>
            <h4 className='text-sm font-medium mb-3'>SHOP</h4>
            <FaChevronDown size={24} className='block md:hidden ' />
          </div>
          <ul className='hidden md:block text-sm font-normal leading-4 text-left space-y-2'>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li>Accessories</li>
            <li>Discounts and Promotions</li>
          </ul>
        </div>
        <div>
          <div className='flex justify-between items-center px-3 md:px-0 py-2 md:py-0 border border-gray-500 border-t-0 md:border-none '>
            <h4 className='text-sm font-medium mb-3'>SUPPORT</h4>
            <FaChevronDown size={24} className='block md:hidden ' />
          </div>
          <ul className='hidden md:block text-sm font-normal leading-4 text-left space-y-2'>
            <li>Order Status</li>
            <li>Returns</li>
            <li>Track Order</li>
            <li>Unsubscribe</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <div className='flex justify-between items-center px-3 md:px-0 py-2 md:py-0 border border-gray-500 border-t-0 md:border-none '>
            <h4 className='text-sm font-medium mb-3'>MY ACCOUNT</h4>
            <FaChevronDown size={24} className='block md:hidden ' />
          </div>
          <ul className='hidden md:block text-sm font-normal leading-4 text-left space-y-2'>
            <li>Sign In</li>
            <li>Contact Us</li>
            <li>Track Order</li>
            <li>Subscribe/Unsubscribe</li>
            <li>Discounts & Promotions</li>
          </ul>
        </div>
        <div>
          <div className='flex justify-between items-center px-3 md:px-0 py-2 md:py-0 border border-gray-500 border-t-0 md:border-none '>
            <h4 className='text-sm font-medium mb-3'>COMPANY</h4>
            <FaChevronDown size={24} className='block md:hidden ' />
          </div>
          <ul className='hidden md:block text-sm font-normal leading-4 text-left space-y-2'>
            <li>About Us</li>
            <li>Our Values</li>
            <li>Affiliate Program</li>
            <li>Careers</li>
          </ul>
        </div>
      </div>
      <div className='flex flex-col md:flex-row items-start md:items-center justify-between mt-10'>
        <div className='flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-10 mb-10'>
          <button className='border-solid border-2 p-[10px] border-[#FF9F3D] text-[#FF9f3D] mb-8 md:mb-0'>
            Cookie Preference
          </button>
          <Link>Privacy Policy</Link>
          <Link>Term Of Use</Link>
          <p> &copy;2024 Zee</p>
        </div>
        <div className='flex gap-2'>
          <FaTiktok />
          <FaFacebook />
          <FaInstagram />
          <FaYoutube />
        </div>
      </div>
    </div>
  );
};

export default Footer;
