'use client'
import React from 'react';
import Image from 'next/image';
import CurrencyConverter from '../../../../public/Assets/Project/CurrencyConverter.jpg';
import Quiz from '../../../../public/Assets/Project/Quiz.jpg';
import SnakeGame from '../../../../public/Assets/Project/SankeGame.jpg';
import SignUp from '../../../../public/Assets/Project/SignUp.jpg';
import TicTacToe from '../../../../public/Assets/Project/TicTacToe.jpg';

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
              My Vanilla HTML, CSS & Javascript Projects
            </h2>
            <p className="mx-auto max-w-screen-lg lg:max-w-screen-xl text-center text-gray-500 md:text-lg">
            HTML, CSS, and JavaScript constitute the fundamental building blocks of web development. 
            HTML organizes content, CSS styles its presentation, and JavaScript introduces interactivity 
            and functionality. These languages collaboratively construct seamless, visually engaging, and
            interactive websites. Incorporating these skills into a portfolio demonstrates the ability to 
            create well-structured, visually appealing, and dynamic web projects, showcasing proficiency as 
            a budding web developer.
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
              href="https://github.com/muhammadsufiyanbaig/Currency-Converter"
              target='_blank'
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
            >
              <Image
                src={CurrencyConverter}
                width={500}
                height={500}
                loading="lazy"
                alt="Photo by Minh Pham"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
              Currency Converter
              </span>
            </a>
            {/* image - end */}
            {/* image - start */}
            <a
              href="https://github.com/muhammadsufiyanbaig/Dynamic-Quiz"
              target='_blank'
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
            >
              <Image
                src={Quiz}
                loading="lazy"
                alt="Photo by Magicle"
                width={500}
                height={500}
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
              Dynamic Quiz
              </span>
            </a>
            {/* image - end */}
            {/* image - start */}
            <a
              href="https://github.com/muhammadsufiyanbaig/Hungry_Snake"
              target='_blank'
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
            >
              <Image
                src={SnakeGame}
                loading="lazy"
                alt="Photo by Martin Sanchez"
                width={500}
                height={500}
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
              Snake Game
              </span>
            </a>
            {/* image - end */}
            {/* image - start */}
            <a
              href="https://github.com/muhammadsufiyanbaig/SignUp_Page"
              target='_blank'
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
            >
              <Image
                src={SignUp}
                loading="lazy"
                alt="Photo by Lorenzo Herrera"
                width={500}
                height={500}
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
              SignUp
              </span>
            </a>
            {/* image - end */}
            {/* image - start */}
            <a
              href="https://github.com/muhammadsufiyanbaig/Tic-Tac-Toe"
              target='_blank'
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
            >
              <Image
                src={TicTacToe}
                loading="lazy"
                width={500}
                height={500}
                alt="Photo by Lorenzo Herrera"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
              Tic Tac Toe
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
