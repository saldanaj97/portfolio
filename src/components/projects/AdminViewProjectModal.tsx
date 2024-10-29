"use client";

import { Modal, useDisclosure } from "@nextui-org/react";

import { useState } from "react";
import { AddProjectModal } from "./AddProjectModal";
import { EditProjectModal } from "./EditProjectModal";
import {
  AddProjectButton,
  DeleteProjectButton,
  EditProjectButton,
} from "./project-buttons";

type ModalType = "add" | "edit" | null;

export const AdminViewProjectModal = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [projectModalToDisplay, setProjectModalToDisplay] =
    useState<ModalType>(null);

  return (
    <>
      <div className="flex flex-row space-x-2">
        <AddProjectButton onOpen={onOpen} />
        <EditProjectButton onOpen={onOpen} />
        <DeleteProjectButton onOpen={onOpen} />
      </div>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        {projectModalToDisplay === "add" && (
          <AddProjectModal
            setProjectModalToDisplay={() => setProjectModalToDisplay("add")}
          />
        )}
        {projectModalToDisplay === "edit" && (
          <EditProjectModal
            setProjectModalToDisplay={() => setProjectModalToDisplay("edit")}
          />
        )}
      </Modal>
    </>
  );
};

// {projectModalToDisplay === "add" && (
//   <AddProjectModal isOpen={isOpen} onOpenChange={onOpenChange} />
// )}

// {projectModalToDisplay === "edit" && (
//   <EditProjectModal isOpen={isOpen} onOpenChange={onOpenChange} />
// )}
