import React from "react";
import { Link } from "react-router-dom";

const CartFooter = () => {
  return (
    <>
      <div className='hidden md:block lg:hidden'>
        <p className='text-sm font-normal mx-10 mt-6'>
          MEMBERS ONLY: Get FREE standard shipping on orders over $750 and
          discounted standard shipping on orders below $100.{" "}
          <Link className='underline'>Sign In</Link> or{" "}
          <Link className='underline'>Join Now</Link>
        </p>
        <p className='text-base font-normal mx-10 mt-2 pb-5'>
          Need help? Chat with us
        </p>
      </div>
      <div className='block md:hidden'>
        <p className='text-sm font-normal mx-3 mt-6'>
          MEMBERS ONLY: Get FREE standard shipping on orders over $750 and
          discounted standard shipping on orders below $100.{" "}
          <Link className='underline'>Sign In</Link> or{" "}
          <Link className='underline'>Join Now</Link>
        </p>
        <p className='text-base font-normal mx-3 mt-2 pb-5'>
          Need help? Chat with us
        </p>
      </div>
    </>
  );
};

export default CartFooter;
