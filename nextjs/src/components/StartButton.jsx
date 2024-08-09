"use client"

import React from 'react'
import { useRouter } from 'next/navigation';
import { useCallback, useContext } from 'react';
import { SearchContext } from '@/context/SearchContext';

const StartButton = ( props ) => {

  const router = useRouter();
  const { setData, data: contextData } = useContext(SearchContext);
  const data = { id: 5, name: 'Example' };
  const uiState = props.state;

    const clickHandler = useCallback(async (e) => {
      e.preventDefault();
      setData(uiState);

      console.log(uiState);
      router.push(`/roulette`)
    })



  return (
    <div className="flex justify-between mx-auto items-center mt-32">
        <button
        className="bg-gray-500 text-white px-5 py-2 mx-auto rounded-md" 
        onClick={clickHandler}
        >Start</button>
    </div>
  )
}

export default StartButton
