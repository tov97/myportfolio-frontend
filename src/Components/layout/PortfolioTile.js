import React from "react";
import styled, { keyframes } from "styled-components";
const PortfolioTile = ({ workData, showWork }) => {
  return (
    <Wrapper>
      <TileText>{workData.title}</TileText>
      <TileButton onClick={() => showWork(workData)}>See more</TileButton>
      <TileImage
        src={process.env.REACT_APP_BACKEND_URL + "/" + workData.images[0]}
      />
    </Wrapper>
  );
};

export default PortfolioTile;

//For adding hover effects, etc...
// https://styled-components.com/docs/advanced#referring-to-other-components
// https://codepen.io/Paul2512C/pen/JxKvpb
// https://codepen.io/0guzhan/pen/oaOGgv
const WrapperAnimation = keyframes`
    0%{
        opacity: 1
    }
    50%{
        opacity: 0.5
    }
    100%{
        opacity: 0.2
    }

`;
const WrapperSlideIn = keyframes`
  0% {
        transform: translateY(100%);
      }
        100% {
        transform: translateY(0);
      }
`;
const Wrapper = styled.div`
  display: flex;
  min-height: 300px;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  justify-content: center;
  align-items: center;
  background: black;
  animation-name: ${WrapperSlideIn};
  animation-duration: 0.6s;
`;

const TileImage = styled.img`
  height: 100%;
  width: 100%;
  ${Wrapper}:active,
  ${Wrapper}:focus,
  ${Wrapper}:hover & {
    animation-name: ${WrapperAnimation};
    animation-duration: 0.3s;
    opacity: 0.2;
  }
`;
const TextAnimation = keyframes`
        0% {
        transform: translateY(-150%);
      }
      75%{
          transform: translateY(15%);
      }
        100% {
        transform: translateY(0);
      }
    
`;
const TileText = styled.p`
  font-family: "Norse";
  font-size: 38px;
  color: white;
  position: absolute;
  top: center;
  display: none;
  padding-bottom: 13%;

  ${Wrapper}:hover & {
    display: inherit;
    transition: all 1s ease-in;
    animation-name: ${TextAnimation};
    animation-duration: 0.3s;
  }
  @media (max-width: 640px) {
    font-size: 28px;
  }
`;
const ButtonAnimation = keyframes`
0% {
        transform: translateY(175%);
      }
      75%{
          transform: translateY(-10%);
      }
        100% {
        transform: translateY(0);
      }
`;
const TileButton = styled.button`
  margin-top: 10%;
  position: absolute;
  cursor: pointer;
  border: 1px solid silver;
  box-shadow: inset 0px 0px 1px 0px silver;
  background-color: transparent;
  font-family: "Norse";
  font-size: 24px;
  text-align: center;
  color: white;
  display: none;
  z-index: 5;
  padding-left: 5%;
  padding-right: 5%;
  &:hover {
    transition: all 0.2s ease-in;
    color: goldenrod;
    border: 1px solid goldenrod;
  }
  ${Wrapper}:hover & {
    display: inherit;

    animation-name: ${ButtonAnimation};
    animation-duration: 0.3s;
  }
`;
