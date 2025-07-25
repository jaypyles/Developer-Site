import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { socials } from "../../data/socials";
import { LinkBlock } from "../links";

interface SocialsModalProps {
  show: boolean;
  handleClose: () => void;
}

export const SocialsModal = ({ show, handleClose }: SocialsModalProps) => {
  const close = () => {
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
