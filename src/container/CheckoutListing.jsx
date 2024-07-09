import React from "react";
import { FaXmark } from "react-icons/fa6";
import { useCart } from "../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";
import imageMap from "../imageMap";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CheckoutListing = () => {
  const { cartItems, removeFromCart } = useCart();

  const handleRemoveFromCart = (itemName) => {
    removeFromCart(itemName);
    toast.warning("Item removed successfully from cart!");
  };

  return (
    <div className='p-4'>
      <ToastContainer />
      <hr className='border-black mb-4' />
      {cartItems.length === 0 ? (
        <div className='flex flex-col justify-center items-center h-full text-center'>
          <FaShoppingCart className='text-4xl mb-4 text-gray-400' />
          <p className='text-lg font-semibold text-gray-600'>No orders yet</p>
        </div>
      ) : (
        <table className='w-full border-collapse font-helvetica text-base md:text-lg lg:text-xl font-bold leading-tight text-left'>
          <thead>
            <tr className='border-b border-black text-xs md:text-base lg:text-lg font-bold text-center'>
              <th></th>
              <th></th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr
                key={item.name}
                className='border-b border-black text-xs md:text-base lg:text-lg font-normal text-center'
              >
                <td className='text-[#D13737]'>
                  <FaXmark
                    size={14}
                    onClick={() => handleRemoveFromCart(item.name)}
                  />
                </td>
                <td>
                  <img
                    src={imageMap[item.img]}
                    alt={item.name}
                    className='w-8 h-8 md:w-16 md:h-16 lg:w-24 lg:h-24 object-contain rounded-lg'
                  />
                </td>
                <td>{item.name}</td>
                <td className='font-bold'>{item.price}</td>
                <td>{item.unit}</td>
                <td>{(item.price * item.unit).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CheckoutListing;
