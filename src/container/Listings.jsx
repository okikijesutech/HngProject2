import React from "react";
import itemData from "../items.json";
import imageMap from "../imageMap";
import ItemCard from "../components/ListingItemCard";
import Pagination from "../components/Pagination";

const Listings = () => {
  const items = itemData;

  return (
    <div className='flex flex-col items-center bg-gradient-to-b from-pink-200 to-pink-400 pt-4 pb-40 md:px-8 lg:px-24 py-12 md:py-16'>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-x-[16px] gap-y-[92px] md:gap-x-[107px] lg:gap-x-[214px] md:gap-y-[149px]'>
        {items.map((item) => (
          <ItemCard key={item.id} item={item} imageMap={imageMap} />
        ))}
      </div>
      <Pagination />
    </div>
  );
};

export default Listings;
