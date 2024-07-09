import React, { useState, useEffect } from "react";
import { CgSortAz } from "react-icons/cg";
import banner from "../assets/banner.webp";
import heroImage from "../assets/HeroImg.png";
import heroImageMobile from "../assets/HeroImgMobile.png";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";
import hero4 from "../assets/hero4.jpg";
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
    smallImage: hero3,
    largeImage: hero3,
    heading: "GET 50% OFF YOUR FIRST ORDER",
    subheading: "WHEN YOU ORDER MORE THAN SEVEN ITEMS",
    description:
      "Save from the comfort of your home, any day, everywhere. Online only. Prices are marked.",
    buttonText: "SHOP NOW",
  },
  {
    smallImage: hero4,
    largeImage: hero4,
    heading: "GET 50% OFF YOUR FIRST ORDER",
    subheading: "WHEN YOU ORDER MORE THAN SEVEN ITEMS",
    description:
      "Save from the comfort of your home, any day, everywhere. Online only. Prices are marked.",
    buttonText: "SHOP NOW",
  },
  {
    smallImage: hero2,
    largeImage: hero2,
    heading: "GET 50% OFF YOUR FIRST ORDER",
    subheading: "WHEN YOU ORDER MORE THAN SEVEN ITEMS",
    description:
      "Save from the comfort of your home, any day, everywhere. Online only. Prices are marked.",
    buttonText: "SHOP NOW",
  },
  {
    smallImage: hero2,
    largeImage: hero2,
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
      <div className='relative px-[8px] md:px-[15px] lg:px-[100px] md:h-[183px] mb-14 pb-3 md:pb-0 pt-2 md:pt-4'>
        <div
          className='absolute inset-0 bg-gray-800 opacity-40 -z-10'
          style={{
            backgroundImage: `url(${banner})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundColor: "#FFFCFB",
          }}
        ></div>
        <p className='text-xl md:text-2xl font-bold font-HelveticaRounded pl-4 md:pl-0 mt-1 md:mt-6'>
          <span className='text-[#00000080]'>Home/</span>Shop
        </p>
        <div className='flex items-center p-1 border border-black w-[150px] md:w-[210px] lg:w-[300px]  mt-3 md:mt-5 text-xs md:text-lg lg:text-2xl font-bold font-HelveticaRounded'>
          <CgSortAz size={24} />
          <div>
            <select
              value={selectedValue}
              onChange={handleChange}
              className='outline-none bg-transparent'
            >
              {options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <Carousel slides={slides} />
    </div>
  );
};

export default Header;
