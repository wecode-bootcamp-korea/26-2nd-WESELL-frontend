import React, { useState } from 'react';
import styled from 'styled-components';
import BidDeadline from './BidDeadline';
import SubmitPrice from './SubmitPrice';
import orderType from './orderType';

const { buyNow, sellNow, bid } = orderType;

export default function OrderHow({ title, orderNowPrice }) {
  const [bidPrice, setBidPrice] = useState();

  const bidding = e => {
    setBidPrice(e.target.value);
  };

  return (
    <Container>
      <PriceInputWrap>
        <Title>{title}가</Title>
        {(title === buyNow || title === sellNow) && (
          <Price>{orderNowPrice}원</Price>
        )}
        {title === bid && (
          <PriceInput
            placeholder="희망가 입력"
            value={bidPrice}
            onChange={bidding}
          />
        )}
        {title === bid && <Won>원</Won>}
      </PriceInputWrap>
      <ChargeWrap>
        <ChargeType> 검수비 </ChargeType>
        <ChargePrice> 무료 </ChargePrice>
      </ChargeWrap>
      <ChargeWrap>
        <ChargeType> 배송비 </ChargeType>
        <ChargePrice> 무료 </ChargePrice>
      </ChargeWrap>
      {title === bid && <BidDeadline />}
      <SubmitPrice
        title={title}
        orderNowPrice={orderNowPrice}
        bidPrice={bidPrice}
      />
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

const PriceInput = styled.input`
  text-align: end;
  width: 96%;
  height: 22px;
  font-size: 1.4rem;
  font-weight: bold;
  border: none;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: lightgray;
  }
`;

const Won = styled.span`
  text-align: end;
  font-size: 1.4rem;
  font-weight: bold;
`;

const ChargeWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ChargeType = styled.div`
  margin-bottom: 10px;
  color: gray;
  font-weight: lighter;
`;

const ChargePrice = styled.div``;
