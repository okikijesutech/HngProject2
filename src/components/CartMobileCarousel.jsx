import React, { useRef } from "react";
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";

const CartMobileCarousel = ({ images }) => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div className='relative flex md:hidden overflow-x-auto px-16'>
      <FaChevronCircleLeft
        onClick={scrollLeft}
        className='absolute left-12 text-2xl cursor-pointer'
        style={{
          backgroundColor: "#292D32",
          color: "black",
          borderRadius: "50%",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      />
      <div
        ref={scrollRef}
        className='flex gap-6 overflow-x-auto scrollbar-hide'
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            className='w-20 h-20 object-contain mx-2'
            alt={`carousel-item-${index}`}
          />
        ))}
      </div>
      <FaChevronCircleRight
        onClick={scrollRight}
        className='absolute right-12 text-2xl cursor-pointer'
        style={{
          backgroundColor: "#292D32",
          color: "black",
          borderRadius: "50%",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      />
    </div>
  );
};

export default CartMobileCarousel;
