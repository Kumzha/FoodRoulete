import React, { useState, useEffect } from "react";
import PopUp from "./PopUp";
import RestaurantsList from "./RestaurantList";

const DiscoveryPopUp = ({restaurantsList, handleList, selectedFoods, isOpen, onClose}) => {

  return (
    <>
    <div className="flex flex-col items-center justify-center">  
      <PopUp
        isOpen={isOpen}
        handleClose={onClose}
        restaurantsList={restaurantsList} 
        handleList={handleList}
        selectedFoods={selectedFoods}
      />
    </div>
    </> 
  );
};

export default DiscoveryPopUp;