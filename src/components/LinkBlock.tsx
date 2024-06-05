import React from "react";

interface Data {
  image: string;
  link: string;
  description: string;
}

interface LinkBlockProps {
  data: Data;
}

const LinkBlock: React.FC<LinkBlockProps> = ({ data }) => {
  const imageUrl = require(`../images/${data.image}`);

  return (
    <div className="linkblock">
      <div className="image">
        <img src={imageUrl} alt={data.description} />
      </div>
      <div className="text">
        <div className="description">
          <a href={data.link}>{data.description}</a>
        </div>
      </div>
    </div>
  );
};

export default LinkBlock;
