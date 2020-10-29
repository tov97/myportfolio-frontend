import React, { useState, useEffect, useRef } from "react";
import {
  useRouteMatch as useMatch,
  NavLink,
  useHistory,
} from "react-router-dom";
import styled from "styled-components";
import testlogo from "../../Assets/testlogo.png";

const Navbar = () => {
  const history = useHistory();
  const aboutMatch = useMatch("/about");
  const contactMatch = useMatch("/contact");
  const blogMatch = useMatch("/blog");
  const portfolioMatch = useMatch("/portfolio");
  // Menu drawer for mobile //
  const [openDrawer, toggleDrawer] = useState(false);
  const drawerRef = useRef(null);
  useEffect(() => {
    /* close drawer when clicked outside */
    const closeDrawer = (event) => {
      if (drawerRef.current && drawerRef.current.contains(event.target)) {
        return;
      }

      toggleDrawer(false);
    };

    document.addEventListener("mousedown", closeDrawer);
    return () => document.removeEventListener("mousedown", closeDrawer);
  }, []);
  return (
    <NavContainer>
      {/* nav items */}
      <Ul ref={drawerRef} openDrawer={openDrawer}>
        <StyledNavLink to="/blog" match={blogMatch}>
          Blog
        </StyledNavLink>

        <StyledNavLink to="/portfolio" match={portfolioMatch}>
          Portfolio
        </StyledNavLink>

        {/* header image */}
        <HeaderImage
          src={testlogo}
          alt="header"
          onClick={() => history.push("/")}
        />

        <StyledNavLink to="/about" match={aboutMatch}>
          About
        </StyledNavLink>

        <StyledNavLink to="/contact" match={contactMatch}>
          Contact
        </StyledNavLink>
      </Ul>
      <MenuButton onClick={() => toggleDrawer(true)}>
        <ButtonLines />
      </MenuButton>
    </NavContainer>
  );
};

export default Navbar;

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  min-height: 40px;
  height: 8%;
  max-height: 60px;
  width: 100%;
  box-shadow: 0 2px 5px #1a1a1a;
  align-content: space-between;
  @media only screen and (max-width: 840px) {
    justify-content: space-between;
    position: initial;
  }

  background-color: #1a0033;
`;

// link list
const Ul = styled.ul`
  display: flex;
  list-style: none;
  margin-top: 0%;
  height: 100%;
  justify-content: center;
  margin: 0;
  padding: 0;
  @media only screen and (max-width: 640px) {
    padding: 0.5em 0.5rem;
    position: fixed;
    right: 0;
    top: 0;
    height: 100%;
    flex-direction: column;
    background-color: #111111;

    /* animate drawer open/close */
    transition: 0.2s ease-out;
    transform: ${({ openDrawer }) =>
      openDrawer ? `translateX(0)` : `translateX(100%)`};
  }
`;

// add advanced animations to header image/logo
// https://codepen.io/Jeremboo/pen/WwbjvL

const HeaderImage = styled.img`
  cursor: pointer;
  min-height: 40px;
  height: 125%;
  max-width: 80px;
  max-height: 80px;
  border-radius: 5px;
  @media (max-width: 840px) and (orientation: landscape) {
    width: 6%;
    height: 6%;
  }
`;

const StyledNavLink = styled(NavLink)`
  font-family: "Norsebold";
  font-size: 24px;
  margin: 0 33px;
  /* border-bottom: ${(props) => (props.match ? "3px solid silver" : "")};*/
  color: ${(props) => (props.match ? "goldenrod" : "white")};
  text-decoration: none;
  margin-top: 1%;
  &:hover {
    color: goldenrod;
    text-decoration: none;
  }
`;
// mobile menu button
const MenuButton = styled.button`
  height: 2.5rem;
  width: 2.5rem;
  position: relative;
  font-size: 12px;
  margin-right: 20px;

  display: none;

  @media only screen and (max-width: 640px) {
    display: block;
  }

  /* remove default button styles */
  border: none;
  background: transparent;

  cursor: pointer;

  &:after {
    content: "";
    display: block;
    position: absolute;
    height: 150%;
    width: 150%;
    top: -25%;
    left: -25%;
  }
`;
// menu button lines
const ButtonLines = styled.div`
  top: 50%;
  margin-top: -0.125em;

  &,
  &:after,
  &:before {
    /* create menu lines */
    height: 3px;
    pointer-events: none;
    display: block;
    content: "";
    width: 100%;
    background-color: white;
    border-radius: 10px;
    position: absolute;
  }

  &:after {
    /* move bottom line below center line */
    top: -0.8rem;
  }

  &:before {
    /* move top line above center line */
    top: 0.8rem;
  }
`;
