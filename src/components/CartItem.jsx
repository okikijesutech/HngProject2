import React from "react";

const CartItem = ({ item, imageMap, removeFromCart }) => {
  return (
    <div className='w-full p-4 flex gap-2 lg:gap-10 justify-between rounded-lg hover:bg-[#FFE1DD] hover:shadow-lg transition duration-300'>
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
          className='px-3 py-2 bg-[#FFFFFF] shadow-lg hover:bg-[#f1f1f1] hover:text-[#F1C6C0] transition duration-300'
          onClick={() => removeFromCart(item.name)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
