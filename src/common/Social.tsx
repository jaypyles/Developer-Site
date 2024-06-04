import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import LinkBlock from "../components/LinkBlock";
import Spotify from "../components/Spotify";
import { socials } from "../data/Socials";
import Discord from "../components/Discord";
import { Skeleton } from "@mui/material";

interface SocialProps {
  show: boolean;
  handleClose: () => void;
}

const Social: React.FC<SocialProps> = ({ show, handleClose }) => {
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
            className={`status ${spotifyLoaded && discordLoaded ? "" : "!hidden"}`}
          >
            <Spotify
              loadedState={{
                setLoaded: setSpotifyLoaded,
              }}
            />
            <Discord
              loadedState={{
                loaded: discordLoaded,
                setLoaded: setDiscordLoaded,
              }}
            />
          </div>
          {(!spotifyLoaded || !discordLoaded) && (
            <div>
              <Skeleton
                variant="rounded"
                sx={{ bgcolor: "#212121" }}
                height={75}
              />
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={close}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Social;
