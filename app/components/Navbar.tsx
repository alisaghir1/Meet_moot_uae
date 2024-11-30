"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation"; // Use this hook to track the current route
import logo from "../../public/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const pathname = usePathname();

  return (
    <nav className="bg-zinc-900 border-gray-200 py-5 right-0 z-10">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image src={logo} alt="Logo" />
        </Link>

        {/* Hamburger Menu Button */}
        <button
          onClick={toggleMenu}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-yellow-500 lg:hidden hover:text-white focus:outline-none"
          aria-controls="navbar-default"
          aria-expanded={isOpen ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
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

        {/* Navbar Menu */}
        <div
          className={`transition-[max-height] duration-500 ease-in-out overflow-hidden lg:overflow-visible ${
            isOpen ? "max-h-[500px]" : "max-h-0"
          } w-full lg:block lg:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 lg:p-0 mt-4 lg:flex-row lg:space-x-8 rtl:space-x-reverse lg:mt-0 lg:border-0">
            <li>
              <Link
                href="/"
                className={`block pb-2 px-3 text-white 
                  ${
                    pathname === "/"
                      ? "text-yellow-500  "
                      : "text-white hover:border-b hover:border-yellow-500 hover:text-yellow-500"
                  }
                  transition-colors duration-300 ease-in-out`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/locations"
                className={`block pb-2 px-3 text-white 
                  ${
                    pathname === "/locations"
                      ? "text-yellow-500  "
                      : "text-white hover:border-b hover:border-yellow-500 hover:text-yellow-500"
                  }
                  transition-colors duration-300 ease-in-out`}
              >
                Locations
              </Link>
            </li>
            <li>
              <Link
                href="/menu"
                className={`block pb-2 px-3 text-white 
                  ${
                    pathname === "/menu"
                      ? "text-yellow-500  "
                      : "text-white hover:border-b hover:border-yellow-500 hover:text-yellow-500"
                  }
                  transition-colors duration-300 ease-in-out`}
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`block pb-2 px-3 text-white 
                  ${
                    pathname === "/about"
                      ? "text-yellow-500  "
                      : "text-white hover:border-b hover:border-yellow-500 hover:text-yellow-500"
                  }
                  transition-colors duration-300 ease-in-out`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/media"
                className={`block pb-2 px-3 text-white 
                  ${
                    pathname === "/media"
                      ? "text-yellow-500  "
                      : "text-white hover:border-b hover:border-yellow-500 hover:text-yellow-500"
                  }
                  transition-colors duration-300 ease-in-out`}
              >
                Media
              </Link>
            </li>
            <li>
              <Link
                href="/contactUs"
                className={`block pb-2 px-3 text-white 
                  ${
                    pathname === "/contactUs"
                      ? "text-yellow-500  "
                      : "text-white hover:border-b hover:border-yellow-500 hover:text-yellow-500"
                  }
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
