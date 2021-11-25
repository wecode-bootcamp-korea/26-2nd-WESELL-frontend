import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import OrderHow from './OrderHow';
import ShoesInfo from './ShoesInfo';
import orderType from './orderType';
import { useParams } from 'react-router';
import { API } from '../../config';

const { buy, buyNow, sellNow, buyBid, sellBid } = orderType;

export default function OrderDetail({ type }) {
  const isBuy = type === buy;

  const [title, setTitle] = useState(isBuy ? buyNow : sellNow);
  const [shoeInfo, setShoeInfo] = useState([]);

  // useEffect(() => {
  //   fetch('/data/OrderMockData.json')
  //     .then(res => res.json())
  //     .then(data => {
  //       setShoeInfo(data.result.lowest_price_by_size);
  //     });
  // }, []);

  useEffect(() => {
    fetch(`${API.baseUrl}/products/${productID}`)
      .then(res => res.json())
      .then(data => setShoeInfo(data.result.lowest_price_by_size));
  }, [productID]);

  const changeToOrderNow = () => {
    setTitle(isBuy ? buyNow : sellNow);
  };

  const changeToBid = () => {
    setTitle(isBuy ? buyBid : sellBid);
  };

  const [shoesToBuy, shoesToSell] = shoeInfo;

  return (
    <Container>
      <OrderWrap>
        <Title>{title}하기</Title>
        <ShoesInfo />
        <PriceInfo>
          <PriceNow>
            <PriceTitle> {buyNow}가 </PriceTitle>
            {shoesToBuy?.sizes[0].lowest_price} 원
          </PriceNow>
          <CenterLine />
          <PriceNow>
            <PriceTitle> {sellNow}가 </PriceTitle>
            {shoesToSell?.sizes[0].lowest_price} 원
          </PriceNow>
        </PriceInfo>
        <ButtonWrap>
          <OrderTypeButton
            isBidOrOrder={title === buyNow || title === sellNow}
            onClick={changeToBid}
            isBuy={isBuy}
          >
            {isBuy ? buyBid : sellBid}
          </OrderTypeButton>
          <OrderTypeButton
            isBidOrOrder={title === buyBid || title === sellBid}
            onClick={changeToOrderNow}
            isBuy={isBuy}
          >
            {isBuy ? buyNow : sellNow}
          </OrderTypeButton>
        </ButtonWrap>
        <OrderHow
          title={title}
          orderNowPrice={
            shoeInfo[0] &&
            (isBuy
              ? shoesToBuy.sizes[0].lowest_price
              : shoesToSell.sizes[0].lowest_price)
          }
          size={isBuy ? shoesToBuy?.sizes[0].size : shoesToSell?.sizes[0].size}
          type={type}
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

const OrderTypeButton = styled.button`
  text-align: center;
  vertical-align: middle;
  width: 50%;
  height: 40px;
  padding: 12px 0;
  margin: 5px 5px;
  border: none;
  border-radius: 80px;
  cursor: pointer;
  ${props =>
    props.isBidOrOrder
      ? 'background-color: #f4f4f4'
      : 'color: white; background-color:#EF6253'}
`;
