import React, { useState } from 'react';
import styled from 'styled-components';
import BtnSlider from './BtnSlider';
import dataSlider from './dataSlider';
import './MainSlider.css';

export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    return slideIndex !== dataSlider.length
      ? setSlideIndex(slideIndex + 1)
      : setSlideIndex(1);
  };

  const prevSlide = () => {
    return slideIndex !== 1
      ? setSlideIndex(slideIndex - 1)
      : setSlideIndex(dataSlider.length);
  };

  const moveDot = index => {
    setSlideIndex(index);
  };

  return (
    <Container>
      {dataSlider.map((obj, index) => {
        return (
          <EachSlide
            key={obj.id}
            className={slideIndex === index + 1 ? 'slide active-anim' : 'slide'}
          >
            <SlideImg src={`/images/img${index + 1}.jpg`} alt={obj.title} />
          </EachSlide>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction="next" />
      <BtnSlider moveSlide={prevSlide} direction="prev" />

      <DotContainer className="container-dots">
        {Array.from({ length: 6 }).map((item, index) => (
          <div
            key={index}
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? 'dot active' : 'dot'}
          />
        ))}
      </DotContainer>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  max-width: 700px;
  height: 500px;
  margin: 100px auto 0;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;
`;

const EachSlide = styled.div`
  /* position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity ease-in-out 0.4s; */
`;

const DotContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
`;

const SlideImg = styled.img``;
