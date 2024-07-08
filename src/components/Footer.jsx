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

const sections = [
  {
    title: "SHOP",
    items: ["Men", "Women", "Kids", "Accessories", "Discounts and Promotions"],
  },
  {
    title: "SUPPORT",
    items: [
      "Order Status",
      "Returns",
      "Track Order",
      "Unsubscribe",
      "Contact Us",
    ],
  },
  {
    title: "MY ACCOUNT",
    items: [
      "Sign In",
      "Contact Us",
      "Track Order",
      "Subscribe/Unsubscribe",
      "Discounts & Promotions",
    ],
  },
  {
    title: "COMPANY",
    items: ["About Us", "Our Values", "Affiliate Program", "Careers"],
  },
];

const Footer = () => {
  const [visibleSection, setVisibleSection] = useState(null);

  const toggleVisibility = (section) => {
    setVisibleSection(visibleSection === section ? null : section);
  };

  const renderSection = (title, items) => (
    <div>
      <div
        className='flex justify-between items-center px-3 md:px-0 py-2 md:py-0 border border-gray-500 md:border-none cursor-pointer md:cursor-default'
        onClick={() => toggleVisibility(title)}
      >
        <h4 className='text-base md:text-sm font-custom-weight font-SansSerifExbFLF mb-3'>
          {title}
        </h4>
        {visibleSection === title ? (
          <FaChevronUp size={24} className='block md:hidden' />
        ) : (
          <FaChevronDown size={24} className='block md:hidden' />
        )}
      </div>
      {(visibleSection === title || window.innerWidth >= 768) && (
        <ul
          className={`text-sm font-normal font-Helvetica leading-4 text-left space-y-2 bg-[#1E1E1E] md:bg-[#171717] p-4 md:p-0 rounded-md md:rounded-none ${
            visibleSection === title ? "block" : "hidden"
          } md:block`}
        >
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );

  return (
    <div className='bg-[#171717] text-white px-5 pt-10 md:px-[45px] lg:px-[95px] pb-[20px] md:py-[60px]'>
      <div className='flex justify-center gap-4 pb-10 md:pb-[70px] md:border-b-2 md:border-white'>
        <div className='flex flex-col justify-center items-center text-center'>
          <h3 className='font-custom-weight font-SansSerifExbFLF text-base md:text-xl'>
            JOIN OUR EMAIL LIST
          </h3>
          <p className='text-xs md:text-base font-normal font-Helvetica mt-4'>
            Receive products news and updates in your inbox
          </p>
          <input
            type='text'
            placeholder='Enter your email address'
            className='w-full px-4 py-2 mt-3 text-base font-normal font-Helvetica'
          />
          <div className='flex w-[390px] items-start mt-8 '>
            <input type='checkbox' className='mt-[5px] mr-2' />
            <p className='text-left text-xs font-normal font-Helvetica'>
              I acknowledge I have read and understood the Privacy Policy and I
              consent to the processing of my personal data for marketing and
              profiling purposes.
            </p>
          </div>
          <button className='bg-white px-4 py-2 text-[#4670DC] text-xs md:text-base font-custom-weight font-SansSerifFLF mt-4 w-[100px]'>
            SIGN UP
          </button>
        </div>
      </div>
      <div className='flex flex-col md:flex-row mt-0 md:mt-[70px] md:gap-[90px] lg:gap-[150px]'>
        {sections.map(({ title, items }) => renderSection(title, items))}
      </div>
      <div className='flex flex-col md:flex-row items-start md:items-center justify-between mt-16 md:mt-10'>
        <div className='flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-9 lg:gap-16 mb-10 text-sm lg:text-base font-SansSerifFLF font-custom-weight'>
          <button className='border-solid border-2 p-[10px] border-[#FF9F3D] text-[#FF9f3D] text-sm mb-8 md:mb-0'>
            Cookie Preference
          </button>
          <Link to='/privacy-policy'>Privacy Policy</Link>
          <Link to='/terms-of-use'>Terms Of Use</Link>
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
