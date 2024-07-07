import React from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Pagination = () => {
  return (
    <div className='flex justify-center items-center mt-56'>
      <FaChevronLeft className='text-black mr-12 md:mr-20' size={12} />
      <div className='flex items-end gap-3 md:gap-5'>
        {[1, 2, 3, 4, "...", 5].map((page, index) => (
          <Link
            key={index}
            className={`flex items-center justify-center rounded-full w-8 h-8 md:w-10 md:h-10 ${
              page === 3 ? "bg-[#4670DC]" : "bg-[#D7CECE80]"
            } font-bold`}
          >
            {page}
          </Link>
        ))}
      </div>
      <FaChevronRight className='text-black ml-12 md:ml-20' size={12} />
    </div>
  );
};

export default Pagination;
