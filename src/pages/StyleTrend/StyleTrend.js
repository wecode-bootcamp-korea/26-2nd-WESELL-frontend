import { React, useState, useEffect } from 'react';
import styled from 'styled-components';
import StyleLayout from '../StyleTrend/StyleLayout';

function StyleTrend() {
  const [isStyle, setIsStyle] = useState([]);

  useEffect(() => {
    fetch('http://10.58.3.89:8000/reviews')
      .then(res => res.json())
      .then(data => setIsStyle(data.results));
  }, []);

  return (
    <Container>
      {isStyle.map(arg => {
        return <StyleLayout key={arg.id} styleData={arg} />;
      })}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default StyleTrend;
