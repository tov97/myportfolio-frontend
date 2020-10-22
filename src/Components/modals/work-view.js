import React from "react";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// props is workData
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
        <Modal.Title>{props.workData.title}</Modal.Title>
        <p>{props.workData.company}</p>
      </Modal.Header>
      <Modal.Body>
        <p>Image Carosel will go here</p>
      </Modal.Body>
      <Modal.Body>
        <p>{props.workData.description}</p>
      </Modal.Body>
      <Modal.Footer>
        <button>{props.workData.url}</button>
      </Modal.Footer>
    </Modal>
  );
};

export default WorkView;
