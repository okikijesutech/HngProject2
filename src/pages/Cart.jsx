import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PaymentSummary from "../components/PaymentSummary";
import CartHeader from "../components/CartHeader";
import CartItemList from "../components/CartItemList";
import MobileCarousel from "../components/CartMobileCarousel";
import CartFooter from "../components/CartFooter";

const images = [];

const Cart = () => {
  const [showPaymentSummary, setShowPaymentSummary] = useState(false);
  const navigate = useNavigate();

  const handlePaymentSummaryClick = () => {
    setShowPaymentSummary(true);
  };

  const handleAddMoreClick = () => {
    navigate("/#listings");
  };
  return (
    <div className='bg-gradient-to-b from-[#FFFCFB] to-[#FBCDBD] px-4 pt-16 font-Helvetica'>
      <CartHeader itemCount={0} />
      <div className='flex flex-col md:flex-row justify-center items-start gap-8 w-full md:px-[100px] md:pb-12'>
        <div className='flex-1'>
          <CartItemList />
          <div className='block md:hidden'>
            <MobileCarousel images={images} />
          </div>
          <button
            onClick={handleAddMoreClick}
            className='hidden md:block bg-[#D7CECE80] w-full md:w-[70%] py-2 mt-6 md:mt-24'
          >
            Add More
          </button>
        </div>
        <div className='hidden md:block h-[800px] border-l-2 border-black'></div>
        <button
          onClick={handlePaymentSummaryClick}
          className='bg-[#4670DC] text-white md:hidden font-Helvetica font-bold text-base lg:text-xl px-4 py-2 w-full mt-4 md:mt-[40px] md:mr-2 text-center'
        >
          Payment Summary
        </button>
        <div className='w-full flex-1 md:w-auto'>
          <PaymentSummary />
          <MobileCarousel images={images} />
          <div className='flex flex-col md:flex-row justify-center  md:justify-between items-center w-full'>
            <Link
              to='/checkout'
              className='text-[#4670DC] bg-white font-Helvetica font-bold text-base lg:text-xl px-4 py-2 w-1/2 mt-4 md:mt-[40px] md:mr-2 text-center'
            >
              Payment
            </Link>
            <Link
              to='/checkout'
              className='bg-[#4670DC] text-white font-Helvetica font-bold text-base lg:text-xl px-4 py-2 w-1/2 mt-4 md:mt-[40px] md:ml-2 text-center'
            >
              CHECK OUT
            </Link>
          </div>
        </div>
      </div>
      <CartFooter />
    </div>
  );
};

export default Cart;
