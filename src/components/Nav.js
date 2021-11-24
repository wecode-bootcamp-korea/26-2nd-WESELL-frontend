import React from 'react';
import styled from 'styled-components';
import { BiSearch } from 'react-icons/bi';

export default function Nav() {
  return (
    <Container>
      <LinkBtnSection>
        <LinkBtn small>고객센터</LinkBtn>
        <LinkBtn small>관심상품</LinkBtn>
        <LinkBtn small>마이페이지</LinkBtn>
        <LinkBtn small>로그인</LinkBtn>
      </LinkBtnSection>
      <TitleLinks>
        <Title>WeSell</Title>
        <TitleLinkBtnSection>
          <LinkBtn>STYLE</LinkBtn>
          <LinkBtn>SHOP</LinkBtn>
          <LinkBtn>ABOUT</LinkBtn>
          <LinkBtn>
            <BiSearch size="20" />
          </LinkBtn>
        </TitleLinkBtnSection>
      </TitleLinks>
    </Container>
  );
}

const Container = styled.nav`
  position: fixed;
  z-index: 999;
  width: 100%;
  background-color: white;
`;

const LinkBtnSection = styled.div`
  display: flex;
  height: 34px;
  justify-content: right;
  align-items: center;
  border-bottom: 1px solid lightgray;
`;

const LinkBtn = styled.span`
  ${props =>
    props.small
      ? 'margin-right: 30px; color: gray; font-size: 12px;'
      : 'margin-left: 40px; font-size: 15px;'}
`;

const TitleLinks = styled.div`
  position: relative;
  display: flex;
  height: 68px;
  align-items: center;
  border-bottom: 1px solid lightgray;
`;

const Title = styled.span`
  margin-left: 40px;
  font: italic bold 32px 'Russo One', sans-serif;
`;

const TitleLinkBtnSection = styled.div`
  position: absolute;
  right: 40px;
  display: flex;
  align-items: center;
`;
