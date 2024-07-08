import React, { useState, useEffect } from "react";
import itemData from "../items.json";
import imageMap from "../imageMap";
import ItemCard from "../components/ListingItemCard";
import Pagination from "../components/Pagination";

const Listings = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [filteredItems, setFilteredItems] = useState(itemData);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 430);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    let items = itemData;
    if (isMobile && items.length % 2 !== 0) {
      items = items.slice(0, -1);
    }
    setFilteredItems(items);
  }, [isMobile]);

  return (
    <div className='flex flex-col items-center bg-gradient-to-b from-[#FFFCFB] to-[#FBCDBD] pt-4 pb-40 md:px-8 lg:px-24 py-12 md:py-16'>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-x-[16px] gap-y-[92px] md:gap-x-[107px] lg:gap-x-[214px] md:gap-y-[149px]'>
        {filteredItems.map((item) => (
          <ItemCard key={item.id} item={item} imageMap={imageMap} />
        ))}
      </div>
      <Pagination />
    </div>
  );
};

export default Listings;
