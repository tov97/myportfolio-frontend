import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { PortfolioTile } from "../Components/layout/index";
import { useHttpContact } from "../Components/hooks/contact-hook";
import WorkView from "../Components/modals/work-view";
import win from "../Assets/winscreenshot.png";

/* TO-DO
1. Set up API to get works image and info.
2.  See More about Work Page
    or
    Implement work view on portfolio page using grid animation
        https://codepen.io/aholachek/pen/VXjOPB
*/

export default function Portfolio() {
  const [workViewModal, showWorkViewModal] = useState(false);
  const [loadedWorks, setLoadedWorks] = useState();
  const { sendRequest } = useHttpContact();

  useEffect(() => {
    const fetchWorks = async () => {
      try {
        const responsedata = await sendRequest(
          "http://localhost:5000/api/portfolio"
        );
        setLoadedWorks(responsedata.works);
        console.log(loadedWorks);
      } catch (err) {
        console.log(err);
      }
    };
    fetchWorks();
  }, [sendRequest, loadedWorks]);

  return (
    <Container>
      <Header> My Works </Header>
      <Wrapper>
        {loadedWorks &&
          loadedWorks.map((work) => {
            return (
              <PortfolioTile
                imgsrc={win}
                tiletitle={work.title}
                workViewModal={workViewModal}
                showWorkViewModal={showWorkViewModal}
              />
            );
          })}
      </Wrapper>
      <WorkView show={workViewModal} handleClose={showWorkViewModal} />
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
