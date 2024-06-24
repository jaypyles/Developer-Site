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
  return (
    <div className="linkblock emboss">
      <div className="image">
        <img src={`/images/${data.image}`} alt={data.description} />
      </div>
      <div className="text !text-black">
        <div className="description">
          <a href={data.link}>{data.description}</a>
        </div>
      </div>
    </div>
  );
};

export default LinkBlock;
