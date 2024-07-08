import React from "react";
import { FaXmark } from "react-icons/fa6";
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
    <div className='p-4'>
      <hr className='border-black mb-4' />
      <table className='w-full border-collapse font-helvetica text-base md:text-lg lg:text-xl font-bold leading-tight text-left'>
        <thead>
          <tr className='border-b border-black text-xs md:text-base lg:text-lg font-bold'>
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
              className='border-b border-black text-xs md:text-base lg:text-lg font-normal'
            >
              <td className='text-red-500'>
                <FaXmark size={14} />
              </td>
              <td>
                <img
                  src={item.img}
                  alt={item.name}
                  className='w-8 h-8 md:w-16 md:h-16 lg:w-24 lg:h-24 object-contain rounded-lg'
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
