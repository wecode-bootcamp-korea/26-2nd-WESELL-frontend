import React from 'react';
import styled from 'styled-components';
import { GiCancel } from 'react-icons/gi';

const RecentSearch = ({ keywordList, reset }) => {
  return (
    <Container>
      <Title>
        최근 검색어
        <ResetBtn>
          <GiCancel onClick={reset} />
        </ResetBtn>
      </Title>

      <RecentKeywords>
        {keywordList.map((keyword, idx) => {
          return <EachKeyword key={idx}>{keyword}</EachKeyword>;
        })}
      </RecentKeywords>
    </Container>
  );
};

const Container = styled.div``;

const Title = styled.span`
  display: flex;
  margin: 10px 0;
  font-size: 12px;
  font-weight: bold;
`;

const ResetBtn = styled.span`
  margin-left: 10px;
  cursor: pointer;
`;

const RecentKeywords = styled.ul`
  width: 700px;
  list-style: none;
`;

const EachKeyword = styled.li`
  margin: 15px 5px;
  color: gray;
  font-size: 14px;
`;

export default RecentSearch;
