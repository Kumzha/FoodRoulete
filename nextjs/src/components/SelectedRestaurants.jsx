import React from 'react'
import RestaurantsList from './RestaurantList'

export default function SelectedRestaurants({selectedFoods, handleList}) {





  return (
    <div className='absolute bottom-0 w-full h-56 mb-40 bg-gray-500'>
        <div>
            <h1 className='text-center text-white font-bold'>Selected Restaurants</h1>
            <RestaurantsList 
                restaurantList={selectedFoods} 
                handleList={handleList} 
                activateOnHover={true}
            />
        </div>
    </div>
  )

}
