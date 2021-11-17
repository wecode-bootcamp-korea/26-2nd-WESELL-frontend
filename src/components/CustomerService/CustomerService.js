import React from 'react';
import styled from 'styled-components';
import CustomerServiceList from './CustomerServiceList';
import CustomerCenter from './CustomerCenter';

const CustomerService = () => {
  return (
    <Container>
      <CustomerServiceList title="이용안내" list={serviceGuideList} />
      <CustomerServiceList title="고객지원" list={customerSupportList} />
      <CustomerCenter />
    </Container>
  );
};

const serviceGuideList = [
  { id: 1, name: '검수기준' },
  { id: 2, name: '이용정책' },
  { id: 3, name: '패널티 정책' },
  { id: 4, name: '커뮤니티 가이드라인' },
];

const customerSupportList = [
  { id: 1, name: '공지사항' },
  { id: 2, name: '서비스 소개' },
  { id: 3, name: '쇼룸 안내' },
  { id: 4, name: '판매자 방문접수' },
];

const Container = styled.div`
  display: flex;
  text-align: left;
  width: 100%;
  height: 200px;
  padding-top: 20px;
  border-bottom: 1px solid lightgray;
`;

export default CustomerService;
