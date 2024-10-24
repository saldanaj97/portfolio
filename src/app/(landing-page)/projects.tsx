import { MaintenancePlaceholder } from "~/components/maintenance";
import {
  AddProjectButton,
  DeleteProjectButton,
  EditProjectButton,
} from "~/components/projects/project-buttons";
import { ProjectSlider } from "~/components/projects/project-slider";
import { Project } from "~/components/projects/types";
import { supabase } from "../(auth)/actions";

type Section = {
  title: string;
  projects: Project[];
};

export async function Projects() {
  const { data: projects, error } = await supabase.from("projects").select("*");

  if (error) {
    console.log(error);
    return <MaintenancePlaceholder />;
  }

  const Sections: Section[] = [
    {
      title: "UI/UX",
      projects: projects.filter((project) => project.category === "ui"),
    },
    {
      title: "Fullstack Development",
      projects: projects.filter((project) => project.category === "fullstack"),
    },
    {
      title: "Other Projects",
      projects: projects.filter((project) => project.category === "other"),
    },
  ];

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

      {/* Portfolio Projects */}
      <div className="flex flex-col">
        {projects !== null ? (
          <ProjectSliderContainer />
        ) : (
          <MaintenancePlaceholder />
        )}
      </div>
    </div>
  );
}
