import React from "react";
import CartItem from "./CartItem";
import { useCart } from "../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";
import imageMap from "../imageMap";

const CartItemList = () => {
  const { cartItems } = useCart();

  return (
    <div className='flex flex-col gap-4 md:h-[625px] w-full lg:w-96 overflow-x-hidden overflow-y-auto custom-scrollbar p-2 md:p-4'>
      {cartItems.length === 0 ? (
        <div className='flex flex-col justify-center items-center h-full text-center'>
          <FaShoppingCart className='text-4xl mb-4 text-gray-400' />
          <p className='text-lg font-semibold text-gray-600'>
            You have nothing in your cart
          </p>
        </div>
      ) : (
        cartItems.map((item) => <CartItem key={item.name} item={item} />)
      )}
    </div>
  );
};

export default CartItemList;
