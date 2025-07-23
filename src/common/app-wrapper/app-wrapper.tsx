import clsx from "clsx";
import { Navbar } from "src/components/nav/navbar/navbar";
import classes from "./app-wrapper.module.css";

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
