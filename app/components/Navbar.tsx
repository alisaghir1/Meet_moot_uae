'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';  // Use this hook to track the current route
import logo from '../../public/logo.png';

const Navbar = () => {
  // Step 1: Create state for toggling menu visibility
  const [isOpen, setIsOpen] = useState(false);

  // Step 2: Toggle the menu visibility when the button is clicked
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Get the current path to apply the active class
  const pathname = usePathname();

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 mt-5">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image src={logo} className="h-8" alt="Logo" />
        </Link>
        <button
          onClick={toggleMenu}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 lg md:hidden hover:bg-gray-100 focus:outline-none"
          aria-controls="navbar-default"
          aria-expanded={isOpen ? 'true' : 'false'}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Conditionally render the menu based on isOpen state */}
        <div
          className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                href="/"
                className={`block py-2 px-3 md:bg-transparent md:text-gray-900 md:p-0 dark:text-white md:dark:text-blue-500 ${pathname === '/' ? 'text-yellow-500 border-b-2 border-yellow-500' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-500 md:border-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/locations"
                className={`block py-2 px-3 md:bg-transparent md:text-gray-900 md:p-0 dark:text-white md:dark:text-blue-500 ${pathname === '/locations' ? 'text-yellow-500 border-b-2 border-yellow-500' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-500 md:border-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'}`}
              >
                Locations
              </Link>
            </li>
            <li>
              <Link
                href="/menu"
                className={`block py-2 px-3 md:bg-transparent md:text-gray-900 md:p-0 dark:text-white md:dark:text-blue-500 ${pathname === '/menu' ? 'text-yellow-500 border-b-2 border-yellow-500' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-500 md:border-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'}`}
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`block py-2 px-3 md:bg-transparent md:text-gray-900 md:p-0 dark:text-white md:dark:text-blue-500 ${pathname === '/about' ? 'text-yellow-500 border-b-2 border-yellow-500' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-500 md:border-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'}`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/media"
                className={`block py-2 px-3 md:bg-transparent md:text-gray-900 md:p-0 dark:text-white md:dark:text-blue-500 ${pathname === '/media' ? 'text-yellow-500 border-b-2 border-yellow-500' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-500 md:border-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'}`}
              >
                Media
              </Link>
            </li>
            <li>
              <Link
                href="/contactUs"
                className={`block py-2 px-3 md:bg-transparent md:text-gray-900 md:p-0 dark:text-white md:dark:text-blue-500 ${pathname === '/contactUs' ? 'text-yellow-500 border-b-2 border-yellow-500' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-500 md:border-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'}`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;