import React from 'react';
import styled from 'styled-components';

function ProductCard(props) {
  const { img, brand, Eng, Kr, Pr } = props;
  return (
    <ProductContainer>
      <ProductImg src={img} />
      <ProductBrand>{brand}</ProductBrand>
      <NameWrapper>
        <ProductEngName>{Eng}</ProductEngName>
        <ProductKrName>{Kr}</ProductKrName>
      </NameWrapper>
      <Productprice>{Pr}</Productprice>
      <DirectPurChase>즉시 구매가</DirectPurChase>
    </ProductContainer>
  );
}

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const ProductImg = styled.img`
  width: 220px;
  height: 230px;
  border-radius: 10px;
`;
const ProductBrand = styled.div`
  width: 230px;
  font-size: 14px;
`;
const NameWrapper = styled.div`
  width: 230px;
  margin-top: 5px;
`;
const ProductEngName = styled.div`
  width: 230px;
  font-size: 13px;
`;
const ProductKrName = styled.div`
  width: 230px;
  font-size: 12px;
  color: lightgray;
`;
const Productprice = styled.div`
  width: 230px;
  margin-top: 10px;
  font-size: 14px;
`;
const DirectPurChase = styled.div`
  width: 230px;
  font-size: 12px;
  color: lightgray;
`;

export default ProductCard;
