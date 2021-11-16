import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { API } from '../../config';

export default function ProductInfo() {
  const [productInfoData, setProductInfoData] = useState({
    model_number: '',
    release_date: '',
    color: '',
    release_price: '',
  });

  // useEffect(() => {
  //   fetch(`/data/detailPageData.json`)
  //     .then(res => res.json())
  //     .then(data => setProductInfoData(data.result.product_info));
  // }, []);

  useEffect(() => {
    fetch(`${API.baseUrl}/products/4`)
      .then(res => res.json())
      .then(data => setProductInfoData(data.result.product_info));
  }, []);

  return (
    <ProductInfoWrapper>
      <ProductInfoTitle>상품 정보</ProductInfoTitle>
      <DetailProductWrapper>
        <AbsolutePosition>
          <ModelInfoBox>
            <ProductTitle>모델 번호</ProductTitle>
            <ProductDetailInfo>
              {productInfoData.model_number}
            </ProductDetailInfo>
          </ModelInfoBox>
        </AbsolutePosition>
        <VerticalLine>
          <ModelInfoBox>
            <ProductTitle>출시일</ProductTitle>
            <ProductDetailInfo>
              {productInfoData.release_date}
            </ProductDetailInfo>
          </ModelInfoBox>
        </VerticalLine>
        <VerticalLine>
          <ModelInfoBox>
            <ProductTitle>컬러</ProductTitle>
            <ProductDetailInfo>{productInfoData.color}</ProductDetailInfo>
          </ModelInfoBox>
        </VerticalLine>
        <VerticalLine>
          <ModelInfoBox>
            <ProductTitle>발매가</ProductTitle>
            <ProductDetailInfo>
              {productInfoData.release_price}원
            </ProductDetailInfo>
          </ModelInfoBox>
        </VerticalLine>
      </DetailProductWrapper>
    </ProductInfoWrapper>
  );
}

const ProductInfoWrapper = styled.div`
  margin-top: 40px;
  padding-left: 40px;
  width: 550px;
`;

const ProductInfoTitle = styled.span`
  font-weight: bold;
  color: #222;
`;

const DetailProductWrapper = styled.div`
  margin-top: 10px;
  border: 1px solid #ebebeb;
  border-width: 1px 0;
  display: flex;
`;

const AbsolutePosition = styled.div`
  margin-top: 10px;
`;

const ModelInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 40px;
  margin-right: 50px;
  padding: 0 10px;
`;

const VerticalLine = styled.div`
  border-left: 1px solid #ebebeb;
  margin-top: 10px;
  margin-bottom: 10px;
  height: 70px;
`;

const ProductTitle = styled.span`
  margin-bottom: 5px;
  color: #222;
  opacity: 0.3;
  font-size: 12px;
  color: rgba(34, 34, 34, 0.5);
`;

const ProductDetailInfo = styled.span`
  font-size: 14px;
  /* font-weight: 600; */
  color: #222;
`;
