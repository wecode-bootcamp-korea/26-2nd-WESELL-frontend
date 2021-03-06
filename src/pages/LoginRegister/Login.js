import styled from 'styled-components';
import KakaoLogin from '../../components/KakaoLogin/KakaoLogin';

function Login() {
  return (
    <LoginContainer>
      <TitleBox>
        <Title>WESELL</Title>
        <SubTitle>We Ensure Society Effects</SubTitle>
      </TitleBox>

      <InputContainer>
        <InputText>이메일 주소</InputText>
        <InputBar placeholder="예)KREAM@wesell.com" />
      </InputContainer>
      <InputContainer>
        <InputText>비밀번호</InputText>
        <InputBar type="password" />
      </InputContainer>

      <LoginButton>
        <LoginText>로그인</LoginText>
        <KakaoLogin />
        <NaverBtn>네이버 로그인</NaverBtn>
      </LoginButton>
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
  position: relative;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: ${props => props.marginTop};
`;

// 로그인 타이틀 부분

const TitleBox = styled.div`
  margin: 0px 80px 40px 0px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  font-size: 50px;
  font-weight: 700;
  color: '#2D2B2B';
  font-style: italic;
`;

const SubTitle = styled.div`
  margin: 10px 0px;
  font-size: 15px;
  font-weight: 700;
  color: '#2D2B2B';
`;

// 인풋 부분

const InputContainer = styled.div`
  padding: 5px 0px 20px;
`;

const InputText = styled.p`
  font-weight: bolder;
  font-size: 12px;
`;

const InputBar = styled.input`
  width: 100%;
  padding: 8px 0;
  font-size: 13px;
  border: none;
  border-bottom: 1px solid lightgrey;
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

const LoginText = styled.button`
  width: 220px;
  height: 46px;
  font-weight: 700;
  font-size: 16px;
  background-color: #e0e0e0;
  color: white;
  border: none;
  border-radius: 4px;
`;

const NaverBtn = styled.button`
  width: 220px;
  height: 46px;
  font-weight: 700;
  font-size: 16px;
  background-color: #2db400;
  color: white;
  border: none;
  border-radius: 4px;
`;

export default Login;
