import React from "react";
import CartItem from "./CartItem";
import { useCart } from "../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";
import imageMap from "../imageMap";

const CartItemList = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div
      className='flex flex-col gap-4 w-full overflow-y-auto custom-scrollbar p-2 md:p-4 '
      style={{ maxHeight: "600px", minHeight: "600px" }}
    >
      {cartItems.length === 0 ? (
        <div className='flex flex-col justify-center items-center h-full text-center'>
          <FaShoppingCart className='text-4xl mb-4 text-gray-400' />
          <p className='text-lg font-semibold text-gray-600'>
            You have nothing in your cart
          </p>
        </div>
      ) : (
        cartItems.map((item) => (
          <CartItem
            key={item.name}
            item={item}
            imageMap={imageMap}
            removeFromCart={removeFromCart}
          />
        ))
      )}
    </div>
  );
};

export default CartItemList;
