import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { API } from '../../config';

export default function ShoesInfo({ id }) {
  const [productList, setProductList] = useState({});
  const [shoeImage] = productList.product_image || [];

  useEffect(() => {
    fetch(`${API.baseUrl}/products/${id}`)
      .then(res => res.json())
      .then(data => setProductList(data.result));
  }, [id]);

  return (
    <Container>
      <ShoesImage
        src={shoeImage?.url ?? '/images/DefaultImage.png'}
        alt="Shoes Image"
      />
      <DetailInfo>
        <ModelNumber>{productList.product_info?.model_number}</ModelNumber>
        <EngName>{productList.product_info?.en_name}</EngName>
        <KorName>{productList.product_info?.ko_name}</KorName>
      </DetailInfo>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  margin: 20px 0;
`;

const ShoesImage = styled.img`
  width: 80px;
  height: 80px;
`;

const DetailInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
`;

const ModelNumber = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`;

const EngName = styled.div`
  font-size: 14px;
  margin-bottom: 5px;
`;

const KorName = styled.div`
  color: lightgray;
  font-size: 13px;
`;
