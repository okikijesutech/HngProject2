import React, { useState } from "react";
import { CgChevronDown, CgChevronUp } from "react-icons/cg";
import verve from "../assets/verve.png";
import paypal from "../assets/paypal.png";
import mastercard from "../assets/mastercard.png";
import googlepay from "../assets/googlepay.png";

const CheckoutForm = ({ title, formId, activeSection, toggleSection }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    country: "",
    state: "",
    postalCode: "",
    email: "",
    phoneNumber: "",
    cardHolderName: "",
    cardNumber: "",
    expiryDate: "",
    cvc: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className='mb-6 rounded-md'>
      <div
        className='flex items-center justify-between bg-white p-4 cursor-pointer'
        onClick={() => toggleSection(formId)}
      >
        <h4 className='text-lg font-bold'>{title}</h4>
        {activeSection === formId ? (
          <CgChevronUp className='text-2xl' />
        ) : (
          <CgChevronDown className='text-2xl' />
        )}
      </div>
      {activeSection === formId && (
        <div className='p-4 bg-white'>
          <form className='flex flex-col gap-6' onSubmit={handleSubmit}>
            {formId === "payment" ? (
              <>
                <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
                  <input
                    type='text'
                    placeholder='Card Holder Name'
                    name='cardHolderName'
                    value={formData.cardHolderName}
                    onChange={handleInputChange}
                    className='w-full p-2 border-b border-gray-300'
                  />
                  <input
                    type='text'
                    placeholder='Card Number'
                    name='cardNumber'
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    className='w-full p-2 border-b border-gray-300'
                  />
                </div>
                <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
                  <input
                    type='text'
                    placeholder='Expiry Date'
                    name='expiryDate'
                    value={formData.expiryDate}
                    onChange={handleInputChange}
                    className='w-full md:w-1/2 p-2 border-b border-gray-300'
                  />
                  <input
                    type='text'
                    placeholder='CVC'
                    name='cvc'
                    value={formData.cvc}
                    onChange={handleInputChange}
                    className='w-full md:w-1/2 p-2 border-b border-gray-300'
                  />
                </div>
                <div className='flex gap-8 justify-between items-center'>
                  <img src={verve} alt='verve' className='h-[30px]' />
                  <img src={mastercard} alt='mastercard' className='h-[40px]' />
                  <img src={paypal} alt='paypal' className='h-[40px]' />
                  <img src={googlepay} alt='googlepay' className='h-[40px]' />
                </div>
              </>
            ) : (
              <>
                <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
                  <input
                    type='text'
                    placeholder='First Name*'
                    name='firstName'
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className='w-full p-2 border-b border-gray-300'
                  />
                  <input
                    type='text'
                    placeholder='Last Name*'
                    name='lastName'
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className='w-full p-2 border-b border-gray-300'
                  />
                </div>
                <input
                  type='text'
                  placeholder='Address Line*'
                  name='address'
                  value={formData.address}
                  onChange={handleInputChange}
                  className='w-full p-2 border-b border-gray-300'
                />
                <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
                  <input
                    type='text'
                    placeholder='Country*'
                    name='country'
                    value={formData.country}
                    onChange={handleInputChange}
                    className='w-full md:w-1/2 p-2 border-b border-gray-300'
                  />
                  <input
                    type='text'
                    placeholder='State*'
                    name='state'
                    value={formData.state}
                    onChange={handleInputChange}
                    className='w-full md:w-1/2 p-2 border-b border-gray-300'
                  />
                </div>
                <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
                  <input
                    type='text'
                    placeholder='Postal Code*'
                    name='postalCode'
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    className='w-full md:w-1/2 p-2 border-b border-gray-300'
                  />
                  <input
                    type='text'
                    placeholder='Email Address*'
                    name='email'
                    value={formData.email}
                    onChange={handleInputChange}
                    className='w-full md:w-1/2 p-2 border-b border-gray-300'
                  />
                </div>
                <input
                  type='text'
                  placeholder='Phone Number*'
                  name='phoneNumber'
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className='w-full p-2 border-b border-gray-300'
                />
              </>
            )}
            <button type='submit' className='bg-[#4670DC] text-white px-4 py-3'>
              Save and Continue
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default CheckoutForm;
