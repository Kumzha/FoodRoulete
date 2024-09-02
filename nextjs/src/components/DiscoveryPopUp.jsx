import React, { useState } from "react";
import PopUp from "./PopUp";
import RestaurantsList from "./RestaurantList";

const DiscoveryPopUp = ({restaurantsList, handleList, selectedFoods}) => {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  
  const togglePopUp = () => {
    setIsPopUpOpen(!isPopUpOpen);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <button
        onClick={togglePopUp}
        className="bg-gray-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-gray-600 focus:outline-none"
      >
        Search Restaurants
      </button>
      
      <PopUp
        isOpen={isPopUpOpen}
        handleClose={togglePopUp}
        restaurantsList={restaurantsList} 
        handleList={handleList}
        selectedFoods={selectedFoods}
      />
    </div>
  );
};

export default DiscoveryPopUp;