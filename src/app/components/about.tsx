import React from "react";

const About = () => {
    return (
        <div className="bg-gray-50 py-6 sm:py-8 lg:py-12 h-full flex flex-col items-center" id="about">
            <h2 className="mb-4 font-mono text-center text-3xl font-bold text-gray-800 md:mb-6 lg:text-4xl">
                About me
            </h2>
            <p className="text-gray-500 sm:text-lg mx-5 text-center">
                I am <b>Muhammad Sufiyan Baig</b>, currently pursuing a BS in Data Science at SMIU University while advancing my skills as a Generative AI Engineer through PIAIC. I have completed courses in CIT and Graphic Designing from MITI after matriculating from K.C.S School, and completing my Inter from Govt. Dehli College.
            </p>
            
            <div className="flex justify-center items-center mt-5 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-auto xl:w-5/12">
                <video controls={true} className="h-full w-full object-cover object-center">
                    <source src={'/Assets/Picture/video.mp4'} type="video/mp4" />
                    Your browser does not support the video.
                </video>
            </div>
        </div>
    );
};

export default About;
