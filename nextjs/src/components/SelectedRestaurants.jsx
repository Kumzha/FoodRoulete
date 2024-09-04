  import React, { useState } from 'react';
  import RestaurantsList from './RestaurantList';
  
  export default function SelectedRestaurants({ selectedFoods, handleList }) {
    const [expanded, setExpanded] = useState(false);
  
    const handleClick = () => {
      setExpanded(!expanded);
    };
  
    return (
      <div
        className={`fixed bottom-0 w-auto bg-gray-500 transition-all duration-300 ${expanded ? 'h-auto max-h-[90vh]' : 'h-56'}`}
        style={{ maxHeight: expanded ? '90vh' : 'auto' }}
      >
        <div className="p-4">
          <button 
            onClick={handleClick} 
            className="text-white bg-blue-500 px-4 py-2 rounded mb-2"
          >
            {expanded ? 'Minimize' : 'Expand'}
          </button>
          <h1 className="text-center text-white font-bold mb-4">
            Selected Restaurants
          </h1>
          {expanded && (
            <RestaurantsList 
              restaurantList={selectedFoods} 
              handleList={handleList} 
              activateOnHover={true} 
            />
          )}
        </div>
      </div>
    );
  }
