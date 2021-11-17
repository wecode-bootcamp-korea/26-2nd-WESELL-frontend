import React from 'react';
import styled from 'styled-components';

export default function Advertisement({ imageUrl, title, description }) {
  return (
    <Container>
      <Image src={imageUrl} alt="shoes" />
      <AdInfo>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </AdInfo>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 60px 0px;
  padding: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
`;

const Image = styled.img`
  width: 600px;
  height: 450px;
  margin-right: 10px;
`;

const AdInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 450px;
  margin-left: 10px;
`;

const Title = styled.div`
  margin-bottom: 10px;
  font-size: 30px;
  font-weight: bold;
`;

const Description = styled.div`
  color: gray;
  text-align: center;
  line-height: 1.5;
`;
