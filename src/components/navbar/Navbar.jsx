import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { COLORS, QUERIES, WEIGHTS } from '../../style/Constraints';
import { ContentWrapper } from '../../style/SharedStyle';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <NavWrapper>
        <Wrapper>
          <Logo>React.</Logo>
          <MobileActionButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <MenuStick isMenuOpen={isMenuOpen}></MenuStick>
            <MenuStick isMenuOpen={isMenuOpen}></MenuStick>
            <MenuStick isMenuOpen={isMenuOpen}></MenuStick>
          </MobileActionButton>
          <NavigationOverlay isMenuOpen={isMenuOpen}>
            <NavLinks>
              <NavItem>Home</NavItem>
              <NavItem>Resources</NavItem>
              <NavItem>About us</NavItem>
            </NavLinks>
          </NavigationOverlay>
        </Wrapper>
      </NavWrapper>
    </>
  );
};

const NavWrapper = styled.div`
  box-shadow: 0 8px 6px -6px ${COLORS.gray[300]};
`;

const Wrapper = styled(ContentWrapper)`
  --header-height: 80px;
  --header-height-mobile: 60px;
  position: sticky;
  inset: 0;
  height: var(--header-height);
  display: flex;
  align-items: center;

  @media ${QUERIES.phoneAndSmaller} {
    height: var(--header-height-mobile);
  }
  /* box-shadow: 0px 10px 50px -4px rgba(0, 0, 0, 0.3); */
`;

const Logo = styled.h1`
  font-size: 46px;
  letter-spacing: 1px;
  font-weight: bold;
  color: black;
  user-select: none;
  margin-right: auto;
  cursor: pointer;
`;

const MobileActionButton = styled.div`
  cursor: pointer;
`;
const MenuStick = styled.div`
  @media ${QUERIES.phoneAndSmaller} {
    width: 35px;
    height: 2px;
    background-color: ${COLORS.gray[900]};
    margin: 8px 0;
    transform: rotate(-45deg) translate(-7px, 8px);
    transform: ${({ isMenuOpen }) =>
      isMenuOpen ? ' rotate(-45deg) translate(-7px, 8px)' : 'none'};
    transition: 0.4s;
    :nth-child(2) {
      width: 20px;
      opacity: ${({ isMenuOpen }) => (isMenuOpen ? ' 0' : '100%')};
    }
    :nth-child(3) {
      width: ${({ isMenuOpen }) => (isMenuOpen ? '35px' : '25px')};
      transform: ${({ isMenuOpen }) =>
        isMenuOpen ? ' rotate(45deg) translate(-6px, -8px)' : 'none'};
    }
  }
`;

const NavigationOverlay = styled.div`
  @media ${QUERIES.phoneAndSmaller} {
    width: ${({ isMenuOpen }) => (isMenuOpen ? '100%' : '0')};
    height: 100%;
    position: fixed;
    z-index: 999;
    top: var(--header-height-mobile);
    left: 0;
    background-color: ${COLORS.primary};
    overflow: hidden;
    transition: 0.5s;
  }
`;
const NavLinks = styled.nav`
  display: flex;
  gap: 20px;

  @media ${QUERIES.phoneAndSmaller} {
    display: flex;
    flex-direction: column;
    position: relative;
    top: 25%;
    width: 100%;
    text-align: center;
    margin-top: 30px;
  }
`;
const NavItem = styled.a`
  font-size: 16px;
  font-weight: ${WEIGHTS.normal};
  cursor: pointer;
  :hover {
    color: ${COLORS.secondary};
  }
  @media ${QUERIES.phoneAndSmaller} {
    padding: 8px;
    text-decoration: none;
    font-size: 36px;
    color: ${COLORS.gray[900]};
    display: block;
    user-select: none;
    transition: 0.3s;
  }
`;

export default Navbar;
