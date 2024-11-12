"use client";

import { Button } from "@nextui-org/button";
import {
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import { NewProjectForm } from "./forms";

export const AddProjectModal = () => {
  return (
    <ModalContent>
      {(onClose) => (
        <>
          <ModalHeader className="flex flex-col gap-1">
            Add a project
          </ModalHeader>
          <ModalBody>
            <NewProjectForm onClose={onClose} />
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
