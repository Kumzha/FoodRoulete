import React, { createContext, useState } from 'react';

const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const [data, setData] = useState({});

  return (
    <SearchContext.Provider value={{ data, setData }}>
      {children}
    </SearchContext.Provider>
  );
};

export { SearchContext, SearchProvider };