'use client'
import Picture from "../../../public/Assets/Picture/picture.png";
import Image from "next/image";
import React from "react";
import Typewriter from 'typewriter-effect';

const Hero = () => {
    return (
        <div className="bg-white py-6 sm:py-8 lg:py-12" id="hero">
            <section className="text-gray-600 body-font sm:h-full lg:h-screen flex justify-center items-center">
                <div className="container mx-auto max-w-screen flex flex-col md:flex-row items-center">
                    <div className="lg:max-w-lg lg:w-full md:my-20 w-5/6 mb-10 md:mb-0 flex justify-center">
                        <div className="h-[500px] w-[500px] lg:h-full lg:w-full sm:mt-24 lg:mt-0 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
                            <Image
                                src={Picture}
                                loading="lazy"
                                alt="Picture"
                                className="h-[500px] w-[500px] md:w-full object-cover object-center"
                            />
                        </div>
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                            I am
                            <br className="hidden lg:inline-block" />
                            <Typewriter
                                options={{
                                    strings: ['Full Stack Developer',
                                        "Web Developer",
                                        'Graphic Designer',
                                        "Frontend Developer"],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h1>
                        {/* <div className="w-[100px] h-[2px] bg-gray-700 mb-6 mx-auto"></div> */}
                        <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
                        Welcome to my digital domain I am Muhammad Sufiyan Baig a passionate aspiring FullStack Developer and design aficionado driven by a fervent desire to create seamless innovative web experiences With a sturdy foundation in JavaScript and TypeScript coupled with expertise in Nextjs and Tailwind CSS I sculpt dynamic and responsive applications My canvas extends beyond codeI wield Adobe Photoshop and Illustrator to breathe life into creative visions ensuring usercentric interfaces through UIUX principles Armed with a grasp of color psychology and branding strategies I infuse digital identities with unique character Embracing the power of Python and PostgreSQL navigate data intricacies while seamlessly managing content with Sanityio As a fresher my hunger for learning and dedication to pushing the boundaries of web development propel me to seek collaborative ventures that drive innovation in this everevolving landscape Lets connect and craft something extraordinary together.
                        </p>
                        <div className="flex justify-center">
                            <a href="#contact">
                                <button className="inline-flex text-black-100 bg-gray-300 border-0 py-2 px-6 focus:outline-none hover:bg-gray-500 rounded text-lg hover:text-white">
                                    Contact
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Hero;
