// rulete page

"use client"
import { useState, useContext, useEffect } from 'react';
import { SearchContext } from '@/context/SearchContext';
import ClipLoader from "react-spinners/ClipLoader";
import RestaurantsList from '@/components/RestaurantList';
import DiscoveryPopUp from '@/components/DiscoveryPopUp';
import DummyData from '@/components/DummyData';

const RoulettePage = () => {

  const checkContextState = () => {
    // console.log(data) 
    // console.log(pageData.wolt_restaurants)
    // console.log(pageData.bolt_restaurants)
    console.log(selectedFoods)
  }

  // Context state data
  const { data } = useContext(SearchContext);

  // State variables
  // Page data is restaurant list fetched from the server
  const [pageData, setPageData] = useState(null);
  // Loading state while fetching data
  const [loading, setLoading] = useState(true);
  // Error state
  const [error, setError] = useState(null);

  const [selectedFoods, setSelectedFoods] = useState([]);

  const handleAddFood = (food) => {
    setSelectedFoods((prevSelectedFoods) => [...prevSelectedFoods, food]);
  };
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/submitAddress', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            lat: data.lat,
            lng: data.lng,
            wolt: data.wolt,
            bolt: data.bolt,
          })
        });

        if(!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setPageData(result);
      }catch(error){
        setError(error);
        // Setting state as dummyData for testing and quality of life
        // Must be removed
        setPageData(DummyData);
      }finally{
        setLoading(false);
      }
    };

    fetchData();
  }, [data]);

  if (loading) {

    return  <div className='flex justify-center align-middle items-center w-full h-full'>
              <ClipLoader
              color={'#352828'}
              loading={loading}
              size={150}
              aria-label="Loading Spinner"
              data-testid="loader"
              />
            </div>
  }

  
  if (error) {
    return  <div>
              <div>Error: {error.message}</div>
              {/* FOR DEBBUG */}
              <button onClick={() => {checkContextState()}}>check state</button>
              <DiscoveryPopUp 
                restaurantsList={pageData}
                addToList={handleAddFood}
              />
            </div>;
  }

  return (
    <div>
      <button onClick={() => {checkContextState()}}>check state</button>
      <DiscoveryPopUp 
        restaurantsList={pageData}
        addToList={handleAddFood}
      />
    </div>
  );
};

export default RoulettePage;