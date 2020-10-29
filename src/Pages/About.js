import React from "react";
import styled from "styled-components";
import frontend from "../Assets/frontend.png";
import coding from "../Assets/coding.png";
import graduation from "../Assets/graduation.png";
import design from "../Assets/design.png";
import promotion from "../Assets/promotion.png";
import SkillCard from "../Components/layout/SkillCard";
export default function About() {
  const skills = [
    {
      id: "s1",
      title: "Education",
      desc:
        "I double majored at the University of Minnesota Duluth recieving a B.B.A in Management Information Systems and a B.A in Philosophy.",
      image: graduation,
    },
    {
      id: "s2",
      title: "Front End Development",
      desc:
        "Proficiency building responsive, dynamic web apps with React JS (w/ Redux, styled-components, React bootstrap, and many other libraries). Excellent understanding of HTML, CSS, and Javascript.",
      image: frontend,
    },
    {
      id: "s3",
      title: "UI/UX Design",
      desc:
        "Custom website design and prototyping using software such as Adobe XD and inVision App.",
      image: design,
    },
    {
      id: "s4",
      title: "Marketing and Promotion",
      desc:
        "Tested interpersonal skills and experience organizing and promoting products at conferences and trade shows as well as presenting product demonstrations to an audience.",
      image: promotion,
    },
    {
      id: "s5",
      title: "Other Coding Skills and Certifications",
      desc:
        "Completion of the full React JS (60+ hours) and MERN stack courses on Udemy. Also, completion of high level college courses in SQL, Java, R, and practice with the SDLC process.",
      image: coding,
    },
  ];
  return (
    <Container>
      <Header>Skills</Header>
      <CardContainer>
        {skills.map((skill) => (
          <SkillCard
            key={skill.id}
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
  margin-top: 3%;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2em;
  margin: 0% 0% 3% 3%;
  @media (max-width: 1080px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 640px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
