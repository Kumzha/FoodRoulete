"use client";
import { useState, useContext, useEffect } from "react";
import { SearchContext } from "@/context/SearchContext";
import ClipLoader from "react-spinners/ClipLoader";
import DiscoveryPopUp from "@/components/DiscoveryPopUp";
import DummyData from "@/components/DummyData";
import SelectedRestaurants from "@/components/SelectedRestaurants";
import RoulettePro from "react-roulette-pro";
import "react-roulette-pro/dist/index.css";
import Sidebar from "@/components/Sidebar";
import MyRouletteComponent from "@/components/MyRoulleteComponent";

const RoulettePage = () => {
  const checkContextState = () => {
    // console.log(pageData)
  };

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

  const [start, setStart] = useState(false);

  const [PopUpOpen, setPopUpOpen] = useState(false);

  const handlePrizeDefined = () => {
    console.log("🥳 Prize defined! 🥳");
  };
  const handleStart = () => {
    setStart((prevState) => !prevState);
  };

  const togglePopUp = () => {
    setPopUpOpen(!PopUpOpen);
  };

  const prizes = selectedFoods.map((food) => ({
    image: food.image,
    text: food.name,
    rating: food.rating,
    provider: food.wolt ? "Wolt" : "Bolt",
  }));

  const winPrizeIndex = 0;

  const reproductionArray = (array = [], length = 0) => [
    ...Array(length)
      .fill("_")
      .map(() => array[Math.floor(Math.random() * array.length)]),
  ];

  const reproducedPrizeList = [
    ...prizes,
    ...reproductionArray(prizes, prizes.length * 3),
    ...prizes,
    ...reproductionArray(prizes, prizes.length),
  ];

  const generateId = () =>
    `${Date.now().toString(36)}-${Math.random().toString(36).substring(2)}`;

  const prizeList = reproducedPrizeList.map((prize) => ({
    ...prize,
    id:
      typeof crypto.randomUUID === "function"
        ? crypto.randomUUID()
        : generateId(),
  }));

  const handleAddFood = (food) => {
    setSelectedFoods((prevSelectedFoods) => {
      if (prevSelectedFoods.includes(food)) {
        return prevSelectedFoods.filter((item) => item !== food);
      } else {
        return [...prevSelectedFoods, food];
      }
    });
  };

  const prizeIndex = prizes.length * 4 + winPrizeIndex;

  const surpriseMe = () => {
    setSelectedFoods([]);
    for (let i = 0; i < 4; i++) {
      const randomIndex = Math.floor(Math.random() * pageData.length);
      const randomRestaurant = pageData[randomIndex];
      setSelectedFoods((prevSelectedFoods) => [
        ...prevSelectedFoods,
        randomRestaurant,
      ]);
    }
  };

  const handleRemoveFood = (food) => {
    setSelectedFoods((prevSelectedFoods) => {
      return prevSelectedFoods.filter((item) => item !== food);
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://16.171.44.189:8000/submitAddress",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              lat: data.lat,
              lng: data.lng,
              wolt: data.wolt,
              bolt: data.bolt,
            }),
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();

        if (!result || result.length === 0) {
          throw new Error("No restaurants found");
        }
        console.log(result);
        setPageData(result);
      } catch (error) {
        setError(error);
        console.log(error);
        // Setting state as dummyData for testing and quality of life
        setPageData(DummyData);
        // Must be removed
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [data]);

  if (loading) {
    return (
      <div className="flex justify-center align-middle items-center w-full h-full">
        <ClipLoader
          color={"#352828"}
          loading={loading}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }

  if (error) {
    return (
      <div className="relative h-screen w-full flex">
        <div>
          <Sidebar />
        </div>

        <div className="flex-1 p-4 relative bg-gray-200 overflow-x-auto">
          <div>
            <DiscoveryPopUp
              restaurantsList={pageData}
              handleList={handleAddFood}
              selectedFoods={selectedFoods}
              isOpen={PopUpOpen}
              onClose={() => setPopUpOpen(false)}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 mb-48">
              <button
                onClick={togglePopUp}
                className="bg-white text-red-500 font-bold px-4 py-2 rounded-lg shadow-lg focus:outline-none"
              >
                SEARCH RESTAURANTS
              </button>
              <button
                onClick={surpriseMe}
                className="bg-white text-red-500 font-bold px-4 py-2 rounded-lg shadow-lg focus:outline-none"
              >
                SURPIRSE ME!
              </button>
            </div>

            {selectedFoods.length > 0 && (
              <MyRouletteComponent
                prizeList={prizeList}
                prizeIndex={prizeIndex}
                start={start}
                handlePrizeDefined={handlePrizeDefined}
              />
            )}

            <div className="flex justify-center my-4">
              {" "}
              {/* Flex container to center the button */}
              {selectedFoods.length > 0 && (
                <button
                  onClick={handleStart}
                  className="bg-red-500 text-white font-bold px-10 py-2 rounded-lg shadow-lg focus:outline-none"
                >
                  SPIN ME!
                </button>
              )}
            </div>
          </div>

          <SelectedRestaurants
            selectedFoods={selectedFoods}
            handleList={handleRemoveFood}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-screen w-full flex">
      <div>
        <Sidebar />
      </div>

      <div className="flex-1 p-4 relative bg-gray-200 overflow-x-auto">
        <div>
          <DiscoveryPopUp
            restaurantsList={pageData}
            handleList={handleAddFood}
            selectedFoods={selectedFoods}
            isOpen={PopUpOpen}
            onClose={() => setPopUpOpen(false)}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 mb-48">
            <button
              onClick={togglePopUp}
              className="bg-white text-red-500 font-bold px-4 py-2 rounded-lg shadow-lg focus:outline-none"
            >
              SEARCH RESTAURANTS
            </button>
            <button
              onClick={surpriseMe}
              className="bg-white text-red-500 font-bold px-4 py-2 rounded-lg shadow-lg focus:outline-none"
            >
              SURPIRSE ME!
            </button>
          </div>

          {selectedFoods.length > 0 && (
            <MyRouletteComponent
              prizeList={prizeList}
              prizeIndex={prizeIndex}
              start={start}
              handlePrizeDefined={handlePrizeDefined}
            />
          )}

          {/* <RoulettePro
          prizes={prizeList}
          prizeIndex={prizeIndex}
          start={start}
          onPrizeDefined={handlePrizeDefined}
          defaultDesignOptions={{
            prizesWithText: true,
          }}
          style={{ width: '100%', height: 'auto' }}
          className="max-w-full"
        /> */}

          <div className="flex justify-center my-4">
            {" "}
            {/* Flex container to center the button */}
            {selectedFoods.length > 0 && (
              <button
                onClick={handleStart}
                className="bg-red-500 text-white font-bold px-10 py-2 rounded-lg shadow-lg focus:outline-none"
              >
                SPIN ME!
              </button>
            )}
          </div>
        </div>

        <SelectedRestaurants
          selectedFoods={selectedFoods}
          handleList={handleRemoveFood}
        />
      </div>
    </div>
  );
};

export default RoulettePage;
