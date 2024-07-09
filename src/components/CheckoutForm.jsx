import React from "react";
import { CgChevronDown, CgChevronUp } from "react-icons/cg";
import verve from "../assets/verve.png";
import stripe from "../assets/stripe.png";
import paypal from "../assets/paypal.png";
import mastercard from "../assets/mastercard.png";
import googlepay from "../assets/googlepay.png";

const CheckoutForm = ({ title, formId, activeSection, toggleSection }) => {
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
          <form className='flex flex-col gap-6'>
            {formId === "payment" ? (
              <>
                <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
                  <input
                    type='text'
                    placeholder='Address Line'
                    className='w-full md:w-1/2 p-2 border-b border-gray-300'
                  />
                  <input
                    type='text'
                    placeholder='City'
                    className='w-full md:w-1/2 p-2 border-b border-gray-300'
                  />
                </div>
                <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
                  <input
                    type='text'
                    placeholder='State'
                    className='w-full md:w-1/2 p-2 border-b border-gray-300'
                  />
                  <input
                    type='text'
                    placeholder='Postal Code*'
                    className='w-full md:w-1/2 p-2 border-b border-gray-300'
                  />
                </div>
                <div className='flex justify-between gap-4 my-4'>
                  <img src={verve} alt='Verve' className='w-1/5 h-auto' />
                  <img src={paypal} alt='PayPal' className='w-1/5 h-auto' />
                  <img src={stripe} alt='Stripe' className='w-1/5 h-auto' />
                  <img
                    src={mastercard}
                    alt='MasterCard'
                    className='w-1/5 h-auto'
                  />
                  <img
                    src={googlepay}
                    alt='Google Pay'
                    className='w-1/5 h-auto'
                  />
                </div>
                <h4 className='text-lg font-bold'>Card Information</h4>
                <div className='flex flex-col gap-6'>
                  <input
                    type='text'
                    placeholder='Card Holder Name'
                    className='p-2 border-b border-gray-300'
                  />
                  <input
                    type='text'
                    placeholder='Card Number'
                    className='p-2 border-b border-gray-300'
                  />
                  <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
                    <input
                      type='text'
                      placeholder='Expiry Date'
                      className='w-full md:w-1/2 p-2 border-b border-gray-300'
                    />
                    <input
                      type='text'
                      placeholder='CVC'
                      className='w-full md:w-1/2 p-2 border-b border-gray-300'
                    />
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
                  <input
                    type='text'
                    placeholder='First Name*'
                    className='w-full md:w-1/2 p-2 border-b border-gray-300'
                  />
                  <input
                    type='text'
                    placeholder='Last Name*'
                    className='w-full md:w-1/2 p-2 border-b border-gray-300'
                  />
                </div>
                <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
                  <input
                    type='text'
                    placeholder='Address Line'
                    className='w-full md:w-1/2 p-2 border-b border-gray-300'
                  />
                  <select
                    name='country'
                    id='country'
                    className='w-full md:w-1/2 p-2 border-b border-gray-300'
                  >
                    <option value='' disabled selected>
                      Country
                    </option>
                    <option value='Nigeria'>Nigeria</option>
                    <option value='Ghana'>Ghana</option>
                    <option value='South Africa'>South Africa</option>
                    <option value='United States'>United States</option>
                  </select>
                </div>
                <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
                  <select
                    name='state'
                    id='state'
                    className='w-full md:w-1/2 p-2 border-b border-gray-300'
                  >
                    <option value='' disabled selected>
                      State
                    </option>
                    <option value='Abia'>Abia</option>
                    <option value='Adamawa'>Adamawa</option>
                    <option value='Akwa Ibom'>Akwa Ibom</option>
                    <option value='Anambra'>Anambra</option>
                    <option value='Bauchi'>Bauchi</option>
                    <option value='Bayelsa'>Bayelsa</option>
                    <option value='Benue'>Benue</option>
                    <option value='Borno'>Borno</option>
                    <option value='Cross River'>Cross River</option>
                    <option value='Delta'>Delta</option>
                    <option value='Ebonyi'>Ebonyi</option>
                    <option value='Edo'>Edo</option>
                    <option value='Ekiti'>Ekiti</option>
                    <option value='Enugu'>Enugu</option>
                    <option value='Gombe'>Gombe</option>
                    <option value='Imo'>Imo</option>
                    <option value='Jigawa'>Jigawa</option>
                    <option value='Kaduna'>Kaduna</option>
                    <option value='Kano'>Kano</option>
                    <option value='Katsina'>Katsina</option>
                    <option value='Kebbi'>Kebbi</option>
                    <option value='Kogi'>Kogi</option>
                    <option value='Kwara'>Kwara</option>
                    <option value='Lagos'>Lagos</option>
                    <option value='Nasarawa'>Nasarawa</option>
                    <option value='Niger'>Niger</option>
                    <option value='Ogun'>Ogun</option>
                    <option value='Ondo'>Ondo</option>
                    <option value='Osun'>Osun</option>
                    <option value='Oyo'>Oyo</option>
                    <option value='Plateau'>Plateau</option>
                    <option value='Rivers'>Rivers</option>
                    <option value='Sokoto'>Sokoto</option>
                    <option value='Taraba'>Taraba</option>
                    <option value='Yobe'>Yobe</option>
                    <option value='Zamfara'>Zamfara</option>
                    <option value='FCT'>Federal Capital Territory</option>
                  </select>
                  <input
                    type='text'
                    placeholder='Postal Code*'
                    className='w-full md:w-1/2 p-2 border-b border-gray-300'
                  />
                </div>
                <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
                  <input
                    type='email'
                    placeholder='Email'
                    className='w-full md:w-1/2 p-2 border-b border-gray-300'
                  />
                  <input
                    type='number'
                    placeholder='Phone Number'
                    className='w-full md:w-1/2 p-2 border-b border-gray-300'
                  />
                </div>
              </>
            )}
          </form>
          {formId !== "payment" && (
            <div>
              <p className='font-normal md:font-bold text-sm md:text-base mt-2 md:mt-4'>
                By Signing up, I agree that the company may email me news and
                offers. I can unsubscribe at any time. I have read the Zee
                Privacy Policy. Offer details, financial incentives available
                here.
              </p>
              <div className='flex items-center font-normal md:font-bold text-xs md:text-sm mt-1 md:mt-2'>
                <input type='checkbox' name='' id='' className='mr-2' />
                <p>Use Shipping address as billing address</p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CheckoutForm;
