import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import Ecommerce from "@/public/Ecommerce.jpg";
import PictureGallery from "@/public/PictureGallery.jpg";
import ExpenseTracker from "@/public/ExpenseTracker.jpg";
import TGAppliances from "@/public/Tgappliances.jpg"
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
    location: "Innovative Widget",
    description:
      "I'm now a Full Stack Developer working at Innovative Widget. My stack includes React, Next.js, TypeScript, Tailwind, Firebase, Express.js and SQLite. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "Sep-2024 - present",
  },
  {
    title: "Web Developer",
    location: "TG-Appliances",
    description:
    "I also worked as a freelance web developer at TG Appliances, where I contributed to building and maintaining their web solutions.", 
     icon: React.createElement(LuGraduationCap),
    date: "Sep-2024 - Oct-2024",
  },
  {
    title: "Full-Stack Developer",
    location: "Panacloud Pvt Ltd",
    description:
      "I was a Full Stack Developer at Panacloud. My stack included React, Next.js, TypeScript, Tailwind, Firebase, Express.js, and SQLite. I was open to full-time opportunities.",  
    icon: React.createElement(CgWorkAlt),
    date: "Sep-2023 - Sep-2024",
  },
] as const;

export const projectsData = [
  
  {
    title: "Square 1 Mall (Investment Management System)",
    description:
      "I am currently working on Square 1 Mall (Investment Management System).",
    tags: ["React", "Tailwind", "Javascript", "React.js", "Node.js", "My SQL"],
    imageUrl: CryptoFleet,
    link: "https://cryptofleet.io/",
  },
  {
    title: "TG-Appliances",
    description:
      "I created a website for TG-Appliances, a leading manufacturer of home appliances in Pakistan. The website is built using Next.js, Tailwind CSS, and Firebase.",
    tags: ["React", "Tailwind", "Typescript", "Next.js", "Resend"],
    imageUrl: TGAppliances,
    link: "https://tgappliances.com/",
  },
 
  {
    title: "Cryptofleet.io",
    description:
      "I worked on Cryptofleet.io, a crypto trading platform is building on Next.js. When I was in Panacloud PVT LTD",
    tags: ["React", "Tailwind", "Typescript", "Next.js"],
    imageUrl: CryptoFleet,
    link: "https://cryptofleet.io/",
  },
  {
    title: "QuizNex",
    description:
      "Quiz App with React.js, Tailwind CSS, Neon DB and Express.js. Teachers upload questions; students take quizzes. Cheat-proof with disabled shortcuts.",
    tags: ["React", "Tailwind", "Javascript", "Express.js", "Neondb", "JWT"],
    imageUrl: Quiz,
    link: "https://quiznex.vercel.app/",
   
  },
  {
    title: "Gallery Grid",
    description:
      "It's a Next.js Picture Gallery website. It is built using Next.js, Tailwind CSS, NextAuth and Firebase. It is hosted on Vercel.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Firebase"],
    imageUrl: PictureGallery,
    link: "https://nxtcom.vercel.app/",
  },
  {
    title: "Next Commerce",
    description:
      "This is a Next.js e-commerce website. It is built using Next.js, Tailwind CSS and Sanity.io. It is hosted on Vercel.",
    tags: ["React", "Next.js", "Tailwind CSS", "Sanity.io", "Shadcn UI"],
    imageUrl: Ecommerce,
    link: "https://next-commerce-nu.vercel.app/",
  },
  {
    title: "Rupeeya Expense Tracker",
    description:
      "This is a Expense Tracker. It is built using React.js, Tailwind CSS, JS and Chart.js. It is hosted on Vercel.",
    tags: ["React", "Tailwind", "Javascript",],
    imageUrl: ExpenseTracker,
    link: "https://rupeeya.vercel.app/",
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
