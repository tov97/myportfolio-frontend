import React from "react";
import styled from "styled-components";
// import { BlogPost } from "../Components/layout/index";

/* TO-DO
1. Set up API to get blog posts
2. Animation the placement of blog posts onto the page
3.  Blog View Page
    or
    Implement blog post view on blog page using grid animation
        https://codepen.io/aholachek/pen/VXjOPB
*/

export default function Blog() {
  return (
    <Wrapper>
      <Header>Blog Posts</Header>
      <Container>
        <NoPost></NoPost>
        <NoPost>No blog posts are available at the moment...</NoPost>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(3, 3fr);
  overflow: hidden;
  grid-gap: 20px;
  margin: 0% 5% 5% 5%;
`;
const Header = styled.header`
  font-size: 48px;
  font-family: "Norsebold";
  margin-top: 3%;
  margin-bottom: 3%;
`;

const NoPost = styled.p`
  font-family: Georgia, serif;
`;
