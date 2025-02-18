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
      <SectionHeading>About</SectionHeading>
      <p className="mb-3">
        After completing my Intermediate (12th) in {' '}
        <span className="font-medium">Computer Science</span>, I followed my
        passion for web development and honed my skills as a {' '}
        <span className="font-medium">Full Stack Developer</span>. During my
        tenure at {' '}
        <span className="font-medium">Panacloud Pvt Ltd {' '}</span> and {' '}
        <span className="font-medium">Innovative Widget {' '}</span>, I was
        responsible for developing and managing end-to-end web applications. I
        built robust, user-friendly interfaces while also engineering scalable
        backend systems and implementing efficient business logic. My role
        demanded expertise in frameworks such as {' '}
        <span className="font-medium">
          Next.js, React.js, Tailwind CSS, Express.js, and FastAPI
        </span>
        .
      </p>

      <p>
        I thrive on creating seamless, high-performance web experiences that
        prioritize both functionality and user satisfaction. My core tech stack
        includes {' '}
        <span className="font-medium">
          Next.js, React.js, TypeScript, Tailwind CSS, and Node.js {' '}
        </span>
        , complemented by skills in {' '}
        <span className="font-medium">
          Python, Docker, Redis, LangChain, Kafka, and more {' '}
        </span>
        . I am passionate about continuous learning and am currently working
        towards certifications in {' '}
        <span className="font-medium">
          Docker, AWS, and Applied Generative AI Engineering {' '}
        </span>
        . Additionally, I am pursuing a {' '}
        <span className="font-medium">Bachelor's degree in Data Science</span>{" "}
        from Sindh Madarsatul Islam University{" "}
        <span className="font-medium">(SMIU)</span>.
      </p>

      <p>
        I am actively seeking a{" "}
        <span className="font-medium">full-time role</span> as a Full Stack
        Developer, where I can bring my experience in full-cycle development and
        a deep commitment to innovation and optimization to the team.
      </p>
    </motion.section>
  );
}
