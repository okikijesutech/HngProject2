import React from "react";

const CartHeader = ({ itemCount }) => {
  return (
    <div className='flex items-center justify-between mb-3 md:mb-6 pb-1 md:pb-6 border-b border-black mx-4 md:mx-[200px]'>
      <h2 className='font-medium text-xl md:text-2xl'>CART</h2>
      <p className='font-bold text-sm'>{itemCount} items</p>
    </div>
  );
};

export default CartHeader;
