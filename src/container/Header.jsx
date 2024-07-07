import React, { useState } from "react";
import { CgSortAz } from "react-icons/cg";
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
        <p className='text-2xl font-bold mt-10 md:mt-6'>
          <span className='text-[#00000080]'>Home/</span>Shop
        </p>
        <div className='flex items-center p-1 border border-black w-[191px] md:w-[356px] mt-4 md:mt-14 text-xs md:text-2xl font-bold'>
          <CgSortAz size={24} />
          <p className='mr-2 '>Sort</p>
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
        <div className='bg-[#4670DC] w-[105px] md:w-[150px] text-white p-2 rounded-tl-md rounded-tr-md rounded-bl-md md:mx-auto mt-9 flex items-center'>
          <p className='font-medium text-base md:text-2xl'>New Arrivals</p>
        </div>
      </div>
      <div
        className='bg-cotain bg-center h-[10vh]  md:h-[85vh] relative overflow-hidden text-white flex flex-col py-[289px] text-center justify-content-center items-center mt-3'
        style={{
          backgroundImage: `url(${
            window.innerWidth >= 430 ? heroImage : heroImageMobile
          })`,
        }}
      >
        <h1 className='mb-4 text-xl font-semibold md:text-5xl md:font-medium w-[500px] md:w-[1088px]'>
          GET 50% OFF YOUR FIRST ORDER{" "}
          <span className='hidden md:block'>
            WHEN YOU ORDER MORE THAN SEVEN ITEMS
          </span>
        </h1>
        <p className='mb-4 text-xs md:text-2xl font-bold md:w-[530px]'>
          Save from the comfort of your home, any day, everywhere. Online only.
          Prices are marked.
        </p>
        <button className='bg-white text-black p-3 text-xs md:text-2xl font-medium md:w-[300px]'>
          SHOP NOW
        </button>
      </div>
    </div>
  );
};

export default Header;
