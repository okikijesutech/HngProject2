import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Pagination = ({
  currentPage,
  itemsPerPage,
  totalItems,
  onPageChange,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const getDisplayedPages = () => {
    const totalPages = pageNumbers.length;
    if (totalPages <= 5) {
      return pageNumbers;
    }

    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, currentPage + 2);

    const pages = [];

    if (startPage > 1) {
      pages.push(1);
      if (startPage > 2) {
        pages.push("...");
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push("...");
      }
      pages.push(totalPages);
    }

    return pages;
  };

  const displayedPages = getDisplayedPages();

  return (
    <div className='flex justify-center items-center mb-4 md:mb-6 lg:mb-10 mt-24 md:mt-14 lg:mt-20 font-HelveticaRounded'>
      <FaChevronLeft
        className={`text-black mr-12 md:mr-20 cursor-pointer ${
          currentPage === 1 && "opacity-50 cursor-not-allowed"
        }`}
        size={12}
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
      />
      <div className='flex items-end gap-3 md:gap-5'>
        {displayedPages.map((page, index) => (
          <div
            key={index}
            onClick={() => page !== "..." && onPageChange(page)}
            className={`flex items-center justify-center rounded-full w-8 h-8 md:w-10 md:h-10 cursor-pointer ${
              page === currentPage ? "bg-[#4670DC]" : "bg-[#D7CECE80]"
            } font-bold ${page === "..." && "cursor-default"}`}
          >
            {page}
          </div>
        ))}
      </div>
      <FaChevronRight
        className={`text-black ml-12 md:ml-20 cursor-pointer ${
          currentPage === pageNumbers.length && "opacity-50 cursor-not-allowed"
        }`}
        size={12}
        onClick={() =>
          currentPage < pageNumbers.length && onPageChange(currentPage + 1)
        }
      />
    </div>
  );
};

export default Pagination;
