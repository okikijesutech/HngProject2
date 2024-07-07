import React from "react";
import { Link } from "react-router-dom";
import {
  FaChevronLeft,
  FaChevronRight,
  FaStar,
  FaRegStar,
  FaRegHeart,
} from "react-icons/fa";
import item1 from "../assets/item1.png";
import item2 from "../assets/item2.png";
import item3 from "../assets/item3.png";
import item5 from "../assets/item5.png";
import item6 from "../assets/item6.png";
import item7 from "../assets/item7.png";
import item8 from "../assets/item8.png";
import ZeeG from "../assets/ZeeG.png";
import zeekids from "../assets/zeekids.png";
import corporate from "../assets/corporate.png";
import corporate2 from "../assets/corporate2.png";
import corporate3 from "../assets/corporate3.png";
import party from "../assets/party1.png";
import party2 from "../assets/party2.png";
import ball from "../assets/ball.png";
import itemData from "../items.json";

const imageMap = {
  "item1.png": item6,
  "item2.png": item5,
  "item3.png": item1,
  "item4.png": item2,
  "item5.png": item3,
  "item6.png": corporate,
  "item7.png": item7,
  "item8.png": item8,
  "item9.png": ZeeG,
  "item10.png": party,
  "item11.png": ball,
  "item12.png": party2,
  "item13.png": corporate2,
  "item14.png": corporate3,
  "item15.png": zeekids,
};

const items = itemData;

const Listings = () => {
  return (
    <div className='flex flex-col items-center bg-gradient-to-b from-pink-200 to-pink-400 pt-4  pb-40 md:px-8 lg:px-24 py-12 md:py-16'>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-x-[16px] gap-y-[92px] md:gap-x-[107px] lg:gap-x-[214px] md:gap-y-[149px]'>
        {items.map((item) => (
          <div
            key={item.id}
            className='w-[193px] h-[320px] md:w-[250px] lg:w-[300px]'
          >
            <div className='shadow-md'>
              <img
                src={imageMap[item.img]}
                alt={item.name}
                className='w-full h-48 object-fill'
              />
            </div>
            <div className='text-base font-normal'>
              <p>{item.name}</p>
              <p>{item.cartegory}</p>
              <p className='text-[#4670DC] font-bold '>{item.price}</p>
            </div>
            <div className='flex justify-between my-2 md:my-1'>
              <div className='flex'>
                <FaStar
                  size={24}
                  color='#F68B1E'
                  style={{
                    filter: "drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.2))",
                  }}
                />
                <FaStar
                  size={24}
                  color='#F68B1E'
                  style={{
                    filter: "drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.2))",
                  }}
                />
                <FaStar
                  size={24}
                  color='#F68B1E'
                  style={{
                    filter: "drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.2))",
                  }}
                />
                <FaRegStar
                  size={24}
                  color='#F68B1E'
                  style={{
                    filter: "drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.2))",
                  }}
                />
                <FaRegStar
                  size={24}
                  color='#F68B1E'
                  style={{
                    filter: "drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.2))",
                  }}
                />
              </div>
              <FaRegHeart
                size={24}
                color='#EC0000'
                style={{
                  filter: "drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.2))",
                }}
              />
            </div>
            <button className='bg-white px-4 py-2 shadow-md w-full font-bold text-xs border border-[#171717]'>
              + ADD
            </button>
          </div>
        ))}
      </div>
      <div className='flex justify-center items-center mt-56'>
        <FaChevronLeft className='text-black mr-12 md:mr-20 ' size={12} />
        <div className='flex items-end gap-3 md:gap-5'>
          <Link className='flex items-center justify-center rounded-full w-8 h-8 md:w-10 md:h-10 bg-[#D7CECE80] font-bold'>
            1
          </Link>
          <Link className='flex items-center justify-center rounded-full  w-8 h-8 md:w-10 md:h-10 bg-[#D7CECE80] font-bold'>
            2
          </Link>
          <Link className='flex items-center justify-center rounded-full w-8 h-8 md:w-10 md:h-10 bg-[#4670DC] font-bold'>
            3
          </Link>
          <Link className='flex items-center justify-center rounded-full w-8 h-8 md:w-10 md:h-10 bg-[#D7CECE80] font-bold'>
            4
          </Link>
          <p>...</p>
          <Link className='flex items-center justify-center rounded-full w-8 h-8 md:w-10 md:h-10 bg-[#D7CECE80] font-bold'>
            5
          </Link>
        </div>
        <FaChevronRight className='text-black ml-12 md:ml-20 ' size={12} />
      </div>
    </div>
  );
};

export default Listings;
