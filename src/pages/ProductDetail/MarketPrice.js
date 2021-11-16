import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
// import { FaRegArrowAltCircleDown } from 'react-icons/fa';
import { Line } from 'react-chartjs-2';
import { Modal } from './components/Modal';
import TransitionHistoryModalStyling from '../ProductDetail/components/TransitionHistoryModalStyling';
import DropDownMenu from '../ProductDetail/components/DropDownMenu';
import { API } from '../../config';

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};
export default function MarketPrice() {
  const [showModal, setShowModal] = useState(false);
  const [first, setFirst] = useState();
  const [marketPriceData, setMarketPriceData] = useState(first);
  const [currentSizeSelected, setCurrentSizeSelected] = useState('test');
  // https://github.com/reactchartjs/react-chartjs-2/blob/master/example/src/charts/Line.js
  const data = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
      {
        label: 'MarketPrice',
        data: marketPriceData,
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  };

  const [detailPageData, setDetailPageData] = useState([]);

  const setCurSize = curSizeSelected => {
    setCurrentSizeSelected(curSizeSelected);
  };

  // useEffect(() => {
  //   fetch(`/data/detailPageData.json`)
  //     .then(res => res.json())
  //     .then(data => setDetailPageData(data.result));
  // }, []);

  useEffect(() => {
    fetch(`${API.baseUrl}/products/2`)
      .then(res => res.json())
      .then(data => setDetailPageData(data.result));
  }, []);
  console.log(detailPageData);
  // useEffect(() => {
  //   fetch(`/data/detailPageData.json`)
  //     .then(res => res.json())
  //     .then(data =>
  //       setFirst(
  //         data.result.market_price.map(
  //           item =>
  //             item.sizes.map(({ avg_price, size }, index) => {
  //               if (size === '230') {
  //                 return avg_price;
  //               }
  //             })[0]
  //         )
  //       )
  //     );
  // }, []);

  useEffect(() => {
    let targetNum;
    fetch(`${API.baseUrl}/products/2`)
      .then(res => res.json())
      .then(data =>
        setMarketPriceData(
          data.result.market_price.map(
            item =>
              item.sizes.map(({ avg_price, size }, index) => {
                if (size === currentSizeSelected) {
                  targetNum = index;
                  return avg_price;
                }
              })[targetNum]
          )
        )
      );
  }, [currentSizeSelected]);
  const [currentMenuIndex, setCurrentMenuIndex] = useState(1);

  const handleSelectedMenu = tabIndex => {
    setCurrentMenuIndex(tabIndex);
  };

  const openModal = () => {
    setShowModal(prev => !prev);
  };
  return (
    <MarketPriceWrapper>
      <TitleWrapper>
        <MarketPriceTitle>시세</MarketPriceTitle>
        <ShowAllSizes>
          {/* <AllSize>230</AllSize>
          <FaRegArrowAltCircleDown /> */}
          <DropDownMenu setCurSize={setCurSize} type="MarketPrice" />
        </ShowAllSizes>
      </TitleWrapper>
      <SalesGraphWrapper>
        <Line data={data} options={options} />
      </SalesGraphWrapper>
      <ButtonsWrapper>
        <Button
          isActive={currentMenuIndex === 1}
          onClick={() => handleSelectedMenu(1)}
        >
          체결 거래
        </Button>
        <Button
          isActive={currentMenuIndex === 2}
          onClick={() => handleSelectedMenu(2)}
        >
          판매 입찰
        </Button>
        <Button
          isActive={currentMenuIndex === 3}
          onClick={() => handleSelectedMenu(3)}
        >
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
          {detailPageData.order_history &&
            detailPageData.order_history.slice(0, 5).map(price => {
              return (
                <InfoWrapper key={price.id}>
                  <Size>{price.size}</Size>
                  <Price>
                    {Number(price.price).toLocaleString()}
                    <PriceKr>원</PriceKr>
                  </Price>
                  <Date>{price.created_at}</Date>
                </InfoWrapper>
              );
            })}
        </RowSection>
        <OrderHistoryButton onClick={openModal}>
          체결 내역 더보기
        </OrderHistoryButton>
        <Modal showModal={showModal} setShowModal={setShowModal}>
          <TransitionHistoryModalStyling
            detailPageDataMarket={detailPageData}
          />
        </Modal>
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
  display: flex;
  padding-top: 19px;
  padding-bottom: 12px;
  border-bottom: 1px solid #ebebeb;
`;
const SalesGraphWrapper = styled.div``;
const MarketPriceTitle = styled.span`
  padding-top: 4px;
  display: inline-block;
  line-height: 16px;
  font-size: 18px;
  font-weight: bold;
  color: #222;
`;
const ShowAllSizes = styled.div`
  margin-left: 370px;
`;

// const AllSize = styled.span`
//   display: inline-block;
//   margin-right: 5px;
//   margin-left: 350px;
//   font-size: 18px;
// `;

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
  background-color: ${props => (props.isActive ? '#ffff' : '#f4f4f4')};
  color: rgba(34, 34, 34, 0.8);
`;

const TableWrapper = styled.div`
  margin-top: 40px;
`;

const TableColumnSetting = styled.div`
  display: flex;
  /* margin-top: 5px; */
  border-bottom: 1px solid #ebebeb;
  padding-bottom: 9px;
  /* text-align: right; */
`;

const SizeName = styled.div`
  /* display: inline-block; */
  margin-right: 250px;
  font-size: 12px;
  color: rgba(34, 34, 34, 0.5);
  font-weight: 400;
`;
const PriceName = styled.div`
  /* display: inline-block; */
  margin-right: 150px;
  font-size: 12px;
  color: rgba(34, 34, 34, 0.5);
  font-weight: 400;
`;
const DateName = styled.div`
  /* display: inline-block; */
  font-size: 12px;
  color: rgba(34, 34, 34, 0.5);
  font-weight: 400;
`;

const RowSection = styled.div`
  margin-top: 4px;
  text-align: right;
`;

const InfoWrapper = styled.div`
  display: flex;
  margin-top: 10px;
`;

const Size = styled.span`
  display: inline-block;
  margin-right: 210px;
  color: #222;
  font-size: 16px;
`;
const Price = styled.span`
  display: flex;
  margin-right: 100px;
  color: #222;
  font-size: 16px;
`;

const PriceKr = styled.span`
  display: inline-block;
`;
const Date = styled.span`
  display: inline-block;
  color: #222;
  font-size: 16px;
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
