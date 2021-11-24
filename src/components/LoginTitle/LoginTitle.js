import React from 'react';
import styled from 'styled-components';

function LoginTitle() {
  return (
    <Container>
      <Title>WESELL</Title>
      <SubTitle>We Ensure Society Effects </SubTitle>
    </Container>
  );
}

const Container = styled.div`
  margin: 0px 0px 40px 0px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  font-size: 50px;
  font-weight: 700;
  color: '#2D2B2B';
  font-style: italic;
`;

const SubTitle = styled.div`
  margin: 10px 0px;
  font-size: 15px;
  font-weight: 700;
  color: '#2D2B2B';
`;

export default LoginTitle;
