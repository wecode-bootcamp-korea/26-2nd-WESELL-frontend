import React from 'react';
import styled, { css } from 'styled-components';

// import Theme from '../../styles/theme';

function LoginBtn() {
  return (
    <LoginButton>
      <LoginGrayBtn>로그인</LoginGrayBtn>
      <KakaoBtn fontColor="#556677"> 카카오 로그인</KakaoBtn>

      <NaverBtn fontColor="white">네이버 로그인</NaverBtn>
    </LoginButton>
  );
}

const LoginButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  height: 140px;
`;

const LoginGrayBtn = styled.button`
  width: 300px;
  height: 40px;
  font-weight: 700;
  font-size: 16px;
  background-color: #e0e0e0;
  color: white;
  border: none;
  border-radius: 8px;
`;

const KakaoBtn = styled.button`
  width: 300px;
  height: 40px;
  font-weight: 700;
  font-size: 16px;
  background-color: #f7e600;
  color: ${props => props.fontColor};
  border: none;
  border-radius: 8px;
`;

const NaverBtn = styled.button`
  width: 300px;
  height: 40px;
  font-weight: 700;
  font-size: 16px;
  background-color: #2db400;
  color: ${props => props.fontColor};
  border: none;
  border-radius: 8px;
`;

export default LoginBtn;
