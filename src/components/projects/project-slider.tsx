"use client";

import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Modal,
  useDisclosure,
} from "@nextui-org/react";
import { useState } from "react";
import { EditProjectModal } from "./EditProjectModal";
import { DeleteProjectButton, EditProjectButton } from "./project-buttons";
import { Project } from "./types";
import { deleteProject } from "~/app/(landing-page)/actions";

export function ProjectSlider({
  projects,
  isAdminView,
}: {
  projects: Project[];
  isAdminView: boolean;
}) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const screenshotPlaceholder =
    "https://dummyimage.com/300x200&text=Dev+Environment+Placeholder";

  const handleEditClick = (project: Project) => {
    setSelectedProject(project);
    onOpen();
  };

  async function handleDeleteClick(project: Project) {
    if (!project) return;
    const { error } = await deleteProject(project.id);
    if (error) {
      console.error("Error deleting project:", error);
      return;
    }
    console.log("Deleted project: ", project);
  }

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
      {isAdminView && (
        <CardFooter className="flex flex-row justify-evenly space-x-2">
          <EditProjectButton onOpen={() => handleEditClick(project)} />
          <DeleteProjectButton onDelete={() => handleDeleteClick(project)} />
        </CardFooter>
      )}
    </Card>
  );

  return (
    <>
      <div className="flex justify-start space-x-4 py-4">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        {selectedProject && <EditProjectModal project={selectedProject} />}
      </Modal>
    </>
  );
}