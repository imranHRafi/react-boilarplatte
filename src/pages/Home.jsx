import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/navbar/Navbar';
import { COLORS } from '../style/Constraints';
import { ContentWrapper } from '../style/SharedStyle';

const Home = () => {
  return (
    <HomeWrapper>
      <HomeContent>
        <Header>React Boiler Platte</Header>
      </HomeContent>
    </HomeWrapper>
  );
};

const HomeWrapper = styled.div`
  min-height: 100vh;
  background-color: ${COLORS.primary};
  color: ${COLORS.gray[900]};
  margin: 0;
  padding: 0;
`;

const HomeContent = styled(ContentWrapper)`
  display: flex;
  justify-content: center;
  align-content: center;
`;

const Header = styled.h1`
  /* -webkit-box-reflect: below; */
`;

export default Home;
