import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import Ecommerce from "@/public/Ecommerce.jpg";
import PictureGallery from "@/public/PictureGallery.jpg";
import ExpenseTracker from "@/public/ExpenseTracker.jpg";
import LoginSignup from "@/public/LoginSignup.jpg"
import Quiz from "@/public/Quiz.jpg"
import CryptoFleet from "@/public/Cryptofleet.jpg"
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Full-Stack Developer",
    location: "Panacloud Pvt Ltd",
    description:
      "I'm now a full-stack intern working at Panacloud. My stack includes React, Next.js, TypeScript, Tailwind, Firebase, Express.js and SQLite. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "Sep-2023 - present",
  },
] as const;

export const projectsData = [
  
  {
    title: "Cryptofleet.io",
    description:
      "I am currently working on Cryptofleet.io, a crypto trading platform is building on Next.js.",
    tags: ["React", "Tailwind", "Typescript", "Next.js"],
    imageUrl: CryptoFleet,
    technicalDetails:{
      modalTitle: "",
      modalData: "",
      modalImage: CryptoFleet,
    }
  },
  {
    title: "QuizNex",
    description:
      "Quiz App with React.js, Tailwind CSS, Neon DB and Express.js. Teachers upload questions; students take quizzes. Cheat-proof with disabled shortcuts.",
    tags: ["React", "Tailwind", "Javascript", "Express.js", "Neondb", "JWT"],
    imageUrl: Quiz,
    technicalDetails:{
      modalTitle: "Lorem ipsum dolor sit amet",
      modalData: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      modalImage: CryptoFleet,
    }
  },
  {
    title: "Gallery Grid",
    description:
      "It's a Next.js Picture Gallery website. It is built using Next.js, Tailwind CSS, NextAuth and Firebase. It is hosted on Vercel.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Firebase"],
    imageUrl: PictureGallery,
    technicalDetails:{
      modalTitle: "Lorem ipsum dolor sit amet",
      modalData: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      modalImage: CryptoFleet,
    }
  
  },
  {
    title: "Next Commerce",
    description:
      "This is a Next.js e-commerce website. It is built using Next.js, Tailwind CSS and Sanity.io. It is hosted on Vercel.",
    tags: ["React", "Next.js", "Tailwind CSS", "Sanity.io", "Shadcn UI"],
    imageUrl: Ecommerce,
    technicalDetails:{
      modalTitle: "Lorem ipsum dolor sit amet",
      modalData: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      modalImage: CryptoFleet,
    }
  },
  {
    title: "Rupeeya Expense Tracker",
    description:
      "This is a Expense Tracker. It is built using React.js, Tailwind CSS, JS and Chart.js. It is hosted on Vercel.",
    tags: ["React", "Tailwind", "Javascript",],
    imageUrl: ExpenseTracker,
    technicalDetails:{
      modalTitle: "Lorem ipsum dolor sit amet",
      modalData: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      modalImage: CryptoFleet,
    }  
  },
 
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "SQLite",
  "Redux",
  "Groq",
  "Sanity.io",
  "Express",
  "Neon Postgress",
  "Python",
  "FastAPI",
  "Framer Motion",
] as const;
