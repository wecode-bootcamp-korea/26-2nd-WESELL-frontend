import React from 'react';
import styled from 'styled-components';

const CorpInfo = () => {
  return (
    <Container>
      <Information>위셀 주식회사 대표 : 위코드</Information>
      <Information>사업자등록번호 : 000-00-00000</Information>
      <Information>정보통신업 : 제 2021-위코드-0000호</Information>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  margin-left: 40px;
  color: gray;
  font-size: 12px;
`;

const Information = styled.div`
  margin-left: 10px;
`;

export default CorpInfo;
