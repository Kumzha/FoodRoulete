import React, { useState } from "react";
import PopUp from "./PopUp";
import RestaurantsList from "./RestaurantList";

const DiscoveryPopUp = (props) => {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [searchResultList, setSearchResultList] = useState(null);
  
  const togglePopUp = () => {
    setIsPopUpOpen(!isPopUpOpen);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Welcome to Another Component</h1>
      <button
        onClick={togglePopUp}
        className="bg-gray-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-gray-600 focus:outline-none"
      >
        Search Restaurants
      </button>
      
      <PopUp
        isOpen={isPopUpOpen}
        handleClose={togglePopUp}
        content={
          <div>
            <RestaurantsList 
              bolt_restaurants={props.restaurantsList['bolt_restaurants']} 
              wolt_restaurants={props.restaurantsList['wolt_restaurants']} 
            />
          </div>
        }
      />
    </div>
  );
};

export default DiscoveryPopUp;