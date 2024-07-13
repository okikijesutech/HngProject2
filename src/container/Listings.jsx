import React, { useState, useEffect } from "react";
import axios from "axios";
import ListingItemCard from "../components/ListingItemCard";
import Pagination from "../components/Pagination";
import { useCart } from "../context/CartContext";

const Listings = ({ toggleFavorite, rateProduct }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { addToCart } = useCart();
  const [itemsPerPage, setItemsPerPage] = useState(12); // Maximum 12 items per page
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const calculateItemsPerPage = () => {
    setItemsPerPage(window.innerWidth < 768 ? 10 : 12); // Adjust as needed
  };

  useEffect(() => {
    calculateItemsPerPage();
    window.addEventListener("resize", calculateItemsPerPage);
    return () => {
      window.removeEventListener("resize", calculateItemsPerPage);
    };
  }, []);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://timbu-get-all-products.reavdev.workers.dev/",
          {
            params: {
              organization_id: import.meta.env.VITE_ORGANIZATION_ID,
              reverse_sort: false,
              page: currentPage,
              size: itemsPerPage,
              Appid: import.meta.env.VITE_APP_ID,
              Apikey: import.meta.env.VITE_API_KEY,
            },
          }
        );

        if (Array.isArray(response.data.items)) {
          setProducts(response.data.items);
        } else if (Array.isArray(response.data)) {
          setProducts(response.data);
        } else {
          setError(new Error("Unexpected response format"));
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [currentPage, itemsPerPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = Array.isArray(products)
    ? products.slice(indexOfFirstItem, indexOfLastItem)
    : [];

  if (loading) {
    return (
      <div
        id='listing'
        className='flex items-center justify-center bg-gradient-to-b from-[#FFFCFB] to-[#FBCDBD] p-4 min-h-screen'
      >
        <div className='text-center'>
          <div className='loader'></div>
          <p className='text-lg text-gray-700'>Loading...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div
        id='listing'
        className='flex items-center justify-center bg-gradient-to-b from-[#FFFCFB] to-[#FBCDBD] p-4 min-h-screen'
      >
        <div className='text-center'>
          <p className='text-lg text-red-700'>Error: {error.message}</p>
        </div>
      </div>
    );
  }

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
          <div className='md:px-10 lg:px-24' key={product.id}>
            <ListingItemCard
              item={product}
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
