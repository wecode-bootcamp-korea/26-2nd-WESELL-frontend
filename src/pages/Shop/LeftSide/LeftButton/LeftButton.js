import styled from 'styled-components';
import React, { useState } from 'react';
import SubCategoryList from './SubCategoryList';

function LeftCtgList({ mainCtg, subCtg, subdetailCtg }) {
  const [isOpen, setisOpen] = useState(false);

  const detailOpen = () => {
    setisOpen(!isOpen);
  };
  return (
    <CategoryList>
      <CategoryText>
        {mainCtg}
        {isOpen ? (
          <InsideList>
            <SubCategoryList subDetail={subdetailCtg} />
          </InsideList>
        ) : (
          <Subcategory>{subCtg}</Subcategory>
        )}
      </CategoryText>
      <FilterButton onClick={detailOpen} isOpen={isOpen}>
        +
      </FilterButton>
    </CategoryList>
  );
}

export default LeftCtgList;

const CategoryText = styled.div`
  display: flex;
  flex-direction: column;
`;

const FilterButton = styled.button`
  border: none;
  background-color: white;
  font-size: 25px;
  cursor: pointer;
`;

const Subcategory = styled.span`
  margin-top: 10px;
  color: grey;
`;

const CategoryList = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 23px 0 15px;
  border-bottom: 1px solid grey;
`;
const InsideList = styled.ol``;
