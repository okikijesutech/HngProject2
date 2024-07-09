import React, { useState } from "react";
import { useCart } from "../context/CartContext";

const PaymentSummary = () => {
  const { cartItems } = useCart();
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);

  const totalItemsPrice = cartItems.reduce((total, item) => {
    const price = parseFloat(item.price) || 0;
    const unit = parseInt(item.unit, 10) || 0;
    return total + price * unit;
  }, 0);

  const shippingFee = totalItemsPrice > 0 ? 50 : 0;

  const total = totalItemsPrice + shippingFee;

  const handleApplyPromo = () => {
    if (promoCode.trim() !== "") {
      setDiscount(total / 2);
    } else {
      setDiscount(total / 2);
    }
  };

  return (
    <div className='font-Helvetica font-bold lg:w-full'>
      <h3 className='text-2xl'>Payment Summary</h3>
      <div className='flex items-center justify-between mt-6'>
        <p className='text-lg'>Promotions</p>
        <p className='font-normal underline'>Promo Details</p>
      </div>
      <div className='p-[6px] bg-[#B1EAC8] text-center mt-4'>
        <p className='font-normal text-base'>
          50% off. Auto Applied at checkout.
        </p>
      </div>
      <div className='flex justify-between items-center mt-24'>
        <input
          type='text'
          placeholder='Type in your Promo code'
          value={promoCode}
          onChange={(e) => setPromoCode(e.target.value)}
          className='font-normal text-lg text-black bg-transparent outline-none'
        />
        <button onClick={handleApplyPromo}>Apply</button>
      </div>
      <hr className='border-[1px] border-[black]' />
      <div className='mt-2 px-2'>
        <table className='font-normal text-xl w-full'>
          <tbody>
            <tr className='flex justify-between'>
              <td className='flex-1'>
                <p>Items</p>
              </td>
              <td className='flex-1 text-right'>
                ${totalItemsPrice.toFixed(2)}
              </td>
            </tr>
            <tr className='flex justify-between'>
              <td className='flex-1'>
                <p>Discount</p>
              </td>
              <td className='flex-1 text-right'>${discount.toFixed(2)}</td>
            </tr>
            <tr className='flex justify-between text-xs text-[#21AF5A]'>
              <td className='flex-1'>
                <p>50% off</p>
              </td>
              <td className='flex-1 text-right'>-${discount.toFixed(2)}</td>
            </tr>
            <tr className='flex justify-between'>
              <td className='flex-1'>
                <p>Shipping Fee</p>
              </td>
              <td className='flex-1 text-right'>${shippingFee.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='p-[6px] bg-[#B1EAC8] mt-8 mb-4 text-center'>
        <p className='font-normal text-base'>
          Spend $50.00 more to unlock free shipping fee
        </p>
      </div>
      <div className='flex justify-between px-2 mb-6 font-normal text-xl'>
        <p>Estimated Tax</p>
        <p>Calculated in checkout</p>
      </div>
      <hr className='border-[1px] border-[black] mb-8' />
      <div className='flex justify-between font-bold text-2xl'>
        <p>TOTAL</p>
        <p>${total.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default PaymentSummary;
