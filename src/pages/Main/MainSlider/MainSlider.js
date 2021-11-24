import React, { useState } from 'react';
import styled from 'styled-components';
import SlideBtn from './SlideBtn';
import slideData from './slideData';

export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    slideIndex !== slideData.length
      ? setSlideIndex(prevSlideIndex => prevSlideIndex + 1)
      : setSlideIndex(1);
  };

  const prevSlide = () => {
    slideIndex !== 1
      ? setSlideIndex(prevSlideIndex => prevSlideIndex - 1)
      : setSlideIndex(slideData.length);
  };

  const moveDot = index => {
    setSlideIndex(index);
  };

  return (
    <Container>
      {slideData.map((slide, index) => {
        return (
          <Slide key={slide.id} isSelected={slideIndex === index + 1}>
            <ImageDescription>
              <Title>{slide.title}</Title>
              <Subtitle>{slide.subtitle}</Subtitle>
            </ImageDescription>
            <SlideImg src={`/images/Image${index + 1}.png`} alt={slide.title} />
          </Slide>
        );
      })}
      <SlideBtn moveSlide={nextSlide} next />
      <SlideBtn moveSlide={prevSlide} prev />

      <DotContainer>
        {Array.from({ length: 6 }).map((_, index) => (
          <Dot
            key={index}
            onClick={() => moveDot(index + 1)}
            isSelected={slideIndex === index + 1}
          />
        ))}
      </DotContainer>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  /* max-width: 700px; */
  height: 500px;
  margin: 120px auto 100px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;
`;

const Slide = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: lightslategray;
  opacity: ${props => (props.isSelected ? 1 : 0)};
  transition: opacity ease-in-out 0.4s;
`;

const ImageDescription = styled.div`
  position: absolute;
  top: 45%;
  left: 15%;
`;

const Title = styled.div`
  margin-bottom: 10px;
  color: white;
  font-size: 50px;
`;

const Subtitle = styled.div`
  color: white;
  font-size: 30px;
`;

const SlideImg = styled.img`
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: scale(1.4);
`;

const DotContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
`;

const Dot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin: 0 10px;
  background: ${props => (props.isSelected ? 'white' : 'gray')};
`;
