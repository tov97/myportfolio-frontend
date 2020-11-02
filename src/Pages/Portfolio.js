import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { PortfolioTile } from "../Components/layout/index";
import { useHttpContact } from "../Components/hooks/contact-hook";
import WorkView from "../Components/modals/work-view";
import LoadingSpinner from "../Components/ui/LoadingSpinner";

/* TO-DO
    Implement work view on portfolio page using grid animation
        https://codepen.io/aholachek/pen/VXjOPB
*/

const Portfolio = () => {
  const [workViewModal, showWorkViewModal] = useState(false);
  const [loadedWorks, setLoadedWorks] = useState();
  const [activeView, setActiveView] = useState();
  const { sendRequest } = useHttpContact();

  //sets the specific work data for the view modal.
  const WorkViewHandler = (props) => {
    const clickedWork = loadedWorks.find((w) => {
      return w.id === props.id;
    });
    setActiveView(clickedWork);
    showWorkViewModal(true);
  };

  //fetchs portoflio data from the api
  useEffect(() => {
    const fetchWorks = async () => {
      try {
        const responseData = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + "/api/portfolio"
        );
        setLoadedWorks(responseData.works);
      } catch (err) {
        console.log(err);
      }
    };
    fetchWorks();
  }, [sendRequest]);

  return (
    <Container>
      <Header> Works </Header>
      <Wrapper>
        {loadedWorks ? (
          loadedWorks.map((work) => {
            return (
              <PortfolioTile
                key={work.id}
                workData={work}
                showWork={WorkViewHandler}
              />
            );
          })
        ) : (
          <LoadingSpinner />
        )}
      </Wrapper>
      {activeView && (
        <WorkView
          show={workViewModal}
          handleClose={showWorkViewModal}
          workData={activeView}
        />
      )}
    </Container>
  );
};

export default Portfolio;

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
  grid-template-columns: repeat(3, 3fr);
  overflow: hidden;
  grid-gap: 10px;
  @media (max-width: 1080px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 640px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
