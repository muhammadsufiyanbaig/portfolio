'use client'
import React from 'react';
import Image from 'next/image';
import Taitanic from '../../../../public/Assets/Project/Taitanic.jpg';
import CreditCard from '../../../../public/Assets/Project/CerditCard.jpg';
import Iris from '../../../../public/Assets/Project/Iris.jpg';
import Movie from '../../../../public/Assets/Project/Movie.jpg';
import Sales from '../../../../public/Assets/Project/Sales.jpg';
import { document } from 'postcss';

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
              My Data Science Projects
            </h2>
            <p className="mx-auto max-w-screen-lg lg:max-w-screen-xl text-center text-gray-500 md:text-lg">
              Incorporating Data Science and Machine Learning projects into my portfolio underscores my proficiency
              in leveraging algorithms and statistical models to derive insights and solutions. These projects demonstrate
              applied knowledge in Python, statistical analysis, predictive modeling, and data visualization, showcasing a
              practical understanding of real-world problem-solving in the realm of data.
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
              href="https://github.com/muhammadsufiyanbaig/Titanic_Survival_Predication"
              target='_blank'
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
            >
              <Image
                src={Taitanic}
                loading="lazy"
                width={500}
                height={500}
                alt="Photo by Minh Pham"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                Titanic Survival Predication
              </span>
            </a>
            {/* image - end */}
            {/* image - start */}
            <a
              href="https://github.com/muhammadsufiyanbaig/Movie_Rating_Prediction"
              target='_blank'
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
            >
              <Image
                src={Movie}
                loading="lazy"
                width={500}
                height={500}
                alt="Photo by Magicle"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                Movie Rating Prediction
              </span>
            </a>
            {/* image - end */}
            {/* image - start */}
            <a
              href="https://github.com/muhammadsufiyanbaig/Iris_Flower_Classification"
              target='_blank'
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
            >
              <Image
                src={Iris}
                loading="lazy"
                width={500}
                height={500}
                alt="Photo by Martin Sanchez"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                Iris Flower Classification
              </span>
            </a>
            {/* image - end */}
            {/* image - start */}
            <a
              href="https://github.com/muhammadsufiyanbaig/SalesPrediction"
              target='_blank'
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
            >
              <Image
                src={Sales}
                loading="lazy"
                width={500}
                height={500}
                alt="Photo by Lorenzo Herrera"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                Sales Prediction
              </span>
            </a>
            {/* image - end */}
            {/* image - start */}
            <a
              href="https://github.com/muhammadsufiyanbaig/Credit-Card-Fraud-Detection"
              target='_blank'
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
            >
              <Image
                src={CreditCard}
                loading="lazy"
                width={500}
                height={500}
                alt="Photo by Lorenzo Herrera"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                Credit Card Fraud Detection
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
