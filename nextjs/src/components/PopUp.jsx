import React from "react";
import { useState } from "react";
import RestaurantsList from "./RestaurantList";

const PopUp = ({ isOpen, handleClose, restaurantsList, handleList }) => {
  const [searchQuery, setSearchQuery] = useState("");
  
  if (!isOpen) return null;

  const filteredRestaurants = restaurantsList.filter(restaurant =>
    restaurant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-4 rounded-lg shadow-lg max-w-2xl w-full h-3/4 no-scrollbar overflow-y-auto relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={handleClose}
        >
          &times;
        </button>

        {/* Search Bar */}
        <div className="mb-4">
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Search restaurants..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Restaurants List */}
        <div>
          <RestaurantsList
            restaurantList={filteredRestaurants}
            handleList={handleList}
            activateOnHover={false}
          />
        </div>
      </div>
    </div>
  );
};

export default PopUp;