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
    <div className="flex w-1/3 flex-col space-y-2 text-center">
      <h1 className="text-2xl font-semibold md:text-5xl">
        Experienced Across Multiple Stacks and Technologies
      </h1>
      <h2 className="text-small text-gray-500 md:text-2xl">
        I've worked with a variety of languages and frameworks to build
        applications that are scalable, maintainable, and efficient. If I have
        not worked with a particular technology you are looking for, I am always
        eager to learn and expand my skillset.
      </h2>
    </div>
  );

  const IconComponent: React.FC<IconComponentProps> = ({
    icon: Icon,
    label,
    count,
  }) => {
    return (
      <div className="flex flex-col items-center rounded bg-gray-100 p-4">
        <Icon size={64} className="text-blue-500" />
        <h2 className="text-2xl font-bold">{count}</h2>
        <p>{label}</p>
      </div>
    );
  };

  return (
    <div className="flex h-full w-full flex-row justify-center gap-8">
      <div className="flex flex-col justify-between">
        <IconComponent icon={FaReact} label="Javascript Projects" count="20+" />
        <IconComponent icon={MdWorkHistory} label="Past Clients" count="5+" />
      </div>

      <SectionHeadings />

      <div className="flex flex-col justify-between">
        <IconComponent
          icon={HiOutlineRocketLaunch}
          label="Deployed Projects"
          count="10+"
        />
        <IconComponent icon={SiAlwaysdata} label="Data Projects" count="5+" />
      </div>
    </div>
  );
}
