import React from "react";
import { toast } from "react-toastify";
import { useCart } from "../context/CartContext";

const CheckoutListing = () => {
  const { cartItems, removeFromCart } = useCart();

  const handleRemoveItem = (id) => {
    removeFromCart(id);
    toast.success("Item removed successfully!");
  };

  return (
    <div className='border border-black rounded-[3px] px-4 py-2 mx-auto font-Helvetica'>
      <h3 className='font-custom-weight md:font-bold mb-2'>Cart Items</h3>
      <table className='font-normal text-xl w-full'>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id} className='flex justify-between'>
              <td className='flex-1'>
                <img src={item.img} alt={item.name} className='w-20 h-20' />
                <p>{item.name}</p>
              </td>
              <td className='flex-1 text-right'>
                <p>$ {item.current_price[0]["NGN"][0]}</p>
                <p>Qty: {item.unit}</p>
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className='text-red-500'
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CheckoutListing;
