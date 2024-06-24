import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import LinkBlock from "../components/LinkBlock";
import Spotify from "../components/Spotify";
import { socials } from "../data/Socials";
import Discord from "../components/Discord";
import PulseLoader from "react-spinners/PulseLoader";

interface SocialsModalProps {
  show: boolean;
  handleClose: () => void;
}

const SocialsModal: React.FC<SocialsModalProps> = ({ show, handleClose }) => {
  const [discordLoaded, setDiscordLoaded] = useState<boolean>(false);
  const [spotifyLoaded, setSpotifyLoaded] = useState<boolean>(false);

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
          {socials.map((data, index) => (
            <LinkBlock key={index} data={data} />
          ))}
          <div
            className={`status emboss ${spotifyLoaded && discordLoaded ? "" : "!hidden"}`}
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
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={close}
            className="
            emboss"
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SocialsModal;
