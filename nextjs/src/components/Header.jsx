import React from 'react'
import MenuItem from './MenuItem'
import { AiFillHome } from 'react-icons/ai'
import { BsFillInfoCircleFill } from 'react-icons/bs'
import Link from 'next/link'
import  Image from 'next/image'

export default function Header() {
  return (
    <div className='flex justify-between items-center py-5 px-1 mx-auto border-b-grey border-b-2'>
        <Link href={'/'} className=''>
          <Image src="/MUNCHI.svg" alt="Munchi Logo" width={100} height={100} />
        </Link>

        <div className='flex gap-4 font-bold'>
            <MenuItem title='Home' address='/' Icon={AiFillHome}/>
            <MenuItem title='About us' address='/about' Icon={BsFillInfoCircleFill}/>
        </div>
        
    </div>
  )
}
