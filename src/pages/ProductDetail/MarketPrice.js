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
  const onClick = () => {
    color === '#f4f4f4' ? setColor('#fff') : setColor('#f4f4f4');
  };
  return (
    <MarketPriceWrapper>
      <TitleWrapper>
        <MarketPriceTitle>시세</MarketPriceTitle>
        <showAllSizes>
          <AllSize>모든 사이즈</AllSize>
          <FaRegArrowAltCircleDown />
        </showAllSizes>
      </TitleWrapper>
      <SalesGraphWrapper>
        <Line data={data} options={options} />
      </SalesGraphWrapper>
      <ButtonsWrapper>
        <Button color={color} onClick={onClick}>
          체결 거래
        </Button>
        <Button primary color={color} onClick={onClick}>
          판매 입찰
        </Button>
        <Button color={color} onClick={onClick}>
          구매 입찰
        </Button>
      </ButtonsWrapper>
    </MarketPriceWrapper>
  );
}

const MarketPriceWrapper = styled.div`
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
  width: 150px;
  font-size: 13px;
  text-align: center;
  border-radius: 8px;
  border: none;
  background-color: ${props => props.color};
  color: rgba(34, 34, 34, 0.8);
`;

// const ButtonStyling = ({ active }) => {
//   if (active) return onClick;
// };

// const onClickChange = props => {
//   background-color: #fff;
// }
