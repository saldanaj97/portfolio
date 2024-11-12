"use client";

import { Button } from "@nextui-org/button";
import {
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import { EditProjectForm } from "./forms";
import { Project } from "./types";

export const EditProjectModal = ({ project }: { project: Project }) => {
  return (
    <ModalContent>
      {(onClose) => (
        <>
          <ModalHeader className="flex flex-col gap-1">
            Edit a project
          </ModalHeader>
          <ModalBody>
            <EditProjectForm onClose={onClose} project={project} />
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="flat" onPress={onClose}>
              Close
            </Button>
          </ModalFooter>
        </>
      )}
    </ModalContent>
  );
};
