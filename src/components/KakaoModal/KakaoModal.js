import React from 'react';
import styled, { css } from 'styled-components';

// import Theme from '../../styles/theme';

function KakaoModal() {
  return (
    <Modal>
      <ModalTitle>kakao</ModalTitle>
      <KakaoUsers>
        <InputId
          type="text"
          placeholder="카카오메일 아이디, 이메일, 전화번호"
        />
        <InputPw type="password" placeholder="비밀번호" />
      </KakaoUsers>
      <ButtonFlex>
        <LoginBtn>로그인</LoginBtn>
        <OrLine>또는</OrLine>
        <QrCode>QR코드 로그인</QrCode>
      </ButtonFlex>
    </Modal>
  );
}
const Modal = styled.div`
  width: 32%;
  height: 46vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  z-index: 10;
`;

const ModalTitle = styled.p`
  margin-bottom: 30px;
  font-size: 30px;
  color: black;
`;

const KakaoUsers = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
`;

const InputId = styled.input`
  padding: 10px;
  width: 300px;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  font-weight: 600;
  font-size: 10px;
`;

const InputPw = styled.input`
  padding: 10px;
  width: 300px;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  font-weight: 600;
  font-size: 10px;
`;

const ButtonFlex = styled.div`
  height: 11vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const LoginBtn = styled.button`
  padding: 8px;
  width: 300px;
  font-size: 14px;
  font-weight: 600;
  background-color: #f7e600;
  border: none;
`;

const OrLine = styled.p`
  color: lightgray;
  font-size: 12px;
`;

const QrCode = styled.button`
  padding: 8px;
  width: 300px;
  font-size: 14px;
  font-weight: 600;
  background-color: lightgray;
  border: none;
`;

export default KakaoModal;
