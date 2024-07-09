import React from "react";

const CartHeader = ({ itemCount }) => {
  return (
    <div className='flex items-center justify-between mb-3 md:mb-6 pb-1  lg:pb-6 md:px-9 lg:px-0 border-b border-black mx-4 md:mx-0 lg:mx-[100px] font-Helvetica'>
      <h2 className='font-custom-weight text-xl md:text-2xl'>CART</h2>
      <p className='font-bold text-sm'>{itemCount} items</p>
    </div>
  );
};

export default CartHeader;
