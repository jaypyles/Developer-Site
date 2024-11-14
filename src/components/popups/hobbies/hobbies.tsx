import React from "react";
import Image from "next/image";
import { hobbies } from "./data";
import classes from "./hobbies.module.css";

export const Hobbies = () => {
  return (
    <div id="popup-hobbies" className="flex flex-row justify-start">
      <div>
        <ul className="list">
          {hobbies.map((hobby) => (
            <div className={classes.hobby}>
              <Image
                alt={hobby.alt}
                src={hobby.path}
                width={36}
                height={36}
                layout="fixed"
              />
              <li>
                <span className={classes.hobbyTitle}>{hobby.title}</span>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};
