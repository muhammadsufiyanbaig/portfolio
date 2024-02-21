import React from "react";
import Image from "next/image";

const Skill = () => {
  const Skills = [
    "Next.js",
    "React.js",
    "TailwindCSS",
    "Redux",
    "Typescript",
    "Javascript",
    "HTML",
    "CSS",
    "Python",
    "Anaconda",
    "GROQ",
    "Sanity.io",
    "Github",
    "Photoshop",
    "Illustrator",
    "Canva",
    "firebase",
    "Git",
  ];
  return (
    <div id="skills" className="flex justify-center mt-10 items-center">
      <section className="bg-white text-gray-600 body-font sm:h-full lg:h-screen xl:h-full mb-8">
        <h1 className="mb-4 font-mono text-center text-3xl font-bold text-gray-800 md:mb-6 lg:text-4xl">
          Skills
        </h1>
        <p className="mx-auto max-w-screen text-center text-gray-500 md:text-lg my-8 lg:mb-5">
          Listed are my proficiencies and abilities that I possess or have
          developed over the time.
        </p>
        <div className="lg:my-20">
          <div className="mx-2 grid grid-cols-2 gap-4 mt-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-8 flex-wrap justify-center items-center sm:flex sm:justify-center sm:items-center">
            {Skills.map((skill: string, index: number) => {
              return (
                <div
                  key={index}
                  className={
                    " border border-gray-500 text-center rounded-md space-x-2"
                  }
                >
                  <h1 className="px-3 py-2 text-xl font-mono font-semibold">
                    {skill}
                  </h1>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skill;
