import React from 'react';
import styled from 'styled-components';
import { GiElectric } from 'react-icons/gi';

function ProductCard({ cardlist }) {
  const { image_url, brand, en_name, ko_name, buy_now_price, fast_shipping } =
    cardlist;

  return (
    <ProductContainer>
      <ProductImg src={image_url.url} alt="productImage" />
      <ProductBrand>{brand}</ProductBrand>
      <NameWrapper>
        <ProductEngName>{en_name}</ProductEngName>
        <ProductKrName>{ko_name}</ProductKrName>
      </NameWrapper>
      <Productprice>{buy_now_price}원</Productprice>
      <DirectPurChase>즉시 구매가</DirectPurChase>
      {fast_shipping && (
        <QuickDeliver>
          <GiElectric />
          빠른 배송
        </QuickDeliver>
      )}
    </ProductContainer>
  );
}

export default ProductCard;

const ProductContainer = styled.div`
  padding: 5px 10px;
  width: 270px;
`;

const ProductImg = styled.img`
  width: 260px;
  height: 230px;
  border-radius: 10px;
`;
const ProductBrand = styled.div`
  font-size: 14px;
`;
const NameWrapper = styled.div`
  margin-top: 5px;
`;
const ProductEngName = styled.div`
  font-size: 13px;
`;
const ProductKrName = styled.div`
  color: lightgray;
  font-size: 12px;
`;
const Productprice = styled.div`
  margin-top: 10px;
  font-size: 14px;
`;
const DirectPurChase = styled.div`
  color: lightgray;
  font-size: 12px;
`;

const QuickDeliver = styled.div`
  display: inline-block;
  padding: 5px 5px;
  margin: 10px 0 10px 0;
  border: 1px solid green;
  border-radius: 5px;
  font-size: 12px;
  color: green;
`;
