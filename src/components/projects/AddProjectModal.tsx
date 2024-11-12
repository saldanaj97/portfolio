import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import {
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";

export const AddProjectModal = () => {
  return (
    <ModalContent>
      {(onClose) => (
        <>
          <ModalHeader className="flex flex-col gap-1">
            Add a project
          </ModalHeader>
          <ModalBody>
            <Input
              autoFocus
              label="Name"
              placeholder="Project name"
              variant="bordered"
            />
            <Input
              label="Description"
              placeholder="Project description"
              variant="bordered"
            />
            <Input
              label="Stack"
              placeholder="Comma separated list of languages"
              variant="bordered"
            />
            <Input
              label="Cover Image"
              placeholder="URL to project cover image"
              variant="bordered"
            />
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="flat" onPress={onClose}>
              Close
            </Button>
            <Button color="primary" onPress={onClose}>
              Add
            </Button>
          </ModalFooter>
        </>
      )}
    </ModalContent>
  );
};
