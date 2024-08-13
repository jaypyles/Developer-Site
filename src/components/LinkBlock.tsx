import React, { useState } from "react";

interface Data {
  image: string;
  link: string;
  description: string;
}

interface LinkBlockProps {
  data: Data;
}

const LinkBlock: React.FC<LinkBlockProps> = ({ data }) => {
  const [hovered, setHovered] = useState<boolean>(false);
  const toggleHover = () => setHovered(!hovered);

  return (
    <div
      className={`linkblock p-2 ${
        hovered ? "emboss-outset darker-bg" : "emboss"
      }`}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      <div className="image">
        <img src={`/images/${data.image}`} alt={data.description} />
      </div>
      <div className="text !text-black">
        <div className="description">
          <a className="w-full h-full" href={data.link}>
            {data.description}
          </a>
        </div>
      </div>
    </div>
  );
};

export default LinkBlock;
