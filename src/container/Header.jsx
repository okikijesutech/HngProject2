import React, { useState, useEffect } from "react";
import { CgSortAz } from "react-icons/cg";
import heroImage from "../assets/HeroImg.png";
import heroImageMobile from "../assets/HeroImgMobile.png";
import Carousel from "../components/Carousel";

const options = ["Recommended", "New Arrivals", "Price Low to High"];
const slides = [
  {
    smallImage: heroImageMobile,
    largeImage: heroImage,
    heading: "GET 50% OFF YOUR FIRST ORDER",
    subheading: "WHEN YOU ORDER MORE THAN SEVEN ITEMS",
    description:
      "Save from the comfort of your home, any day, everywhere. Online only. Prices are marked.",
    buttonText: "SHOP NOW",
  },
  {
    smallImage: heroImageMobile,
    largeImage: heroImage,
    heading: "GET 50% OFF YOUR FIRST ORDER",
    subheading: "WHEN YOU ORDER MORE THAN SEVEN ITEMS",
    description:
      "Save from the comfort of your home, any day, everywhere. Online only. Prices are marked.",
    buttonText: "SHOP NOW",
  },
  {
    smallImage: heroImageMobile,
    largeImage: heroImage,
    heading: "GET 50% OFF YOUR FIRST ORDER",
    subheading: "WHEN YOU ORDER MORE THAN SEVEN ITEMS",
    description:
      "Save from the comfort of your home, any day, everywhere. Online only. Prices are marked.",
    buttonText: "SHOP NOW",
  },
  {
    smallImage: heroImageMobile,
    largeImage: heroImage,
    heading: "GET 50% OFF YOUR FIRST ORDER",
    subheading: "WHEN YOU ORDER MORE THAN SEVEN ITEMS",
    description:
      "Save from the comfort of your home, any day, everywhere. Online only. Prices are marked.",
    buttonText: "SHOP NOW",
  },
  {
    smallImage: heroImageMobile,
    largeImage: heroImage,
    heading: "GET 50% OFF YOUR FIRST ORDER",
    subheading: "WHEN YOU ORDER MORE THAN SEVEN ITEMS",
    description:
      "Save from the comfort of your home, any day, everywhere. Online only. Prices are marked.",
    buttonText: "SHOP NOW",
  },
];

const Header = () => {
  const [selectedValue, setSelectedValue] = useState(options[0]);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
      <Carousel slides={slides} />
    </div>
  );
};

export default Header;
