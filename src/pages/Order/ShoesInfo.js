import React from 'react';
import styled from 'styled-components';

export default function ShoesInfo({ data }) {
  return (
    <Container>
      <ShoesImage
        src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1760&q=80"
        alt="Shoes Image"
      />
      <DetailInfo>
        <ModelNumber>555088-611</ModelNumber>
        <EngName>Jordan 1 Retro High OG Bordeaux</EngName>
        <KorName>조던 1 레트로 하이 OG 보르도</KorName>
      </DetailInfo>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  margin: 20px 0;
`;

const ShoesImage = styled.img`
  width: 80px;
  height: 80px;
`;

const DetailInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
`;

const ModelNumber = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`;

const EngName = styled.div`
  font-size: 14px;
  margin-bottom: 5px;
`;

const KorName = styled.div`
  color: lightgray;
  font-size: 13px;
`;
