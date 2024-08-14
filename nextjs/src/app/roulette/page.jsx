"use client"
import { useState, useContext, useEffect } from 'react';
import { SearchContext } from '@/context/SearchContext';
import ClipLoader from "react-spinners/ClipLoader";
import FoodComponent from '@/components/FoodComponent';
import FoodComponent from '@/components/FoodComponent';

const RoulettePage = () => {

  const BoltDeliveryInfo = {
    url: "https://food.bolt.eu/lt-LT/9-vilnius/p/1409",
    name: "McDonald’s® (Panorama)",
    address: "Saltoniškių gatvė 9, Vilnius",
    estimated_delivery_time: "10-15 min",
    image: "https://images.bolt.eu/store/2023/2023-04-26/3d5286fe-f08b-4972-a48e-0bb554614285.jpeg",
    tags: [],
    delivery_price: "1,20 €"
  }

  const WoltDeliveryInfo = {
    url: "https://wolt.com/en/ltu/vilnius/restaurant/pomodoro-p-luksio-g",
    name: "Pomodoro (P. Lukšio g.)",
    adress: "Lukšio g. 32",
    estimated_delivery_time: "30-40 min",
    tags: [
      "soup",
      "pizza",
      "dessert",
      "salad",
      "fish"
    ],
    image: "https://prod-wolt-venue-images-cdn.wolt.com/5e71d851a61d55abea46482a/781712f4-894e-11ea-8a50-0a58646c2a0c_1.jpg",
    delivery_price: "0"
  }

  const checkContextState = () => {
    console.log(data)
  }

  const { data } = useContext(SearchContext);

  //TODO
  // data is undefined = route to main page

  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
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
              <FoodComponent provider="wolt" deliveryInfo={WoltDeliveryInfo}/>
              <FoodComponent provider="bolt" deliveryInfo={BoltDeliveryInfo}/>
            </div>;
  }

  return (
    <div>
      <h1>Fetched Data</h1>
      <pre>{JSON.stringify(pageData, null, 2)}</pre>
      <button onClick={() => {checkContextState()}}>check state</button>
      <FoodComponent provider="wolt" deliveryInfo={WoltDeliveryInfo}/>
      <FoodComponent provider="bolt" deliveryInfo={BoltDeliveryInfo}/>
    </div>
  );
};

export default RoulettePage;