import React from "react";
import styled from "styled-components";
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
  margin: 0 auto;
  display: grid;
  height: 100%;
  grid-template-columns: 0.75fr 1fr;
  grid-template-rows: 2fr;
  grid-template-areas: "portrait greeting";
  justify-items: center;
  @media (max-width: 840px) {
    grid-template-columns: 1fr;
    grid-template-rows: 375px 400px;
    justify-items: center;
    grid-template-areas:
      "portrait"
      "greeting";
  }
`;

const PortraitContainer = styled.div`
  height: 100%;
  width: 100%;
  grid-area: "portrait";
`;

const Portrait = styled.img`
  margin: 3% 3% 3% 3%;
  height: 80%;
  max-height: 50em;
  position: absolute;
  @media (max-width: 840px) {
    margin-top: 3%;
    margin-left: 8%;
    margin-right: 8%;
    max-height: 375px;
    width: 92%;
    max-width: 350px;
  }
`;

const GreetingContainer = styled.main`
  grid-area: "greeting";
  display: flex;
  box-sizing: border-box;
  border: 1px solid black;
  flex-direction: column;
  align-items: center;
  background: white;
  height: auto;
  max-height: 500px;
  margin-top: 25%;
  margin-right: 10%;
  margin-left: 5%;
  margin-bottom: 25%;
  @media (max-width: 840px) {
    margin-left: 5%;
    margin-right: 5%;
  }
`;
const Text = styled.p`
  font-family: "Norsebold";
  font-size: 48px;
  text-align: center;
  text-shadow: -1px -1px 2px white;
  @media (max-width: 840px) {
    text-align: center;
    font-size: 28px;
    margin-left: 5%;
    margin-right: 5%;
  }
`;

const StyledButton = styled.button`
  box-shadow: inset 0px 1px 0px 0px #a6827e;
  background-color: #7d5d3b;
  border: 1px solid #ffffff;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: "Norsebold";
  font-size: 24px;
  padding: 6px 24px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #4d3534;
  min-width: 230px;
  width: 30%;
  @media (max-width: 840px) {
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
  }
`;
