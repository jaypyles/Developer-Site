import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import SocialsModal from "./SocialsModal";
import Tooltip from "@mui/material/Tooltip";

interface NavbarProps {
  hidden?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ hidden = false }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="w-full p-1 bg-[#c0c0c0] emboss-no-bottom">
      <div
        className={`nav p-3 w-[100%] bg-gradient-to-r from-[#000d8a] to-[#167acd]  !text-white ${
          hidden ? "hidden" : ""
        }`}
      >
        <div className="nav-left">
          <Nav className="nav-content !flex !justify-start w-auto">
            <Nav.Item>
              <Nav.Link className="name" href="/">
                <p className="mb-0">Home</p>
              </Nav.Link>
            </Nav.Item>
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
    </div>
  );
};
export default Navbar;
