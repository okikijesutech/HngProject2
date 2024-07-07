import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaTiktok,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

const Footer = () => {
  const [visibleSection, setVisibleSection] = useState(null);

  const toggleVisibility = (section) => {
    setVisibleSection(visibleSection === section ? null : section);
  };

  return (
    <div className='bg-black text-white px-5 pt-10 md:px-[95px] pb-[20px] md:py-[60px]'>
      <div className='flex gap-4 pb-10 md:pb-[70px] md:border-b-2 md:border-white'>
        <div className='flex flex-col items-center text-center'>
          <h3 className='font-medium text-base md:text-xl'>
            JOIN OUR EMAIL LIST
          </h3>
          <p className='text-xs md:text-base font-normal mt-4'>
            Receive products news and updates in your inbox
          </p>
          <input
            type='text'
            placeholder='Enter your email address'
            className='w-full px-4 py-2 mt-3 text-base font-normal'
          />
          <div className='flex md:hidden w-[390px] items-start mt-8 '>
            <input type='checkbox' className='mt-[5px] mr-2' />
            <p className='text-left text-xs font-normal'>
              I acknowledge I have read and understood the Privacy Policy and I
              consent to the processing of my personal data for marketing and
              profiling purposes.
            </p>
          </div>
          <button className='bg-white px-4 py-2 text-[#4670DC] text-xs md:text-base font-medium mt-4 w-[100px]'>
            SIGN UP
          </button>
        </div>
        <div className='hidden md:flex ml-10 mt-28 w-[425px]'>
          <p>
            <input
              type='checkbox'
              className='mr-2 bg-transparent border border-black'
            />
            I acknowledge I have read and understood the Privacy Policy and I
            consent to the processing of my personal data for marketing and
            profiling purposes.
          </p>
        </div>
      </div>
      <div className='flex flex-col md:flex-row mt-0 md:mt-[70px] md:gap-[150px]'>
        <div>
          <div
            className='flex justify-between items-center px-3 md:px-0 py-2 md:py-0 border border-gray-500 md:border-none cursor-pointer'
            onClick={() => toggleVisibility("shop")}
          >
            <h4 className='text-base md:text-sm font-medium mb-3'>SHOP</h4>
            {visibleSection === "shop" ? (
              <FaChevronUp size={24} className='block md:hidden' />
            ) : (
              <FaChevronDown size={24} className='block md:hidden' />
            )}
          </div>
          {(visibleSection === "shop" || window.innerWidth >= 430) && (
            <ul className='text-sm font-normal leading-4 text-left space-y-2 md:block hidden'>
              <li>Men</li>
              <li>Women</li>
              <li>Kids</li>
              <li>Accessories</li>
              <li>Discounts and Promotions</li>
            </ul>
          )}
        </div>
        <div>
          <div
            className='flex justify-between items-center px-3 md:px-0 py-2 md:py-0 border border-gray-500 border-t-0 md:border-none cursor-pointer'
            onClick={() => toggleVisibility("support")}
          >
            <h4 className='text-base md:text-sm font-medium mb-3'>SUPPORT</h4>
            {visibleSection === "support" ? (
              <FaChevronUp size={24} className='block md:hidden' />
            ) : (
              <FaChevronDown size={24} className='block md:hidden' />
            )}
          </div>
          {(visibleSection === "support" || window.innerWidth >= 430) && (
            <ul className='text-sm font-normal leading-4 text-left space-y-2 md:block hidden'>
              <li>Order Status</li>
              <li>Returns</li>
              <li>Track Order</li>
              <li>Unsubscribe</li>
              <li>Contact Us</li>
            </ul>
          )}
        </div>
        <div>
          <div
            className='flex justify-between items-center px-3 md:px-0 py-2 md:py-0 border md:border-none cursor-pointer'
            onClick={() => toggleVisibility("account")}
          >
            <h4 className='text-base md:text-sm font-medium mb-3'>
              MY ACCOUNT
            </h4>
            {visibleSection === "account" ? (
              <FaChevronUp size={24} className='block md:hidden' />
            ) : (
              <FaChevronDown size={24} className='block md:hidden' />
            )}
          </div>
          {(visibleSection === "account" || window.innerWidth >= 430) && (
            <ul className='text-sm font-normal leading-4 text-left space-y-2 md:block hidden'>
              <li>Sign In</li>
              <li>Contact Us</li>
              <li>Track Order</li>
              <li>Subscribe/Unsubscribe</li>
              <li>Discounts & Promotions</li>
            </ul>
          )}
        </div>
        <div>
          <div
            className='flex justify-between items-center px-3 md:px-0 py-2 md:py-0 border border-gray-500 border-t-0 md:border-none cursor-pointer'
            onClick={() => toggleVisibility("company")}
          >
            <h4 className='text-base md:text-sm font-medium mb-3'>COMPANY</h4>
            {visibleSection === "company" ? (
              <FaChevronUp size={24} className='block md:hidden' />
            ) : (
              <FaChevronDown size={24} className='block md:hidden' />
            )}
          </div>
          {(visibleSection === "company" || window.innerWidth >= 430) && (
            <ul className='text-sm font-normal leading-4 text-left space-y-2 md:block hidden'>
              <li>About Us</li>
              <li>Our Values</li>
              <li>Affiliate Program</li>
              <li>Careers</li>
            </ul>
          )}
        </div>
      </div>
      <div className='flex flex-col md:flex-row items-start md:items-center justify-between mt-16 md:mt-10'>
        <div className='flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-16 mb-10 text-sm md:text-base font-medium'>
          <button className='border-solid border-2 p-[10px] border-[#FF9F3D] text-[#FF9f3D] text-sm mb-8 md:mb-0'>
            Cookie Preference
          </button>
          <Link>Privacy Policy</Link>
          <Link>Term Of Use</Link>
          <p> &copy;2024 Zee</p>
        </div>
        <div className='flex gap-2'>
          <FaTiktok size={16} />
          <FaFacebook size={16} />
          <FaInstagram size={16} />
          <FaYoutube size={16} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
