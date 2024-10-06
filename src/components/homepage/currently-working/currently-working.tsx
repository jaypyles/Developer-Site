import React from "react";
import classes from "./currently-working.module.css";
import { clsx } from "clsx";
import Image from "next/image";

interface ImageData {
  image: string;
  title: string;
  description: string;
}

interface CurrentlyWorkingInformationProps {
  imageData: ImageData;
}

export const CurrentlyWorkingInformation = ({
  imageData,
}: CurrentlyWorkingInformationProps) => {
  return (
    <div className={clsx("emboss", classes.currentlyWorking)}>
      <Image
        className=""
        width={72}
        height={72}
        src={`/images/${imageData.image}`}
        alt={imageData.title}
      />
      <div className="content mt-[0.25]">
        <p className={classes.title}>{imageData.title}</p>
        <p className={classes.description}>{imageData.description}</p>
      </div>
    </div>
  );
};
