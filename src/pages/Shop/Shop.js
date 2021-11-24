import styled from 'styled-components';
import FilterOptionContainer from './FliterAside/FilterOptionContainer';
import ProductList from './ProductList/ProductList';

export default function Shop() {
  return (
    <WholeShop>
      <ShopWrapper>
        <SlideBox />
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
`;
const ShopWrapper = styled.div`
  padding: 20px 20px;
  margin-top: 100px;
`;

const SideContainer = styled.div`
  display: flex;
  margin-top: 20px;
`;

const SlideBox = styled.div`
  height: 100px;
  background-color: green;
`;
