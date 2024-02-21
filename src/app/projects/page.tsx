import React from "react";
import Image from 'next/image';
import Link from 'next/link';
import Frontend from '../../../public/Assets/Project/FrontedDevelopment.jpg';
import Console from '../../../public/Assets/Project/ConsoleInteractive.jpg';
import FullStack from '../../../public/Assets/Project/FullStackDevelopment.jpg';
import DataScience from '../../../public/Assets/Project/DataScience.jpg';
const Project = () => {
  return (
    <div className="bg-gray-50 py-6 sm:py-8 lg:py-12" id="project">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8 sm:h-full lg:h-screen ">
        {/* text - start */}
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
            Project
          </h2>
          <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
          Introducing a section of my completed works or ongoing endeavors, showcasing my portfolio or ongoing initiatives.
          </p>
        </div>
        {/* text - end */}
        <div className="flex justify-center items-center">
          <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8 2xl:mt-32">
            {/* article - start */}
            <div className="flex flex-col overflow-hidden rounded-lg border bg-white">
              <Link
                href="/projects/HTML,CSS&JS"
                target="_blank"
                className="group relative block h-48 overflow-hidden bg-gray-100 md:h-64"
              >
                <Image
                  src={Frontend}
                  width={500}
                  height={500}
                  loading="lazy"
                  alt="Photo by Minh Pham"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
              </Link>
              <div className="flex flex-1 flex-col p-4 sm:p-6">
                <h2 className="mb-2 text-lg font-semibold text-gray-800 text-center">
                  <Link
                    href="/projects/HTML,CSS&JS"
                    target="_blank"
                    className="transition duration-100 hover:text-gray-500 active:text-gray-600"
                  >
                    HTML, CSS & Javascript
                  </Link>
                </h2>
                <p className="mb-8 text-gray-500 text-center">
                HTML structures web content, CSS styles its appearance, and JavaScript adds
                 interactivity, forming the core of modern web development. Essential trio!
                </p>
                <div className="mt-auto flex items-end justify-between">
                </div>
              </div>
            </div>
            {/* article - end */}
            {/* article - start */}
            <div className="flex flex-col overflow-hidden rounded-lg border bg-white">
              <a
                href="/projects/Typescript&Node.js"
                target="_blank"
                className="group relative block h-48 overflow-hidden bg-gray-100 md:h-64"
              >
                <Image
                  src={Console}
                  width={500}
                  height={500}
                  loading="lazy"
                  alt="Photo by Minh Pham"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
              </a>
              <div className="flex flex-1 flex-col p-4 sm:p-6  text-center">
                <h2 className="mb-2 text-lg font-semibold text-gray-800">
                  <Link
                    href="/projects/Typescript&Node.js"
                    target="_blank"
                    className="transition duration-100 hover:text-gray-500 active:text-gray-600"
                  >
                    Typescript & Node.Js
                  </Link>
                </h2>
                <p className="mb-8 text-gray-500">
                TypeScript enhances Node.js with strong typing, improving reliability,
                scalability, and maintainability in JavaScript-based server-side applications.
                </p>
              </div>
            </div>
            {/* article - end */}
            {/* article - start */}
            <div className="flex flex-col overflow-hidden rounded-lg border bg-white">
              <Link
                href="/projects/FullStackDevelopment"
                target="_blank"
                className="group relative block h-48 overflow-hidden bg-gray-100 md:h-64"
              >
                <Image
                  src={FullStack}
                  width={500}
                  height={500}
                  loading="lazy"
                  alt="Photo by Minh Pham"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
              </Link>
              <div className="flex flex-1 flex-col p-4 sm:p-6 text-center">
                <h2 className="mb-2 text-lg font-semibold text-gray-800">
                  <Link
                    href="/projects/FullStackDevelopment"
                    target="_blank"
                    className="transition duration-100 hover:text-gray-500 active:text-gray-600"
                  >
                    Full Stack Development
                  </Link>
                </h2>
                <p className="mb-8 text-gray-500">
                Full-stack development: proficiency in both frontend (client-side) and 
                backend (server-side) technologies, creating complete web applications or software solutions.
                </p>
              </div>
            </div>
            {/* article - end */}
            {/* article - start */}
            <div className="flex flex-col overflow-hidden rounded-lg border bg-white">
              <Link
                href="/projects/DataScience"
                target="_blank"
                className="group relative block h-48 overflow-hidden bg-gray-100 md:h-64"
              >
                <Image
                  src={DataScience}
                  width={500}
                  height={500}
                  loading="lazy"
                  alt="Photo by Minh Pham"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
              </Link>
              <div className="flex flex-1 flex-col p-4 sm:p-6 text-center">
                <h2 className="mb-2 text-lg font-semibold text-gray-800">
                  <Link
                    href="/projects/DataScience"
                    target="_blank"
                    className="transition duration-100 hover:text-gray-500 active:text-gray-600"
                  >
                    Data Science
                  </Link>
                </h2>
                <p className="mb-8 text-gray-500">
                Data science combines statistics, programming, and domain expertise to extract
                insights, patterns, and knowledge from complex data sets effectively.
                </p>
              </div>
            </div>
            {/* article - end */}
          </div>
        </div>
      </div>
    </div>

  )
};
export default Project 
