import React from 'react';
import styled from 'styled-components';

function ProductCardMain({ cards }) {
  const { image_url, brand, en_name, ko_name, buy_now_price } = cards;

  return (
    <Container>
      <Image src={image_url.url} />
      <Brand>{brand}</Brand>
      <NameWrapper>
        <EngName>{en_name}</EngName>
        <KrName>{ko_name}</KrName>
      </NameWrapper>
      <Price>{buy_now_price}</Price>
      <DirectPurchase>즉시 구매가</DirectPurchase>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Image = styled.img`
  width: 220px;
  height: 230px;
  border-radius: 10px;
`;

const Brand = styled.div`
  width: 230px;
  font-size: 14px;
`;

const NameWrapper = styled.div`
  width: 230px;
  margin-top: 5px;
`;

const EngName = styled.div`
  width: 230px;
  font-size: 13px;
`;

const KrName = styled.div`
  width: 230px;
  font-size: 12px;
  color: lightgray;
`;

const Price = styled.div`
  width: 230px;
  margin-top: 10px;
  font-size: 14px;
`;

const DirectPurchase = styled.div`
  width: 230px;
  font-size: 12px;
  color: lightgray;
`;

export default ProductCardMain;
