'use client'
import React from 'react';
import Image from 'next/image';
import ATM from '../../../../public/Assets/Project/ATM.jpg';
import Bank from '../../../../public/Assets/Project/BankManagment.jpg';
import Student from '../../../../public/Assets/Project/StudentManagmentSystem.jpg';
import Currency from '../../../../public/Assets/Project/Currency.jpg';
import Dice from '../../../../public/Assets/Project/Dice.jpg';
import OOPs from '../../../../public/Assets/Project/OOPs.jpg';
import Todo from '../../../../public/Assets/Project/TaskManager.jpg';
import Timmer from '../../../../public/Assets/Project/Timmer.jpg';
import Game from '../../../../public/Assets/Project/Game.jpg';
import WordGame from '../../../../public/Assets/Project/WordGame.jpg';
import Quiz from '../../../../public/Assets/Project/ConsoleQuiz.jpg';
import Calculator from '../../../../public/Assets/Project/Calculator.jpg';
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
              My Typescript & Node.js Projects
            </h2>
            <p className="mx-auto max-w-screen-lg lg:max-w-screen-xl text-center text-gray-500 md:text-lg">
            Node.js facilitates server-side scripting with JavaScript, enabling scalable and efficient web applications.
            TypeScript adds static typing to JavaScript, enhancing code reliability and maintainability. Featuring Node.js 
            and TypeScript projects in a portfolio showcases expertise in robust backend development and optimized front-end
            solutions, highlighting versatility and proficiency in web development technologies.
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
              href="https://github.com/muhammadsufiyanbaig/TypeScript_Calculator"
              target='_blank'
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
            >
              <Image
                src={Calculator}
                loading="lazy"
                width={500}
                height={500}
                alt="Photo by Minh Pham"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                Calculator
              </span>
            </a>
            {/* image - end */}
            {/* image - start */}
            <a
              href="https://github.com/muhammadsufiyanbaig/Number_Guess_Game"
              target='_blank'
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
            >
              <Image
                src={Dice}
                loading="lazy"
                width={500}
                height={500}
                alt="Photo by Magicle"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                Number Guess
              </span>
            </a>
            {/* image - end */}
            {/* image - start */}
            <a
              href="https://github.com/muhammadsufiyanbaig/TypeScript_ATM_Machine"
              target='_blank'
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
            >
              <Image
                src={ATM}
                loading="lazy"
                width={500}
                height={500}
                alt="Photo by Martin Sanchez"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                ATM
              </span>
            </a>
            {/* image - end */}
            {/* image - start */}
            <a
              href="https://github.com/muhammadsufiyanbaig/TypeScript_Quiz_App"
              target='_blank'
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
            >
              <Image
                src={Quiz}
                loading="lazy"
                width={500}
                height={500}
                alt="Photo by Lorenzo Herrera"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                Quiz
              </span>
            </a>
            {/* image - end */}
            {/* image - start */}
            <a
              href="https://github.com/muhammadsufiyanbaig/TypeScript_To-Do_List"
              target='_blank'
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
            >
              <Image
                src={Todo}
                loading="lazy"
                width={500}
                height={500}
                alt="Photo by Minh Pham"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                Todo app  
              </span>
            </a>
            {/* image - end */}
            {/* image - start */}
            <a
              href="https://github.com/muhammadsufiyanbaig/TypeScript_Currency_Converter"
              target='_blank'
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
            >
              <Image
                src={Currency}
                loading="lazy"
                width={500}
                height={500}
                alt="Photo by Magicle"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                Currency Convertor
              </span>
            </a>
            {/* image - end */}
            {/* image - start */}
            <a
              href="https://github.com/muhammadsufiyanbaig/TypeScript_Word_Counter"
              target='_blank'
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
            >
              <Image
                src={WordGame}
                loading="lazy"
                width={500}
                height={500}
                alt="Photo by Martin Sanchez"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                Word Counter
              </span>
            </a>
            {/* image - end */}
            {/* image - start */}
            <a
              href="https://github.com/muhammadsufiyanbaig/TypeScript_Countdown_Timer"
              target='_blank'
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
            >
              <Image
                src={Timmer}
                loading="lazy"
                width={500}
                height={500}
                alt="Photo by Lorenzo Herrera"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                Countdown
              </span>
            </a>
            {/* image - end */}
            {/* image - start */}
            <a
              href="https://github.com/muhammadsufiyanbaig/TypeScript_Adventure_Game"
              target='_blank'
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
            >
              <Image
                src={Game}
                loading="lazy"
                width={500}
                height={500}
                alt="Photo by Minh Pham"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                Adventure Game
              </span>
            </a>
            {/* image - end */}
            {/* image - start */}
            <a
              href="https://github.com/muhammadsufiyanbaig/TypeScript_OOP_Concepts"
              target='_blank'
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
            >
              <Image
                src={OOPs}
                loading="lazy"
                width={500}
                height={500}
                alt="Photo by Magicle"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                Object Oriented Programming
              </span>
            </a>
            {/* image - end */}
            {/* image - start */}
            <a
              href="https://github.com/muhammadsufiyanbaig/TypeScript_Student_Management_System"
              target='_blank'
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
            >
              <Image
                src={Student}
                loading="lazy"
                width={500}
                height={500}
                alt="Photo by Martin Sanchez"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                Student Management System
              </span>
            </a>
            {/* image - end */}
            {/* image - start */}
            <a
              href="https://github.com/muhammadsufiyanbaig/TypeScript_Bank_Management_System"
              target='_blank'
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
            >
              <Image
                src={Bank}
                loading="lazy"
                width={500}
                height={500}
                alt="Photo by Lorenzo Herrera"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                Bank Management System
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
