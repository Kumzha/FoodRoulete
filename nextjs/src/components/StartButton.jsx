"use client"

import React from 'react'
import { useRouter } from 'next/navigation';
import { useCallback, useContext } from 'react';
import { SearchContext } from '@/context/SearchContext';

const StartButton = ( props ) => {

  const router = useRouter();
  const { setData, data: contextData } = useContext(SearchContext);
  const uiState = props.state;

    const clickHandler = useCallback(async (e) => {
      e.preventDefault();
      setData(uiState);

      console.log(uiState);
      router.push(`/roulette`)
    })



    return (
      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 mt-16">
          <button
            className="bg-red-600 text-white text-sm px-10 py-2 rounded-md"
            onClick={clickHandler}
          >
            START
          </button>
        </div>
      </div>
    );
} 

export default StartButton
