import React from 'react';
import styled from 'styled-components';
import CustomerService from './CustomerService/CustomerService';
import AboutCorp from './AboutCorp/AboutCorp';

export default function Footer() {
  return (
    <Container>
      <CustomerService />
      <AboutCorp />
    </Container>
  );
}

const Container = styled.footer`
  border-top: 1px solid lightgray;
`;
