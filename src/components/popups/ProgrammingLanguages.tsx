import React from "react";
import Image from "next/image";
import { Typography } from "@mui/material";

const ProgrammingLanguages = () => {
  return (
    <div
      id="popup-programming-languages"
      className="flex flex-row justify-around max-md:justify-between"
    >
      <div>
        <Typography variant="body1">Proficient</Typography>
        <ul className="list">
          <div className="flex flex-row align-middle space-x-1">
            <Image
              alt="python"
              src="/images/8bpython.png"
              width={24}
              height={20}
              layout="fixed"
            />
            <li>
              <Typography variant="body2">Python</Typography>
            </li>
          </div>
          <div className="flex flex-row align-middle space-x-1">
            <Image
              alt="typescript"
              src="/images/8bts.png"
              width={24}
              height={20}
              layout="fixed"
            />
            <Typography variant="body2">Typescript</Typography>
          </div>
          <div className="flex flex-row align-middle space-x-1">
            <Image
              alt="sql"
              src="/images/sql.png"
              width={24}
              height={20}
              layout="fixed"
            />
            <Typography variant="body2">SQL</Typography>
          </div>
        </ul>
      </div>
      <div className="">
        <Typography variant="body1">Have Used</Typography>
        <ul className="list space-y-1">
          <div className="flex flex-row align-middle space-x-1">
            <Image
              alt="rust"
              src="/images/8brust.png"
              width={28}
              height={15}
              layout="fixed"
            />
            <Typography variant="body2">Rust</Typography>
          </div>
          <div className="flex flex-row align-middle space-x-1">
            <Image
              className="h-fit"
              alt="c programming language"
              src="/images/8bC.png"
              width={24}
              height={20}
              layout="fixed"
            />
            <Typography variant="body2">C Programming Lang</Typography>
          </div>
          <div className="flex flex-row align-middle space-x-1">
            <Image
              className="h-fit"
              alt="java"
              src="/images/8bjava.png"
              width={24}
              height={20}
              layout="fixed"
            />
            <Typography variant="body2">Java</Typography>
          </div>
          <div className="flex flex-row align-middle space-x-1">
            <Typography variant="body2">...and others</Typography>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default ProgrammingLanguages;
