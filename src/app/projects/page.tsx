"use client";
import React, { useState } from "react";
import Link from "../../../node_modules/next/link";

const Project = () => {
  const projects = [
    {
      ProjectName: "Portfolio",
      ProjectLinks: "/",
      ProjectDescription:
        "This is my personal portfolio website. It is built using Next.js and Tailwind CSS. It is hosted on Vercel.",
      Skills: ["Next.js", "Tailwind CSS", "TS"],
    },
    {
      ProjectName: "Next Commerce",
      ProjectLinks: "https://nxtcom.vercel.app/",
      ProjectDescription:
        "This is a Next.js e-commerce website. It is built using Next.js, Tailwind CSS and Sanity.io. It is hosted on Vercel.",
      Skills: ["Next.js", "Tailwind CSS", "TS", "Sanity.io", "Shadcn UI"],
    },
    {
      ProjectName: "Gallery Grid",
      ProjectLinks: "https://gallerygrid.vercel.app/",
      ProjectDescription:
        "This is a Next.js Picture Gallery website. It is built using Next.js, Tailwind CSS, NextAuth and Firebase. It is hosted on Vercel.",
      Skills: ["Next.js", "Tailwind CSS", "TS", "firebase"],
    },
    {
      ProjectName: "Cobra Chase",
      ProjectLinks: "https://cobrachase.vercel.app/",
      ProjectDescription:
        "This is a Snake game. It is built using HTML, CSS and JS. It is hosted on Vercel.",
      Skills: ["CSS", "HTML", "JS"],
    },
    {
      ProjectName: "Entry Exit",
      ProjectLinks: "https://entry-exit.vercel.app/",
      ProjectDescription:
        "This Login and SignUp system. It is built using React.js, Tailwind CSS, JS and Redux. It is hosted on Vercel.",
      Skills: ["React.js", "Tailwind CSS", "JS", "Redux"],
    },
    {
      ProjectName: "Syntax Sphere",
      ProjectLinks: "https://syntaxsphere.vercel.app/",
      ProjectDescription:
        "This is a Text Editor. It is built using React.js, Tailwind CSS and JS. It is hosted on Vercel.",
      Skills: ["React.js", "Tailwind CSS", "JS"],
    },
    {
      ProjectName: "Organize Orbit",
      ProjectLinks: "https://organizeorbit.vercel.app/",
      ProjectDescription:
        "This is a To-Do List. It is built using React.js, Tailwind CSS and JS. It is hosted on Vercel.",
      Skills: ["React.js", "Tailwind CSS", "JS"],
    },
    {
      ProjectName: "Rupeeya",
      ProjectLinks: "https://rupeeya.vercel.app/",
      ProjectDescription:
        "This is a Expense Tracker. It is built using React.js, Tailwind CSS, JS and Chart.js. It is hosted on Vercel.",
      Skills: ["React.js", "Tailwind CSS", "JS"],
    },
    {
      ProjectName: "Koldware Industries",
      ProjectLinks: "https://koldware-clone.vercel.app/",
      ProjectDescription:
        "This is a Static Website of Koldware Industries. It is built using Next.js, Tailwind CSS, Shadcn UI and Sanity.io. It is hosted on Vercel.",
      Skills: ["Next.js", "Tailwind CSS", "TS", "ShadCn UI"],
    },
  ];
  const [expandedDescriptionIndex, setExpandedDescriptionIndex] =
    useState(null);

  const toggleExpandDescription = (index:any) => {
    if (expandedDescriptionIndex === index) {
      setExpandedDescriptionIndex(null);
    } else {
      setExpandedDescriptionIndex(index);
    }
  };
  return (
    <div className="bg-gray-50 py-6 sm:py-8 lg:py-12" id="project">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 font-mono text-center text-3xl font-bold text-gray-800 md:mb-6 lg:text-4xl">
            Projects
          </h2>
          <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
            Introducing a section of my completed works or ongoing endeavors,
            showcasing my portfolio or ongoing initiatives.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((item, index) => {
            const isExpanded = expandedDescriptionIndex === index;
            const truncatedDescription =
              item.ProjectDescription.length > 50
                ? item.ProjectDescription.slice(0, 50) + "..."
                : item.ProjectDescription;

            return (
              <div key={index} className="bg-white rounded-lg shadow-xl p-6">
                <Link className="block mb-4" href={item.ProjectLinks}>
                  <h3 className="text-xl font-bold text-gray-900">
                    {item.ProjectName}
                  </h3>
                </Link>
                <p className="text-gray-700 mb-4">
                  {isExpanded ? item.ProjectDescription : truncatedDescription}
                  {!isExpanded && (
                    <span
                      className="text-gray-500 cursor-pointer"
                      onClick={() => toggleExpandDescription(index)}
                    >
                      {" "}
                      (read more)
                    </span>
                  )}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.Skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-200 text-gray-800 text-sm rounded"
                    >
                      #{skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Project;
