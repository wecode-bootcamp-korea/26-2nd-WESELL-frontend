import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import OrderHow from './OrderHow';
import ShoesInfo from './ShoesInfo';
import orderType from './orderType';

const { buy, buyNow, sellNow, bid } = orderType;

export default function OrderDetail({ type }) {
  const [title, setTitle] = useState(type === buy ? buyNow : sellNow);
  const [shoeInfo, setShoeInfo] = useState([]);

  useEffect(() => {
    fetch('/data/OrderMockData.json')
      .then(res => res.json())
      .then(data => {
        setShoeInfo(data.result.lowest_price_by_size);
      });
  }, []);

  const changeToOrderNow = () => {
    setTitle(type === buy ? buyNow : sellNow);
  };

  const changeToBid = () => {
    setTitle(bid);
  };

  return (
    <Container>
      <OrderWrap>
        <Title>{title}하기</Title>
        <ShoesInfo />
        <PriceInfo>
          <PriceNow>
            <PriceTitle> {buyNow}가 </PriceTitle>
            {shoeInfo[0] && shoeInfo[0].sizes[0].lowest_price} 원
          </PriceNow>
          <CenterLine />
          <PriceNow>
            <PriceTitle> {sellNow}가 </PriceTitle>
            {shoeInfo[0] && shoeInfo[1].sizes[0].lowest_price} 원
          </PriceNow>
        </PriceInfo>
        <ButtonWrap>
          <OrderTypeButton
            isBidOrOrder={title === buyNow || title === sellNow}
            onClick={changeToBid}
            isBuy={type === buy}
          >
            {bid}
          </OrderTypeButton>
          <OrderTypeButton
            isBidOrOrder={title === bid}
            onClick={changeToOrderNow}
          >
            {type === buy ? buyNow : sellNow}
          </OrderTypeButton>
        </ButtonWrap>
        <OrderHow
          title={title}
          orderNowPrice={
            shoeInfo[0] &&
            (type === buy
              ? shoeInfo[0].sizes[0].lowest_price
              : shoeInfo[1].sizes[0].lowest_price)
          }
        />
      </OrderWrap>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 120px;
`;

const OrderWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 50px;
  margin: 70px 0px;
  width: 700px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
`;

const Title = styled.div`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: bold;
`;

const PriceInfo = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 20px 0;
  border-top: 1px solid #ebebeb;
`;

const PriceTitle = styled.p`
  margin-bottom: 5px;
  color: gray;
  font-weight: lighter;
  font-size: 14px;
`;

const PriceNow = styled.div`
  text-align: center;
  width: 40%;
`;

const CenterLine = styled.div`
  height: 100%;
  border-right: 1px solid #ebebeb;
`;

const ButtonWrap = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  border-radius: 80px;
  background-color: #f4f4f4;
`;

const OrderTypeButton = styled.div`
  text-align: center;
  vertical-align: middle;
  width: 50%;
  height: 40px;
  padding: 12px 0;
  margin: 5px 5px;
  border-radius: 80px;
  cursor: pointer;
  ${props =>
    props.isBidOrOrder
      ? 'background-color: #f4f4f4'
      : 'color: white; background-color: #ef6253;'}
`;
