import React from 'react';
import styled from 'styled-components';

function ProductCard({ img, brand, engname, krname, price }) {
  return (
    <ProductContainer>
      <ProductImg src={img} alt="productImage" />
      <ProductBrand>{brand}</ProductBrand>
      <NameWrapper>
        <ProductEngName>{engname}</ProductEngName>
        <ProductKrName>{krname}</ProductKrName>
      </NameWrapper>
      <Productprice>{price}</Productprice>
      <DirectPurChase>즉시 구매가</DirectPurChase>
    </ProductContainer>
  );
}

export default ProductCard;

const ProductContainer = styled.div`
  padding: 5px 5px;
`;

const ProductImg = styled.img`
  width: 220px;
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
