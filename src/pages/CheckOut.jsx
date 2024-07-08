import React from "react";
import CheckoutListing from "../container/CheckoutListing";
import OrderSummary from "../components/OrderSummary";

const CheckOut = () => {
  return (
    <div className='bg-gradient-to-b from-[#FFFCFB] to-[#FBCDBD] px-4 pt-6 lg:pt-16 font-Helvetica'>
      <CheckoutListing />
      <div className='flex flex-col-reverse md:flex-col-reverse lg:flex-row lg:gap-[225px] mt-14 md:mt-36 lg:mt-24 px-[14px] md:px-[33px]'>
        <div className='flex flex-col md:flex-row lg:flex-col mt-16 lg:mt-0 text-base font-bold'>
          <button className='bg-[white] px-4 py-2 mx-auto w-[175px] md:w-[300px] lg:w-[391px] rounded-md'>
            Delivery Details
          </button>
          <button className='bg-[white] px-4 py-2 mx-auto w-[175px] md:w-[300px] lg:w-[391px] mt-16 md:mt-0 lg:mt-16 rounded-md'>
            Payment <span className='hidden md:inline'>Details</span>
          </button>
        </div>
        <div className='w-[300px] h-[97px] md:w-[696px] md:h-[238px] text-[10px] md:text-2xl pl-[100px] md:pl- lg:pl-0'>
          <OrderSummary />
        </div>
      </div>
      <div className='flex items-center mt-48 md:mt-52 lg:mt-12 pb-16 md:pb-12 lg:pb-8'>
        <button className='bg-[#4670DC] text-white px-4 py-3 mx-auto w-[300px] md:w-[530px] text-base md:text-xl lg:text-2xl font-bold  '>
          ORDER
        </button>
      </div>
    </div>
  );
};

export default CheckOut;
