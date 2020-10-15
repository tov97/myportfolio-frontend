import React from "react";
import styled from "styled-components";
import { PortfolioTile } from "../Components/layout/index";
import win from "../Assets/winscreenshot.png";

/* TO-DO
1. Set up API to get works image and info.
2.  See More about Work Page
    or
    Implement work view on portfolio page using grid animation
        https://codepen.io/aholachek/pen/VXjOPB
*/

export default function Portfolio() {
  return (
    <Container>
      <Header> My Works </Header>
      <Wrapper>
        <PortfolioTile imgsrc={win} tiletitle="Western Intelligence Network" />
        <PortfolioTile imgsrc={win} tiletitle="Other Work" />
      </Wrapper>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5% 5% 5% 5%;
`;

const Header = styled.header`
  padding-bottom: 5%;
  font-family: "Norsebold";
  font-size: 48px;
`;
const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(2, 3fr);
  overflow: hidden;
  grid-gap: 10px;
`;
