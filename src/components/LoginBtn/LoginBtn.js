import React from 'react';
import styled from 'styled-components';

function LoginBtn() {
  return (
    <LoginButton>
      <LoginGrayBtn>로그인</LoginGrayBtn>
      <KakaoBtn> 카카오 로그인</KakaoBtn>

      <NaverBtn>네이버 로그인</NaverBtn>
    </LoginButton>
  );
}

const LoginButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
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

const KakaoBtn = styled(LoginGrayBtn)`
  background-color: #f7e600;
  color: black;
`;

const NaverBtn = styled(LoginGrayBtn)`
  background-color: #2db400;
  color: white;
`;

export default LoginBtn;
