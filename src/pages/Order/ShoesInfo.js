import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

export default function ShoesInfo() {
  const [shoeInfo, setShoeInfo] = useState({});

  useEffect(() => {
    fetch('/data/OrderMockData.json')
      .then(res => res.json())
      .then(data => {
        setShoeInfo(data.result);
      });
  }, []);

  const [shoeImage] = shoeInfo.product_image || [];

  return (
    <Container>
      <ShoesImage
        src={shoeImage?.url ?? '/data/images/DefaultImage.png'}
        alt="Shoes Image"
      />
      <DetailInfo>
        <ModelNumber>{shoeInfo.product_info?.model_number}</ModelNumber>
        <EngName>{shoeInfo.product_info?.en_name}</EngName>
        <KorName>{shoeInfo.product_info?.ko_name}</KorName>
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
