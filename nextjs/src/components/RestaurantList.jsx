import React, { useState, useEffect } from "react";
import FoodComponent from '@/components/FoodComponent';


const RestaurantsList = ({restaurantList, handleList, activateOnHover }) => {

  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    setRestaurants(restaurantList);
  }, [restaurantList]);

  return (
    <div className="flex flex-wrap justify-center">
      <div className="flex flex-wrap justify-center">
        {restaurants.map((restaurant, index) => (
          <FoodComponent 
            key={index}
            deliveryInfo={restaurant} 
            provider={restaurant.wolt == true ? "wolt" : "bolt"} 
            handleList={handleList}
            activateOnHover={activateOnHover}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantsList;