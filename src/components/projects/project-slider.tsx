import { Card, CardBody, CardHeader } from "@nextui-org/card";

interface ProjectProps {
  title: string;
  description: string;
  screenshot: string;
  stack: string[];
}

export function ProjectSlider({ projects }: { projects: ProjectProps[] }) {
  const screenshotPlaceholder =
    "https://dummyimage.com/300x200&text=Dev+Environment+Placeholder";

  const ProjectCard = ({ project }: { project: ProjectProps }) => (
    <Card className="w-[300px] flex-shrink-0 p-2">
      <CardHeader className="flex-col items-start px-4 pb-0 pt-2">
        <small className="text-default-500">{project.description}</small>
        <h4 className="text-large font-bold">{project.title}</h4>
        <div className="mt-2 flex flex-wrap gap-2">
          {project.stack.map((language, index) => (
            <div
              key={index}
              className="rounded-full bg-primary px-2 py-1 text-center"
            >
              <p className="text-xs font-semibold text-foreground">
                {language}
              </p>
            </div>
          ))}
        </div>
      </CardHeader>
      <CardBody className="py-2">
        <img
          alt="Card background"
          className="h-[200px] w-full rounded-xl object-cover"
          src={
            project.screenshot !== ""
              ? project.screenshot
              : screenshotPlaceholder
          }
        />
      </CardBody>
    </Card>
  );

  return (
    <div className="flex justify-start space-x-4 py-4">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
}
