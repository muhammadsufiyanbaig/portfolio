"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  // Group skills by category
  const groupedSkills: Record<string, string[]> = {};
  skillsData.forEach(({ name, category }) => {
    if (!groupedSkills[category]) {
      groupedSkills[category] = [];
    }
    groupedSkills[category].push(name);
  });

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>Skills</SectionHeading>

      <div className="grid gap-8">
        {Object.entries(groupedSkills).map(([category, skills], catIndex) => (
          <div key={catIndex} className="text-left">
            <h3 className="text-xl text-center font-semibold text-gray-900 dark:text-white mb-4">
              {category}
            </h3>
            <ul className="flex flex-wrap justify-center gap-3">
              {skills.map((skill, index) => (
                <motion.li
                  className="bg-white borderBlack text-center items-center rounded-xl px-5 py-3 text-gray-800 dark:bg-white/10 dark:text-white/80"
                  key={index}
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={index}
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
