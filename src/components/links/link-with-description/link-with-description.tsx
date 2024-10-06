import React from "react";
import Image from "next/image";
import classes from "./link-with-description.module.css";
import { clsx } from "clsx";

type LinkWithDescriptionProps = {
  link: string;
  smallDescription: string;
  github?: string;
};

export const LinkWithDescription: React.FC<LinkWithDescriptionProps> = ({
  link,
  smallDescription: small_description,
  github = "",
}) => {
  return (
    <div className={clsx("emboss", classes.linkWithDescriptionWrapper)}>
      <div className={classes.linkWithDescription}>
        <a href={link} className={clsx("link", classes.ref)}>
          {link}
        </a>
        {github && (
          <a href={github} className={clsx("no-arrow", classes.githubLink)}>
            <Image
              src="/images/github.png"
              alt="Github Link"
              layout="intrinsic"
              height={24}
              width={24}
            />
          </a>
        )}
      </div>
      <p className={classes.description}>{small_description}</p>
    </div>
  );
};
