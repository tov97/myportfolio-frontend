import React from "react";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const WorkView = (props) => {
  const handleModalClose = () => {
    props.handleClose(!props.show);
  };

  return (
    <Modal
      show={props.show}
      onHide={handleModalClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Work Title Here</Modal.Title>
        <p>Company Here</p>
      </Modal.Header>
      <Modal.Body>
        <p>Image Carosel will go here</p>
      </Modal.Body>
      <Modal.Body>
        <p>Description of the work here.</p>
      </Modal.Body>
      <Modal.Footer>
        <button>Go to the website here if url</button>
      </Modal.Footer>
    </Modal>
  );
};

export default WorkView;
