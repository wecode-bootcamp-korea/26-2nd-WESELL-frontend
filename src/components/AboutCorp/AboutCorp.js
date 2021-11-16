import React from 'react';
import styled from 'styled-components';
import CorpInfoLinks from './CorpInfoLinks';
import CorpInfo from './CorpInfo';

const AboutCorp = () => {
  return (
    <Container>
      <CorpInfoLinks />
      <CorpInfo />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100px;
`;

export default AboutCorp;
