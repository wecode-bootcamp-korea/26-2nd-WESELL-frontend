import React from 'react';
import styled from 'styled-components';
import leftArrow from './icons/left-arrow.svg';
import rightArrow from './icons/right-arrow.svg';

export default function SlideBtn({ moveSlide, next }) {
  return (
    <SlideButton onClick={moveSlide} isNext={next}>
      <BtnImg src={next ? rightArrow : leftArrow} alt="Button Image" />
    </SlideButton>
  );
}

const SlideButton = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  ${props => (props.isNext ? 'right: 20px' : 'left: 20px')};
  cursor: pointer;
  transform: translateY(-60%);
`;

const BtnImg = styled.img`
  width: 20px;
  height: 20px;
`;
