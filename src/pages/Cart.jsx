import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";
import item1 from "../assets/item1.png";
import item2 from "../assets/item2.png";
import item3 from "../assets/item3.png";
import item4 from "../assets/item4.png";
import item5 from "../assets/item5.png";
import item6 from "../assets/item6.png";

const items = [
  {
    name: "Original Kids' Fits",
    cartegory: "Jacket",
    price: "$50.50",
    stars: 3,
    img: item1,
  },
  {
    name: "Zee Gown",
    cartegory: "Dress",
    price: "$95.50",
    stars: 4,
    img: item1,
  },
  {
    name: "Nike Air Jordans",
    cartegory: "Shoes",
    price: "$150.00",
    stars: 4,
    img: item1,
  },
];

const cartItems = [
  {
    name: "Original Kids' Fits",
    category: "Jacket",
    Price: "$50.50",
    unit: "3",
    img: item1,
  },
  {
    name: "Zee Gown",
    category: "Dress",
    Price: "$95.50",
    unit: "1",
    img: item1,
  },
  {
    name: "Nike Air Jordans",
    category: "Shoes",
    Price: "$150.00",
    unit: "3",
    img: item1,
  },
];

const Cart = () => {
  return (
    <div className='bg-gradient-to-b from-pink-200 to-pink-400 px-10 py-10'>
      <div className='flex justify-between mx-[200px] mb-6 pb-6 border-b border-black'>
        <h2>CART</h2>
        <p>3 items</p>
      </div>
      <div className='flex justify-center items-center gap-8'>
        <div className='hidden md:flex flex-col gap-4 border-r border-black pr-2'>
          {items.map((item) => (
            <div key={item.id} className='w-[450px] p-4 flex'>
              <div className='w-[300px]'>
                <img
                  src={item.img}
                  alt={item.name}
                  className='w-full h-48 object-contain'
                />
              </div>
              <div className='w-[150px]'>
                <p className='text-gray-700 font-bold mt-2'>{item.name}</p>
                <p className='text-gray-500 text-sm'>{item.cartegory}</p>
                <p className='text-blue-500 font-bold'>{item.price}</p>

                <button className='bg-white px-4 py-2 shadow-md w-full'>
                  + ADD
                </button>
              </div>
            </div>
          ))}
          <button className='bg-blue-600 text-white px-4 py-2 mx-auto w-[300px] mt-[150px]'>
            Add More
          </button>
        </div>
        <div className='flex flex-col gap-4 '>
          {cartItems.map((item) => (
            <div key={item.id} className='w-[450px] p-4 flex'>
              <div className='w-[300px]'>
                <img
                  src={item.img}
                  alt={item.name}
                  className='w-full h-48 object-contain rounded-lg'
                />
              </div>
              <div className='w-[150px]'>
                <p className='text-gray-700 font-bold mt-2'>{item.name}</p>
                <p className='text-gray-500 text-sm'>{item.category}</p>
                <p className='text-blue-500 font-bold'>{item.Price}</p>
                <p className='text-blue-500 font-bold mt-6'>{item.unit}</p>
              </div>
            </div>
          ))}

          <div className='border border-black rounded-sm px-4 py-2'>
            <h3 className='font-bold'>Order Summary</h3>
            <table className='mx-auto'>
              <tr>
                <td>Subtotal</td>
                <td>$296.00</td>
              </tr>
              <tr>
                <td>Estimated Shipping</td>
                <td>$50.00</td>
              </tr>
              <tr className='font-bold'>
                <td>ORDER TOTAL</td>
                <td>$346.00</td>
              </tr>
            </table>
          </div>
          <button className='bg-gray-600 text-white px-4 py-2 mx-auto w-[300px]'>
            <Link to='/checkout'>CHECK OUT</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
