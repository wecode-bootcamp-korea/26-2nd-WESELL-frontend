import React from 'react';
import styled from 'styled-components';
import ProductCard from '../../../components/ProductCard';

const ProductPreview = props => {
  const { title, desc, productCardUrl } = props;

  return (
    <ProductPreviewWrap>
      <Title>{title}</Title>
      <Desc>{desc}</Desc>
      <ProductCard url={productCardUrl} />
      <More>더보기</More>
    </ProductPreviewWrap>
  );
};

const ProductPreviewWrap = styled.div`
  position: relative;
  height: 500px;
  padding: 0px 50px;
`;

const Title = styled.div`
  margin: 10px 0;
  font-weight: 900;
  font-size: 20px;
`;

const Desc = styled.div`
  color: gray;
`;

const More = styled.button`
  position: absolute;
  left: 50%;
  bottom: 50px;
  width: 80px;
  height: 40px;
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
  }
  &:active {
    background-color: lightgray;
  }
`;

export default ProductPreview;
