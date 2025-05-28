'use client'; // if using Next.js App Router

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed w-full text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between flex-wrap py-4">
          {/* Logo */}
          <Image
            src="/assets/blog/moon.png"
            alt="Logo"
            width={50} 
            height={50} 
            // className="h-10 w-10 rounded-full"
          />
          {/* <div className="flex items-center flex-shrink-0 text-black mr-6">
            <span className="font-semibold text-xl tracking-tight">MySite</span>
          </div> */}

          {/* Hamburger Button */}
          <div className="block lg:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="text-gray-700 w-10 h-10 relative focus:outline-none bg-white rounded"
            >
              <span className="sr-only">Open main menu</span>
              <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span
                  aria-hidden="true"
                  className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                    open ? 'rotate-45' : '-translate-y-1.5'
                  }`}
                />
                <span
                  aria-hidden="true"
                  className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                    open ? 'opacity-0' : ''
                  }`}
                />
                <span
                  aria-hidden="true"
                  className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                    open ? '-rotate-45' : 'translate-y-1.5'
                  }`}
                />
              </div>
            </button>
          </div>

          {/* Menu Items */}
          <div
            className={`w-full lg:flex lg:items-center lg:w-auto lg:justify-end space-y-4 lg:space-y-0 lg:space-x-6 ${
              open ? 'block mt-4' : 'hidden lg:block'
            }`}
          >
            <Link href="/" className="block text-gray-700 hover:text-black">
              Home
            </Link>
            <Link href="/about" className="block text-gray-700 hover:text-black">
              About
            </Link>
            <Link href="/services" className="block text-gray-700 hover:text-black">
              Services
            </Link>
            <Link href="/contact" className="block text-gray-700 hover:text-black">
              Contact
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
