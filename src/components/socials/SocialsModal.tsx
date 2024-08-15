import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import LinkBlock from "../links/LinkBlock";
import Spotify from "./Spotify";
import { socials } from "../../data/Socials";
import Discord from "src/components/socials/Discord";
import PulseLoader from "react-spinners/PulseLoader";

interface SocialsModalProps {
  show: boolean;
  handleClose: () => void;
}

const SocialsModal = ({ show, handleClose }: SocialsModalProps) => {
  const [discordLoaded, setDiscordLoaded] = useState<boolean>(false);
  const [spotifyLoaded, setSpotifyLoaded] = useState<boolean>(false);
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
    setSpotifyLoaded(false);
    handleClose();
  };

  return (
    <div className="social">
      <Modal dialogClassName="social" show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>More of my links!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {imagesLoaded ? (
            <>
              {socials.map((data, index) => (
                <LinkBlock key={index} imageData={data} />
              ))}
              <div
                className={`status emboss ${
                  spotifyLoaded && discordLoaded ? "" : "!hidden"
                }`}
              >
                <Discord
                  loadedState={{
                    loaded: discordLoaded,
                    setLoaded: setDiscordLoaded,
                  }}
                />
                <Spotify
                  loadedState={{
                    setLoaded: setSpotifyLoaded,
                  }}
                />
              </div>
              {(!spotifyLoaded || !discordLoaded) && (
                <div className="flex justify-center status emboss">
                  <PulseLoader color="white" className="items-center" />
                </div>
              )}
            </>
          ) : (
            <div className="flex justify-center status emboss">
              <PulseLoader color="white" className="items-center" />
            </div>
          )}
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

export default SocialsModal;
