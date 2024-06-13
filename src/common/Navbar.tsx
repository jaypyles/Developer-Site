import React, { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import SocialsModal from "./SocialsModal";
import Tooltip from "@mui/material/Tooltip";
import Constants from "../constants";

interface URL {
  url: string;
}

interface NavbarProps {
  hidden?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ hidden = false }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [pageURL, setPageURL] = useState<URL | null>(null);
  const url = `${Constants.DOMAIN}/api/bookstack/recent-page`;
  const [githubURL, setGithubURL] = useState<URL | null>(null);
  const domain = process.env.REACT_APP_DOMAIN;
  const ghURL = `${domain}/api/github/recent`;

  const fetchBookstack = async () => {
    try {
      const res = await fetch(url);
      if (res.ok) {
        const data = await res.json();
        setPageURL(data);
      } else {
        console.error("Failed to fetch from API: ", res.status);
      }
    } catch (error) {
      console.error("Failed to fetch from API  : ", error);
    }
  };

  const fetchGithub = async () => {
    try {
      const res = await fetch(ghURL);
      if (res.ok) {
        const data = await res.json();
        setGithubURL(data);
      } else {
        console.error("Failed to fetch Github data:", res.status);
      }
    } catch (error) {
      console.error("Failed to fetch Github data:", error);
    }
  };

  useEffect(() => {
    fetchGithub();
  }, []);

  useEffect(() => {
    fetchBookstack();
  }, []);

  return (
    <div className={`nav p-3 w-[100%] !text-black ${hidden ? "hidden" : ""}`}>
      <div className="nav-left">
        <Nav className="nav-content !flex !justify-start w-auto">
          <Nav.Item>
            <Nav.Link className="name" href="/">
              <p className="mb-0">Home</p>
            </Nav.Link>
          </Nav.Item>

          <Tooltip title="Visit my most recent note!" placement="top" arrow>
            <Nav.Item>
              <Nav.Link href={`${pageURL ? pageURL.url : ""}`}>
                <p className="mb-0">Wiki</p>
              </Nav.Link>
            </Nav.Item>
          </Tooltip>
          {githubURL ? (
            <Tooltip
              title="Visit my most recent project!"
              placement="top"
              arrow
            >
              <Nav.Item>
                <Nav.Link href={githubURL.url}>
                  <p className="mb-0">Github</p>
                </Nav.Link>
              </Nav.Item>
            </Tooltip>
          ) : (
            <></>
          )}
          <Tooltip title="See my socials!" placement="top" arrow>
            <Nav.Item>
              <Nav.Link onClick={handleShow}>
                <p className="mb-0">Socials</p>
              </Nav.Link>
            </Nav.Item>
          </Tooltip>
          <Tooltip title="Photo Board" placement="top" arrow>
            <Nav.Item className="ml-auto">
              <Nav.Link href="/posts">
                <p className="mb-0">Posts</p>
              </Nav.Link>
            </Nav.Item>
          </Tooltip>
        </Nav>
        <SocialsModal show={show} handleClose={handleClose} />
      </div>
    </div>
  );
};
export default Navbar;
