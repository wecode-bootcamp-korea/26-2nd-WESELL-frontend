import React, { useState } from 'react';
import styled from 'styled-components';
import SubOption from './SubOption';

function Option({
  mainCategory,
  subCategory,
  subdetailCategory,
  brandId,
  filterBrand,
}) {
  const [isOpen, setisOpen] = useState(false);

  const detailOpen = () => {
    setisOpen(!isOpen);
  };
  return (
    <CategoryList>
      <div>
        <p>{mainCategory}</p>
        {isOpen ? (
          <InsideList>
            <SubOption
              subDetail={subdetailCategory}
              id={brandId}
              filterBrand={filterBrand}
            />
          </InsideList>
        ) : (
          <Subcategory>{subCategory}</Subcategory>
        )}
      </div>
      <FilterButton onClick={detailOpen} isOpen={isOpen}>
        +
      </FilterButton>
    </CategoryList>
  );
}

export default Option;

const FilterButton = styled.button`
  border: none;
  background-color: white;
  font-size: 25px;
  cursor: pointer;
`;

const Subcategory = styled.p`
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
