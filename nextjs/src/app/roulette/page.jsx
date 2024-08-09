"use client"
import { useState, useContext, useEffect } from 'react';
import { SearchContext } from '@/context/SearchContext';
import ClipLoader from "react-spinners/ClipLoader";

const RoulettePage = () => {

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
              <button onClick={() => {checkContextState()}}>check state</button>
            </div>;
  }

  return (
    <div>
      <h1>Fetched Data</h1>
      <pre>{JSON.stringify(pageData, null, 2)}</pre>
      <button onClick={() => {checkContextState()}}>check state</button>
    </div>
  );
};

export default RoulettePage;