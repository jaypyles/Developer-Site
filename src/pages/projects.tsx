import { Projects } from "src/components/projects";
import { Project } from "src/lib/types";
import { GetStaticProps } from "next";
import { projects } from "src/data";

export const getStaticProps: GetStaticProps = async () => {
  const GITHUB_URL = "https://api.github.com/repos/jaypyles";

  const projectData: Project[] = await Promise.all(
    projects.map(async (project) => {
      const url = project.link ? project.link : `${GITHUB_URL}/${project.name}`;
      const data = await fetch(url);
      const fetchedProjectData = await data.json();
      return { ...fetchedProjectData, ...project };
    })
  );

  return {
    props: {
      projects: projectData,
    },
    revalidate: 6000,
  };
};

export default Projects;
