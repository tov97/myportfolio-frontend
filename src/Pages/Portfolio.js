import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { PortfolioTile } from "../Components/layout/index";
import { useHttpContact } from "../Components/hooks/contact-hook";
import WorkView from "../Components/modals/work-view";
import win from "../Assets/winscreenshot.png";
import win2 from "../Assets/winmvp1.png";
import win3 from "../Assets/winmvp2.png";
import homestead from "../Assets/homestead.jpg";

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
  const [activeView, setActiveView] = useState();
  const { sendRequest } = useHttpContact();
  const WorkViewHandler = (props) => {
    const clickedWork = loadedWorks.find((w) => {
      return w.id === props.id;
    });
    setActiveView(clickedWork);
    showWorkViewModal(true);
  };

  useEffect(() => {
    const fetchWorks = async () => {
      try {
        const responsedata = await sendRequest(
          "http://localhost:5000/api/portfolio"
        );
        setLoadedWorks(responsedata.works);
      } catch (err) {
        console.log(err);
      }
    };
    fetchWorks();
  }, [sendRequest]);

  const images = [win, win2, win3];
  return (
    <Container>
      <Header> Works </Header>
      <Wrapper>
        {loadedWorks &&
          loadedWorks.map((work) => {
            return (
              <PortfolioTile
                key={work.id}
                imgsrc={win}
                workData={work}
                showWork={WorkViewHandler}
              />
            );
          })}
      </Wrapper>
      {activeView && (
        <WorkView
          show={workViewModal}
          handleClose={showWorkViewModal}
          workData={activeView}
          images={images}
        />
      )}
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3% 5% 5% 5%;
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
