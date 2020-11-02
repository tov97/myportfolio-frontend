import styled from "styled-components";

const StyledButton = styled.button`
  display: inline-block;
  padding: 0.46em 1.6em;
  border: 0.05em solid #000000;
  margin: 0 0.2em 0.2em 0;
  border-radius: 0.12em;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Norsebold";
  font-size: 22px;
  font-weight: 300;
  color: ${(props) => (props.color ? props.color : "#000000")};
  text-shadow: 0 0.04em 0.04em rgba(0, 0, 0, 0.35);
  background-color: transparent;
  text-align: center;
  transition: all 0.15s;
  cursor: pointer;
  &:hover {
    background-color: goldenrod;
    text-shadow: 0 0 2em rgba(255, 255, 255, 1);
    color: #ffffff;
    border-color: goldenrod;
  }
  @media (max-width: 535px) {
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
  }
`;
export default StyledButton;
