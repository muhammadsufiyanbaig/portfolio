'use client'
import React from "react";
import { useState } from "react";
import logo from "../../../public/Assets/Picture/LOGO.png"
import Image from "../../../node_modules/next/image";
import Link from "../../../node_modules/next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-20 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-500 hover:bg-gray-200 hover:text-gray-600  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={toggleMenu}
            >
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <svg
                className={`h-6 w-6 ${isOpen ? "block" : "hidden"}`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              <svg
                className={`h-6 w-6 ${isOpen ? "hidden" : "block"}`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <Image
                className="h-10 w-auto"
                src={logo}
                alt="Logo"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <Link
                  href="/"
                  className="text-gray-500  hover:bg-gray-200 hover:text-gray-600 rounded-md px-3 py-2 text-md font-bold"
                
                >
                  Home
                </Link>
                <Link
                  href="/#about"
                  className="text-gray-500 hover:bg-gray-200 hover:text-gray-600 rounded-md px-3 py-2 text-md font-bold"
                >
                  About
                </Link>
                <Link
                  href="/#skill"
                  className="text-gray-500 hover:bg-gray-200 hover:text-gray-600 rounded-md px-3 py-2 text-md font-bold"
                >
                  Skills
                </Link>
                <Link
                  href="projects"
                  className="text-gray-500 hover:bg-gray-200 hover:text-gray-600 rounded-md px-3 py-2 text-md font-bold"
                >
                  Project
                </Link>
                <Link
                  href="/#contact"
                  className="text-gray-500 hover:bg-gray-200 hover:text-gray-600 rounded-md px-3 py-2 text-md font-bold"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`sm:hidden ${isOpen ? "block" : "hidden"}`} id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <Link
            href="/"
            className=" text-gray-500  hover:bg-gray-200 block rounded-md px-3 py-2 text-base font-bold"
            aria-current="page"
          >
            Home
          </Link>
          <Link
            href="#about"
            className="text-gray-500  hover:bg-gray-200 hover:text-gray-600  block rounded-md px-3 py-2 text-base font-bold"
          >
            About
          </Link>
          <Link
            href="#skill"
            className="text-gray-500  hover:bg-gray-200 hover:text-gray-600  block rounded-md px-3 py-2 text-base font-bold"
          >
            Skills
          </Link>
          <Link
            href="#project"
            className="text-gray-500  hover:bg-gray-200 hover:text-gray-600  block rounded-md px-3 py-2 text-base font-bold"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="text-gray-500  hover:bg-gray-200 hover:text-gray-600  block rounded-md px-3 py-2 text-base font-bold"
          >
            Contact
          </Link>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;