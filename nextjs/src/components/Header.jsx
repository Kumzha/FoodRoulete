import React from 'react'
import MenuItem from './MenuItem'
import { AiFillHome } from 'react-icons/ai'
import { BsFillInfoCircleFill } from 'react-icons/bs'
import Link from 'next/link'

export default function Header() {
  return (
    <div className='flex justify-between items-center py-5 px-1 max-w-6xl mx-auto border-b-grey border-b-2'>
        <Link href={'/'} className=''>
            <span className='text-2xl font-bold bg-green-600 py-1 px-2 rounded-lg text-white'>Food Roulette</span>
        </Link>

        <div className='flex gap-4 font-bold'>
            <MenuItem title='Home' address='/' Icon={AiFillHome}/>
            <MenuItem title='About us' address='/about' Icon={BsFillInfoCircleFill}/>
        </div>
        
    </div>
  )
}
