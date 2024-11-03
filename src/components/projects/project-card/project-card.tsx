import React from "react";
import { Project } from "src/lib/types";
import clsx from "clsx";
import classes from "./project-card.module.css";

export const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className={clsx(classes.projectCard, "emboss")}>
      <div className={classes.projectCardHeader}>
        <img src={project.href} alt={project.name} />
        <div className={clsx(classes.projectCardHeaderStats, "emboss")}>
          <div>
            <p>{project.stargazers_count}</p>
            <img src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png" />
          </div>
        </div>
      </div>
      <a className={classes.projectCardName} href={project.svn_url}>
        {project.name}
      </a>
      <p className={classes.projectCardDescription}>{project.description}</p>
    </div>
  );
};
