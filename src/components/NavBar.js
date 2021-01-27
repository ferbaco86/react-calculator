import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
display: flex;
background-color: #2a9d8f;
justify-content: space-between;
align-items: center;
`;

const Logo = styled.h1`
color: #e9c46a;
padding-left: 4.5rem;
font-size: 1.7rem;`;

const LinksContainer = styled.div`
padding: 1.5rem 4.5rem;
font-size: 1.4rem;`;

const StyledLink = styled(Link)`
color: white;
margin: 0 1rem;
text-decoration: none;
&:hover {
  color: #264653;
}`;

const NavBar = () => (
  <>
    <Nav>
      <Logo>Math Magicians</Logo>
      <LinksContainer>
        <StyledLink to="/">Home </StyledLink>
        <StyledLink to="/calculator">Calculator </StyledLink>
        <StyledLink to="/quotes">Quotes </StyledLink>
      </LinksContainer>
    </Nav>

  </>
);

export default NavBar;
