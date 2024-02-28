'use client'
import React from "react";
import Picture from "../../../public/Assets/Picture/picture.png";
import Image from "next/image";
import Typewriter from 'typewriter-effect';
import Link from "../../../node_modules/next/link";
import { FaXTwitter } from "react-icons/fa6";
const hero = () => {
  return (
    <div>
      <div className="bg-white pb-6 sm:pb-8 lg:pb-12 mt-5 md:mt-7 lg:mt-16">
  <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
    <section className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
      {/* content - start */}
      <div className="flex flex-col justify-between xl:w-5/12">
        <div />
        <div className="sm:text-center lg:py-12 lg:text-left xl:py-24">
          <p className="mb-4 font-semibold text-gray-500 md:mb-6 md:text-xl xl:text-2xl">
            I am 
          </p>
          <h1 className="mb-8 text-4xl font-bold font-mono text-gray-700 sm:text-4xl md:mb-12 md:text-5xl">
          <Typewriter
                                options={{
                                    strings: [
                                      "Frontend Developer",
                                        "Next.js Developer",
                                        'Graphic Designer',
                                        ],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
          </h1>
          <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
          Passionate Frontend Developer skilled in JavaScript, TypeScript, React.js, Next.js, Tailwind CSS, Python, and design.
                        </p>
          <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
           
            <Link
              href="/Assets/MuhammadSufiyanBaig.pdf" target="_blank" rel="noopener noreferrer"
              className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
            >
             Resume
            </Link>
          </div>
        </div>
        {/* social - start */}
        <div className="mt-8 flex items-center justify-center gap-4 sm:mt-16 lg:justify-start">
          <span className="text-sm font-semibold uppercase tracking-widest text-gray-400 sm:text-base">
            Social
          </span>
          <span className="h-px w-12 bg-gray-200" />
          <div className="flex gap-4">
            <Link
               href={"https://www.instagram.com/muhammad_sufiyan_baig/"}
              target="_blank"
              className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
            >
              <svg
                className="h-5 w-5"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </Link>
            <Link
             href={"https://twitter.com/Sufiyan395"}
              target="_blank"
              className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
            >
             <FaXTwitter className="text-lg" />
            </Link>
            <Link
               href={"https://www.linkedin.com/in/muhammadsufiyanbaig/"}
              target="_blank"
              className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
            >
              <svg
                className="h-5 w-5"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </Link>
            <Link
             href={"https://github.com/muhammadsufiyanbaig"}
              target="_blank"
              className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
            >
              <svg
                className="h-5 w-5"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </Link>
          </div>
        </div>
        {/* social - end */}
      </div>
      {/* content - end */}
      {/* image - start */}
      <div className="h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-auto xl:w-5/12">
        <Image
        width={500}
        height={500}
          src={Picture}
          loading="lazy"
          alt="Photo by Fakurian Design"
          className="h-full w-full object-cover object-center"
        />
      </div>
      {/* image - end */}
    </section>
  </div>
</div>

    </div>
  )
}

export default hero
