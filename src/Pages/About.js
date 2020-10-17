import React from "react";
import styled from "styled-components";
import coding from "../Assets/coding.png";
import graduation from "../Assets/graduation.png";
import design from "../Assets/design.png";
import promotion from "../Assets/promotion.png";
import SkillCard from "../Components/layout/SkillCard";
export default function About() {
  const skills = [
    {
      title: "Education",
      desc:
        "I double majored at the University of Minnesota Duluth recieving a B.B.A in Management Information Systems and a B.A in Philosophy.",
      image: graduation,
    },

    {
      title: "Front End Development",
      desc:
        "Proficiency building responsive, dynamic web apps with React JS (w/ Redux, styled-components, React boostrap, and many other libraries). Excellent understanding of HTML, CSS, and Javascript.",
      image: coding,
    },
    {
      title: "UI/UX Design",
      desc:
        "Custom website design and prototyping using software such as Adobe XD and inVision App",
      image: design,
    },
    {
      title: "Marketing and Promotion",
      desc:
        "Tested interpersonal skills and experience organizing and promoting products at conferences and trade shows as well as presenting product demonstrations to an audience.",
      image: promotion,
    },
  ];
  return (
    <Container>
      <Header>My Skills</Header>
      <CardContainer>
        {skills.map((skill) => (
          <SkillCard
            image={skill.image}
            title={skill.title}
            desc={skill.desc}
          />
        ))}
      </CardContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Header = styled.p`
  font-family: "Norsebold";
  font-size: 48px;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3em;
  margin: 0% 0% 3% 3%;
`;
