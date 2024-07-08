import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CheckoutListing from "../container/CheckoutListing";
import OrderSummary from "../components/OrderSummary";
import { CgChevronLeft } from "react-icons/cg";
import CheckoutForm from "../components/CheckoutForm";

const CheckOut = () => {
  const [activeSection, setActiveSection] = useState("shipping");
  const navigate = useNavigate();

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className='bg-gradient-to-b from-[#FFFCFB] to-[#FBCDBD] px-4 pt-6 lg:pt-16 font-Helvetica'>
      <div className='flex lg:block'>
        <CgChevronLeft
          size={20}
          className='lg:hidden mr-4'
          onClick={() => navigate(-1)}
        />
        <h1 className='font-helvetica font-bold text-2xl md:text-3xl lg:text-4xl leading-tight text-center mb-4 md:text-left lg:text-center'>
          Review your items
        </h1>
      </div>
      <div className='flex flex-wrap gap-4'>
        <div className='w-full md:w-[300px]'>
          <div className='mb-4'>
            <OrderSummary />
          </div>
          <div>
            <CheckoutListing />
          </div>
        </div>
        <div className='flex-1'>
          {[
            { title: "Shipping Address", formId: "shipping" },
            { title: "Delivery", formId: "delivery" },
            { title: "Payment", formId: "payment" },
          ].map(({ title, formId }) => (
            <CheckoutForm
              key={formId}
              title={title}
              formId={formId}
              activeSection={activeSection}
              toggleSection={toggleSection}
            />
          ))}
        </div>
      </div>
      <div className='flex items-center mt-12 md:mt-52 lg:mt-12 pb-8'>
        <button className='bg-[#4670DC] text-white px-4 py-3 mx-auto w-full md:w-[300px] text-base md:text-xl lg:text-2xl font-bold'>
          ORDER
        </button>
      </div>
    </div>
  );
};

export default CheckOut;
