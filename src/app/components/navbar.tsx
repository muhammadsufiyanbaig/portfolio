'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="lg:bg-gray-100 lg:fixed w-full z-20 top-0 start-0  border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <Link href="https://www.linkedin.com/in/muhammadsufiyanbaig/" target="_blank" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image
            src={require("../../../public/Assets/Picture/LOGO.png")}
            alt="MSB"
            height={100}
            width={100}
            className="w-[30px] md:w-[50px]"
          />
          <span className="self-center text-base md:text-xl font-semibold whitespace-nowrap text-gray-700">
            Muhammad Sufiyan Baig
          </span>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <a href="/Assets/CV/MuhammadSufiyanBaig.pdf" target="_blank" rel="noopener noreferrer">
            <button
              type="button"
              className="text-gray-700  bg-gray-300 font-medium rounded-lg text-base md:text-lg px-2 py-1 md:px-4 md:py-2 text-center hover:bg-gray-500 hover:text-white"
            >
              Resume
            </button>
          </a>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center sm:p-0 p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 hover:bg-gray-700 focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
            onClick={toggleMenu}
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
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isOpen ? "block" : "hidden"
            }`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:space-x-8 rtl:space-x-reverse justify-center items-center md:flex-row md:mt-0 md:border-0 ">
            <li>
              <Link
                href="/"
                className="block py-2 px-3 text-black rounded md:bg-transparent  md:p-0 md:text-gray-500"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className="block py-2 px-3 text-black rounded md:bg-transparent  md:p-0 md:text-gray-500"
                aria-current="page"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#skills"
                className="block py-2 px-3 text-black rounded md:bg-transparent  md:p-0 md:text-gray-500"
                aria-current="page"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                href="#project"
                className="block py-2 px-3 text-black rounded md:bg-transparent  md:p-0 md:text-gray-500"
                aria-current="page"
              >
                Project

              </Link>

            </li>
            <li>
              <Link
                href="#contact"
                className="block py-2 px-3 text-black rounded md:bg-transparent md:p-0 md:text-gray-500"
                aria-current="page"
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
