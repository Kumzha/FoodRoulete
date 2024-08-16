import React, { useState, useEffect } from "react";
import FoodComponent from '@/components/FoodComponent';


const RestaurantsList = ({ bolt_restaurants, wolt_restaurants }) => {
  const [restaurants, setRestaurants] = useState({
    bolt_restaurants: [],
    wolt_restaurants: []
  });

  useEffect(() => {
    setRestaurants({ bolt_restaurants, wolt_restaurants });
  }, [bolt_restaurants, wolt_restaurants]);

  return (
    <div className="flex flex-wrap justify-center">
      <h1 className="w-full text-center text-xl font-bold my-4">Bolt Restaurants</h1>
      <div className="flex flex-wrap justify-center">
        {restaurants.bolt_restaurants.map((restaurant, index) => (
          <FoodComponent 
            key={`bolt-${index}`}
            deliveryInfo={restaurant} 
            provider="bolt" 
          />
        ))}
      </div>

      <h1 className="w-full text-center text-xl font-bold my-4">Wolt Restaurants</h1>
      <div className="flex flex-wrap justify-center">
        {restaurants.wolt_restaurants.map((restaurant, index) => (
          <FoodComponent  
            key={`wolt-${index}`}
            deliveryInfo={restaurant} 
            provider="wolt" 
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantsList;