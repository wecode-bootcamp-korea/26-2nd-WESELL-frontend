import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { FaRegArrowAltCircleDown } from 'react-icons/fa';
import { Modal } from './components/Modal';
import SizeSelectModalStyling from './components/SizeSelectModalStyling';
import { API } from '../../config';
import { FaCaretDown } from 'react-icons/fa';

export default function Bargain() {
  const [showModal, setShowModal] = useState(false);
  const [modalLocation, setModalLocation] = useState(true);
  const [detailPageData, setDetailPageData] = useState([]);

  // useEffect(() => {
  //   fetch(`/data/detailPageData.json`)
  //     .then(res => res.json())
  //     .then(data => setDetailPageData(data.result));
  // }, []);

  const match = useParams();
  console.log(match);

  useEffect(() => {
    fetch(`${API.baseUrl}/products/1`)
      .then(res => res.json())
      .then(data => setDetailPageData(data.result));
  }, []);

  const openModal = e => {
    setShowModal(prev => !prev);
    setModalLocation(e);
  };

  const [productSize, setProductSize] = useState('230');
  const [productPrice, setProductPrice] = useState('351000');

  const handleClick = (size, price) => {
    setProductSize(size);
    setProductPrice(price);
  };
  console.log(detailPageData.lowest_price_by_size);
  return (
    <BargainWrapper>
      <BargainSection>
        <TitleBox>
          <BrandName>
            {detailPageData.product_info && detailPageData.product_info.brand}
          </BrandName>
          <EngName>
            {detailPageData.product_info && detailPageData.product_info.en_name}
          </EngName>
          <KrName>
            {detailPageData.product_info && detailPageData.product_info.ko_name}
          </KrName>
        </TitleBox>
        <FigureWrap>
          <DetailSize>
            <SizeInKorean>사이즈</SizeInKorean>
            <ShowAllSizes>
              <ProductSizeNum>{productSize}</ProductSizeNum>
              <FaRegArrowAltCircleDown
                onClick={() => openModal(modalLocation)}
                className="FaIconModal"
                modalLocation={modalLocation}
              />

              <Modal showModal={showModal} setShowModal={setShowModal}>
                <SizeSelectModalStyling
                  sizeSelectButtonClick={handleClick}
                  detailPageDataSize={detailPageData.lowest_price_by_size}
                  showModal={showModal}
                  setShowModal={setShowModal}
                />
              </Modal>
            </ShowAllSizes>
          </DetailSize>
          <DetailPrice>
            <TransactionPriceKoreanWrapper>
              <TransactionPriceKorean>최근 거래가</TransactionPriceKorean>
            </TransactionPriceKoreanWrapper>
            <PriceInfo>
              <PriceInfoWrapper>
                <CurrentPrice>
                  {detailPageData.product_info && detailPageData.release_price}
                </CurrentPrice>
              </PriceInfoWrapper>
              <PricePunctuation>
                {Number(productPrice).toLocaleString()}
                <Won>원</Won>
              </PricePunctuation>
              <ChangedPriceWrapper>
                <FaCaretDown className="faIcon" />
                <ChangedPrice>63,000원 (-14.0%)</ChangedPrice>
              </ChangedPriceWrapper>
            </PriceInfo>
          </DetailPrice>
          <ButtonWrapper>
            <Button>
              <ButtonDivision>
                {/* <OrderHorizontalLine /> */}
                <ButtonTitleWrapper>
                  <ButtonTitle to="/order">구매</ButtonTitle>
                </ButtonTitleWrapper>
                <OrderContentWrapper>
                  <OrderPrice>235,000원</OrderPrice>
                  <OrderStatusName>즉시 구매가</OrderStatusName>
                </OrderContentWrapper>
              </ButtonDivision>
            </Button>

            <Button primary>
              <ButtonDivision>
                {/* <SellHorizontalLine /> */}
                <ButtonTitleWrapper>
                  <ButtonTitle to="/order">판매</ButtonTitle>
                </ButtonTitleWrapper>
                <OrderContentWrapper>
                  <OrderPrice>11,500원</OrderPrice>
                  <SellStatusName>즉시 판매가</SellStatusName>
                </OrderContentWrapper>
              </ButtonDivision>
            </Button>
          </ButtonWrapper>
        </FigureWrap>
      </BargainSection>
    </BargainWrapper>
  );
}

const BargainWrapper = styled.div`
  padding-left: 40px;
  font-family: ${props => props.theme.detailPageFontTitle};
`;

const BargainSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const BrandName = styled.span`
  vertical-align: top;
  padding-top: 1px;
  margin-bottom: 9px;
  font-size: 20px;
  font-weight: 900;
  border-bottom: 2px solid #222;
  padding-bottom: 20px;
  width: 61px;
  height: 21px;
`;

const EngName = styled.span`
  margin-bottom: 4px;
  font-size: 18px;
  font-family: 'Roboto', sans-serif;
  color: rgb(34, 34, 34);
`;

const KrName = styled.span`
  line-height: 17px;
  font-size: 14px;
  color: rgba(34, 34, 34, 0.5);
`;

const FigureWrap = styled.div`
  width: 100%;
  /* height: 70px */
`;

const DetailSize = styled.div`
  display: flex;
  height: 60px;
  padding-top: 19px;
  padding-bottom: 12px;
  border-bottom: 1px solid #ebebeb;
`;

const SizeInKorean = styled.div`
  /* padding-top: 4px; */
  margin-right: 10px;
  font-size: 13px;
  color: rgba(34, 34, 34, 0.8);
`;

const ShowAllSizes = styled.div`
  display: flex;
  margin-left: 50px;

  .FaIconModal {
    font-size: 20px;
  }
`;

const ProductSizeNum = styled.span`
  margin-right: 15px;
  margin-left: 392px;
  font-size: 18px;
  font-weight: 600;
  font-family: 'Roboto', sans-serif;
`;

const DetailPrice = styled.div`
  display: flex;
  margin-top: 11px;
  min-height: 44px;
`;
const TransactionPriceKoreanWrapper = styled.div`
  width: 100px;
  padding-top: 5px;
`;
const TransactionPriceKorean = styled.span`
  display: inline-block;
  height: 7px;
  font-size: 13px;
  color: rgba(34, 34, 34, 0.8);
`;

const PriceInfoWrapper = styled.div`
  /* display: flex;
  flex-direction: row; */
`;

const PriceInfo = styled.div`
  /* display: flex;
  flex-direction: column;
  margin-left: 330px; */
`;

const CurrentPrice = styled.div`
  /* margin-left: 100px;
  margin-top: 4px; */
`;

const ChangedPriceWrapper = styled.div`
  display: flex;
  margin-left: 300px;
  color: green;
  font-family: 'Roboto', sans-serif;
  opacity: 0.6;
`;
const ChangedPrice = styled.span``;
const PricePunctuation = styled.span`
  display: flex;
  font-size: 20px;
  font-weight: 700;
  flex-direction: row;
  margin-bottom: 7px;
  /* margin-left: 35px; */
  justify-content: right;
  color: #222;
`;

const Won = styled.span``;

const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 15px;
`;

const ButtonDivision = styled.div`
  display: flex;
  /* width: 100%; */
`;

const Button = styled.button`
  background: ${props => (props.primary ? '#41B979' : '#EF6253')};
  width: 275px;
  height: 60px;
  margin-right: ${props => (props.primary ? '0px' : '7px')};
  /* padding: 0 10px; */
  border: none;
  border-radius: 10px;
  text-align: left;
  font-size: 17px;
`;

const ButtonTitleWrapper = styled.div`
  padding: 10px 10px 10px 10px;
`;

const ButtonTitle = styled(Link)`
  font-weight: 600;
  color: #fff;
  text-decoration: none;
`;

const OrderContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* padding: 0px 10px 10px 10px; */
  padding-left: 10px;
  padding-top: 7px;
  /* justify-content: flex-end; */
  /* margin-left: 10px; */
  /* justify-content: left; */
  /* border-left: 1px solid silver; */
  color: #fff;
`;

const OrderPrice = styled.span`
  /* margin-left: 10px;
  font-size: 15px; */
  /* align-items: left; */
`;
const OrderStatusName = styled.span`
  /* align-items: left; */
  font-size: 11px;
  opacity: 0.5;
  /* flex: 1; */
`;

const SellStatusName = styled.span`
  /* align-items: left; */
  font-size: 11px;
  opacity: 0.5;
  /* flex: 1; */
`;
