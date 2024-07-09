import React from "react";
import { FaXmark } from "react-icons/fa6";

const CartItem = ({ item, imageMap, removeFromCart }) => {
  return (
    <div className='w-full p-4 flex gap-2'>
      <div className='flex-1'>
        <img
          src={imageMap[item.img]}
          alt={item.name}
          className='w-full h-40 object-fill rounded-xl'
        />
      </div>
      <div className='flex-1 font-normal font-Helvetica text-base'>
        <p>{item.name}</p>
        <p>{item.category}</p>
        <p className='font-bold'>${item.price}</p>
        <p className='text-lg mt-6'>Units: {item.unit}</p>

        <button
          className='px-3 py-2 bg-[#FFFFFF] shadow-lg'
          onClick={() => removeFromCart(item.name)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
