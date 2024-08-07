import Link from 'next/link'
import React from 'react'

export default function MenuItem({title, address, Icon}) {
  return (
    <Link href={address} className='hover:text-yellow-700 mx-4'>
        <Icon className="text-2xl sm:hidden inline"/>
        <p className='hidden sm:inline text-base'>{title}</p>
    </Link>
  )
}
