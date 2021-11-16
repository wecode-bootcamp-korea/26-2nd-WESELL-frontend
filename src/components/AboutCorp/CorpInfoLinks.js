import React from 'react';
import styled from 'styled-components';
import { BsInstagram } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { RiKakaoTalkFill } from 'react-icons/ri';

const CorpInfoLinks = () => {
  return (
    <Container>
      <Links>
        {linkList.map(link => {
          return <EachLink key={link.id}>{link.name}</EachLink>;
        })}
      </Links>
      <Icons>
        <EachIcon>
          <BsInstagram size="22" />
        </EachIcon>
        <EachIcon>
          <BsFacebook size="22" />
        </EachIcon>
        <EachIcon>
          <RiKakaoTalkFill size="24" />
        </EachIcon>
      </Icons>
    </Container>
  );
};

const linkList = [
  { id: 1, name: '회사소개' },
  { id: 2, name: '인재채용' },
  { id: 3, name: '제휴제안' },
  { id: 4, name: '이용약관' },
  { id: 5, name: '개인정보처리방침' },
];

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 40px;
  margin-bottom: 10px;
`;

const Links = styled.div`
  display: flex;
`;

const EachLink = styled.div`
  margin: 0 10px;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
`;

const EachIcon = styled.div`
  margin: 0 10px;
`;

export default CorpInfoLinks;
