import {
  AddProjectButton,
  DeleteProjectButton,
  EditProjectButton,
} from "~/components/projects/project-buttons";
import { ProjectSlider } from "~/components/projects/project-slider";

type Project = {
  title: string;
  description: string;
  screenshot: string;
  stack: string[];
};

type Section = {
  title: string;
  projects: Project[];
};

const FullStackApplications = [
  {
    title: "Portfolio 1",
    description: "This is a description of Portfolio 1",
    screenshot: "",
    stack: ["React", "Next.js", "TailwindCSS"],
  },
  {
    title: "Portfolio 2",
    description: "This is a description of Portfolio 2",
    screenshot: "",
    stack: ["Python", "Django", "TailwindCSS"],
  },
  {
    title: "Portfolio 3",
    description: "This is a description of Portfolio 3",
    screenshot: "",
    stack: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Portfolio 4",
    description: "This is a description of Portfolio 4",
    screenshot: "",
    stack: ["React", "Next.js", "TailwindCSS"],
  },
  {
    title: "Portfolio 5",
    description: "This is a description of Portfolio 5",
    screenshot: "",
    stack: ["Python", "Django", "TailwindCSS"],
  },
  {
    title: "Portfolio 6",
    description: "This is a description of Portfolio 6",
    screenshot: "",
    stack: ["HTML", "CSS", "JavaScript"],
  },
];

const UIProjects = [
  {
    title: "Landing Page 1",
    description: "This is a description of Landing Page 1",
    screenshot: "",
    stack: ["React", "Next.js", "TailwindCSS"],
  },
  {
    title: "Landing Page 2",
    description: "This is a description of Landing Page 2",
    screenshot: "",
    stack: ["Python", "Django", "TailwindCSS"],
  },
  {
    title: "Landing Page 3",
    description: "This is a description of Landing Page 3",
    screenshot: "",
    stack: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Landing Page 4",
    description: "This is a description of Landing Page 4",
    screenshot: "",
    stack: ["React", "Next.js", "TailwindCSS"],
  },
  {
    title: "Landing Page 5",
    description: "This is a description of Landing Page 5",
    screenshot: "",
    stack: ["Python", "Django", "TailwindCSS"],
  },
  {
    title: "Landing Page 6",
    description: "This is a description of Landing Page 6",
    screenshot: "",
    stack: ["HTML", "CSS", "JavaScript"],
  },
];

const OtherProjects = [
  {
    title: "E-commerce 1",
    description: "This is a description of E-commerce 1",
    screenshot: "",
    stack: ["React", "Next.js", "TailwindCSS"],
  },
  {
    title: "E-commerce 2",
    description: "This is a description of E-commerce 2",
    screenshot: "",
    stack: ["Python", "Django", "TailwindCSS"],
  },
  {
    title: "E-commerce 3",
    description: "This is a description of E-commerce 3",
    screenshot: "",
    stack: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "E-commerce 4",
    description: "This is a description of E-commerce 4",
    screenshot: "",
    stack: ["React", "Next.js", "TailwindCSS"],
  },
  {
    title: "E-commerce 5",
    description: "This is a description of E-commerce 5",
    screenshot: "",
    stack: ["Python", "Django", "TailwindCSS"],
  },
  {
    title: "E-commerce 6",
    description: "This is a description of E-commerce 6",
    screenshot: "",
    stack: ["HTML", "CSS", "JavaScript"],
  },
];

const Sections = [
  {
    title: "Full Stack Applications",
    projects: FullStackApplications,
  },
  {
    title: "Landing Pages, E-Commerce, Other UI",
    projects: UIProjects,
  },
  { title: "Other Projects", projects: OtherProjects },
];

export const Projects = () => {
  const ProjectSliderContainer = () => {
    return (
      <div className="space-y-8">
        {Sections.map((section: Section, index: number) => (
          <div key={index}>
            <div className="flex flex-row items-center justify-between">
              <h2 className="text-2xl font-semibold">{section.title}</h2>
              <div className="flex flex-row space-x-2">
                <AddProjectButton />
                <EditProjectButton />
                <DeleteProjectButton />
              </div>
            </div>
            <div className="hide-scrollbar w-full overflow-x-auto">
              <div className="flex flex-col">
                <ProjectSlider projects={section.projects} />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="w-full max-w-7xl space-y-8 overflow-hidden px-16">
      {/* Section Header */}
      <div className="flex flex-col space-y-4">
        <h1 className="text-5xl font-semibold">My Expertise Includes:</h1>
        <h2 className="text-2xl text-gray-500">
          With a strong focus on implementing visually appealing and highly
          functional designs, my development experience has exposed me to a wide
          range of modern web technologies and frameworks. This expertise
          enables me to deliver seamless user experiences through efficient,
          secure, and scalable solutions, allowing me to provide high-quality
          work more quickly and effectively to clients.
        </h2>
      </div>

      {/* Portfolio  */}
      <div className="flex flex-col">
        <ProjectSliderContainer />
      </div>
    </div>
  );
};
