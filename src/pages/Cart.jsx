import React, { useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaChevronCircleRight,
  FaChevronCircleLeft,
  FaStar,
  FaRegStar,
  FaRegHeart,
} from "react-icons/fa";
import item1 from "../assets/item1.png";
import item2 from "../assets/item2.png";
import item3 from "../assets/item3.png";
import item4 from "../assets/item4.png";
import item5 from "../assets/item5.png";
import item6 from "../assets/item6.png";
import "./cart.css";

const images = [item1, item2, item3];

const items = [
  {
    name: "Original Kids' Fits",
    cartegory: "Jacket",
    price: "$50.50",
    stars: 3,
    img: item1,
  },
  {
    name: "Zee Gown",
    cartegory: "Dress",
    price: "$95.50",
    stars: 4,
    img: item1,
  },
  {
    name: "Nike Air Jordans",
    cartegory: "Shoes",
    price: "$150.00",
    stars: 4,
    img: item1,
  },
];

const cartItems = [
  {
    name: "Original Kids' Fits",
    category: "Jacket",
    Price: "$50.50",
    unit: "3",
    img: item1,
  },
  {
    name: "Zee Gown",
    category: "Dress",
    Price: "$95.50",
    unit: "1",
    img: item1,
  },
  {
    name: "Nike Air Jordans",
    category: "Shoes",
    Price: "$150.00",
    unit: "3",
    img: item1,
  },
];

const Cart = () => {
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
    <div className='bg-gradient-to-b from-pink-200 to-pink-400 px-4 pt-16'>
      <div className='flex items-center mx-0 md:mx-[200px] mb-3 md:mb-6 pb-1 md:pb-6 border-b border-black'>
        <h2 className='font-medium text-xl md:text-2xl mr-[275px] md:mr-[400px]'>
          CART
        </h2>
        <p className='font-bold text-sm'>3 items</p>
      </div>
      <div className='flex justify-center items-center gap-8 md:pb-12'>
        <div className='hidden md:flex flex-col gap-4 border-r border-black pr-2'>
          {items.map((item) => (
            <div key={item.id} className='w-[321px] md:w-[450px] p-4 flex'>
              <div className='w-[120px] md:w-[300px]'>
                <img
                  src={item.img}
                  alt={item.name}
                  className='w-full h-48 object-contain'
                />
              </div>
              <div className='w-[150px]'>
                <div className='text-base font-normal'>
                  <p>{item.name}</p>
                  <p>{item.cartegory}</p>
                  <p className='text-[#4670DC] font-bold '>{item.price}</p>
                </div>
                <div className='flex justify-between my-2 md:my-1'>
                  <div className='flex'>
                    <FaStar
                      size={24}
                      color='#F68B1E'
                      style={{
                        filter: "drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.2))",
                      }}
                    />
                    <FaStar
                      size={24}
                      color='#F68B1E'
                      style={{
                        filter: "drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.2))",
                      }}
                    />
                    <FaStar
                      size={24}
                      color='#F68B1E'
                      style={{
                        filter: "drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.2))",
                      }}
                    />
                    <FaRegStar
                      size={24}
                      color='#F68B1E'
                      style={{
                        filter: "drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.2))",
                      }}
                    />
                    <FaRegStar
                      size={24}
                      color='#F68B1E'
                      style={{
                        filter: "drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.2))",
                      }}
                    />
                  </div>
                  <FaRegHeart
                    size={24}
                    color='#EC0000'
                    style={{
                      filter: "drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.2))",
                    }}
                  />
                </div>

                <button className='bg-white px-4 py-2 shadow-md w-full border border-[#171717]'>
                  + ADD
                </button>
              </div>
            </div>
          ))}
          <button className='bg-blue-600 text-white px-4 py-2 mx-auto w-[300px] mt-[150px]'>
            Add More
          </button>
        </div>
        <div className='flex flex-col gap-4 '>
          {cartItems.map((item) => (
            <div key={item.id} className='w-[450px] p-4 flex'>
              <div className='w-[300px]'>
                <img
                  src={item.img}
                  alt={item.name}
                  className='w-full h-48 object-contain rounded-xl'
                />
              </div>
              <div className='w-[150px] font-normal text-base '>
                <p>{item.name}</p>
                <p>{item.category}</p>
                <p className='font-bold'>{item.Price}</p>
                <p className='text-lg mt-6'>{item.unit}</p>
              </div>
            </div>
          ))}
          <div className='relative flex md:hidden overflow-x-auto'>
            <FaChevronCircleLeft
              onClick={scrollLeft}
              className=' left-0 z-10 text-3xl top-1/2 '
              style={{
                backgroundColor: "#292D32",
                color: "black",
                borderRadius: "50%",

                cursor: "pointer",
                position: "absolute",
                right: "0",
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
              className=' right-0 text-3xl top-1/2'
              style={{
                backgroundColor: "#292D32",
                color: "black",
                borderRadius: "50%",

                cursor: "pointer",
                position: "absolute",
                right: "0",
                zIndex: "10",
              }}
            />
          </div>
          <div className='border border-black rounded-lg px-4 py-2 mx-auto w-[340px] md:w-auto'>
            <h3 className='text-base font-medium md:font-bold mb-2'>
              Order Summary
            </h3>
            <table className='mx-0 md:mx-auto'>
              <tr className='text-xs font-normal mb-1'>
                <td className='pr-[200px]'>Subtotal</td>
                <td>$296.00</td>
              </tr>
              <tr className='text-xs font-normal mb-2'>
                <td>Estimated Shipping</td>
                <td>$50.00</td>
              </tr>
              <tr className='font-bold text-xs'>
                <td>ORDER TOTAL</td>
                <td>$346.00</td>
              </tr>
            </table>
          </div>
          <button className='bg-gray-600 text-white px-4 py-2 mx-auto w-[300px] mt-2'>
            <Link to='/checkout'>CHECK OUT</Link>
          </button>
          <div className='block md:hidden'>
            <p className='text-sm font-normal mx-10 mt-6'>
              MEMBERS ONLY: Get FREE standard shipping on orders over $750 and
              discounted standard shipping on order below $100.{" "}
              <Link className='underline'>Sign In</Link> or{" "}
              <Link className='underline'>Join Now</Link>
            </p>
            <p className='text-base font-normal mx-10 mt-2 mb-5'>
              Need help? Chat with us
            </p>
          </div>
        </div>
      </div>
      <div className='hidden md:block lg:hidden'>
        <p className='text-sm font-normal mx-10 mt-6'>
          MEMBERS ONLY: Get FREE standard shipping on orders over $750 and
          discounted standard shipping on order below $100.{" "}
          <Link className='underline'>Sign In</Link> or{" "}
          <Link className='underline'>Join Now</Link>
        </p>
        <p className='text-base font-normal mx-10 mt-2 mb-5'>
          Need help? Chat with us
        </p>
      </div>
    </div>
  );
};

export default Cart;
