import { React, useEffect } from 'react';
const { Kakao } = window;

const goGoKakao = () => {
  Kakao.Auth.login({
    success: function (authObj) {
      console.log(authObj);
      Kakao.API.request({
        url: '/v2/user/me', //현재 사용하는 user의 정보를 가져온다
        success: res => {
          const kakao_account = res.kakao_account;
          console.log(kakao_account);

          let id = 'kakao_' + res.id;
          let email =
            res.kakao_account.email != undefined ? res.kakao_account.email : '';
          console.log(id);
          console.log(email);
        },
      });
    },
    fail: function (err) {
      console.log(err);
    },
  });
};

const KakaoLogin = () => {
  return (
    <div>
      <a id="custom-login-btn" onClick={goGoKakao}>
        <img
          src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg"
          width="220"
        />
      </a>
    </div>
  );
};

export default KakaoLogin;
