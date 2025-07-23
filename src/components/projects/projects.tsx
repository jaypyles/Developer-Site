import { AppWrapper } from "src/common";
import { Project } from "src/lib/types";
import { ProjectCard } from "./project-card/project-card";
import classes from "./projects.module.css";

export const Projects: React.FC<{ projects: Project[] }> = ({ projects }) => {
  return (
    <AppWrapper>
      <div className={classes.projects}>
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </AppWrapper>
  );
};
