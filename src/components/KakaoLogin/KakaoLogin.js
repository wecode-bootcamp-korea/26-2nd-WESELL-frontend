import { React } from 'react';
import { KAKAO_AUTH_URL } from './Oauth';
const KakaoLogin = () => {
  return (
    <div>
      <a href={KAKAO_AUTH_URL} id="custom-login-btn">
        <img
          alt="카카오버튼"
          src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg"
          width="220"
        />
      </a>
    </div>
  );
};

export default KakaoLogin;
