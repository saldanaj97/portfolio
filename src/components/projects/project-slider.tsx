"use client";

import { Card, CardBody, CardHeader, Chip } from "@nextui-org/react";

import { Project } from "./types";

export function ProjectSlider({ projects }: { projects: Project[] }) {
  const screenshotPlaceholder =
    "https://dummyimage.com/300x200&text=Dev+Environment+Placeholder";

  const ProjectCard = ({ project }: { project: Project }) => (
    <Card className="w-[300px] flex-shrink-0 p-2">
      <CardHeader className="flex-col items-start px-4 pb-0 pt-2">
        <small className="text-default-500">{project.description}</small>
        <h4 className="text-large font-bold">{project.title}</h4>
        <div className="mt-2 flex flex-wrap gap-2">
          {project.stack.map((language, index) => (
            <Chip key={index} className="bg-primary">
              <p className="text-xs text-white">{language}</p>
            </Chip>
          ))}
        </div>
      </CardHeader>
      <CardBody className="py-2">
        <img
          alt="Card background"
          className="h-[200px] w-full rounded-xl object-cover"
          src={
            process.env.NODE_ENV !== "development"
              ? project.screenshot
              : screenshotPlaceholder
          }
        />
      </CardBody>
    </Card>
  );

  return (
    <div className="flex justify-start space-x-4 py-4">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
}
