import React from 'react';
import Link from 'next/link';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { useState } from 'react';
const Sidebar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  if(!isOpen){
    return (
        <div className="w-32 h-screen bg-white shadow-2xl pl-4 py-8 rounded-r-lg">
          <div><Image src="/MUNCHI.svg" alt="Munchi Logo" width={100} height={100} className='mx-auto'/></div>

        <nav className="flex flex-col space-y-4 mt-10">
          <Link href="#" className="sidebar-item bg-red-500 rounded-l-3xl text-white pl-5 py-2 text-sm">
            Food Fortune
          </Link>
        </nav>
        </div>
    )
  }  
  
  if(isOpen){
  return (
    <div className="w-64 h-screen bg-white shadow-2xl pl-4 py-8 rounded-r-lg">
        <div><Image src="/MUNCHI.svg" alt="Munchi Logo" width={100} height={100} className='mx-auto'/></div>
       
      <nav className="flex flex-col space-y-4 mt-10">
        <Link href="#" className="sidebar-item bg-red-500 rounded-l-3xl text-white pl-5 py-2 text-sm">
          Food Fortune
        </Link>

        <Link href="#" className="sidebar-item flex items-center space-x-2 py-2 text-sm">
            <Image src='/competative.svg' alt='competative-mode' width={20} height={20} className='pr-1'/>
            Competitive Mode
        </Link>

        <Link href="#" className="sidebar-item flex items-center space-x-2 py-2 text-sm">
        <Image src='/competative.svg' alt='competative-mode' width={20} height={20} className='pr-1'/>
          Food Quiz
        </Link>

        <Link href="#" className="sidebar-item flex items-center space-x-2 py-2 text-sm">
        <Image src='/competative.svg' alt='competative-mode' width={20} height={20} className='pr-1'/>
          Food Swipe
        </Link>

        {/* Additional Links */}
        <div className="mt-14 text-gray-500 text-sm">More</div>
          <Link href="/" className="sidebar-item text-sm py-1 ml-5">
            Home
          </Link>

          <Link href="#" className="sidebar-item text-sm py-1 ml-5">
            About Us
          </Link>

          <Link href="#" className="sidebar-item text-sm py-1 ml-5">
            Our Vision
          </Link>

          <Link href="#" className="sidebar-item text-sm py-1 ml-5">
            Submissions
          </Link>
      </nav>
    </div>
  );
};
}

export default Sidebar;
