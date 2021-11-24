import { React, useEffect } from 'react';
import { CLIENT_ID, REDIRECT_URI, SIGNIN } from './Oauth';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { queryStringBody } from '../../utils/queryStringBody';

const Redirect = () => {
  const [searchParams] = useSearchParams();
  const accessCode = searchParams.get('code');
  const navigate = useNavigate();

  useEffect(() => {
    const bodyData = {
      grant_type: 'authorization_code',
      client_id: CLIENT_ID,
      redirect_uri: REDIRECT_URI,
      code: accessCode,
    };

    fetch('https://kauth.kakao.com/oauth/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;',
        Accept: 'application/json',
      },
      body: queryStringBody(bodyData),
    })
      .then(res => res.json())
      .then(result => {
        const token = result.access_token;

        if (token) {
          fetch(SIGNIN, {
            headers: {
              Authorization: token,
            },
          })
            .then(res => res.json())
            .then(result => {
              localStorage.setItem('토큰발급확인', result.access_token);
              navigate('/main');
            });
        }
      });
  }, [accessCode, navigate]);
  return (
    <div>무조건 렌더링 하나 해줘야 합니다. 기억하세요라고 강지원이 씀 ㄹㅇ</div>
  );
};

export default Redirect;
