import React from "react";
import { work } from "../data/CurrentlyWorkingInformation";
import CurrentlyWorkingInformation from "../components/CurrentlyWorkingInformation";
import LinkWithDescription from "../components/LinkWithDescription";
import Footer from "./Footer";

interface HomepageProps {
  hidden?: boolean;
}

const Homepage: React.FC<HomepageProps> = ({ hidden = false }) => {
  return (
    <div
      className={`homepage p-3 emboss-no-top bg-[#c0c0c0] ${
        hidden ? "!hidden" : ""
      }`}
    >
      <Footer></Footer>
      <div className="about">
        <h1
          id="intro-heading"
          className="page-title text-lg font-prompt mb-[0.5em]"
        >
          Hey, I&apos;m Jayden 👨‍💻
        </h1>
        <div className="text-content">
          <p className="text-base mb-[1em]">
            I am a Software Developer at these places currently, building data
            analysis tools and webapps.
          </p>
          <div className="workblocks flex flex-row mb-[1em]">
            {work.map((data, index) => (
              <CurrentlyWorkingInformation key={index} data={data} />
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
              small_description="A hackathon project I and 3 others built in 24 hours."
              github="https://github.com/Space-ify/frontend-in-space"
            />
            <LinkWithDescription
              link="https://notes.jaydenpyles.dev"
              small_description="Custom built note rendering webapp."
              github="https://github.com/jaypyles/very-simple-notes"
            />
          </div>
          <p className="text-base mb-[1em]">
            I have experience with developing RESTful API&apos;s,
            Relational/Graph database schemas, designing frontends for webapps,
            orchestrating Docker containers, and developing CI/CD pipelines. I
            consider myself to be most proficient in Python, but also have
            experience with C, Java, Java/Typescript, SQL, EdgeQL, and Rust. I
            am most interested in Software Engineering, Data Analysis
            Automation, and DevOps.
          </p>
          <LinkWithDescription
            link="https://jaydenpyles.dev/resume"
            small_description="View my resume."
          />
          <div id="buttons" className="flex mb-1 justify-center">
            <div className="flex flex-wrap justify-center w-3/4 space-x-2">
              <img src="https://anlucas.neocities.org/linux_powered.gif" />
              <img src="https://capstasher.neocities.org/88x31Buttons/archlinux.gif" />
              <img src="https://devurandom.xyz/banners/vim.gif" />
              <img src="https://anlucas.neocities.org/button.gif" />
              <img src="https://capstasher.neocities.org/88x31Buttons/firefoxget.gif" />
              <img src="https://anlucas.neocities.org/html.gif" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
