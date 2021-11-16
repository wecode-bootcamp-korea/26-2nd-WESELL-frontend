import React from 'react';
import styled from 'styled-components';
import { BiSearch } from 'react-icons/bi';

export default function Nav() {
  return (
    <Container>
      <LinkBtnSection>
        <LinkBtnSmall>고객센터</LinkBtnSmall>
        <LinkBtnSmall>관심상품</LinkBtnSmall>
        <LinkBtnSmall>마이페이지</LinkBtnSmall>
        <LinkBtnSmall>로그인</LinkBtnSmall>
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

const LinkBtnSmall = styled.span`
  margin-right: 30px;
  color: gray;
  font-size: 12px;
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

const LinkBtn = styled.span`
  margin-left: 40px;
  font-size: 15px;
`;
