import React from "react";
import styled from "styled-components";
import { Col, Modal, Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// props is workData
const WorkView = ({ show, handleClose, workData }) => {
  const handleModalClose = () => {
    handleClose(!show);
  };

  return (
    <StyledModal show={show} onHide={handleModalClose} keyboard={false}>
      <StyledHeader closeButton>
        <Col>
          <StyledTitle>{workData.title}</StyledTitle>
          <StyledSubHeader>{workData.company}</StyledSubHeader>
        </Col>
      </StyledHeader>
      <StyledModalBody>
        <Carousel>
          {workData.images.map((img) => {
            return (
              <Carousel.Item>
                <CarouselImage
                  src={`${process.env.REACT_APP_BACKEND_URL}/${img}`}
                  alt="Image"
                />
              </Carousel.Item>
            );
          })}
        </Carousel>
      </StyledModalBody>
      <Modal.Body>
        <BodyText>{workData.description}</BodyText>
      </Modal.Body>
      <Modal.Footer>
        {workData.url && (
          <StyledButton onClick={() => window.open("http://" + workData.url)}>
            Visit Site
          </StyledButton>
        )}
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
  @media (max-width: 640px) {
    height: 125px;
  }
`;
const StyledTitle = styled(Modal.Title)`
  font-family: "Norsebold";
  @media (max-width: 640px) {
    font-size: 24px;
  }
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

const StyledButton = styled.button`
  display: inline-block;
  padding: 0.2em 1em;
  border: 0.5px solid #000000;
  margin: 0 0.2em 0.2em 0;
  border-radius: 0.12em;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Norsebold";
  font-size: 20px;
  font-weight: 300;
  color: #000000;
  text-shadow: 0 0.04em 0.04em rgba(0, 0, 0, 0.35);
  background-color: transparent;
  text-align: center;
  transition: all 0.15s;
  cursor: pointer;
  &:hover {
    background-color: goldenrod;
    text-shadow: 0 0 2em rgba(255, 255, 255, 1);
    color: #ffffff;
    border-color: goldenrod;
  }
  @media (max-width: 535px) {
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
  }
`;

export default WorkView;
