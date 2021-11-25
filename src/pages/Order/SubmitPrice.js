import React from 'react';
import styled from 'styled-components';
import orderType from './orderType';
import { API } from '../../config';

const { buyNow, sellNow, buyBid, sellBid } = orderType;
const token = localStorage.token;

export default function SubmitPrice({
  title,
  orderNowPrice,
  bidPrice,
  size,
  type,
}) {
  const [buy, sell] = [1, 2];

  const postBid = e => {
    if (bidPrice) {
      fetch(`${API.fetchPrice}/1`, {
        method: 'POST',
        body: JSON.stringify({
          bid_type: type === 'buy' ? buy : sell,
          productsize: size,
          price: bidPrice,
        }),
        headers: { Authorization: token },
      })
        .then(res => res.json())
        .then(res => console.log(res));
    } else {
      e.preventDefault();
      alert('희망가를 입력하세요');
    }
  };

  const postOrderNow = e => {
    fetch(`${API.fetchPrice}/1/orders`, {
      method: 'POST',
      body: JSON.stringify({
        bid_type: type === 'buy' ? buy : sell,
        productsize: size,
        price: orderNowPrice,
      }),
      headers: { Authorization: token },
    })
      .then(res => res.json())
      .then(res => console.log(res));
  };

  const deleteBid = e => {
    fetch(`${API.fetchPrice}/1`, {
      method: 'DELETE',
      body: JSON.stringify({
        bid_type: type === 'buy' ? sell : buy,
        productsize: size,
        price: bidPrice,
      }),
      headers: { Authorization: token },
    })
      .then(res => res.json())
      .then(res => console.log(res));
  };

  const postAndDelete = () => {
    postOrderNow();
    deleteBid();
  };

  return (
    <Container>
      <PriceInputWrap>
        <Title> 총 결제금액 </Title>
        {(title === buyNow || title === sellNow) && (
          <Price>{orderNowPrice}원</Price>
        )}
        {(title === buyBid || title === sellBid) && <Price>{bidPrice}원</Price>}
      </PriceInputWrap>
      <SubmitBtn
        onClick={
          title === buyNow || title === sellNow ? postAndDelete : postBid
        }
      >
        {title} 계속
      </SubmitBtn>
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
