import React from "react";
import { useState, useEffect } from "react";

interface Data {
  title: string;
  description: string;
  project: string;
  link: string;
}

interface CompProps {
  data: Data;
}

interface ProjectProps {
  projectType: string;
}

const Project: React.FC<ProjectProps> = ({ projectType }) => {
  const [projects, setProjects] = useState([]);
  const domain = process.env.REACT_APP_DOMAIN;

  const projectMap: { [key: string]: string } = {
    backlog: `${domain}/api/notion/ready`,
    dev: `${domain}/api/notion/dev`,
  };

  const projectURL = projectMap[projectType];

  const fetchProject = async () => {
    if (projectURL) {
      await fetch(projectURL)
        .then((res) => res.json())
        .then((res) => {
          setProjects(JSON.parse(res).data);
        });
    }
  };

  useEffect(() => {
    fetchProject();
  }, [projectURL]);

  const ProjectComp: React.FC<CompProps> = ({ data }) => {
    return (
      <div className="project bg-testAccent">
        <div className="text">
          <div className="title">
            <p>{data.title}</p>
          </div>
          <div className="description">
            <p>{data.description}</p>
          </div>
          <div className="info">
            <div className="category">
              <p>{data.project}</p>
            </div>
            <div className="link">
              {data.link ? <a href={data.link}>{data.link}</a> : <></>}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="projects">
      {projects.slice(0, 3).map((item, index) => (
        <ProjectComp key={index} data={item}></ProjectComp>
      ))}
    </div>
  );
};

export default Project;
