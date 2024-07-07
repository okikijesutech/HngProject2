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
    <div className='relative flex md:hidden overflow-x-auto'>
      <FaChevronCircleLeft
        onClick={scrollLeft}
        className=' left-4 z-10 text-2xl top-1/2 '
        style={{
          backgroundColor: "#292D32",
          color: "black",
          borderRadius: "50%",
          cursor: "pointer",
          position: "absolute",
          zIndex: "10",
        }}
      />
      <div
        ref={scrollRef}
        className='flex overflow-x-auto scrollbar-hide'
        style={{ scrollBehavior: "smooth" }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            className='w-48 h-48 object-contain mx-2'
          />
        ))}
      </div>
      <FaChevronCircleRight
        onClick={scrollRight}
        className=' right-4 text-2xl top-1/2'
        style={{
          backgroundColor: "#292D32",
          color: "black",
          borderRadius: "50%",
          cursor: "pointer",
          position: "absolute",
          zIndex: "10",
        }}
      />
    </div>
  );
};

export default CartMobileCarousel;
