import { React, useEffect } from 'react';
import styled, { css } from 'styled-components';
import KakaoLogin from '../../components/KakaoLogin/KakaoLogin';
// import Theme from '../../styles/theme';

function Login() {
  // useEffect(() => {
  //   console.log(Kakao.isInitialized());
  // }, []);

  return (
    <Body>
      <TitleMargin margin="0px 0px 40px 0px">
        <Title fontSize="50px" fontWeight="bold">
          WESELL
        </Title>
        <SubTitle margin="10px 0px" fontSize="15px" fontWeight="bold">
          We Ensure Society Effects
        </SubTitle>
      </TitleMargin>

      <LoginButton>
        <LoginGrayBtn>로그인</LoginGrayBtn>
        <KakaoLogin />
        {/* <KakaoBtn fontColor="#556677"> 카카오 로그인</KakaoBtn> */}

        <NaverBtn fontColor="white">네이버 로그인</NaverBtn>
      </LoginButton>
    </Body>
  );
}

const Body = styled.div`
  position: relative;
  width: 100vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: ${props => props.marginTop};
`;

// 로그인 타이틀 부분

const TitleMargin = styled.div`
  margin: ${props => props.margin};
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  color: ${props => props.fontColor};
  fontcolor: '#2D2B2B';
  font-style: italic;
`;

const SubTitle = styled.div`
  margin: ${props => props.margin};
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  fontcolor: '#2D2B2B';
`;

// 모달 부분

const Modal = styled.div`
  width: 32%;
  height: 46vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
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

// 로그인 버튼 부분

const LoginButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  height: 170px;
  visibility: ${props => (props.visible === true ? 'hidden' : 'visible')};
`;

const LoginGrayBtn = styled.button`
  width: 220px;
  height: 46px;
  font-weight: 700;
  font-size: 16px;
  background-color: #e0e0e0;
  color: white;
  border: none;
  border-radius: 4px;
`;

// const KakaoBtn = styled.button`
//   width: 300px;
//   height: 40px;
//   font-weight: 700;
//   font-size: 16px;
//   background-color: #f7e600;
//   color: ${props => props.fontColor};
//   border: none;
//   border-radius: 8px;
// `;

const NaverBtn = styled.button`
  width: 220px;
  height: 46px;
  font-weight: 700;
  font-size: 16px;
  background-color: #2db400;
  color: ${props => props.fontColor};
  border: none;
  border-radius: 4px;
`;

export default Login;
