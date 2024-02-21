'use client'
import React from 'react';
import Portfolio from '../../../../../public/Assets/Project/Portfolio.jpg';
import Image from 'next/image';
const Home = () => {
  return (
    <div>

      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="rounded-lg bg-gray-50 px-4 py-6 md:py-8 lg:py-12">
            <p className="mb-2 text-center font-semibold text-gray-500 md:mb-3 lg:text-lg">
              Introducing
            </p>
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              My Full Stack Development Projects
            </h2>
            <p className="mx-auto max-w-screen-lg lg:max-w-screen-xl text-center text-gray-500 md:text-lg">
            Incorporating Fullstack projects into my portfolio illustrates a proficiency in end-to-end development.
            From frontend technologies like Next.js, React, and Tailwind CSS to backend tools such as Headless CMS
            and Sanity.io, TypeScript, and PostgreSQL, these projects showcase a diverse skill set encompassing JavaScript,
            TypeScript, HTML, and more.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl xl:mb-12">
            PROJECTS
          </h2>
          <div className="mb-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:mb-8 md:grid-cols-4 md:gap-6 xl:gap-8">
            {/* image - start */}
            <a
              href="/"
              target='_blank'
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
            >
              <Image
                src={Portfolio}
                loading="lazy"
                width={500}
                height={500}
                alt="Photo by Lorenzo Herrera"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                Portfolio
              </span>
            </a>
            {/* image - end */}
          </div>
        </div>
      </div>

    </div>
  );
}

export default Home;
