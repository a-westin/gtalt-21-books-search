import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const SaveModal = ({ showModal, toggleModal }) => {

  return (
    <Modal show={showModal} onHide={toggleModal}>
      <Modal.Header closeButton>
        <Modal.Title>Add to Saved Books </Modal.Title>
      </Modal.Header>
      <Modal.Body>Saved!</Modal.Body>
      <Modal.Footer>
        <Button variant="info" onClick={toggleModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};


export default SaveModal;