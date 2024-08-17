// rulete page

"use client"
import { useState, useContext, useEffect } from 'react';
import { SearchContext } from '@/context/SearchContext';
import ClipLoader from "react-spinners/ClipLoader";
import RestaurantsList from '@/components/RestaurantList';
import DiscoveryPopUp from '@/components/DiscoveryPopUp';

const RoulettePage = () => {

  const dummyData = {
    "bolt_restaurants": [
        {
            "url": "https://food.bolt.eu/lt-LT/9-vilnius/p/572",
            "name": "Katpėdėlė (Pilies str.)",
            "address": "Pilies g. 8, Vilnius",
            "estimated_delivery_time": "35-40 min",
            "image": "https://images.bolt.eu/store/2023/2023-11-15/cb8fa3e6-d5ac-4931-a644-73daabc0a0c0.jpeg",
            "tags": [],
            "delivery_price": "2,10 €"
        },
        {
            "url": "https://food.bolt.eu/lt-LT/9-vilnius/p/69107",
            "name": "Basilico (Gedimino av.)",
            "address": "Gedimino pr. 2a, Vilnius",
            "estimated_delivery_time": "25-30 min",
            "image": "https://images.bolt.eu/store/2023/2023-05-24/a92dfb29-56e1-4d32-9add-d3473564728f.jpeg",
            "tags": [],
            "delivery_price": "1,30 €"
        },
        {
            "url": "https://food.bolt.eu/lt-LT/9-vilnius/p/6019",
            "name": "Pepperoni.lt @Mr.pub",
            "address": "Gedimino pr. 2a",
            "estimated_delivery_time": "30-35 min",
            "image": "https://images.bolt.eu/store/2024/2024-05-07/9a882583-e8da-4185-8f1c-3f6f20b05f20.jpeg",
            "tags": [],
            "delivery_price": "1,30 €"
        },
        {
            "url": "https://food.bolt.eu/lt-LT/9-vilnius/p/32936",
            "name": "Pizza Station (Gedimino av.)",
            "address": "Gedimino pr. 2A, Vilnius 01103, Lithuania",
            "estimated_delivery_time": "30-35 min",
            "image": "https://images.bolt.eu/store/2021/2021-11-08/a2203953-39e1-448c-8a8f-fdcdd2a57dc3.jpeg",
            "tags": [],
            "delivery_price": "1,30 €"
        }
    ],
    "wolt_restaurants": [
        {
            "url": "https://wolt.com/en/ltu/vilnius/restaurant/bulvikis-didzioji",
            "name": "Bulvikis (Didžioji g.)",
            "adress": "This is a virtual venue",
            "estimated_delivery_time": "25-35 min",
            "tags": [
                "lithuanian",
                "european"
            ],
            "image": "https://prod-wolt-venue-images-cdn.wolt.com/667546aee8221e20752b1784/e28cfe3a-33a6-11ef-9b73-ca910445f86d_bulvikis_wolt_cover.jpg",
            "delivery_price": "0"
        },
        {
            "url": "https://wolt.com/en/ltu/vilnius/restaurant/jalapeno-pizza-sushi",
            "name": "Jalapeno pizza & sushi",
            "adress": "P. Lukšio g. 32A",
            "estimated_delivery_time": "25-35 min",
            "tags": [
                "pizza"
            ],
            "image": "https://prod-wolt-venue-images-cdn.wolt.com/5acb15b88483c0000c3e1df4/19a32638-fbc1-11ee-95dc-aa189bf600d2_white_photoroom__1_.png",
            "delivery_price": "0"
        },
        {
            "url": "https://wolt.com/en/ltu/vilnius/restaurant/plus-plus-plus-gedimino-pr",
            "name": "Plus Plus Plus (Gedimino pr.)",
            "adress": "Gedimino pr.9",
            "estimated_delivery_time": "25-35 min",
            "tags": [
                "lunch",
                "european"
            ],
            "image": "https://prod-wolt-venue-images-cdn.wolt.com/5ea714d758d3128964febfec/26a8021c-61ae-11ed-b872-3e3b5883f764_pliusa_4.jpg",
            "delivery_price": "0"
        },
        {
            "url": "https://wolt.com/en/ltu/vilnius/restaurant/ridikelis-ir-salota-didzioji-g",
            "name": "Ridikėlis ir salota (Didžioji g.)",
            "adress": "This is a virtual venue",
            "estimated_delivery_time": "25-35 min",
            "tags": [
                "healthy",
                "vegetarian",
                "salad"
            ],
            "image": "https://prod-wolt-venue-images-cdn.wolt.com/66309748c4063d5fb86894f7/94cbbcae-06bf-11ef-b420-8e1954937df9_screenshot_2024_04_30_at_10.02.13.png",
            "delivery_price": "0"
        },
        {
            "url": "https://wolt.com/en/ltu/vilnius/restaurant/kaimu-kaimas-didzioji-g",
            "name": "Kaimų kaimas (Didžioji g.)",
            "adress": "This is a virtual venue",
            "estimated_delivery_time": "25-35 min",
            "tags": [
                "lithuanian",
                "european"
            ],
            "image": "https://prod-wolt-venue-images-cdn.wolt.com/631ae7077d2aa4cd3997366d/1db50194-300f-11ed-972e-6ae1f8a369e0_virs_elio_foto.jpg",
            "delivery_price": "0"
        }
    ]
  }
  // const checkContextState = () => {
  //   console.log(data) 
  //   console.log(pageData.wolt_restaurants)
  //   console.log(pageData.bolt_restaurants)
  // }

  // Context state data
  const { data } = useContext(SearchContext);

  // State variables
  // Page data is restaurant list fetched from the server
  const [pageData, setPageData] = useState(null);

  // Loading state while fetching data
  const [loading, setLoading] = useState(true);

  // Error state
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
        console.log(result)
      }catch(error){
        setError(error);
        // Setting state as dummyData for testing and quality of life
        // Must be removed
        setPageData(dummyData);
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
              <DiscoveryPopUp restaurantsList={pageData}/>
              {/* <button onClick={() => {checkContextState()}}>check state</button> */}
            </div>;
  }

  return (
    <div>
      {/* <button onClick={() => {checkContextState()}}>check state</button> */}
      <DiscoveryPopUp restaurantsList={pageData}/>
      <h1>Fetched Data</h1>
      {/* <pre>{JSON.stringify(pageData, null, 2)}</pre> */}
    </div>
  );
};

export default RoulettePage;