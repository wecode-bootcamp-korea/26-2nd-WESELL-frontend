import React from 'react';
import styled from 'styled-components';
import { FaRegArrowAltCircleDown } from 'react-icons/fa';

export default function ColumnTop() {
  return (
    <RightSideSection>
      <ColumnTopSection>
        <TitleBox>
          <BrandName>Jordan</BrandName>
          <EngName>Jordan 1 Retro High OG Bordeaux</EngName>
          <KrName>조던 1 레트로 하이 OG 보르도</KrName>
        </TitleBox>
        <FigureWrap>
          <DetailSize>
            <SizeInKorean>사이즈</SizeInKorean>
            <showAllSizes>
              <AllSize>모든 사이즈</AllSize>
              <FaRegArrowAltCircleDown />
            </showAllSizes>
          </DetailSize>
          <DetailPrice>
            <TransactionPriceKorean>최근 거래가</TransactionPriceKorean>
            <PriceInfo>
              <CurrentPrice>248,000</CurrentPrice>
              <PricePunctuation>6000원(-2.4%)</PricePunctuation>
            </PriceInfo>
          </DetailPrice>
          <ButtonWrapper>
            <Button>
              <ButtonDivision>
                <LeftSide>
                  <BtnTitle>구매</BtnTitle>
                </LeftSide>
                <RightSide>
                  <OrderPrice>23500원</OrderPrice>
                  <OrderStatusName>즉시 구매가</OrderStatusName>
                </RightSide>
              </ButtonDivision>
            </Button>

            <Button primary>
              <ButtonDivision>
                <LeftSide>
                  <BtnTitle>판매</BtnTitle>
                </LeftSide>
                <RightSide>
                  <OrderPrice>11500원</OrderPrice>
                  <OrderStatusName>즉시 판매가</OrderStatusName>
                </RightSide>
              </ButtonDivision>
            </Button>
          </ButtonWrapper>
        </FigureWrap>
        <productTile />
        <buttonWrapper />
      </ColumnTopSection>
    </RightSideSection>
  );
}

const RightSideSection = styled.div`
  padding-left: 40px;
`;

const ColumnTopSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const BrandName = styled.span`
  display: inline-block;
  vertical-align: top;
  line-height: 19px;
  padding-top: 1px;
  margin-bottom: 9px;
  font-size: 18px;
  font-weight: 800;
  border-bottom: 2px solid #222;
  width: 61px;
  height: 21px;
`;

const EngName = styled.span`
  margin-bottom: 4px;
  font-size: 18px;
  font-weight: 400;
`;

const KrName = styled.span`
  line-height: 17px;
  font-size: 14px;
  color: rgba(34, 34, 34, 0.5);
`;
const FigureWrap = styled.div`
  width: 500px;
`;
const DetailSize = styled.div`
  padding-top: 19px;
  padding-bottom: 12px;
  border-bottom: 1px solid #ebebeb;
`;
const SizeInKorean = styled.span`
  padding-top: 4px;
  display: inline-block;
  line-height: 16px;
  font-size: 13px;
  color: rgba(34, 34, 34, 0.8);
`;
const AllSize = styled.span`
  display: inline-block;
  margin-right: 5px;
  margin-left: 392px;
  font-size: 18px;
`;

const DetailPrice = styled.div`
  display: flex;
  margin-top: 4px;
`;

const TransactionPriceKorean = styled.span`
  position: absolute;
  width: 60px;
  padding-top: 5px;
  height: 7px;
  font-size: 13px;
  color: rgba(34, 34, 34, 0.8);
`;

const PriceInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 330px;
`;

const CurrentPrice = styled.span`
  margin-left: 100px;
  margin-top: 4px;
`;
const PricePunctuation = styled.span`
  color: #31b46e;
  margin-left: 110px;
`;

const ButtonWrapper = styled.div`
  margin-top: 15px;
`;

const ButtonDivision = styled.div`
  display: flex;
`;

const Button = styled.button`
  background: ${props => (props.primary ? '#41B979' : '#EF6253')};

  width: 235px;
  height: 40px;
  margin-right: 15px;
  /* margin-top: 3px; */
  padding: 0 10px;
  border: none;
  border-radius: 5px;
`;

const LeftSide = styled.div`
  /* position: absolute; */
  margin-top: 3px;
  left: 5px;
`;
const BtnTitle = styled.div`
  /* right: 1px; */
  margin-top: 5px;
  /* margin-right: 20px; */
  font-weight: bold;
  color: #fff;
`;
const RightSide = styled.div`
  margin-left: 10px;
  border-left: 1px solid silver;
  color: #fff;
`;

const OrderPrice = styled.div`
  margin-left: 10px;
`;
const OrderStatusName = styled.div`
  margin-left: 20px;
`;
