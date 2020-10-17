import React from "react";
import styled from "styled-components";

const SkillCard = (props) => {
  return (
    <Card>
      <Head>
        <Icon src={props.image} alt="Icon" />
        <Title>{props.title}</Title>
      </Head>
      <Text>{props.desc}</Text>
    </Card>
  );
};

const Card = styled.div`
  display: flex;
  flex-direction: column;
  height: 90%;
  width: 90%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 6px;
  padding: 1rem;
  background: whitesmoke;
`;
const Head = styled.div`
  display: flex;
  flex-direction: row;
`;

const Icon = styled.img`
  height: 150px;
  width: 150px;
`;
const Title = styled.p`
  font-family: "Norsebold";
  font-size: 36px;
  margin-left: 25px;
`;
const Text = styled.p``;

export default SkillCard;
