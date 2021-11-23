import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import ShoesInfo from './ShoesInfo';

export default function Buy() {
  const [productList, setProductList] = useState({});

  useEffect(() => {
    fetch('/data/OrderMockData.json')
      .then(res => res.json())
      .then(data => {
        setProductList(data.result);
      });
  }, []);

  const navigate = useNavigate();

  const moveToBuyDetail = () => {
    navigate('/buy/detail');
  };

  return (
    <Container>
      <BuyWrap>
        <Title>구매하기</Title>
        <ShoesInfo />
        <SizeListGrid>
          {productList.lowest_price_by_size &&
            productList.lowest_price_by_size[0].sizes.map(list => (
              <LinkBtn key={list.id} onClick={moveToBuyDetail}>
                <Size>{list.size}</Size>
                <Price>{list.lowest_price}</Price>
              </LinkBtn>
            ))}
        </SizeListGrid>
      </BuyWrap>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 120px;
`;

const BuyWrap = styled.div`
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
  color: red;
  font-size: 14px;
`;
