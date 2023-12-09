import React from "react";
import Pic from "../../../public/Assets/Picture/pic1.jpg";
import Image from "next/image";
const About = () => {
    return (
        <div className="bg-gray-50 py-6 sm:py-8 lg:py-12 h-full" id="about">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
                About me
            </h2>
            <div className="mx-auto max-w-screen-xl px-4 md:px-8">
                <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
                    <div>
                        <div className="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto ">
                            <Image
                                src={Pic}
                                loading="lazy"
                                alt="Photo by Martin Sanchez"
                                className="h-full w-full object-cover object-center md:w-[700px]"
                            />
                        </div>
                    </div>
                    <div className="md:pt-8">
                        <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
                            Hey there! I am <b>Muhammad Sufiyan Baig</b>,a full stack developer driven by a
                            fusion of technology and design.I completed my 12th-grade from Goverment Dehli College.
                            I furthered my expertise through courses in CIT, Graphic Designing at MITI, 
                            and delved into Metaverse, Web 3.0, and AI at Piaic.
                            <br />
                            <br />
                            As a full stack developer, I specialize in blending front-end creativity
                            with back-end functionality. Crafting seamless user interfaces and architecting
                            robust server-side systems form the core of my expertise. Beyond coding and design,
                            I am passionate about exploring creative expressions that fuel my perpetual quest for growth.
                            <br />
                            <br />
                            I thrive on the evolving landscape of technology, seeking to leverage its potential
                            to create impactful solutions. Whether it is developing innovative applications or pushing
                            the boundaries of user experience, I am dedicated to embracing the challenges that come my way.
                        </p>
                        <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
                            Let connect and explore opportunities to collaborate, innovate, or discuss the ever-evolving
                            world of technology and design. Reach out at
                            <b><a href="mailto:send.sufiyan@gmail.com"> send.sufiyan@gmail.com</a></b> for inquiries, collaborations,
                            or engaging conversations on our field exciting developments!
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
};
export default About;