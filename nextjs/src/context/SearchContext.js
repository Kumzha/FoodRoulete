"use client"
import React, { createContext, useState } from 'react';

const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const [data, setData] = useState({
    lat: 54.7797369,
    lng: 25.0926369,
    wolt: true,
    bolt: true,
    selectedAddress: null
  });

  return (
    <SearchContext.Provider value={{ data, setData }}>
      {children}
    </SearchContext.Provider>
  );
};

export { SearchContext, SearchProvider };