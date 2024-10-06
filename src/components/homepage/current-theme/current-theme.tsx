import React from "react";
import Image from "next/image";

import classes from "./current-theme.module.css";
import { clsx } from "clsx";

export const CurrentTheme = () => {
  return (
    <div className={clsx("emboss", classes.currentTheme)}>
      <p className="text-sm">Current Theme: Windows 98</p>
      <Image
        src="/images/w98computer.gif"
        alt="Windows 98 Computer Gif"
        height={12}
        width={24}
      ></Image>
    </div>
  );
};
