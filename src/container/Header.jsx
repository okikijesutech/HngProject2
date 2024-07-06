import React, { useState } from "react";
import { FaChevronDown, FaSort } from "react-icons/fa";
import heroImage from "../assets/HeroImg.png";
import heroImageMobile from "../assets/HeroImgMobile.png";

const options = ["Recommended", "New Arrivals", "Price Low to High"];

const Header = () => {
  const [selectedValue, setSelectedValue] = useState(options[0]);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <div className='px-[15px] md:px-[100px]'>
        <p>Home/Shop</p>
        <div className='flex items-center p-1 border border-black w-[230px] mt-10'>
          <FaSort />
          <p className='mr-2'>Sort</p>
          <div className='border-black border-l-2'>
            <select
              value={selectedValue}
              onChange={handleChange}
              className='outline-none'
            >
              {options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className='bg-[#4670DC] w-[105px] text-white p-2 rounded-tl-md rounded-tr-md rounded-bl-md md:mx-auto my-4'>
          <p>New Arrivals</p>
        </div>
      </div>
      <div
        className='bg-contain bg-center h-[85vh] relative overflow-hidden text-white flex flex-col py-[200px] text-center justify-content-center items-center'
        style={{
          backgroundImage: `url(${
            window.innerWidth >= 768 ? heroImage : heroImageMobile
          })`,
        }}
      >
        <h1 className='mb-4 text-3xl font-bold w-[500px]'>
          GET 50% OFF YOUR FIRST ORDER WHEN YOU ORDER MORE THAN SEVEN ITEMS
        </h1>
        <p className='mb-4'>
          Save from the comfort of your home, any day, everywhere. Online only.
          Prices are marked.
        </p>
        <button className='bg-white text-black px-4 py-2 font-bold'>
          SHOP NOW
        </button>
      </div>
    </div>
  );
};

export default Header;
