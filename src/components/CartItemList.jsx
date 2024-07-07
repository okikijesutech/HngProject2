import React from "react";
import CartItem from "./CartItem";

const CartItemList = ({ cartItems }) => {
  return (
    <div className='flex flex-col gap-4 '>
      {cartItems.map((item) => (
        <CartItem key={item.name} item={item} />
      ))}
    </div>
  );
};

export default CartItemList;
