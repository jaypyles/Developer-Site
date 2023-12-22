import React from "react";
import WorkingOn from "./WorkingOn";
import BookstackRecent from "../components/BookstackRecent";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="about">
        <h1>Software Developer, IT Hobbyist, Student</h1>
        <p>
          Hello! My name is Jayden Pyles and I am currently a Software Developer
          and student at the University of Alabama at Birmingham. I primarily
          work in Backend and DevOps, but am trying to gain some more Frontend
          skills. I work in the
          <a href="https://www.uab.edu/reporter/know-more/teaching-learning/item/8933-students-are-shutting-down-the-worst-of-the-web-in-this-uab-lab">
            UAB Computer Forensics Research Lab (CFRL)
          </a>
          developing tools to help analysts collect data on social media
          platforms, to help prevent cybercrime. I also currently work as the IT
          for CFRL, handling the analysts hardware/software issues and all
          things related to its network. I consider myself a hobbyist when it
          comes to IT though, as I am primarily focused on being a software
          developer (of course the programming knowledge does help with it
          though).
        </p>
        <p>
          This site is built using React, and is currently being hosted via
          NGINX
          <label for="wiki1">1</label>
          <input type="checkbox" id="wiki1" />
          <small>
            <a href="https://www.nginx.com/resources/glossary/nginx/">Nginx</a>{" "}
            is a web server that can also be used as a reverse proxy, load
            balancer, mail proxy and HTTP cache.
          </small>
          on my own Debian 12 server. The server also hosts a few other things,
          but those will get explained in the
          <a href="https://wiki.jaydenpyles.dev/books/network-setup">setup</a>
          page. In terms of webserver applications, it also hosts my own cloud
          storage with nextcloud
          <label for="wiki2">2</label>
          <input type="checkbox" id="wiki2" />
          <small>
            <a href="https://github.com/nextcloud">nextcloud</a>
            Nextcloud Office is a powerful LibreOffice-based online office suite
            with collaborative editing, which supports all major document,
            spreadsheet and presentation file formats and works in all modern
            browsers.
          </small>
          which is running in a Docker container and can be found at
          <a href="https://files.jaydenpyles.dev">files.jaydenpyles.dev</a> (but
          not publicly accessbile, only through tailscale can it be accessed).
          My wiki hosted via Bookstack
          <label for="wiki3">3</label>
          <input type="checkbox" id="wiki3" />
          <small>
            <a href="https://github.com/BookStackApp/BookStack">Bookstack</a> is
            a platform to create documentation/wiki content built with PHP &
            Laravel.
          </small>
          can be found at
          <a href="https://wiki.jaydenpyles.dev">wiki.jaydenpyles.dev</a>, which
          includes documentation for various things, written by me.
          <br />
          <br />
          <BookstackRecent />
        </p>
      </div>
      <WorkingOn />
    </div>
  );
};

export default Homepage;
