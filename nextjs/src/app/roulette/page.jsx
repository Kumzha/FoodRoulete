"use client"
import { useContext } from 'react';
import { SearchContext } from '@/context/SearchContext';

const RoulettePage = () => {
  const { data } = useContext(SearchContext);

  return (
    <div>
      <h1>Roulette Page</h1>
      <p>ID: {contextData.id}</p>
      <p>Name: {contextData.name}</p>
    </div>
  );
};

export default RoulettePage;