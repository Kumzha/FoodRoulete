import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Sidebar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 768) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    }
  }, []);

  return (
    <div
      className={`h-screen bg-white shadow-2xl pl-4 py-8 relative ${isOpen ? 'w-64 rounded-r-2xl' : 'w-10 rounded-r-2xl'}`}
    >
      <button
        onClick={toggleSidebar}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-red-500 text-white w-8 h-8 flex items-center justify-center rounded-full shadow-lg lg:hidden"
      >
        {isOpen ? '<' : '>'}
      </button>

      {isOpen && (
        <>
          <div className="mb-4">
            <Image src="/MUNCHI.svg" alt="Munchi Logo" width={100} height={100} />
          </div>
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
            <Link href="/" className="sidebar-item text-sm py-1 ml-5">Home</Link>
            <Link href="#" className="sidebar-item text-sm py-1 ml-5">About Us</Link>
            <Link href="#" className="sidebar-item text-sm py-1 ml-5">Our Vision</Link>
            <Link href="#" className="sidebar-item text-sm py-1 ml-5">Submissions</Link>
          </nav>
        </>
      )}
    </div>
  );
};

export default Sidebar;
