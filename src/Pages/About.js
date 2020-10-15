import React from "react";
import styled from "styled-components";
export default function About() {
  return (
    <Container>
      <p>This is the about page!</p>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 100px 100px 100px 100px;
`;
