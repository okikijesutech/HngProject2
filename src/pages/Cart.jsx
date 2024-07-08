import React from "react";
import { Link } from "react-router-dom";
import item1 from "../assets/item1.png";
import item2 from "../assets/item2.png";
import item3 from "../assets/item3.png";
import item5 from "../assets/item5.png";
import item6 from "../assets/ZeeG.png";
import coporate from "../assets/corporate.png";
import "./cart.css";
import OrderSummary from "../components/OrderSummary";
import CartHeader from "../components/CartHeader";
import ProductList from "../components/ProductList";
import CartItemList from "../components/CartItemList";
import MobileCarousel from "../components/CartMobileCarousel";
import CartFooter from "../components/CartFooter";

const images = [item1, item2, item3];

const items = [
  {
    name: "Corporate Wear",
    category: "Women",
    price: "$50.50",
    img: coporate,
  },
  {
    name: "Net Blouse",
    category: "Women",
    price: "$50.50",
    img: item5,
  },
  {
    name: "Nike Air Jordans",
    category: "Shoes",
    price: "$50.50",
    img: item2,
  },
];

const cartItems = [
  {
    name: "Original Kids' Fits",
    category: "Jacket",
    price: "$50.50",
    unit: "3",
    img: item1,
  },
  {
    name: "Zee Gown",
    category: "Dress",
    price: "$95.50",
    unit: "1",
    img: item6,
  },
  {
    name: "Nike Air Jordans",
    category: "Shoes",
    price: "$150.00",
    unit: "3",
    img: item3,
  },
];

const Cart = () => {
  return (
    <div className='bg-gradient-to-b from-[#FFFCFB] to-[#FBCDBD] px-4 pt-16 font-Helvetica'>
      <CartHeader itemCount={cartItems.length} />
      <div className='flex flex-col md:flex-row justify-center items-center gap-8 md:pb-12'>
        <ProductList items={items} />
        <div className='w-full md:w-auto'>
          <CartItemList cartItems={cartItems} />
          <MobileCarousel images={images} />
          <div className='px-4 md:px-[39px]'>
            <div className='w-full text-xs mt-8 md:mt-[39px]'>
              <OrderSummary />
            </div>
            <Link to='/checkout'>
              <button className='bg-[#4670DC] text-white font-Helvetica font-bold text-xl px-4 py-2 mx-auto w-full mt-4 md:mt-[40px]'>
                CHECK OUT
              </button>
            </Link>
          </div>
        </div>
      </div>
      <CartFooter />
    </div>
  );
};

export default Cart;
