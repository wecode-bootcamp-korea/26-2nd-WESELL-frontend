import React from 'react';
import styled from 'styled-components';

const CustomerCenter = () => {
  return (
    <Container>
      <CustomerCenterTitle>고객센터 1588-7813</CustomerCenterTitle>
      <Hours> 운영시간 평일 11:00 - 18:00 (토, 일, 공휴일 휴무) </Hours>
      <Hours> 점심시간 평일 13:00 - 14:00 </Hours>
      <FAQ>자주 묻는 질문</FAQ>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  right: 60px;
`;

const CustomerCenterTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const Hours = styled.div`
  margin: 10px 0;
  color: gray;
  font-size: 14px;
`;

const FAQ = styled.button`
  width: 95px;
  height: 25px;
  color: white;
  border: none;
  background-color: black;
`;

export default CustomerCenter;
