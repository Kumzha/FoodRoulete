import Link from 'next/link'
import React from 'react'

export default function MenuItem({ title, address, Icon }) {
  return (
    <Link href={address} className="mx-4 relative group">
      <Icon className="text-2xl sm:hidden inline" />
      <p className="hidden sm:inline text-base relative">
        {title}
        <span className="absolute left-0 -bottom-[1px] w-full h-[2px] bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
      </p>
    </Link>
  );
}
