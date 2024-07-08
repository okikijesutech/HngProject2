import React from "react";

const CartItem = ({ item }) => {
  return (
    <div key={item.name} className='w-[400px] p-4 flex gap-2'>
      <div className='w-[120px] lg:w-[300px]'>
        <img
          src={item.img}
          alt={item.name}
          className='w-full h-40 object-fill rounded-xl'
        />
      </div>
      <div className='w-[150px] font-normal font-Helvetica text-base '>
        <p>{item.name}</p>
        <p>{item.category}</p>
        <p className='font-bold'>{item.Price}</p>
        <p className='text-lg mt-6'>{item.unit}</p>
      </div>
    </div>
  );
};

export default CartItem;
