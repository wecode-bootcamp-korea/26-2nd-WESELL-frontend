import React from 'react';
import styled from 'styled-components';
import FilterOptionContainer from './FliterAside/FilterOptionContainer';
import ProductList from './ProductList/ProductList';

export default function Shop() {
  return (
    <WholeShop>
      <ShopWrapper>
        <ShoeBrandBtn />
        <SideContainer>
          <FilterOptionContainer />
          <ProductList />
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
