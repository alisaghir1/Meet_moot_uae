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
    <nav className="bg-zinc-900 border-gray-200 0 pt-5 right-0 z-10">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image src={logo} alt="Logo" />
        </Link>
        <button
          onClick={toggleMenu}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-yellow-500 lg md:hidden hover:text-white  focus:outline-none"
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
          className={`transition-[max-height] duration-500 ease-in-out overflow-hidden ${
            isOpen ? 'max-h-[500px]' : 'max-h-0'
          } w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                href="/"
                className={`block py-2 px-3 md:bg-transparent md:text-white md:p 
                  ${pathname === '/' ? 'text-yellow-500 border-b-2 border-yellow-500' : 'text-white md:hover:bg-transparent hover:text-yellow-500 md:border-0 md:dark:hover:bg-transparent'}
                  transition-colors duration-300 ease-in-out`} 
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/locations"
                className={`block py-2 px-3 md:bg-transparent md:text-white md:p 
                  ${pathname === '/locations' ? 'text-yellow-500 border-b-2 border-yellow-500' : 'text-white md:hover:bg-transparent hover:text-yellow-500 md:border-0 md:dark:hover:bg-transparent'}
                  transition-colors duration-300 ease-in-out`} 
              >
                Locations
              </Link>
            </li>
            <li>
              <Link
                href="/menu"
                className={`block py-2 px-3 md:bg-transparent md:text-white md:p 
                  ${pathname === '/menu' ? 'text-yellow-500 border-b-2 border-yellow-500' : 'text-white md:hover:bg-transparent hover:text-yellow-500 md:border-0 md:dark:hover:bg-transparent'}
                  transition-colors duration-300 ease-in-out`} 
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`block py-2 px-3 md:bg-transparent md:text-white md:p 
                  ${pathname === '/about' ? 'text-yellow-500 border-b-2 border-yellow-500' : 'text-white md:hover:bg-transparent hover:text-yellow-500 md:border-0 md:dark:hover:bg-transparent'}
                  transition-colors duration-300 ease-in-out`} 
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/media"
                className={`block py-2 px-3 md:bg-transparent md:text-white md:p 
                  ${pathname === '/media' ? 'text-yellow-500 border-b-2 border-yellow-500' : 'text-white md:hover:bg-transparent hover:text-yellow-500 md:border-0 md:dark:hover:bg-transparent'}
                  transition-colors duration-300 ease-in-out`} 
              >
                Media
              </Link>
            </li>
            <li>
              <Link
                href="/contactUs"
                className={`block py-2 px-3 md:bg-transparent md:text-white md:p 
                  ${pathname === '/contactUs' ? 'text-yellow-500 border-b-2 border-yellow-500' : 'text-white md:hover:bg-transparent hover:text-yellow-500 md:border-0 md:dark:hover:bg-transparent'}
                  transition-colors duration-300 ease-in-out`} 
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
