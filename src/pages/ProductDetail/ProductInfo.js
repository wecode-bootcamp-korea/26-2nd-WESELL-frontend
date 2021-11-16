import React from 'react';
import styled from 'styled-components';
import ProductDetail from './ProductDetail';

export default function ProductInfo() {
  return (
    <ProductInfoWrapper>
      <ProductInfoTitle>상품 정보</ProductInfoTitle>
      <DetailProductWrapper>
        <AbsolutePosition>
          <ModelInfoBox>
            <ProductTitle>모델 번호</ProductTitle>
            <ProductDetailInfo>555088-611</ProductDetailInfo>
          </ModelInfoBox>
        </AbsolutePosition>
        <VerticalLine>
          <ModelInfoBox>
            <ProductTitle>출시일</ProductTitle>
            <ProductDetailInfo>21/11/15</ProductDetailInfo>
          </ModelInfoBox>
        </VerticalLine>
        <VerticalLine>
          <ModelInfoBox>
            <ProductTitle>컬러</ProductTitle>
            <ProductDetailInfo>
              BORDEAUX/WHITE-METALLIC SILVER
            </ProductDetailInfo>
          </ModelInfoBox>
        </VerticalLine>
        <VerticalLine>
          <ModelInfoBox>
            <ProductTitle>발매가</ProductTitle>
            <ProductDetailInfo>199,000원</ProductDetailInfo>
          </ModelInfoBox>
        </VerticalLine>
      </DetailProductWrapper>
    </ProductInfoWrapper>
  );
}

const ProductInfoWrapper = styled.div`
  margin-top: 40px;
  padding-left: 40px;
`;

const ProductInfoTitle = styled.span`
  /* margin-bottom: 10px; */
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
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 0 10px;
`;

const VerticalLine = styled.div`
  border-left: 1px solid #ebebeb;
  margin-top: 10px;
  margin-bottom: 10px;
  height: 50px;
`;

const ProductTitle = styled.span`
  display: inline-block;
  color: #222;
  opacity: 0.3;
  font-size: 12px;
  color: rgba(34, 34, 34, 0.5);
`;

const ProductDetailInfo = styled.span`
  display: inline-block;
  font-size: 12px;

  color: #222;
`;
