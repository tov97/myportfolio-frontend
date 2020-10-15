import React from "react";
import styled from "styled-components";
import homestead from "../../Assets/homestead.jpg";

/* TO-DO
1. Set up API to get blog posts
2. Animation the placement of blog posts onto the page
3.  Blog View Page
    or
    Implement blog post view on blog page using grid animation 
        https://codepen.io/aholachek/pen/VXjOPB
*/
export default function BlogPost(props) {
  return (
    <Wrapper>
      <BlogThumbnail src={homestead} />
      <BlogHeadline>
        A guide for rural homesteading web development.
      </BlogHeadline>
      <BlogSnapshot>
        If you have an internet connection you have a business. All it takes is
        some faith and discipline.
      </BlogSnapshot>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: transparent;
  border: 1px solid silver;
  /* background: rgb(40, 40, 40); */
  box-shadow: inset 3px 3px 3px rgba(255, 255, 255, 0.3),
    inset 3px 15px 45px rgba(255, 255, 255, 0.1),
    inset -3px -3px 3px rgba(255, 255, 255, 0.2),
    inset -3px -15px 45px rgba(0, 0, 0, 0.2), 1px 5px 30px -4px rgba(0, 0, 0, 1);
  -webkit-transition: 0.1s ease-out;
  -moz-transition: 0.1s ease-out;
  -o-transition: 0.1s ease-out;
  transition: 0.1s ease-out;
  &:hover {
    cursor: pointer;
    background: rgba(201, 201, 201, 0.35112051656600143);
  }
`;
const BlogThumbnail = styled.img`
  height: 240px;
  width: 96%;
  margin: 2% 2% 5% 2%;
`;
const BlogHeadline = styled.header`
  font-family: "Norsebold";
  font-size: 36px;
  margin-left: 4%;
  margin-right: 4%;
`;

const BlogSnapshot = styled.p`
  font-size: 18px;
  margin-left: 4%;
  margin-right: 4%;
`;
