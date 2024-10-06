import React from "react";
import { work } from "../../data/working";
import { CurrentlyWorkingInformation } from ".";
import { LinkWithDescription } from "../links";
import { Contacts } from "../nav/contacts/contacts";
import { PopupState } from "src/lib/types";
import { retroButtons } from "../../data/retro-buttons";

interface HomepageProps {
  hidden?: boolean;
  handleOpen: (popup: keyof PopupState) => void;
  popupState: PopupState;
}

export const Homepage = ({
  handleOpen,
  popupState,
  hidden = false,
}: HomepageProps) => {
  return (
    <div
      className={`homepage p-3 emboss-no-top bg-[#c0c0c0] w-full${
        hidden ? "!hidden" : ""
      }`}
    >
      <Contacts />
      <div className="about">
        <h1
          id="intro-heading"
          className="page-title text-lg font-prompt mb-[0.5em] w-fit"
        >
          Hey, I&apos;m Jayden 👨‍💻
        </h1>
        <div className="text-content">
          <p className="text-base mb-[1em]">
            I am a Software Engineer, working in web development at:
          </p>
          <div className="workblocks flex flex-row mb-[1em]">
            {work.map((data, index) => (
              <CurrentlyWorkingInformation key={index} imageData={data} />
            ))}
          </div>
          <p className="text-base mb-[1em]">
            This site will be a continuous work-in-progress, and will most
            likely change often. It is a playground for ideas and a learning
            tool for me to try out different and/or new technologies. This site
            is hosted on my own hardware, with even a few apps publicly
            available:
          </p>
          <div className="blocks">
            <LinkWithDescription
              link="https://spaceify.jaydenpyles.dev"
              smallDescription="A hackathon project I and 3 others built in 24 hours."
              github="https://github.com/Space-ify/frontend-in-space"
            />
            <LinkWithDescription
              link="https://notes.jaydenpyles.dev"
              smallDescription="Custom built note rendering webapp."
              github="https://github.com/jaypyles/very-simple-notes"
            />
          </div>
          <div className="mb-[1em] text-base">
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
                  popupState.coolBox ? "text-gray-500" : "text-black"
                }`}
                onClick={() => handleOpen("coolBox")}
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
          <div id="buttons" className="flex mb-1 justify-center">
            <div className="flex flex-wrap justify-center w-3/4 space-x-2">
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
