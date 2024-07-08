import React from "react";

const OrderSummary = () => {
  return (
    <div className='border border-black rounded-[3px] px-4 py-2 mx-auto font-Helvetica'>
      <h3 className='font-custom-weight md:font-bold mb-2'>Order Summary</h3>
      <table className='w-full'>
        <tbody>
          <tr className='font-normal mb-1'>
            <td className='pr-4'>Subtotal</td>
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
        </tbody>
      </table>
    </div>
  );
};

export default OrderSummary;
