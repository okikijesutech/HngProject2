import React from "react";
import item1 from "../assets/item1.png";
import item3 from "../assets/item3.png";
import item6 from "../assets/ZeeG.png";

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
    img: item6,
  },
  {
    name: "Nike Air Jordans",
    category: "Shoes",
    Price: "$150.00",
    unit: "3",
    img: item3,
  },
];

const CheckoutListing = () => {
  return (
    <div className='flex flex-col gap-4 '>
      {cartItems.map((item) => (
        <div key={item.id} className='w-[450px] p-4 flex'>
          <div className='w-[300px]'>
            <img
              src={item.img}
              alt={item.name}
              className='w-full h-48 object-contain rounded-xl'
            />
          </div>
          <div className='w-[150px] font-normal text-base '>
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p className='font-bold'>{item.Price}</p>
            <p className='text-lg mt-6'>{item.unit}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CheckoutListing;
