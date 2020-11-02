import React from "react";
import styled, { keyframes } from "styled-components";
const LoadingSpinner = () => {
  return (
    <Overlay>
      <Spinner></Spinner>
    </Overlay>
  );
};

export default LoadingSpinner;

const Overlay = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Spin = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const Spinner = styled.div`
  width: 64px;
  height: 64px;
  display: block;
  margin: 1px;
  border-radius: 50%;
  border: 5px solid goldenrod;
  border-color: gold transparent gold transparent;
  animation: ${Spin} 1s linear infinite;
  transform: translateZ(0);
`;
