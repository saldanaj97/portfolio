import { Button } from "@nextui-org/react";
import { FaRegEdit } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

export function AddProjectButton() {
  return (
    <Button className="">
      <FaCirclePlus size={18} color="primary" />
    </Button>
  );
}

export function EditProjectButton() {
  return (
    <Button className="">
      <FaRegEdit size={18} color="primary" />
    </Button>
  );
}

export function DeleteProjectButton() {
  return (
    <Button className="">
      <MdDelete size={18} color="primary" />
    </Button>
  );
}
