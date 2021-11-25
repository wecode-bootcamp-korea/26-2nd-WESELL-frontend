import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Bargain from './Bargain';
import ProductInfo from './ProductInfo';
import MarketPrice from './MarketPrice';
import { API } from '../../config';
import { useParams } from 'react-router';

export default function ProductDetail() {
  const [imageUrl, setImageUrl] = useState('');
  const { productID } = useParams();

  useEffect(() => {
    fetch(`${API.baseUrl}/products/${productID}`)
      .then(res => res.json())
      .then(data => setImageUrl(data.result.product_image));
  }, [productID]);
  return (
    <Container>
      <Wrapper>
        <ImageSection>
          <ProductImg alt="productImage" src={imageUrl && imageUrl[0].url} />
        </ImageSection>
        <ProductInfoSection>
          <Bargain productID={productID} />
          <ProductInfo />
          <MarketPrice />
        </ProductInfoSection>
      </Wrapper>
    </Container>
  );
}
const Container = styled.div`
  margin: 0 auto;
  padding-top: 140px;
  max-width: 1280px;
  padding: 170px 40px 120px;
`;

const Wrapper = styled.div`
  display: flex;
`;

const ImageSection = styled.div`
  margin-right: 40px;
`;

const ProductImg = styled.img`
  width: 580px;
  height: 580px;
  object-fit: cover;
`;

const ProductInfoSection = styled.div`
  border-left: 1px solid #ebebeb;
  position: relative;
  float: right;
  width: 600px;
`;
