import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import styled from "styled-components";
import React from "react";
import { Navbar } from "../Components/layout";
import { About, Blog, Contact, Landing, Portfolio } from "../Pages";
function Navigator() {
  return (
    <Router>
      <Wrapper>
        {/* header */}
        <HeaderContainer>
          <Navbar />
        </HeaderContainer>

        {/* content */}
        <ContentContainer>
          {/* navigation routes */}
          <Switch>
            {/* root route */}
            <Route path="/" exact component={Landing} />

            {/* about route */}
            <Route path="/about" component={About} />

            {/* blog route */}
            <Route path="/blog" component={Blog} />

            {/* portfolio route */}
            <Route path="/portfolio" component={Portfolio} />

            {/* contact route */}
            <Route path="/contact" component={Contact} />

            {/* 404 wildcard */}
            {/* <Route path="*" element={<NotFound />} /> */}
          </Switch>
        </ContentContainer>
      </Wrapper>
    </Router>
  );
}

const Wrapper = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    "header"
    "content";

  @media (max-width: 840px) {
    grid-template-areas:
      "header"
      "content";
  }
`;

const HeaderContainer = styled.header`
  grid-area: header;
  z-index: 10;
`;

const ContentContainer = styled.main`
  grid-area: content;
  margin-top: 3%;

  @media (max-width: 840px) {
    margin-top: 0;
  }
`;

export default Navigator;
