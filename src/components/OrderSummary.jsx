import React from "react";

const OrderSummary = () => {
  return (
    <div className='border border-black rounded-lg px-4 py-2 mx-auto md:w-auto'>
      <h3 className='font-medium md:font-bold mb-2'>Order Summary</h3>
      <table className='mx-0 md:mx-auto'>
        <tr className='font-normal mb-1'>
          <td className='pr-[100px] md:pr-[200px]'>Subtotal</td>
          <td>$296.00</td>
        </tr>
        <tr className='font-normal mb-2'>
          <td>Estimated Shipping</td>
          <td>$50.00</td>
        </tr>
        <tr className='font-bold'>
          <td>ORDER TOTAL</td>
          <td>$346.00</td>
        </tr>
      </table>
    </div>
  );
};

export default OrderSummary;
