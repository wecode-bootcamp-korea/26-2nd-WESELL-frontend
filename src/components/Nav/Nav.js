import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import { BiSearch } from 'react-icons/bi';

const token = localStorage.토큰발급확인;

export default function Nav() {
  const [isVisible, setIsVisible] = useState(false);
  const [isToken, setIsToken] = useState(token);

  const searchToggle = () => {
    setIsVisible(prev => !prev);
  };

  const resetToken = () => {
    setIsToken();
    navigate('/');
  };

  const navigate = useNavigate();

  const moveToMain = () => {
    navigate('/main');
  };
  const moveToLogin = () => {
    navigate('/login');
  };
  const moveToShop = () => {
    navigate('/products');
  };
  const moveToStyle = () => {
    navigate('/style');
  };

  return (
    <Container>
      {isVisible && (
        <SearchBar isVisible={isVisible} searchToggle={searchToggle} />
      )}
      <LinkBtnSection>
        <LinkBtn small>고객센터</LinkBtn>
        <LinkBtn small>관심상품</LinkBtn>
        <LinkBtn small>마이페이지</LinkBtn>
        {isToken ? (
          <LinkBtn small onClick={resetToken}>
            로그아웃
          </LinkBtn>
        ) : (
          <LinkBtn small onClick={moveToLogin}>
            로그인
          </LinkBtn>
        )}
      </LinkBtnSection>
      <TitleLinks>
        <Title onClick={moveToMain}>WeSell</Title>

        <TitleLinkBtnSection>
          <LinkBtn onClick={moveToStyle}>STYLE</LinkBtn>
          <LinkBtn onClick={moveToShop}>SHOP</LinkBtn>
          <LinkBtn>ABOUT</LinkBtn>
          <LinkBtn onClick={searchToggle}>
            <BiSearch size="20" />
          </LinkBtn>
        </TitleLinkBtnSection>
      </TitleLinks>
    </Container>
  );
}

const Container = styled.nav`
  position: fixed;
  z-index: 998;
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
      ? `margin-right: 30px;
  color: gray;
  font-size: 12px;`
      : `margin-left: 40px;
  font-size: 15px;`}
  cursor: pointer;
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
  cursor: pointer;
`;

const TitleLinkBtnSection = styled.div`
  position: absolute;
  right: 40px;
  display: flex;
  align-items: center;
`;
