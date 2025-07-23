import Image from "next/image";

import { clsx } from "clsx";
import classes from "./current-theme.module.css";

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
