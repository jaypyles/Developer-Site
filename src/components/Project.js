import React from "react";

const Project = ({ data }) => {
  return (
    <div className="project">
      <div className="image">
        <img src={data.image} />
      </div>
      <div className="text">
        <div className="description">
          <p>{data.description}</p>
        </div>
        <div className="link">
          <a>{data.link}</a>
        </div>
      </div>
    </div>
  );
};

export default Project;
