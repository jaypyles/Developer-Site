import React from "react";
import Project from "../components/Project";

const ProjectTypes = {
  BACKLOG: "backlog",
  DEV: "dev",
};

const WorkingOn = () => {
  return (
    <div className="working-on">
      <div className="current">
        <h2>Ready for Development</h2>
        <Project projectType={ProjectTypes.BACKLOG} />
      </div>
      <div className="future">
        <h2>In Development</h2>
        <Project projectType={ProjectTypes.DEV} />
      </div>
    </div>
  );
};

export default WorkingOn;
