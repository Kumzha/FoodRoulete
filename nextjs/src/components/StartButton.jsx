"use client"

import React from 'react'
import { useRouter } from 'next/navigation';
import { useCallback, useContext } from 'react';
import { SearchContext } from '@/context/SearchContext';

const StartButton = () => {

  const router = useRouter();
  const { setData, data: contextData } = useContext(SearchContext);
  const data = { id: 5, name: 'Example' };

    const clickHandler = useCallback(async (e) => {
      e.preventDefault();
      router.push(`/roulette`,)
    })

    const handleClick = () => {
      setData(data);
    }


  return (
    <div className="flex justify-between mx-auto items-center mt-32">
        <button
        className="bg-gray-500 text-white px-5 py-2 mx-auto rounded-md" 
        onClick={clickHandler}
        >Start</button>
        <button onClick={handleClick}>test</button>
    </div>
  )
}

export default StartButton
