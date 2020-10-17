import React from "react";
import styled, { keyframes } from "styled-components";
import vikingportrait from "../Assets/viking-portrait.png";
import { useHistory } from "react-router-dom";

/* TO-DO
1. Set up API to get portrait image.
2. Animation the placement of portrait and info.
*/

export default function Landing() {
  const history = useHistory();
  return (
    <Wrapper>
      <PortraitContainer>
        <Portrait src={vikingportrait} />
        {/* <ProfilePic src={profilepic} /> */}
      </PortraitContainer>
      <GreetingContainer>
        <Text>
          Hail! I'm Trevor Tovsen.
          <br /> I'm a web developer based out of rural Minnesota.
        </Text>
        <StyledButton onClick={() => history.push("/portfolio")}>
          Check out my work ->
        </StyledButton>
      </GreetingContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  @media (max-width: 840px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const PortraitContainer = styled.div`
  height: 90%;
  position: absolute;
  top: 85px;
  left: 5%;
  max-width: 50%;
  border-radius: 8px;
  @media (max-width: 1080px) {
    height: 80%;
    max-width: 40%;
    left: 3%;
  }
  @media (max-width: 840px) {
    height: 55%;
    width: 96%;
    max-width: 96%;
    position: absolute;
    top: 60px;
    left: 2%;
    right: 2%;
  }
`;

const Portrait = styled.img`
  height: 100%;
  max-height: 50em;
  position: absolute;
  @media (max-width: 840px) {
    width: 100%;
    max-width: 500px;
  }
`;

const GreetingContainer = styled.main`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  background: transparent;
  height: 25%;
  max-height: 500px;
  width: 40%;
  position: absolute;
  top: 40%;
  right: 10%;
  @media (max-width: 1080px) {
    top: 15%;
    right: 5%;
  }
  @media (max-width: 840px) {
    position: absolute;
    width: 96%;
    top: auto;
    right: 2%;
    left: 2%;
    bottom: 10%;
  }
`;
const TextSlideIn = keyframes`
  0% {
        transform: translateX(100%);
      }
        100% {
        transform: translateX(0);
      }
`;
const Text = styled.p`
  font-family: "Norsebold";
  font-size: 48px;
  text-align: center;
  // text-shadow: -1px -1px 2px white;
  text-shadow: 0 0.04em 0.04em rgba(0, 0, 0, 0.35);
  animation-name: ${TextSlideIn};
  animation-duration: 0.5s;
  @media (max-width: 535px) {
    text-align: center;
    font-size: 28px;
    margin-left: 5%;
    margin-right: 5%;
  }
`;

const StyledButton = styled.button`
  display: inline-block;
  padding: 0.46em 1.6em;
  border: 0.1em solid #000000;
  margin: 0 0.2em 0.2em 0;
  border-radius: 0.12em;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Norsebold";
  font-size: 22px;
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
    border-color: #ffffff;
  }
  @media (max-width: 535px) {
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
  }
`;
