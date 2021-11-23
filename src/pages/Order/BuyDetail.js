import React, { useState } from 'react';
import styled from 'styled-components';
import BuyHow from './BuyHow';
import ShoesInfo from './ShoesInfo';

export default function BuyDetail() {
  const [title, setTitle] = useState('즉시 구매');
  const [buyNowPrice, setBuyNowPrice] = useState(222000);

  const changeToBuyNow = () => {
    setTitle('즉시 구매');
  };

  const changeToAuction = () => {
    setTitle('구매 입찰');
  };

  return (
    <Container>
      <BuyWrap>
        <Title>{title}하기</Title>
        <ShoesInfo />
        <PriceInfo>
          <PriceNow>
            <PriceTitle> 즉시 구매가 </PriceTitle>
            {buyNowPrice} 원
          </PriceNow>
          <CenterLine />
          <PriceNow>
            <PriceTitle> 즉시 판매가 </PriceTitle>
            217,000 원
          </PriceNow>
        </PriceInfo>
        <ButtonWrap>
          <BuyTypeButton
            title={title === '구매 입찰'}
            onClick={changeToAuction}
          >
            구매 입찰
          </BuyTypeButton>
          <BuyTypeButton title={title === '즉시 구매'} onClick={changeToBuyNow}>
            즉시 구매
          </BuyTypeButton>
        </ButtonWrap>
        <BuyHow title={title} buyNowPrice={buyNowPrice} />
      </BuyWrap>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 120px;
`;

const BuyWrap = styled.div`
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

const BuyTypeButton = styled.div`
  text-align: center;
  vertical-align: middle;
  width: 50%;
  height: 40px;
  padding: 12px 0;
  margin: 5px 5px;
  border-radius: 80px;
  cursor: pointer;
  ${props =>
    props.title
      ? 'color: white; background-color: #ef6253;'
      : 'background-color: #f4f4f4'}
`;
