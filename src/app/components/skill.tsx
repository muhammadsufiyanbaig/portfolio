import React from "react";
import Image from "next/image";
import NextLogo from "../../../public/Assets/Picture/skill logo/NEXT.JS.svg";
import ReactLogo from "../../../public/Assets/Picture/skill logo/React.svg";
import TailwindLogo from "../../../public/Assets/Picture/skill logo/TailwindCSS.svg";
import SqlLogo from "../../../public/Assets/Picture/skill logo/PostgreSQL.svg";
import TsLogo from "../../../public/Assets/Picture/skill logo/TS.svg";
import JsLogo from "../../../public/Assets/Picture/skill logo/JS.svg";
import HtmlLogo from "../../../public/Assets/Picture/skill logo/HTML.svg";
import CssLogo from "../../../public/Assets/Picture/skill logo/CSS.svg";
import PythonLogo from "../../../public/Assets/Picture/skill logo/Python.svg";
import GqlLogo from "../../../public/Assets/Picture/skill logo/GraphQL.svg";
import SanityLogo from "../../../public/Assets/Picture/skill logo/Sanity.io.svg";
import GithubLogo from "../../../public/Assets/Picture/skill logo/GitHub.svg";
import IllustratorLogo from "../../../public/Assets/Picture/skill logo/AdobeIllustrator.svg";
import PhotoshopLogo from "../../../public/Assets/Picture/skill logo/AdobePhotoshop.svg";
import FigmaLogo from "../../../public/Assets/Picture/skill logo/Figma.svg";
import GitLogo from "../../../public/Assets/Picture/skill logo/git.svg";
import PostmanLogo from "../../../public/Assets/Picture/skill logo/postman.svg";
import CanvaLogo from "../../../public/Assets/Picture/skill logo/Canva.png";

const Skill = () => {
    return (
        <div id="skills" className="flex justify-center items-center">
            <section className="bg-white text-gray-600 body-font sm:h-full lg:h-screen xl:h-full mb-8">
                <h1 className="sm:text-3xl text-2xl text-center title-font m-4 text-gray-800 font-bold">
                    Skills
                </h1>
                <p className="mx-auto max-w-screen text-center text-gray-500 md:text-lg my-8 lg:mb-5">
                    Listed are my proficiencies and abilities that I possess or have developed over time
                </p>

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-8 flex-wrap justify-center items-center sm:flex sm:justify-center sm:items-center">

                    <div className="flex flex-col items-center rounded-lg h-[200px] w-[185px] bg-gray-100 p-4 lg:p-8 flex-wrap">
                        <h2 className="font-bold text-2xl gap-2 text-center">Next.js</h2>
                        <Image src={NextLogo} alt="Next.js" className=" h-[90px] w-[90px] flex justify-center items-center " />
                    </div>

                    <div className="flex flex-col items-center rounded-lg  h-[200px] w-[185px] bg-gray-100 p-4 lg:p-8 flex-wrap">
                        <h2 className="font-bold text-2xl gap-3 text-center mb-3">React</h2>
                        <Image src={ReactLogo} alt="Next.js" className="h-[90px] w-[90px] flex justify-center items-center" />
                    </div>

                    <div className="flex flex-col items-center rounded-lg h-[200px] w-[185px] bg-gray-100 p-4 lg:p-8">
                        <h2 className="font-bold text-2xl gap-3 text-center mb-3 leading-none">Tailwind<br />CSS</h2>
                        <Image src={TailwindLogo} alt="Next.js" className="h-[90px] w-[90px] flex justify-center items-center" />
                    </div>

                    <div className="flex flex-col items-center rounded-lg  h-[200px] w-[185px] bg-gray-100 p-4 lg:p-8">
                        <h2 className="font-bold text-2xl gap-3 text-center mb-3 leading-none">Postgre<br />SQL</h2>
                        <Image src={SqlLogo} alt="Next.js" className="h-[90px] w-[90px] flex justify-center items-center" />
                    </div>

                    <div className="flex flex-col items-center rounded-lg h-[200px] w-[185px] bg-gray-100 p-4 lg:p-8 flex-wrap">
                        <h2 className="font-bold text-2xl gap-3 text-center mb-3">Typescript</h2>
                        <Image src={TsLogo} alt="Next.js" className="h-[90px] w-[90px] flex justify-center items-center" />
                    </div>

                    <div className="flex flex-col items-center rounded-lg h-[200px] w-[185px] bg-gray-100 p-4 lg:p-8 flex-wrap">
                        <h2 className="font-bold text-2xl gap-3 text-center mb-3">Javascript</h2>
                        <Image src={JsLogo} alt="Next.js" className="h-[90px] w-[90px] flex justify-center items-center" />
                    </div>

                    <div className="flex flex-col items-center rounded-lg h-[200px] w-[185px] bg-gray-100 p-4 lg:p-8 flex-wrap">
                        <h2 className="font-bold text-2xl gap-3 text-center mb-3">HTML</h2>
                        <Image src={HtmlLogo} alt="Next.js" className="h-[90px] w-[90px] flex justify-center items-center" />
                    </div>

                    <div className="flex flex-col items-center rounded-lg h-[200px] w-[185px] bg-gray-100 p-4 lg:p-8 flex-wrap">
                        <h2 className="font-bold text-2xl gap-3 text-center mb-3">CSS</h2>
                        <Image src={CssLogo} alt="Next.js" className="h-[90px] w-[90px] flex justify-center items-center" />
                    </div>

                    <div className="flex flex-col items-center rounded-lg h-[200px] w-[185px] bg-gray-100 p-4 lg:p-8 flex-wrap">
                        <h2 className="font-bold text-2xl gap-3 text-center mb-3">Python</h2>
                        <Image src={PythonLogo} alt="Next.js" className="h-[90px] w-[90px] flex justify-center items-center" />
                    </div>

                    <div className="flex flex-col items-center rounded-lg h-[200px] w-[185px] bg-gray-100 p-4 lg:p-8 flex-wrap">
                        <h2 className="font-bold text-2xl gap-3 text-center mb-3">GraphQL</h2>
                        <Image src={GqlLogo} alt="Next.js" className="h-[90px] w-[90px] flex justify-center items-center" />
                    </div>

                    <div className="flex flex-col items-center rounded-lg h-[200px] w-[185px] bg-gray-100 p-4 lg:p-8 flex-wrap">
                        <h2 className="font-bold text-2xl gap-3 text-center mb-3">Sanity.io</h2>
                        <Image src={SanityLogo} alt="Next.js" className="h-[90px] w-[90px] flex justify-center items-center" />
                    </div>

                    <div className="flex flex-col items-center rounded-lg h-[200px] w-[185px] bg-gray-100 p-4 lg:p-8 flex-wrap">
                        <h2 className="font-bold text-2xl gap-3 text-center mb-3">Github</h2>
                        <Image src={GithubLogo} alt="Next.js" className="h-[90px] w-[90px] flex justify-center items-center" />
                    </div>

                    <div className="flex flex-col items-center rounded-lg h-[200px] w-[185px] bg-gray-100 p-4 lg:p-8">
                        <h2 className="font-bold text-2xl gap-3 text-center leading-none">Adobe<br />Photoshop</h2>
                        <Image src={PhotoshopLogo} alt="Next.js" className="h-[90px] w-[90px] flex justify-center items-center" />
                    </div>

                    <div className="flex flex-col items-center rounded-lg h-[200px] w-[185px] bg-gray-100 p-4 lg:p-8">
                        <h2 className="font-bold text-2xl gap-3 text-center leading-none">Adobe<br />Illustrator</h2>
                        <Image src={IllustratorLogo} alt="Next.js" className="h-[90px] w-[90px] flex justify-center items-center" />
                    </div>

                    <div className="flex flex-col items-center rounded-lg h-[200px] w-[185px] bg-gray-100 p-4 lg:p-8 flex-wrap">
                        <h2 className="font-bold text-2xl gap-3 text-center mb-3 ">Figma</h2>
                        <Image src={FigmaLogo} alt="Next.js" className="h-[90px] w-[90px] flex justify-center items-center" />
                    </div>
                    
                    <div className="flex flex-col items-center rounded-lg h-[200px] w-[185px] bg-gray-100 p-4 lg:p-8 flex-wrap">
                        <h2 className="font-bold text-2xl gap-3 text-center mb-3">Canva</h2>
                        <Image src={CanvaLogo} alt="Next.js" className="h-[90px] w-[90px] flex justify-center items-center" />
                    </div>

                    <div className="flex flex-col items-center rounded-lg h-[200px] w-[185px] bg-gray-100 p-4 lg:p-8 flex-wrap">
                        <h2 className="font-bold text-2xl gap-3 text-center mb-3">Postman</h2>
                        <Image src={PostmanLogo} alt="Next.js" className="h-[90px] w-[90px] flex justify-center items-center" />
                    </div>

                    <div className="flex flex-col items-center rounded-lg h-[200px] w-[185px] bg-gray-100 p-4 lg:p-8 flex-wrap">
                        <h2 className="font-bold text-2xl gap-3 text-center mb-3">Git</h2>
                        <Image src={GitLogo} alt="Next.js" className="h-[90px] w-[90px] flex justify-center items-center" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Skill;
