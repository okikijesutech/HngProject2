import React from "react";

const CartItem = ({ item, imageMap, removeFromCart }) => {
  return (
    <div
      key={item.name}
      className='w-full md:w-[260px] lg:w[700px] p-4 flex gap-2'
    >
      <div className='flex-1 md:w-[200px] lg:w-[400px]'>
        <img
          src={imageMap[item.img]}
          alt={item.name}
          className='w-full h-40 object-fill rounded-xl'
        />
      </div>
      <div className='flex-1 w-[200px] font-normal font-Helvetica text-base'>
        <p>{item.name}</p>
        <p>{item.category}</p>
        <p className='font-bold'>${item.price}</p>
        <p className='text-lg mt-6'>Units: {item.unit}</p>
      </div>
    </div>
  );
};

export default CartItem;
