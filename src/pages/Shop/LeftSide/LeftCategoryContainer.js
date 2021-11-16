import { React, useEffect, useState } from 'react';
import styled from 'styled-components';
import LeftCtgList from './LeftButton/LeftButton';

function LeftCategoryContainer() {
  const [leftButton, setleftButton] = useState(null);

  useEffect(() => {
    fetch('/data/ShopCategoryDate.json')
      .then(res => res.json())
      .then(category => {
        setleftButton(category.leftButton);
      });
  }, []);

  return (
    <div>
      <LeftSide>
        <FilterText>필터</FilterText>
        {leftButton &&
          leftButton.map((button, idx) => (
            <LeftSideCategory key={idx}>
              <LeftCtgList
                mainCtg={button.maincategory}
                subCtg={button.subcategory}
                subdetailCtg={button.detailCategorylist}
              />
            </LeftSideCategory>
          ))}
      </LeftSide>
    </div>
  );
}

export default LeftCategoryContainer;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
`;
const LeftSideCategory = styled.ul`
  width: 200px;
`;

const FilterText = styled.div`
  margin-bottom: 10px;
`;
