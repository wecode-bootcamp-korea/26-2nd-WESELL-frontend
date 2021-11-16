import React from 'react';
import styled from 'styled-components';

function SortingBox({ released, reverseReleased, directPrice, reversePrice }) {
  return (
    <SortingContainer>
      <EachParentSorting>
        <EachChildSorting>
          <SortingChildBox onClick={released}>
            발매일순
            <br />
            최신으로 출시된 상품부터 정렬합니다
          </SortingChildBox>
        </EachChildSorting>
        <EachChildSorting>
          <SortingChildBox onClick={reverseReleased}>
            발매일역순
            <br />
            최고로 출시된 상품부터 정렬합니다
          </SortingChildBox>
        </EachChildSorting>
        <EachChildSorting>
          <SortingChildBox onClick={directPrice}>
            즉시가격순 <br />
            즉시구매가격이 높은 순서로 정렬합니다
          </SortingChildBox>
        </EachChildSorting>
        <EachChildSorting>
          <SortingChildBox onClick={reversePrice}>
            즉시가격역순
            <br />
            즉시구매가격이 낮은 순서로 정렬합니다
          </SortingChildBox>
        </EachChildSorting>
      </EachParentSorting>
    </SortingContainer>
  );
}

export default SortingBox;

const SortingContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 1px;
  background-color: white;
  font-size: 15px;
`;
const EachParentSorting = styled.ul``;
const EachChildSorting = styled.li``;
const SortingChildBox = styled.div`
  border: 1px solid black;
  padding: 20px 10px;
  width: 260px;
  cursor: pointer;
`;
