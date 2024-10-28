"use client";

import { PostgrestError } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { getProjects } from "~/api/projects";
import { MaintenancePlaceholder } from "~/components/maintenance";
import ProjectButtons from "~/components/projects/modal";
import { ProjectSlider } from "~/components/projects/project-slider";
import { Project } from "~/components/projects/types";

interface Section {
  title: string;
  projects: Project[];
}

const PORTFOLIO_SECTIONS: Array<{ title: string; category: string }> = [
  { title: "UI/UX", category: "ui" },
  { title: "Fullstack Development", category: "fullstack" },
  { title: "Other Projects", category: "other" },
];

const SectionHeader = () => (
  <div className="flex flex-col space-y-4">
    <h1 className="text-5xl font-semibold">My Expertise Includes:</h1>
    <h2 className="text-2xl text-gray-500">
      With a strong focus on implementing visually appealing and highly
      functional designs, my development experience has exposed me to a wide
      range of modern web technologies and frameworks. This expertise enables me
      to deliver seamless user experiences through efficient, secure, and
      scalable solutions, allowing me to provide high-quality work more quickly
      and effectively to clients.
    </h2>
  </div>
);

const ProjectSliderContainer = ({ projects }: { projects: Project[] }) => {
  const sections: Section[] = PORTFOLIO_SECTIONS.map(({ title, category }) => ({
    title,
    projects: projects.filter((project) => project.category === category),
  }));

  return (
    <div className="space-y-8">
      {sections.map((section) => (
        <div key={section.title}>
          <div className="flex flex-row items-center justify-between">
            <h2 className="text-2xl font-semibold">{section.title}</h2>
            <ProjectButtons />
          </div>
          <div className="hide-scrollbar w-full overflow-x-auto">
            <ProjectSlider projects={section.projects} />
          </div>
        </div>
      ))}
    </div>
  );
};

export function Projects() {
  const [projects, setProjects] = useState<Project[] | null>(null);
  const [error, setError] = useState<PostgrestError | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      const { projects: projectData, error: projectError } =
        await getProjects();
      if (projectError) {
        setError(projectError);
        return;
      }
      setProjects(projectData);
    };

    fetchProjects().catch((err) => setError(err));
  }, []);

  if (error) {
    return process.env.NODE_ENV === "development" ? (
      <div>Error: {error.message}</div>
    ) : (
      <MaintenancePlaceholder />
    );
  }

  if (!projects) {
    return <MaintenancePlaceholder />;
  }

  return (
    <div className="w-full max-w-7xl space-y-8 overflow-hidden px-16">
      <SectionHeader />
      <div className="flex flex-col">
        <ProjectSliderContainer projects={projects} />
      </div>
    </div>
  );
}
