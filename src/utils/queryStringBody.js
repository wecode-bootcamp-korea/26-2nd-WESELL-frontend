export const queryStringBody = arg => {
  Object.keys(arg)
    .map(k => encodeURIComponent(k) + '=' + encodeURI(arg[k]))
    .join('&');
};
// 이해 필요한 부분 : 객체 형태를 queryString으로 데이터 변환을 시켜줘야 카카오 측에서 받아들일 수 있다.
