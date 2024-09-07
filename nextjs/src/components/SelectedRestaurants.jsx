import React, { useState } from 'react';
import RestaurantsList from './RestaurantList';  

export default function SelectedRestaurants({ selectedFoods, handleList }) {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      className={`no-scrollbar absolute bottom-0 left-1/2 transform -translate-x-1/2 rounded-t-2xl w-11/12 pt-2 bg-white transition-all duration-300 ease-in-out overflow-auto ${
        expanded ? 'min-h-30vh' : 'mind-h-7vh'
      }`}
      style={{ maxHeight: expanded ? '30vh' : '7vh' }} // Adjusted height to be more appropriate
    >
      <div className="relative h-full flex flex-col">
        {/* Button positioned in the middle */}
        <button 
          onClick={handleClick} 
          className="absolute top-6 right-0 font-bold transform -translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs px-8 py-2 rounded"
        >
          {expanded ? 'MINIMIZE CHOICES' : 'EXPAND'}
        </button>
        <div className='absolute top-3 left-14'>
          Your choices: 
        </div>
        {/* Content area for header and scrollable list */}
        <div className="flex-1 flex flex-col">
          <h1 className="text-left text-white font-bold mb-10 p-3">
            PLACEHOLDER
          </h1>
          <div className="flex-1 overflow-auto">
            <RestaurantsList 
              restaurantList={selectedFoods} 
              handleList={handleList} 
              activateOnHover={true} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}