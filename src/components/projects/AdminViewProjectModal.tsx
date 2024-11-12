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
import { ModalType } from "./types";

export const AdminViewProjectModal = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [projectModalToDisplay, setProjectModalToDisplay] =
    useState<ModalType>(null);

  const handleModalToDisplay = (modalType: ModalType) => {
    setProjectModalToDisplay(modalType);
  };

  return (
    <>
      <div className="flex flex-row space-x-2">
        <AddProjectButton
          onOpen={() => {
            handleModalToDisplay("add");
            onOpen();
          }}
        />
        <EditProjectButton
          onOpen={() => {
            handleModalToDisplay("edit");
            onOpen();
          }}
        />
        <DeleteProjectButton />
      </div>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        {projectModalToDisplay === "add" && <AddProjectModal />}
        {projectModalToDisplay === "edit" && <EditProjectModal />}
      </Modal>
    </>
  );
};
