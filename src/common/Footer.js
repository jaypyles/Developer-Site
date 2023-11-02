import React from "react";
import { Nav } from "react-bootstrap";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import telegram from "../images/telegram.png";
import email from "../images/email.png";

const Footer = () => {
  return (
    <div className="footer shadow-2xl shadow-blue-500">
      <Nav className="footer">
        <Nav.Item>
          <a href="https://github.com/jaypyles">
            <img src={github} alt="GitHub" title="Github" />
          </a>
        </Nav.Item>
        <Nav.Item>
          <a href="https://www.linkedin.com/in/jayden-pyles-2a5358253">
            <img src={linkedin} alt="LinkedIn" title="LinkedIn" />
          </a>
        </Nav.Item>
        <Nav.Item>
          <a href="https://t.me/jpyles524">
            <img src={telegram} alt="Telegram" title="Telegram" />
          </a>
        </Nav.Item>
        <Nav.Item>
          <a href="mailto:jaydenpyles0524@gmail.com">
            <img src={email} alt="Email" title="Email" />
          </a>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default Footer;
