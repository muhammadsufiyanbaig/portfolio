import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import squareonecommunity from "@/public/squareonecommunity.jpg";
import Evorgs from "@/public/Evorgs.jpg";
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
      "Mentored and lead junior developers to encourage collaboration and growth. Design, developed and deployed user-friendly full-stack web applications.",
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
      "Developed and managed responsive websites using Framework & Librariess. Collaborated with teams to improve website performance and user experience.",  
    icon: React.createElement(CgWorkAlt),
    date: "Sep-2023 - Sep-2024",
  },
] as const;

export const projectsData = [
  
  {
    title: "Cryptofleet.io",
    description:
      "Worked on a crypto trading platform using Next.js, Tailwind CSS, and GraphQL. Implemented seamless user experience with real-time data handling",
    tags: ["React", "Tailwind", "Typescript", "Next.js", 'GraphQl'],
    imageUrl: CryptoFleet,
    link: "https://cryptofleet.io/",
  },
  {
    title: "Square One Community",
    description: "Lead the development of Square One, a Next.js and Node.js platform for brands to offer deals and users to redeem them.",
    tags: ["Tailwind", "Typescript", "Next.js", "Node.js", "Express.js", 'Neon Postgress'],
    imageUrl: squareonecommunity,
    link: "https://squareonecommunity.vercel.app/",
  },
  {
    title: "Evorgs",
    description:
      "Working on event management app with admin roles, vendor roles, and user role. Using Next.js, Tailwind CSS, FastAPI, and Neon DB for secure functionality.",
    tags: ["Next.js", "Tailwind", "Typescript", "Neon Postgress", "FastAPI", "GraphQL"],
    imageUrl: Evorgs,
    link: "https://evorgs.vercel.app",
  },
] as const;

export const skillsData = [
  { name: "JavaScript", category: "Programming Language" },
  { name: "TypeScript", category: "Programming Language" },
  { name: "Python", category: "Programming Language" },
  { name: "React.js", category: "Framework & Libraries" },
  { name: "Next.js", category: "Framework & Libraries" },
  { name: "Node.js", category: "Framework & Libraries" },
  { name: "Express.js", category: "Framework & Libraries" },
  { name: "FastAPI", category: "Framework & Libraries" },
  { name: "SQL Model", category: "Framework & Libraries" },
  { name: "MySQL", category: "Framework & Libraries" },
  { name: "Neon Postgres", category: "Framework & Libraries" },
  { name: "SQLite", category: "Framework & Libraries" },
  { name: "Tailwind CSS", category: "Framework & Libraries" },
  { name: "Material UI", category: "Framework & Libraries" },
  { name: "ShadCn UI", category: "Framework & Libraries" },
  { name: "Redux", category: "Framework & Libraries" },
  { name: "Zustand", category: "Framework & Libraries" },
  { name: "Groq", category: "Tools" },
  { name: "GraphQL", category: "Tools" },
  { name: "Sanity.io", category: "Tools" },
  { name: "Firebase", category: "Tools" },
  { name: "Vercel", category: "Tools" },
  { name: "LangChain", category: "Tools" },
  { name: "Docker", category: "Tools" },
  { name: "Redis", category: "Tools" },
  { name: "Kafka", category: "Tools" },
  { name: "Git", category: "Tools" },
  { name: "Framer Motion", category: "Tools" }
] as const;

