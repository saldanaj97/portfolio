type ModalType = "add" | "edit" | null;

type NewProject = {
  title: string;
  description: string;
  stack: string[];
  screenshot: string;
  category: string;
};

type Project = {
  id: string;
  created_at: string;
  updated_at: string | null;
  title: string;
  description: string;
  screenshot: string;
  stack: string[];
  category: ProjectCategory;
};

type ProjectButtonProps = {
  onOpen?: () => void;
  onClick?: (modalType: ModalType) => void;
  onDelete?: () => void;
  handleModalToDisplay?: (modalType: ModalType) => void;
  handleDeleteClick?: () => void;
};

type ProjectCategory = "ui" | "fullstack" | "other";

export type {
  ModalType,
  NewProject,
  Project,
  ProjectButtonProps,
  ProjectCategory,
};