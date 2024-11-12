import { Button, Input } from "@nextui-org/react";
import { useState } from "react";
import { addProject } from "~/app/(landing-page)/actions";
import { NewProject } from "./types";

interface NewProjectFormProps {
  onClose: () => void;
}

export const NewProjectForm = ({ onClose }: NewProjectFormProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [stack, setStack] = useState("");
  const [screenshot, setScreenshot] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const project: NewProject = {
      title,
      description,
      stack: stack.split(",").map((s) => s.trim()),
      screenshot,
      category: "other",
    };
    const { error } = await addProject(project);
    if (error) {
      console.error("Error adding project:", error);
      return;
    }
    onClose();
  }

  return (
    <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
      <Input
        autoFocus
        label="Name"
        placeholder="Project name"
        variant="bordered"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input
        label="Description"
        placeholder="Project description"
        variant="bordered"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Input
        label="Stack"
        placeholder="Comma separated list of languages"
        variant="bordered"
        value={stack}
        onChange={(e) => setStack(e.target.value)}
      />
      <Input
        label="Cover Image"
        placeholder="URL to project cover image"
        variant="bordered"
        value={screenshot}
        onChange={(e) => setScreenshot(e.target.value)}
      />
      <Button color="primary" type="submit">
        Add
      </Button>
    </form>
  );
};
