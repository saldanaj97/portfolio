import { Button } from "@nextui-org/button";
import { FaRegEdit } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

type ModalType = "add" | "edit" | null;

interface ProjectButtonProps {
  onOpen: () => void;
  onClick?: (modalType: ModalType) => void;
  setProjectModalToDisplay?: (modalType: ModalType) => void;
}

export function AddProjectButton({
  onOpen,
  setProjectModalToDisplay,
}: ProjectButtonProps) {
  return (
    <Button onPress={onOpen}>
      <FaCirclePlus size={18} color="primary" />
    </Button>
  );
}

export function EditProjectButton({
  onOpen,
  setProjectModalToDisplay,
}: ProjectButtonProps) {
  return (
    <Button onPress={onOpen}>
      <FaRegEdit size={18} color="primary" />
    </Button>
  );
}

export function DeleteProjectButton({ onOpen }: ProjectButtonProps) {
  return (
    <Button onPress={onOpen}>
      <MdDelete size={18} color="primary" />
    </Button>
  );
}
