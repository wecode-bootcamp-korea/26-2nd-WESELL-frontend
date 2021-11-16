import React from 'react';
import styled from 'styled-components';

function SubCategoryList({ subDetail }) {
  return (
    <InsideDetailList>
      {subDetail.map((list, idx) => {
        return (
          <ListWrpper key={idx}>
            <CategoryCheck type="checkbox" />
            {list.brandlist}
          </ListWrpper>
        );
      })}
    </InsideDetailList>
  );
}

export default SubCategoryList;

const InsideDetailList = styled.li`
  margin-top: 10px;
`;

const CategoryCheck = styled.input`
  cursor: pointer;
`;

const ListWrpper = styled.div`
  display: flex;
  align-items: flex-end;
`;
