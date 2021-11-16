import React from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import BrandList from './BrandList';

export default function SearchByBrand() {
  const navigate = useNavigate();

  return (
    <Container>
      {BrandList.map(brand => (
        <BrandWrap key={brand.id}>
          <Image
            src={brand.url}
            alt={brand.en_name}
            onClick={() => navigate(`/products?keyword=${brand.en_name}`)}
          />
          <Name onClick={() => navigate(`/products?keyword=${brand.en_name}`)}>
            {brand.en_name}
          </Name>
        </BrandWrap>
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
`;

const BrandWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px 20px;
`;

const Image = styled.img`
  width: 70px;
  height: 70px;
  cursor: pointer;
`;

const Name = styled.div`
  font-size: 13px;
  font-weight: bold;
  cursor: pointer;
`;
