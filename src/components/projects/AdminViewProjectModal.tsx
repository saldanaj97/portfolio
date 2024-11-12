"use client";

import { Modal, useDisclosure } from "@nextui-org/react";

import { AddProjectModal } from "./AddProjectModal";
import { AddProjectButton } from "./project-buttons";

export const AdminViewProjectModal = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <div className="flex flex-row space-x-2">
        <AddProjectButton onOpen={onOpen} />
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <AddProjectModal />
      </Modal>
    </>
  );
};
