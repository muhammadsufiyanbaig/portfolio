import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-3xl capitalize mb-8 text-center text-teal-800 font-extrabold">
      {children}
    </h2>
  );
}
