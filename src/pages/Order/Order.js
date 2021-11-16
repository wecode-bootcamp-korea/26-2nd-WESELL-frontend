import React from 'react';
import styled from 'styled-components';

export default function Order() {
  return (
    <Wrapper>
      <TitleWrapper>
        <Title>구매하기</Title>
      </TitleWrapper>
      <ContentWrapper>
        <ProductWrapper />
      </ContentWrapper>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  margin-top: 40px;
`;

const TitleWrapper = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const Title = styled.span`
  font-size: 1.5em;
  font-weight: bold;
`;

const ContentWrapper = styled.div`
  overflow: hidden;
  max-width: 780px;
  min-height: 900px;
  margin: 0 auto;
  padding: 20px 40px 160px;
  background-color: silver;
`;

const ProductWrapper = styled.div``;
