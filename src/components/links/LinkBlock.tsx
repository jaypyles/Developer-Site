import React, { useState } from "react";

interface ImageData {
  image: string;
  link: string;
  description: string;
}

interface LinkBlockProps {
  imageData: ImageData;
}

const LinkBlock = ({ imageData }: LinkBlockProps) => {
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
        <img src={`/images/${imageData.image}`} alt={imageData.description} />
      </div>
      <div className="text !text-black">
        <div className="description">
          <a className="w-full h-full" href={imageData.link}>
            {imageData.description}
          </a>
        </div>
      </div>
    </div>
  );
};

export default LinkBlock;
