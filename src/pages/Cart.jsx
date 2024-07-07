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
    cartegory: "Women",
    price: "$50.50",
    img: coporate,
  },
  {
    name: "Net Blouse",
    cartegory: "Women",
    price: "$50.50",
    img: item5,
  },
  {
    name: "Nike Air Jordans",
    cartegory: "Shoes",
    price: "$50.50",
    img: item2,
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
    img: item6,
  },
  {
    name: "Nike Air Jordans",
    category: "Shoes",
    Price: "$150.00",
    unit: "3",
    img: item3,
  },
];

const Cart = () => {
  return (
    <div className='bg-gradient-to-b from-pink-200 to-pink-400 px-4 pt-16'>
      <CartHeader itemCount={cartItems.length} />
      <div className='flex justify-center items-center gap-8 md:pb-12'>
        <ProductList items={items} />
        <div>
          <CartItemList cartItems={cartItems} />
          <MobileCarousel images={images} />
          <div className='px-[39px]'>
            <div className='w-full md:w-[340px] text-xs mt-[39px]'>
              <OrderSummary />
            </div>
            <button className='bg-gray-600 text-white px-4 py-2 mx-auto w-full md:w-[300px] mt-[45px] md:mt-[40px]'>
              <Link to='/checkout'>CHECK OUT</Link>
            </button>
          </div>
        </div>
      </div>
      <CartFooter />
    </div>
  );
};

export default Cart;
