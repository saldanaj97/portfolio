import { Button } from "@nextui-org/button";
import { FaRegEdit } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { ProjectButtonProps } from "./types";

export function AddProjectButton({ onOpen }: ProjectButtonProps) {
  return (
    <Button onPress={onOpen}>
      <FaCirclePlus size={18} color="primary" />
    </Button>
  );
}

export function EditProjectButton({ onOpen }: ProjectButtonProps) {
  return (
    <Button onPress={onOpen}>
      <FaRegEdit size={18} color="primary" />
    </Button>
  );
}
export function DeleteProjectButton({}) {
  return (
    <Button>
      <MdDelete size={18} color="primary" />
    </Button>
  );
}
