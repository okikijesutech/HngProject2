import React from "react";
import { CgChevronDown, CgChevronUp } from "react-icons/cg";

const CheckoutForm = ({ title, formId, activeSection, toggleSection }) => {
  return (
    <div className='mb-6'>
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
            <div className='flex items-center justify-between'>
              <input
                type='text'
                placeholder='Input 1'
                className='w-1/2 p-2 border border-gray-300 rounded-md'
              />
              <input
                type='text'
                placeholder='Input 2'
                className='w-1/2 p-2 border border-gray-300 rounded-md'
              />
            </div>
            <div className='flex items-center justify-between'>
              <input
                type='text'
                placeholder='Input 3'
                className='w-1/2 p-2 border border-gray-300 rounded-md'
              />
              <select
                name=''
                id=''
                className='w-1/2 p-2 border border-gray-300 rounded-md'
              ></select>
            </div>
            <div className='flex items-center justify-between'>
              <select
                name=''
                id=''
                className='w-1/2 p-2 border border-gray-300 rounded-md'
              ></select>
              <input
                type='text'
                placeholder='Input 4'
                className='w-1/2 p-2 border border-gray-300 rounded-md'
              />
            </div>
            <div className='flex items-center justify-between'>
              <input
                type='email'
                placeholder='Email'
                className='w-1/2 p-2 border border-gray-300 rounded-md'
              />
              <input
                type='number'
                placeholder='Phone'
                className='w-1/2 p-2 border border-gray-300 rounded-md'
              />
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default CheckoutForm;
