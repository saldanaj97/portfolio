"use client";

import { motion } from "framer-motion";
import React from "react";
import { FaReact } from "react-icons/fa";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { MdWorkHistory } from "react-icons/md";
import { SiAlwaysdata } from "react-icons/si";

interface IconComponentProps {
  icon: React.ComponentType<{ size: number; className: string }>;
  label: string;
  count: string;
}

export default function Skills() {
  const SectionHeadings: React.FC = () => (
    <motion.div className="flex flex-col justify-center space-y-2 text-center">
      {/* Animate h1 from the top */}
      <motion.h1
        className="text-center text-2xl font-semibold md:text-5xl"
        initial={{ opacity: 0, y: -100 }} // Start off-screen above
        animate={{ opacity: 1, y: 0 }} // Animate to the center
        transition={{ delay: 1, duration: 1 }} // Adjust delay for clockwise effect
        exit={{ opacity: 0, y: -100 }} // Exit off-screen above
      >
        Experienced Across Multiple Stacks and Technologies
      </motion.h1>

      {/* Animate h2 from the bottom */}
      <motion.h2
        className="text-center text-small text-gray-500 md:text-2xl"
        initial={{ opacity: 0, y: 100 }} // Start off-screen below
        animate={{ opacity: 1, y: 0 }} // Animate to the center
        transition={{ delay: 1.2, duration: 1 }} // Adjust delay for clockwise effect
        exit={{ opacity: 0, y: 100 }} // Exit off-screen below
      >
        I've worked with a variety of languages and frameworks to build
        applications that are scalable, maintainable, and efficient. If I have
        not worked with a particular technology you are looking for, I am always
        eager to learn and expand my skillset.
      </motion.h2>
    </motion.div>
  );

  const IconComponent: React.FC<IconComponentProps> = ({
    icon: Icon,
    label,
    count,
  }) => {
    return (
      <motion.div className="flex flex-col items-center justify-center rounded p-4">
        <Icon size={128} className="text-blue-500" />
        <h2 className="text-center text-2xl font-bold">{count}</h2>
        <p className="text-center">{label}</p>
      </motion.div>
    );
  };

  return (
    <div className="py-16">
      <motion.div
        className="flex flex-col md:grid md:grid-cols-[1fr_1fr_1fr] md:gap-4"
        initial={"hidden"}
        whileInView={"visible"}
        viewport={{ once: true }}
      >
        {/* Left Icon Column */}
        <motion.div className="flex flex-col items-center justify-between">
          <motion.div
            className="flex"
            initial={{
              opacity: 0,
              transform: "translateX(-500%) translateY(-100%)", // Translate based off scroll progress
            }}
            animate={{
              opacity: 1,
              transition: { delay: 1, duration: 1 },
              transform: "translateY(0%)",
            }}
            exit={{ opacity: 0 }}
          >
            <IconComponent
              icon={FaReact}
              label="Javascript Projects"
              count="20+"
            />
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              transform: "translateX(-500%) translateY(100%)",
            }}
            animate={{
              opacity: 1,
              transition: { delay: 1.5, duration: 1 }, // Delayed for clockwise effect
              transform: "translateY(0%)",
            }}
            exit={{ opacity: 0 }}
          >
            <IconComponent
              icon={MdWorkHistory}
              label="Past Clients"
              count="5+"
            />
          </motion.div>
        </motion.div>

        {/* Middle Heading Column */}
        <motion.div
          className="flex flex-col items-center justify-center"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: { delay: 0.25, duration: 1 }, // Delayed for clockwise effect
            transform: "translateY(0%)",
          }}
          exit={{ opacity: 0 }}
        >
          <SectionHeadings />
        </motion.div>

        {/* Right Icon Column */}
        <motion.div className="flex flex-col justify-between">
          <motion.div
            className="flex flex-col justify-between"
            initial={{
              opacity: 0,
              transform: "translateX(500%) translateY(-100%)",
            }}
            animate={{
              opacity: 1,
              transition: { delay: 2, duration: 1 }, // Delayed for clockwise effect
              transform: "translateY(0%)",
            }}
            exit={{ opacity: 0 }}
          >
            <IconComponent
              icon={HiOutlineRocketLaunch}
              label="Deployed Projects"
              count="10+"
            />
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              transform: "translateX(500%) translateY(100%)",
            }}
            animate={{
              opacity: 1,
              transition: { delay: 2.25, duration: 1 }, // Delayed for clockwise effect
              transform: "translateY(0%)",
            }}
            exit={{ opacity: 0 }}
          >
            <IconComponent
              icon={SiAlwaysdata}
              label="Data Projects"
              count="5+"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
