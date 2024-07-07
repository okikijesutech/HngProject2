import React from "react";
import { FaXmark, FaChevronLeft } from "react-icons/fa6";
import item1 from "../assets/item1.png";
import item3 from "../assets/item3.png";
import item6 from "../assets/ZeeG.png";

const cartItems = [
  {
    name: "Original Kids' Fits",
    category: "Jacket",
    price: "$50.50",
    unit: "3",
    img: item1,
    subtotal: "$151.50",
  },
  {
    name: "Zee Gown",
    category: "Dress",
    price: "$95.50",
    unit: "1",
    img: item6,
    subtotal: "$95.50",
  },
  {
    name: "Nike Air Jordans",
    category: "Shoes",
    price: "$150.00",
    unit: "3",
    img: item3,
    subtotal: "$450.00",
  },
];

const CheckoutListing = () => {
  return (
    <div className='p-6'>
      <div className='flex lg:block '>
        <FaChevronLeft size={24} className=' lg:hidden mr-28 md:mr-8' />
        <h1 className='font-helvetica font-bold text-40 leading-46 text-center mb-4 md:text-left lg:text-center md:text-2xl lg:text-4xl md:leading-46'>
          Review your items
        </h1>
      </div>
      <hr className='border-black mb-6' />
      <table className='w-full border-collapse font-helvetica text-24 font-bold leading-27.6 text-left'>
        <thead>
          <tr className='border-b border-black text-xs md:text-2xl font-bold'>
            <th></th>
            <th></th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr
              key={item.name}
              className='border-b border-black text-xs md:text-2xl lg:text-4xl font-normal'
            >
              <td className='text-red-500'>
                <FaXmark />
              </td>
              <td>
                <img
                  src={item.img}
                  alt={item.name}
                  className='w-8 h-8 md:w-24 md:h-24 lg:w-40 lg:h-40 object-contain rounded-lg'
                />
              </td>
              <td>{item.name}</td>
              <td className='font-bold'>{item.price}</td>
              <td>{item.unit}</td>
              <td>{item.subtotal}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CheckoutListing;
