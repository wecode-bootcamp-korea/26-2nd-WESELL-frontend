import React from 'react';
import styled from 'styled-components';
import ColumnTop from './ColumnTop';
import ProductInfo from './ProductInfo';
import MarketPrice from './MarketPrice';

export default function ProductDetail() {
  return (
    <Wrapper>
      <ImageSection>
        <ProductImg src="https://images.unsplash.com/photo-1494496195158-c3becb4f2475?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fHNob2VzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" />
      </ImageSection>
      <ProductInfoSection>
        <ColumnTop />
        <ProductInfo />
        <MarketPrice />
      </ProductInfoSection>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  margin: 0px 294px 0px 294px;
`;

const ImageSection = styled.div`
  margin-right: 40px;
`;

const ProductImg = styled.img`
  width: 400px;
  height: 400px;
`;

const ProductInfoSection = styled.div`
  border-left: 1px solid #ebebeb;
  padding-left: 40px;
`;
