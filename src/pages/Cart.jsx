import React from "react";
import { Link, useNavigate } from "react-router-dom";
import PaymentSummary from "../components/PaymentSummary";
import CartHeader from "../components/CartHeader";
import CartItemList from "../components/CartItemList";
import MobileCarousel from "../components/CartMobileCarousel";
import CartFooter from "../components/CartFooter";

const images = [];

const Cart = () => {
  const navigate = useNavigate();
  const handleAddMoreClick = () => {
    navigate("/#listings");
  };
  return (
    <div className='bg-gradient-to-b from-[#FFFCFB] to-[#FBCDBD] px-4 pt-16 font-Helvetica'>
      <CartHeader itemCount={0} />
      <div className='flex flex-col md:flex-row justify-center items-start gap-8 w-full md:pb-12'>
        <div>
          <CartItemList />
          <button
            onClick={handleAddMoreClick}
            className='bg-[#D7CECE80] w-full md:w-[70%] py-2 mt-6 md:mt-24'
          >
            Add More
          </button>
        </div>
        <div className='hidden md:block h-[800px] border-l-2 border-black'></div>
        <div className='w-full md:w-auto'>
          <PaymentSummary />
          <MobileCarousel images={images} />
          <div className='flex justify-between items-center w-full'>
            <Link
              to='/checkout'
              className='text-[#4670DC] bg-white font-Helvetica font-bold text-xl px-4 py-2 w-1/2 mt-4 md:mt-[40px] mr-2 text-center'
            >
              Payment
            </Link>
            <Link
              to='/checkout'
              className='bg-[#4670DC] text-white font-Helvetica font-bold text-xl px-4 py-2 w-1/2 mt-4 md:mt-[40px] ml-2 text-center'
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
