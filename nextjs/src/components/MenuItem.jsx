import Link from 'next/link'
import React from 'react'

export default function MenuItem({title, address, Icon}) {
  return (
    <Link href={address} className='hover:text-amber-500'>
        <Icon className="text-2xl sm:hidden inline m-1"/>
        <p className='hidden sm:inline text-sm m-1'>{title}</p>
    </Link>
  )
}
