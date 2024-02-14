import React from "react";
import { useState } from "react";
import WorkingOn from "./WorkingOn";
import { Collapse } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { ArrowDropDown } from "@mui/icons-material";
import { work } from "../data/WorkBlock";
import WorkBlock from "../components/WorkBlock";
import Block from "../components/Block";

const Homepage = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="homepage p-3 bg-backgroundAccent drop-shadow-3xl">
      <div className="about">
        <h1 className="text-[100%] font-prompt">Hey, I'm Jayden 👨‍💻</h1>
        <div className="">
          <p className="text-[85%]">
            I am a Software Developer at these places currently, building data
            analysis tools and webapps.
          </p>
          <div className="workblocks flex flex-row mb-[1em]">
            {work.map((data, index) => (
              <WorkBlock key={index} data={data} />
            ))}
          </div>
          <p className="text-[85%]">
            As a hobby, I like to run my own homelab, which can self-host
            several apps that I use reguarly. This website is being hosted in
            Docker on my server, which you accessed through Cloudflare
            proxy-dns. The API that controls the backend integrations is also
            being hosted on the same server. Down below are some links to other
            services that are publicly available:
          </p>
          <div className="blocks">
            <Block
              link="https://spaceify.jaydenpyles.dev"
              small_description="A hackathon project I and 3 others built in 24 hours."
            />
            <Block
              link="https://wiki.jaydenpyles.dev"
              small_description="A bookstack instance for technical notes and blogs."
            />
          </div>
          <p className="text-[85%]">
            I have experience with developing RESTful API's, Relational/Graph
            database schemas, designing frontends for webapps, orchestrating
            Docker containers, and developing CI/CD pipelines. I consider myself
            to be most proficient in Python, but also have experience with C,
            Java, Java/Typescript, SQL, EdgeQL, and Rust. I am most interested
            in Software Engineering, Data Analysis Automation, and DevOps.
          </p>

          <p className="text-[85%]">You can view my resume down below:</p>
          <Block link="https://jaydenpyles.dev/resume" small_description="" />
        </div>
      </div>
      {/* <div className="dropdown flex flex-row bg-testAccent rounded-md"> */}
      {/*   <div className="flex flex-row items-center"> */}
      {/*     <h2 className="heading">Kanban Board</h2> */}
      {/*     <Button */}
      {/*       className="!p-0" */}
      {/*       variant="link" */}
      {/*       onClick={() => setOpen(!open)} */}
      {/*       aria-controls="working-on" */}
      {/*       aria-expanded={open} */}
      {/*     > */}
      {/*       <ArrowDropDown */}
      {/*         className="text-accent hover:text-blue-700" */}
      {/*         sx={{ fontSize: "3.5vh" }} */}
      {/*       ></ArrowDropDown> */}
      {/*     </Button> */}
      {/*   </div> */}
      {/* </div> */}
      {/* <Collapse in={open}> */}
      {/*   <div id="working-on"> */}
      {/*     <WorkingOn /> */}
      {/*   </div> */}
      {/* </Collapse> */}
    </div>
  );
};

export default Homepage;
