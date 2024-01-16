import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import LinkBlock from "../components/LinkBlock";
import Spotify from "../components/Spotify";
import { socials } from "../data/Socials";
import Discord from "../components/Discord";

interface SocialProps {
  show: boolean;
  handleClose: () => void;
}

const Social: React.FC<SocialProps> = ({ show, handleClose }) => {
  return (
    <div className="social">
      <Modal dialogClassName="social" show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>More of my links!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {socials.map((data, index) => (
            <LinkBlock key={index} data={data} />
          ))}
          <div className="status">
            <Spotify />
            <Discord />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Social;
