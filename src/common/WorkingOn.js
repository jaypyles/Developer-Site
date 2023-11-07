import React from "react";
import Project from "../components/Project";
import { current_projects, future_projects } from "../data/Projects";

const WorkingOn = () => {
  return (
    <div className="working-on">
      <div className="current">
        <h2>Current Projects</h2>
        {current_projects.map((data, index) => (
          <Project key={index} data={data} />
        ))}
      </div>
      <div className="future">
        <h2>Future Projects</h2>
        {future_projects.map((data, index) => (
          <Project key={index} data={data} />
        ))}
      </div>
    </div>
  );
};

export default WorkingOn;
