import { ProjectSlider } from "~/components/projects/project-slider";

export const Projects = () => {
  const portfolioProjects = [
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

  const LandingPageProjects = [
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

  const ecommerceProjects = [
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

  return (
    <div className="w-full space-y-4 overflow-hidden">
      <h1 className="text-5xl font-semibold">My Expertise Includes:</h1>
      <h2 className="text-2xl text-gray-500">
        With a strong focus on implementing visually appealing and highly
        functional designs, my development experience has exposed me to a wide
        range of modern web technologies and frameworks. This expertise enables
        me to deliver seamless user experiences through efficient, secure, and
        scalable solutions, allowing me to provide high-quality work more
        quickly and effectively to clients.
      </h2>
      <div className="hide-scrollbar w-full space-y-8 overflow-x-auto pb-4">
        <div className="flex flex-col">
          <div className="flex w-full flex-row justify-between">
            <h2 className="text-2xl font-semibold">Portfolio Websites</h2>
          </div>
          <ProjectSlider projects={portfolioProjects} />
        </div>

        <div className="flex flex-col">
          <div className="flex w-full flex-row justify-between">
            <h2 className="text-2xl font-semibold">Landing Pages</h2>
          </div>
          <ProjectSlider projects={LandingPageProjects} />
        </div>

        <div className="flex flex-col">
          <div className="flex w-full flex-row justify-between">
            <h2 className="text-2xl font-semibold">
              E-commerce & Other Web Development
            </h2>
          </div>
          <ProjectSlider projects={ecommerceProjects} />
        </div>
      </div>
    </div>
  );
};
