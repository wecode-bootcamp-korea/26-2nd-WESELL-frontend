import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import ShoesInfo from './ShoesInfo';
import orderType from './orderType';
import { useParams } from 'react-router';

const { buy, sell } = orderType;

export default function Order({ type }) {
  const [productList, setProductList] = useState({});
  const { productId } = useParams();

  useEffect(() => {
    fetch('/data/OrderMockData.json')
      .then(res => res.json())
      .then(data => {
        setProductList(data.result);
      });
  }, []);

  const navigate = useNavigate();

  const moveToOrderDetail = () => {
    navigate(
      type === buy
        ? `/${buy}/detail/${productId}`
        : `/${sell}/detail${productId}`
    );
  };

  const [buying, selling] = productList.lowest_price_by_size || [];

  const isBuyOrSell = type === buy ? buying : selling;

  return (
    <Container>
      <OrderWrap>
        <Title>{type === buy ? '구매하기' : '판매하기'}</Title>
        <ShoesInfo />
        <SizeListGrid>
          {isBuyOrSell?.sizes.map(list => (
            <LinkBtn key={list.id} onClick={moveToOrderDetail}>
              <Size>{list.size}</Size>
              <Price isBuy={type === 'buy'}>{list.lowest_price}</Price>
            </LinkBtn>
          ))}
        </SizeListGrid>
      </OrderWrap>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 120px;
`;

const OrderWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  margin: 70px 0px;
  width: 700px;
  height: 400px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
`;

const Title = styled.div`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: bold;
`;

const SizeListGrid = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
`;

const LinkBtn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 60px;
  background-color: white;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  cursor: pointer;
  &:active {
    border: 1px solid black;
  }
`;

const Size = styled.div`
  color: gray;
  margin-bottom: 3px;
`;

const Price = styled.div`
  ${props => (props.isBuy ? 'color: red' : 'color: #41B978')};
  font-size: 14px;
`;
