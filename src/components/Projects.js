import network from "../images/computer.png";
import rust from "../images/crab.png";
import server from "../images/server.png";
import media from "../images/smart-tv.png";

export const current_projects = [
  {
    image: network,
    description:
      "Reworking a lot of services on my network. On my main server Optimus, Dockerize and finalize the main page of my site, and Dockerize and reconfigure my reverse proxy NGINX.",

    link: "https://wiki.jaydenpyles.dev/books/my-homelab/page/thoughts-and-plans-about-reworking",
  },
  {
    image: rust,
    description:
      "Research and build a small project in Rust, to familiarize myself with the language. I currently know the basics and that's about it. I'd like to develop a simple CLI tool to do some simple tasks.",
    link: "https://github.com/jaypyles/RustLearningProject",
  },
  {
    image: server,
    description:
      "Develop an API to deliver images from Optimus, to dynamically load images based on the data stored for sites on the server. Will be written in Python using the FastAPI library.",
    link: "https://github.com/jaypyles/OptimusMediaServer",
  },
];

export const future_projects = [
  {
    image: media,
    description:
      "Self-host and research a system to watch stored media. Current possible candidates are Jellyfin and Plex. Will also need to research an open-source downloading software, and purchase a new server dedicated to storing media.",
    link: "https://wiki.jaydenpyles.dev/books/my-homelab/page/research-for-open-source-media-software",
  },
];
