import React, { useState } from "react";
import ListingItemCard from "../components/ListingItemCard";
import Pagination from "../components/Pagination";
import products from "../items.json";
import imageMap from "../imageMap";
import { useCart } from "../context/CartContext";

const Listings = ({ toggleFavorite, rateProduct }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const { addToCart } = useCart();

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div id='listing' className='bg-gradient-to-b from-[#FFFCFB] to-[#FBCDBD]'>
      <div className='bg-[#4670DC] w-[105px] md:w-[160px] text-white p-2 rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[20px] md:mx-auto mt-9 flex items-center'>
        <p className='font-custom-weight font-SansSerifBldFLF text-base md:text-2xl'>
          New Arrivals
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12'>
        {currentProducts.map((product) => (
          <div className='px-24'>
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
