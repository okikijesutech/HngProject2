import React from "react";
import { useCart } from "../context/CartContext";

const OrderSummary = () => {
  const { cartItems } = useCart();

  const totalItemsPrice = cartItems.reduce((total, item) => {
    const price = parseFloat(item.price) || 0;
    const unit = parseInt(item.unit, 10) || 0;
    return total + price * unit;
  }, 0);

  const shippingFee = totalItemsPrice > 0 ? 50 : 0;
  const discount = 0;
  const total = totalItemsPrice + shippingFee - discount;

  return (
    <div className='border border-black rounded-[3px] px-4 py-2 mx-auto font-Helvetica'>
      <h3 className='font-custom-weight md:font-bold mb-2'>Order Summary</h3>

      <table className='font-normal text-xl w-full'>
        <tbody>
          <tr className='flex justify-between'>
            <td className='flex-1'>
              <p>Items</p>
            </td>
            <td className='flex-1 text-right'>${totalItemsPrice.toFixed(2)}</td>
          </tr>
          <tr className='flex justify-between'>
            <td className='flex-1'>
              <p>Discount</p>
            </td>
            <td className='flex-1 text-right'>${discount.toFixed(2)}</td>
          </tr>
          <tr className='flex justify-between'>
            <td className='flex-1'>
              <p>Shipping Fee</p>
            </td>
            <td className='flex-1 text-right'>${shippingFee.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>

      <div className='p-[6px] bg-[#B1EAC8] mt-8 mb-4 text-center'>
        <p className='font-normal text-base'>
          Spend $50.00 more to unlock free shipping fee
        </p>
      </div>
      <hr className='border-[1px] border-[black] mb-8' />
      <div className='flex justify-between font-bold text-2xl'>
        <p>TOTAL</p>
        <p>${total.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default OrderSummary;
