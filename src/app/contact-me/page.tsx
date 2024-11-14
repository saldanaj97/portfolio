"use client";

import { AiOutlineMail } from "react-icons/ai";
import { CiLinkedin } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlinePersonPinCircle } from "react-icons/md";
import { ThemeSwitcher } from "~/components/theme/ThemeSwitcher";
import React from "react";
import { ContactForm } from "~/app/contact-me/forms";

type InformationSectionCopywritingType = {
  icon: IconType;
  title: string;
  description: string;
  value: string;
};

type IconType = React.ComponentType<{ size: number; className: string }>;

export default function ContactMe() {
  const informationSectionCopywriting: InformationSectionCopywritingType[] = [
    {
      icon: AiOutlineMail,
      title: "Email",
      description:
        "The best way to contact me is via email. I generally respond within 24 hours.",
      value: "saldanaj97@gmail.com",
    },
    {
      icon: FiPhoneCall,
      title: "Phone",
      description:
        "To arrange a phone call, please send me an email with your contact information, and I will call back at your convenience.",
      value: "",
    },
    {
      icon: CiLinkedin,
      title: "Social Media",
      description:
        "I am only active on LinkedIn, where I am generally available and respond faster than via email.",
      value: "",
    },
    {
      icon: MdOutlinePersonPinCircle,
      title: "Location",
      description:
        "I am based in the United States. For in-person meetings, please email me to schedule an appointment.",
      value: "Dallas, Texas, United States",
    },
  ];

  const IconComponent: React.FC<{ icon: IconType }> = ({ icon: Icon }) => {
    return Icon ? (
      <div className="flex flex-col">
        <Icon size={24} className="" />
      </div>
    ) : null;
  };

  const Information = () => {
    return (
      <div className="flex w-full flex-col justify-center gap-y-4 rounded-t-xl bg-white px-6 py-8 lg:w-2/5 lg:rounded-l-xl lg:rounded-tr-none lg:px-12 lg:py-16">
        {informationSectionCopywriting.map((section) => (
          <div className="flex flex-col text-black" key={section.title}>
            <div className="flex flex-row items-start space-x-2">
              <IconComponent icon={section.icon} />
              <div className="flex flex-col">
                <h2 className="text-lg font-bold">{section.title}</h2>
                <p className="mb-1 text-sm font-normal">
                  {section.description}
                </p>
                <p className="text-sm font-semibold">{section.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const Contact = () => {
    return (
      <div className="flex w-full flex-col justify-center rounded-b-xl bg-primary px-6 py-8 lg:w-3/5 lg:rounded-r-xl lg:rounded-bl-none lg:px-12 lg:py-16">
        <div className="flex h-full flex-col justify-between space-y-8">
          <div>
            <h1 className="text-2xl font-semibold lg:text-4xl">
              Looking for a developer or need a website built? Contact me below.
            </h1>
            <h2 className="mt-4 text-lg lg:text-xl">
              Tell me more about yourself or your company and what you have in
              mind.
            </h2>
          </div>
          <ContactForm />
        </div>
      </div>
    );
  };

  return (
    <>
      <ThemeSwitcher />
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="flex w-full max-w-5xl flex-col items-stretch rounded-xl shadow-lg lg:flex-row">
          <Information />
          <Contact />
        </div>
      </div>
    </>
  );
}