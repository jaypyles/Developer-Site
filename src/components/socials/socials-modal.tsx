import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { LinkBlock } from "../links";
import { socials } from "../../data/socials";
import { Discord, Spotify } from "src/components/socials";
import PulseLoader from "react-spinners/PulseLoader";

interface SocialsModalProps {
  show: boolean;
  handleClose: () => void;
}

export const SocialsModal = ({ show, handleClose }: SocialsModalProps) => {
  const [discordLoaded, setDiscordLoaded] = useState<boolean>(false);
  const [imagesLoaded, setImagesLoaded] = useState<boolean>(false);

  useEffect(() => {
    const images = socials.map((data) => {
      const img = new Image();
      img.src = `/images/${data.image}`;
      return img;
    });

    const checkImagesLoaded = () => {
      if (images.every((img) => img.complete)) {
        setImagesLoaded(true);
      }
    };

    images.forEach((img) => {
      img.onload = checkImagesLoaded;
    });
  }, []);

  const close = () => {
    setDiscordLoaded(false);
    handleClose();
  };

  return (
    <div className="social">
      <Modal dialogClassName="social" show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>More of my links!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {socials.map((data, index) => (
            <LinkBlock key={index} imageData={data} />
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={close} className="emboss">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
