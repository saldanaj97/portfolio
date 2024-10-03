"use client";

import { Divider } from "@nextui-org/react";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

const timeline = [
  {
    title: "Bachelor of Science in Computer Science",
    location: "University of North Texas",
    description:
      "I graduated from the University of North Texas with a Bachelor of Science in Computer Science. I learned the fundamentals of computer science, including data structures, algorithms, and software development.",
    date: "2016 - 2020",
  },
  {
    title: "Software Developer",
    location: "Startup",
    description:
      "I worked as a software developer at a startup company in Dallas, Texas. I was responsible for developing software applications for the company's clients. Unfortunately, the company went out of business due to the COVID-19 pandemic.",
    date: "2020 - 2020",
  },
  {
    title: "Freelance Developer",
    location: "Remote",
    description:
      "I started freelancing as a software developer. I worked primarily on web development and mobile application projects through which I gained valuable experience working with clients from different industries.",
    date: "2020 - 2021",
  },
  {
    title: "Unemployed",
    description:
      "Due to unforseen circumstances, I had to take a break from work to take care of a parent after they suffered a medical emergency. During this time, I focused on improving my skills and learning new technologies.",
    date: "2021 - 2022",
  },
  {
    title: "Freelance Developer",
    location: "Remote",
    description:
      "I am currently freelancing again while I search for a full-time software developer position.",
    date: "2022 - Present",
  },
];

export function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref, // track the scrolling within this ref
    offset: ["start end", "end start"], // calculate progress based on the target element
  });

  return (
    <>
      <h1 className="text-5xl font-semibold">Education and Experience</h1>
      <div className="flex flex-row space-x-8">
        {/* Progress line */}
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="w-2 origin-top bg-primary"
        />

        {/* Timeline content */}
        <div className="flex flex-col" ref={ref}>
          {timeline.map((item, index) => (
            <div className="flex h-64 flex-col space-y-2">
              <div
                key={index}
                className="relative flex h-full flex-col justify-evenly"
              >
                <h2 className="text-2xl font-semibold">{item.title}</h2>
                <p className="text-base font-semibold">
                  {item.location && item.location}
                </p>
                <p className="text-base font-normal text-gray-500">
                  {item.description}
                </p>

                {/* Timeline Dot */}
                <div
                  className="absolute left-[-32px] z-50 h-6 w-6 rounded-full bg-primary"
                  style={{
                    top: "50%",
                    transform: "translate(-50%, -100%)",
                  }}
                />

                <p className="text-lg font-semibold">{item.date}</p>
              </div>
              <Divider />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
