import React from 'react';
import styled from 'styled-components';

export default function SubmitPrice({ title, buyNowPrice, bid }) {
  return (
    <Container>
      <PriceInputWrap>
        <Title> 총 결제금액 </Title>
        {title === '즉시 구매' && <Price>{buyNowPrice}원</Price>}
        {title === '구매 입찰' && <Price>{bid}원</Price>}
      </PriceInputWrap>
      <SubmitBtn> {title} 계속 </SubmitBtn>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  margin: 20px 0;
`;

const PriceInputWrap = styled.div`
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 2px solid lightgray;
`;

const Title = styled.div``;

const Price = styled.div`
  text-align: end;
  font-size: 1.4rem;
  font-weight: bold;
`;

const SubmitBtn = styled.button`
  width: 100%;
  height: 52px;
  color: white;
  background-color: black;
  border: none;
  border-radius: 12px;
  font-size: 20px;
  cursor: pointer;
`;
