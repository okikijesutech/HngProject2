import React, { useState, useEffect } from "react";
import ListingItemCard from "../components/ListingItemCard";
import Pagination from "../components/Pagination";
import products from "../items.json";
import imageMap from "../imageMap";
import { useCart } from "../context/CartContext";

const Listings = ({ toggleFavorite, rateProduct }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { addToCart } = useCart();
  const [itemsPerPage, setItemsPerPage] = useState(9); // Default for desktop

  const calculateItemsPerPage = () => {
    if (window.innerWidth < 768) {
      setItemsPerPage(10);
    } else {
      setItemsPerPage(9);
    }
  };

  useEffect(() => {
    calculateItemsPerPage();
    window.addEventListener("resize", calculateItemsPerPage);
    return () => {
      window.removeEventListener("resize", calculateItemsPerPage);
    };
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div
      id='listing'
      className='bg-gradient-to-b from-[#FFFCFB] to-[#FBCDBD] p-4'
    >
      <div className='bg-[#4670DC] w-[115px] md:w-[160px] text-white p-2 rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[20px] md:mx-auto mt-9 flex items-center'>
        <p className='font-custom-weight font-SansSerifBldFLF text-base md:text-2xl'>
          New Arrivals
        </p>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-4 mt-12'>
        {currentProducts.map((product) => (
          <div className='md:px-10 lg:px-24'>
            <ListingItemCard
              key={product.id}
              item={product}
              imageMap={imageMap}
              addToCart={addToCart}
              toggleFavorite={toggleFavorite}
              rateProduct={rateProduct}
            />
          </div>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalItems={products.length}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Listings;
