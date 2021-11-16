import React, { useState } from 'react';
import styled from 'styled-components';
import DropDownMenu from './DropDownMenu';

export default function TransitionHistoryModalStyling({ detailPageData }) {
  const [color, setColor] = useState('#f4f4f4');

  const onClick = id => {
    color === '#f4f4f4' ? setColor('#fff') : setColor('#f4f4f4');
  };
  return (
    <TransitionWrapper>
      <ModalContent>
        <Title>시세</Title>
      </ModalContent>
      <ProductInfoWrapper>
        <ProductImg src="https://images.unsplash.com/photo-1494496195158-c3becb4f2475?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fHNob2VzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" />
        <ProductInfo>
          <EngName> Jordan 1 Retro High OG Bordeaux</EngName>
          <KrName>조던 1 레트로 하이 OG 보르도</KrName>
          <DropDownMenu />
        </ProductInfo>
      </ProductInfoWrapper>
      <ButtonsContainer>
        <ButtonsWrapper>
          <Button color={color} onClick={() => onClick(1)}>
            체결 거래
          </Button>
          <Button color={color} onClick={() => onClick(2)}>
            판매 입찰
          </Button>
          <Button color={color} onClick={() => onClick(3)}>
            구매 입찰
          </Button>
        </ButtonsWrapper>
      </ButtonsContainer>
      <TableWrapper>
        <PriceHead>
          <Size>사이즈</Size>
          <Price>거래가</Price>
          <Date>거래일</Date>
        </PriceHead>
        <PriceBySizeWrapper>
          <OrderedInfoWrapper>
            <SizeNum>280</SizeNum>
            <PriceNum>277,000원</PriceNum>
            <OrderedDate>21/11/19</OrderedDate>
          </OrderedInfoWrapper>
        </PriceBySizeWrapper>
      </TableWrapper>
    </TransitionWrapper>
  );
}
const TransitionWrapper = styled.div`
  /* width: 480px;
  height: 525px; */
`;
const ModalContent = styled.div`
  /* margin-left: 20px;
  margin-right: 20px; */
`;

const Title = styled.div`
  margin: 15px;
  font-weight: 700;
  color: #000;
  text-align: center;
`;

const ProductInfoWrapper = styled.div`
  display: flex;
  margin: 30px;
`;

const ProductInfo = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
`;
const ProductImg = styled.img`
  width: 70px;
  height: 70px;
`;

const EngName = styled.span`
  font-size: 15px;
  margin-bottom: 5px;
`;

const KrName = styled.span`
  font-size: 11px;
  margin-bottom: 5px;
  color: rgba(34, 34, 34, 0.5);
`;
const ButtonsContainer = styled.div`
  /* margin-top: 5px; */
  margin-left: 7px;
`;
const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-left: 20px;
  margin-bottom: 15px;
  border-radius: 10px;
  background-color: #f4f4f4;
  width: 90%;
`;

const Button = styled.button`
  display: block;
  margin: 2px;
  line-height: 16px;
  padding: 7px 0 9px;
  font-size: 13px;
  text-align: center;
  border-radius: 8px;
  border: none;
  background-color: ${props => props.color};
  color: rgba(34, 34, 34, 0.8);
`;

const PriceHead = styled.div`
  display: flex;
  font-size: 13px;
  color: rgba(34, 34, 34, 0.5);
  font-weight: 400;
  margin-left: 20px;
  margin-bottom: 10px;
`;
const Size = styled.span``;
const Price = styled.span`
  margin-left: 170px;
`;
const Date = styled.span`
  margin-left: 90px;
`;
const OrderedInfoWrapper = styled.div`
  /* font-size: 25px; */
  margin-bottom: 2px;
  /* text-align: left; */
`;
const PriceBySizeWrapper = styled.div`
  display: flex;
  padding-top: 5px;
  border-top: 1px solid #f4f4f4;
  /* text-align: left; */
`;

const SizeNum = styled.span`
  margin-left: 20px;
  font-size: 15px;
`;
const PriceNum = styled.span`
  margin-left: 145px;
  font-size: 15px;
`;
const OrderedDate = styled.span`
  margin-left: 65px;
  font-size: 15px;
`;

const TableWrapper = styled.div`
  margin-left: 10px;
`;
