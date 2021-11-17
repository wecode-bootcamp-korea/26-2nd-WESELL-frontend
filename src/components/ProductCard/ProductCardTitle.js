import React from 'react';
import styled from 'styled-components';

export default function ProductCardTitle({ title, subtitle }) {
  return (
    <Container>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  );
}

const Container = styled.div`
  margin: 60px 0px 0px 100px;
`;

const Title = styled.div`
  margin-bottom: 10px;
  font-size: 20px;
`;

const Subtitle = styled.div`
  color: gray;
`;
