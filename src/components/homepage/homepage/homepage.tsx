import { CurrentlyWorkingInformation } from "@/components/homepage/currently-working";
import { LinkWithDescription } from "@/components/links";
import { Contacts } from "@/components/nav/contacts";
import { retroButtons } from "@/data/retro-buttons";
import { work } from "@/data/working";
import { PopupState } from "@/lib/types";

import { clsx } from "clsx";
import classes from "./homepage.module.css";

interface HomepageProps {
  handleOpen: (popup: keyof PopupState) => void;
  popupState: PopupState;
}

export const Homepage = ({ handleOpen, popupState }: HomepageProps) => {
  return (
    <div className={clsx("emboss-no-top", classes.homepage)}>
      <Contacts />

      <div className="about">
        <h1
          id="intro-heading"
          className="page-title text-lg font-prompt mb-[0.5em] w-fit"
        >
          Hey, I&apos;m Jayden 👨‍💻
        </h1>
        <div className={classes.aboutContent}>
          <p>I am a Software Engineer, currently working at:</p>
          <div className={classes.currentlyWorking}>
            {work.map((data, index) => (
              <CurrentlyWorkingInformation key={index} imageData={data} />
            ))}
          </div>
          <p>
            This site will be a continuous work-in-progress, and will most
            likely change often. It is a playground for ideas and a learning
            tool for me to try out different and/or new technologies.
          </p>

          <div className={classes.popups}>
            <p>
              As an engineer, I have used many different&nbsp;
              <span
                className={`underline cursor-pointer ${
                  popupState.programmingLanguages
                    ? "text-gray-500"
                    : "text-black"
                }`}
                onClick={() => handleOpen("programmingLanguages")}
              >
                programming languages
              </span>
              &nbsp;and technologies. But I also enjoy a lot of different&nbsp;
              <span
                className={`underline cursor-pointer ${
                  popupState.hobbies ? "text-gray-500" : "text-black"
                }`}
                onClick={() => handleOpen("hobbies")}
              >
                hobbies
              </span>
              &nbsp;outside of programming.
            </p>
          </div>

          <LinkWithDescription
            link="https://jaydenpyles.dev/resume"
            smallDescription="View my resume."
          />

          <div className={classes.buttonsWrapper}>
            <div className={classes.buttons}>
              {retroButtons.map((link, index) => (
                <img key={index} src={link} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
