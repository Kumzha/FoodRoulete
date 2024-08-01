"use clientside"
import React from 'react'
import { IoSearchSharp } from "react-icons/io5";

export default function SearchBar() {

    const inputStyle = {
        outline: 'none',
        boxShadow: 'none',
      };

  return (
    <form className="mt-20 ">
        <div className='ml-10 w-1/2 p-1 pl-5 border-zinc-800 border-2 rounded-lg'>
            <IoSearchSharp className='inline'/>
            <input className="w-10/12 p-1 ml-5" type="text" placeholder='Enter your address: ' style={inputStyle}/>
        </div>
    </form>
  )
}
