import React from "react";
import Project from "../components/Project";
import ProjectTypes from "./ProjectTypes";

const WorkingOn = () => {
  return (
    <>
      <div className="working-on" id="working-on">
        <div className="current">
          <h2>Ready for Development</h2>
          <Project projectType={ProjectTypes.BACKLOG} />
        </div>
        <div className="future">
          <h2>In Development</h2>
          <Project projectType={ProjectTypes.DEV} />
        </div>
      </div>
      <div className="pl-3">
        <p className="text-about">
          This Kanban board replicates the one in my Notion workspace and will
          update in real time. The projects shown are either "ready for
          development" (they will be completed soon) or "in development"
          (currently being worked on).
        </p>
      </div>
    </>
  );
};

export { ProjectTypes };
export default WorkingOn;
