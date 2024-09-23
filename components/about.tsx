"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After completing Intermediate with in
        <span className="font-medium"> Computer Science</span>, I pursued my passion for web development.
        I gained hands-on experience as a Full-stack Intern at Panacloud Pvt Ltd, where I developed and maintained responsive, user-friendly, and visually appealing websites using
        <span className="font-medium">Next.js, React.js, and Tailwind CSS</span>.
        <span className="italic">My favorite part of web development</span> is creating intuitive user experiences and optimizing website performance.
        My core stack includes
        <span className="font-medium">Next.js, React.js, Typescript, and Tailwind CSS</span>.
        I am also familiar with Python, C, C++, Express.js, Fast API, Material UI, ShadCN UI, SQLite and Neon Database.
        I am always eager to learn new technologies and am currently looking for a
        <span className="font-medium">full-time position</span> as a Full-Stack developer.
      </p>

      <p>
        <span className="italic">When I'm not development</span>, I enjoy exploring new technologies, especially in the fields of AI and data science.
        I am currently working towards a certification in
        <span className="font-medium"> Cloud Applied Generative AI Engineering</span>.
        I am currently pursuing a <span className="font-medium"> Bachelor's degree in Data Science </span> from Sindh Madarsatul Islam University <span className="font-medium"> (SMIU)</span>.
        I also have a keen interest in open-source projects and enjoy contributing to the tech community.
      </p>

    </motion.section>
  );
}
