import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import LeftContainer from './LeftSide/LeftCategoryContainer';
import ProductListContianer from './RightSide/RightContianer';
import TopsideContainer from './Topside/TopsideContainer';

export default function Shop() {
  // window.addEventListener('scroll', () => console.log('🌀'));
  const [brandButton, setBrandButton] = useState([]);

  useEffect(() => {
    fetch('/data/ShopCategoryDate.json')
      .then(res => res.json())
      .then(brand => {
        setBrandButton(brand.brandButton);
      });
  }, []);

  return (
    <WholeShop>
      <ShopWrapper>
        <TopsideContainer />
        <ShoeBrandBtn>
          {brandButton.map((brandBox, idx) => (
            <BrandTag key={idx}>
              <BrandImg src={brandBox.image_url} alt="" />
              <span>{brandBox.brand}</span>
            </BrandTag>
          ))}
        </ShoeBrandBtn>
        <SlideBox />
        <SideContainer>
          <LeftContainer />
          <ProductListContianer />
        </SideContainer>
      </ShopWrapper>
    </WholeShop>
  );
}

const WholeShop = styled.div`
  display: flex;
  justify-content: center;
  border: 2px solid black;
`;
const ShopWrapper = styled.div`
  padding: 20px 20px;
`;

const SideContainer = styled.div`
  display: flex;
  margin-top: 20px;
`;
const ShoeBrandBtn = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-top: 110px;
`;

const BrandTag = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 20px;
  font-size: 13px;
  font-weight: 700;
`;

const BrandImg = styled.img`
  width: 70px;
  height: 70px;
`;

const SlideBox = styled.div`
  height: 100px;
  background-color: green;
`;
