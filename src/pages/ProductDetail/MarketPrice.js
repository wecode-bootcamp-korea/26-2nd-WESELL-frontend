import React, { useState } from 'react';
import styled from 'styled-components';
import { FaRegArrowAltCircleDown } from 'react-icons/fa';
import { Line } from 'react-chartjs-2';

// https://github.com/reactchartjs/react-chartjs-2/blob/master/example/src/charts/Line.js
const data = {
  labels: ['1', '2', '3', '4', '5', '6'],
  datasets: [
    {
      label: 'MarketPrice',
      data: [12, 19, 3, 5, 2, 3],
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
    },
  ],
};

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

export default function MarketPrice() {
  const [color, setColor] = useState('#f4f4f4');
  const [id, setId] = useState('1');
  const onClick = id => {
    color === '#f4f4f4' ? setColor('#fff') : setColor('#f4f4f4');
  };
  return (
    <MarketPriceWrapper>
      <TitleWrapper>
        <MarketPriceTitle>시세</MarketPriceTitle>
        <ShowAllSizes>
          <AllSize>모든 사이즈</AllSize>
          <FaRegArrowAltCircleDown />
        </ShowAllSizes>
      </TitleWrapper>
      <SalesGraphWrapper>
        <Line data={data} options={options} />
      </SalesGraphWrapper>
      <ButtonsWrapper>
        <Button color={color} onClick={() => onClick(1)}>
          {/* <Button isActive={'activeButton' === 'button1'} /> */}
          체결 거래
        </Button>
        <Button color={color} onClick={() => onClick(2)}>
          {/* <Button isActive={'activeButton' === 'button2'} /> */}
          판매 입찰
        </Button>
        <Button color={color} onClick={() => onClick(3)}>
          {/* <Button isActive={'activeButton' === 'button3'} /> */}
          구매 입찰
        </Button>
      </ButtonsWrapper>
      <TableWrapper>
        <TableColumnSetting>
          <SizeName>사이즈</SizeName>
          <PriceName>거래가</PriceName>
          <DateName>거래일</DateName>
        </TableColumnSetting>
        <RowSection>
          <Size>270</Size>
          <Price>24,000원</Price>
          <Date>99/11/17</Date>
        </RowSection>
        <RowSection>
          <Size>270</Size>
          <Price>24,000원</Price>
          <Date>99/11/17</Date>
        </RowSection>
        <RowSection>
          <Size>270</Size>
          <Price>24,000원</Price>
          <Date>99/11/17</Date>
        </RowSection>
        <RowSection>
          <Size>270</Size>
          <Price>24,000원</Price>
          <Date>99/11/17</Date>
        </RowSection>
        <RowSection>
          <Size>270</Size>
          <Price>24,000원</Price>
          <Date>99/11/17</Date>
        </RowSection>
        <OrderHistoryButton>체결 내역 더보기</OrderHistoryButton>
      </TableWrapper>
    </MarketPriceWrapper>
  );
}

const MarketPriceWrapper = styled.div`
  width: 550px;
  margin-top: 40px;
  padding-left: 40px;
`;

const TitleWrapper = styled.div`
  padding-top: 19px;
  padding-bottom: 12px;
  border-bottom: 1px solid #ebebeb;
`;
const SalesGraphWrapper = styled.div``;
const MarketPriceTitle = styled.span`
  padding-top: 4px;
  display: inline-block;
  line-height: 16px;
  font-weight: bold;
  color: #222;
`;
const ShowAllSizes = styled.span``;
const AllSize = styled.span`
  display: inline-block;
  margin-right: 5px;
  margin-left: 350px;
  font-size: 18px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 40px;
  border-radius: 10px;
  background-color: #f4f4f4;
`;

const Button = styled.button`
  display: block;
  margin: 2px;
  line-height: 16px;
  padding: 7px 0 9px;
  width: 400px;
  font-size: 13px;
  text-align: center;
  border-radius: 8px;
  border: none;
  /* background-color: ${props => (props.isActive ? '#f4f4f4' : '#222')}; */
  background-color: ${props => props.color};
  color: rgba(34, 34, 34, 0.8);
`;

// const ButtonStyling = ({ active }) => {
//   if (active) return onClick;
// };

// const onClickChange = props => {
//   background-color: #fff;
// }

const TableWrapper = styled.div`
  margin-top: 40px;
`;

const TableColumnSetting = styled.div`
  border-bottom: 1px solid #ebebeb;
  padding-bottom: 9px;
  text-align: right;
`;

const SizeName = styled.span`
  display: inline-block;
  margin-right: 250px;
  font-size: 12px;
  color: rgba(34, 34, 34, 0.5);
  font-weight: 400;
`;
const PriceName = styled.span`
  display: inline-block;
  margin-right: 150px;
  font-size: 12px;
  color: rgba(34, 34, 34, 0.5);
  font-weight: 400;
`;
const DateName = styled.span`
  display: inline-block;
  font-size: 12px;
  color: rgba(34, 34, 34, 0.5);
  font-weight: 400;
`;

const RowSection = styled.div`
  margin-top: 4px;
  text-align: right;
`;

const Size = styled.span`
  display: inline-block;
  margin-right: 240px;
  color: #222;
  font-size: 12px;
`;
const Price = styled.span`
  display: inline-block;
  margin-right: 130px;
  color: #222;
  font-size: 12px;
`;
const Date = styled.span`
  display: inline-block;
  color: #222;
  font-size: 12px;
`;

const OrderHistoryButton = styled.button`
  border: 1px solid #d3d3d3;
  margin-top: 40px;
  background-color: #ffffff;
  color: rgba(34, 34, 34, 0.8);
  font-weight: 400;
  padding: 0 18px;
  width: 500px;
  height: 42px;
  border-radius: 12px;
  font-size: 14px;
`;
