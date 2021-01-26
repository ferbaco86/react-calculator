/* eslint-disable react/no-unused-state */
import styled from 'styled-components';
import NavBar from './NavBar';

const HeroContainer = styled.section`
display:flex
flex-direction:column;
color: white;
padding: 1.5rem;
`;

const HeroTitle = styled.h1`
font-size: 3.5rem;
`;
const HeroText = styled.p`
font-size:1.2rem;`;

const App = () => (
  <>
    <NavBar />
    <HeroContainer>
      <HeroTitle>WELCOME TO OUR SITE</HeroTitle>
      <HeroText>
        Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident,
        sunt in culpa qui officia deserunt mollit anim id est laborum.
      </HeroText>
      <HeroText>
        Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident,
        sunt in culpa qui officia deserunt mollit anim id est laborum.
      </HeroText>
    </HeroContainer>
  </>
);

export default App;
