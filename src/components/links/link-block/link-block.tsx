import { useState } from "react";

import { clsx } from "clsx";
import classes from "./link-block.module.css";

interface ImageData {
  image: string;
  link: string;
  description: string;
}

interface LinkBlockProps {
  imageData: ImageData;
}

export const LinkBlock = ({ imageData }: LinkBlockProps) => {
  const [hovered, setHovered] = useState<boolean>(false);
  const toggleHover = () => setHovered(!hovered);

  return (
    <a
      className={clsx(classes.link, {
        ["emboss"]: !hovered,
        ["emboss-outset darker-bg"]: hovered,
      })}
      href={imageData.link}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      <img src={`/images/${imageData.image}`} alt={imageData.description} />
      <div className={classes.content}>
        <div className={classes.description}>
          <p>{imageData.description}</p>
        </div>
      </div>
    </a>
  );
};
