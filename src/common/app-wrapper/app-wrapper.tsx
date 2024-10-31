import React from "react";
import { Navbar } from "src/components/nav/navbar";
import classes from "./app-wrapper.module.css";
import clsx from "clsx";

export const AppWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className={classes.appWrapper}>
      <Navbar />
      <div className={clsx(classes.content, "emboss-no-top")}>{children}</div>
    </div>
  );
};
