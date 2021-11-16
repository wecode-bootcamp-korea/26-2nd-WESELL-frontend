import React from 'react';
import styled from 'styled-components';

function TopsideContainer() {
  return (
    <TopContainer>
      <ConversionLogo>SHOP</ConversionLogo>
      <CategoryButton>
        <StyleButton>의류</StyleButton>
        <StyleButton>의류</StyleButton>
        <StyleButton>신발</StyleButton>
      </CategoryButton>
    </TopContainer>
  );
}

export default TopsideContainer;
const TopContainer = styled.div`
  position: fixed;
  background-color: white;
  width: 100%;
`;
const ConversionLogo = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 600px;
  font-size: 28px;
  font-weight: 600;
`;

const CategoryButton = styled.div`
  margin-top: 20px;
  padding: 0 0 16px 0;
`;

const StyleButton = styled.button`
  width: 100px;
  padding: 10px 12px;
  margin-left: 20px;
  border: none;
  border-radius: 5px;
  font-size: 15px;
  cursor: pointer;
`;
