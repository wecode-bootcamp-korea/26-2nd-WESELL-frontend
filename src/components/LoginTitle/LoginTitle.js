import React from 'react';
import styled, { css } from 'styled-components';

// import Theme from '../../styles/theme';

function LoginTitle() {
  return (
    <TitleMargin margin="0px 0px 40px 0px">
      <Title fontSize="50px" fontWeight="bold">
        WESELL
      </Title>
      <SubTitle margin="10px 0px" fontSize="15px" fontWeight="bold">
        We Ensure Society Effects L L
      </SubTitle>
    </TitleMargin>
  );
}

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

export default LoginTitle;
