import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaRegArrowAltCircleDown } from 'react-icons/fa';
import { Modal } from './components/Modal';
import SizeSelectModalStyling from './components/SizeSelectModalStyling';
import { API } from '../../config';
import { FaCaretDown } from 'react-icons/fa';
import { useNavigate } from 'react-router';

export default function Bargain({ productID }) {
  const [showModal, setShowModal] = useState(false);
  const [modalLocation, setModalLocation] = useState(true);
  const [detailPageData, setDetailPageData] = useState([]);

  useEffect(() => {
    fetch(`${API.baseUrl}/products/${productID}`)
      .then(res => res.json())
      .then(data => setDetailPageData(data.result));
  }, [productID]);

  const openModal = e => {
    setShowModal(prev => !prev);
    setModalLocation(e);
  };

  const [productSize, setProductSize] = useState('230');
  const [productPrice, setProductPrice] = useState('351000');
  const navigate = useNavigate();

  const handleClick = (size, price) => {
    setProductSize(size);
    setProductPrice(price);
  };

  const linkToOrder = () => {
    navigate('/buy', { state: productID });
  };

  const linkToSell = () => {
    navigate('/sell', { state: productID });
  };
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
                <ButtonTitle onClick={linkToOrder}>구매</ButtonTitle>
                <OrderContentWrapper>
                  <OrderPrice>235,000원</OrderPrice>
                  <OrderStatusName>즉시 구매가</OrderStatusName>
                </OrderContentWrapper>
              </ButtonDivision>
            </Button>

            <Button primary>
              <ButtonDivision>
                <ButtonTitle onClick={linkToSell}>판매</ButtonTitle>
                <OrderContentWrapper>
                  <SellPrice>11,500원</SellPrice>
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
`;

const DetailSize = styled.div`
  display: flex;
  height: 60px;
  padding-top: 19px;
  padding-bottom: 12px;
  border-bottom: 1px solid #ebebeb;
`;

const SizeInKorean = styled.div`
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

const PriceInfoWrapper = styled.div``;

const PriceInfo = styled.div``;

const CurrentPrice = styled.div``;

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
`;

const Button = styled.button`
  background: ${props => (props.primary ? '#41B979' : '#EF6253')};
  width: 275px;
  margin-right: ${props => (props.primary ? '0px' : '7px')};
  border: none;
  border-radius: 10px;
  text-align: left;
  font-size: 17px;
`;

const ButtonTitle = styled(Link)`
  display: flex;
  padding: 10px 10px 10px 10px;
  border-right: 2px solid #2222221a;
  font-weight: 600;
  color: #fff;
  text-decoration: none;
  align-items: center;
`;

const OrderContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  margin-left: 15px;
  margin-bottom: 15px;
  color: #fff;
`;

const OrderPrice = styled.span`
  display: flex;
`;
const SellPrice = styled.span``;
const OrderStatusName = styled.span`
  font-size: 11px;
  opacity: 0.5;
`;

const SellStatusName = styled.span`
  font-size: 11px;
  opacity: 0.5;
`;
