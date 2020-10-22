import React from "react";
import styled from "styled-components";
import { Col, Modal, Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// props is workData
const WorkView = (props) => {
  const handleModalClose = () => {
    props.handleClose(!props.show);
  };

  return (
    <StyledModal show={props.show} onHide={handleModalClose} keyboard={false}>
      <StyledHeader closeButton>
        <Col>
          <StyledTitle>{props.workData.title}</StyledTitle>
          <StyledSubHeader>{props.workData.company}</StyledSubHeader>
        </Col>
      </StyledHeader>
      <StyledModalBody>
        <Carousel>
          {props.images.map((img) => {
            return (
              <Carousel.Item>
                <CarouselImage src={img} alt="Image" />
              </Carousel.Item>
            );
          })}
        </Carousel>
      </StyledModalBody>
      <Modal.Body>
        <BodyText>{props.workData.description}</BodyText>
      </Modal.Body>
      <Modal.Footer>
        <button>{props.workData.url}</button>
      </Modal.Footer>
    </StyledModal>
  );
};

const StyledModal = styled(Modal)`
  margin-top: 5%;
  border-radius: 0px;
`;

const StyledHeader = styled(Modal.Header)`
  height: 100px;
  width: 100%;
`;
const StyledTitle = styled(Modal.Title)`
  font-family: "Norsebold";
`;

const StyledSubHeader = styled.p`
  font-family: Georgia, serif;
  color: #3b3b3b;
`;

const StyledModalBody = styled(Modal.Body)`
  height: 50%;
  width: 100%;
  margin: 0;
  padding: 0;
`;

const BodyText = styled.p`
  font-family: Georgia, serif;
`;

const CarouselImage = styled.img`
  height: 350px;
  width: 100%;
`;

export default WorkView;
