import { Typography } from "@mui/material";
import Image from "next/image";
import { proficientLanguages, usedLanguages } from "./data";
import classes from "./programming-languages.module.css";

export const ProgrammingLanguages = () => {
  return (
    <div id="popup-programming-languages" className="flex justify-around">
      <div>
        <span className={classes.title}>Proficient</span>
        <ul className="list">
          {proficientLanguages.map((language) => (
            <div
              className="flex flex-row items-center space-x-2"
              key={language.title}
            >
              <Image
                alt={language.alt}
                src={language.path}
                width={36}
                height={36}
                layout="fixed"
              />
              <Typography variant="body2">{language.title}</Typography>
            </div>
          ))}
        </ul>
      </div>
      <div className="">
        <span className={classes.title}>Have Used</span>
        <ul className="list space-y-1">
          {usedLanguages.map((language) => (
            <div
              className="flex flex-row items-center space-x-2"
              key={language.title}
            >
              <Image
                alt={language.alt}
                src={language.path}
                width={36}
                height={36}
                layout="fixed"
              />
              <Typography variant="body2">{language.title}</Typography>
            </div>
          ))}
        </ul>
        <div className="flex flex-row items-center space-x-2">
          <Typography variant="body2">...and others</Typography>
        </div>
      </div>
    </div>
  );
};
